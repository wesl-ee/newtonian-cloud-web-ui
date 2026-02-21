import wire from "@/lib/proto/files";

export const runtime = "nodejs";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8088";

function readAuthToken(req: Request): string {
  const cookie = req.headers.get("cookie") || "";
  const part = cookie
    .split(";")
    .map((v) => v.trim())
    .find((v) => v.startsWith("nc_auth_token="));
  if (!part) return "";
  return decodeURIComponent(part.slice("nc_auth_token=".length));
}

function readRefreshToken(req: Request): string {
  const cookie = req.headers.get("cookie") || "";
  const part = cookie
    .split(";")
    .map((v) => v.trim())
    .find((v) => v.startsWith("nc_refresh_token="));
  if (!part) return "";
  return decodeURIComponent(part.slice("nc_refresh_token=".length));
}

function authCookieHeaders(token: string, refreshToken: string): string[] {
  const maxAge = 60 * 60 * 24 * 7;
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  return [
    `nc_auth_token=${encodeURIComponent(token)}; Path=/; Max-Age=${maxAge}; SameSite=Lax${secure}`,
    `nc_refresh_token=${encodeURIComponent(refreshToken)}; Path=/; Max-Age=${maxAge}; SameSite=Lax${secure}`,
  ];
}

async function refreshAuth(refreshToken: string): Promise<{ token: string; refreshToken: string } | null> {
  if (!refreshToken) return null;
  const files = (wire as { storage: { files: any } }).storage.files;
  const resp = await fetch(`${API_URL}/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/x-protobuf" },
    body: files.RefreshRequest.encode({ refreshToken }).finish(),
  });
  if (!resp.ok) return null;
  const buf = new Uint8Array(await resp.arrayBuffer());
  const out = files.AuthReply.decode(buf) as { token?: string; refreshToken?: string };
  if (!out.token || !out.refreshToken) return null;
  return { token: out.token, refreshToken: out.refreshToken };
}

function detectMime(bytes: Uint8Array): string {
  if (bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return "image/jpeg";
  if (bytes.length >= 8 && bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47) return "image/png";
  if (bytes.length >= 12 && bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46 && bytes[8] === 0x57 && bytes[9] === 0x45 && bytes[10] === 0x42 && bytes[11] === 0x50) return "image/webp";
  if (bytes.length >= 12 && bytes[4] === 0x66 && bytes[5] === 0x74 && bytes[6] === 0x79 && bytes[7] === 0x70) return "video/mp4";
  return "application/octet-stream";
}

export async function GET(req: Request, ctx: { params: Promise<{ cid: string }> }) {
  const params = await ctx.params;
  let token = readAuthToken(req);
  const refreshToken = readRefreshToken(req);
  if (!token && refreshToken) {
    const refreshed = await refreshAuth(refreshToken);
    if (refreshed) token = refreshed.token;
  }
  if (!token) return new Response("missing token", { status: 401 });

  const files = (wire as { storage: { files: any } }).storage.files;
  const body = files.FileRequest.encode({ fileCid: decodeURIComponent(params.cid || "") }).finish();
  let upstream = await fetch(`${API_URL}/files/data`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-protobuf",
      Authorization: `Bearer ${token}`,
    },
    body,
  });
  let setCookies: string[] = [];
  if (upstream.status === 401 && refreshToken) {
    const refreshed = await refreshAuth(refreshToken);
    if (refreshed) {
      token = refreshed.token;
      setCookies = authCookieHeaders(refreshed.token, refreshed.refreshToken);
      upstream = await fetch(`${API_URL}/files/data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-protobuf",
          Authorization: `Bearer ${token}`,
        },
        body,
      });
    }
  }
  if (!upstream.ok) return new Response(await upstream.text(), { status: upstream.status });

  const buf = new Uint8Array(await upstream.arrayBuffer());
  const out = files.FileDataReply.decode(buf) as { data: Uint8Array };
  const headers = new Headers({
    "Content-Type": detectMime(out.data),
    "Cache-Control": "private, max-age=60",
  });
  for (const cookie of setCookies) headers.append("Set-Cookie", cookie);
  return new Response(out.data, { status: 200, headers });
}

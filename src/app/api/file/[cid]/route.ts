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

function safeFilename(name: string): string {
  const out = (name || "download.bin").replace(/[/\\?%*:|"<>]/g, "_").trim();
  return out.length > 0 ? out : "download.bin";
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
  const fileCid = decodeURIComponent(params.cid || "");
  const requestBody = files.FileRequest.encode({ fileCid }).finish();
  let [metaResp, dataResp] = await Promise.all([
    fetch(`${API_URL}/files/get`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-protobuf",
        Authorization: `Bearer ${token}`,
      },
      body: requestBody,
    }),
    fetch(`${API_URL}/files/data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-protobuf",
        Authorization: `Bearer ${token}`,
      },
      body: requestBody,
    }),
  ]);

  let setCookies: string[] = [];
  if ((metaResp.status === 401 || dataResp.status === 401) && refreshToken) {
    const refreshed = await refreshAuth(refreshToken);
    if (refreshed) {
      token = refreshed.token;
      setCookies = authCookieHeaders(refreshed.token, refreshed.refreshToken);
      [metaResp, dataResp] = await Promise.all([
        fetch(`${API_URL}/files/get`, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-protobuf",
            Authorization: `Bearer ${token}`,
          },
          body: requestBody,
        }),
        fetch(`${API_URL}/files/data`, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-protobuf",
            Authorization: `Bearer ${token}`,
          },
          body: requestBody,
        }),
      ]);
    }
  }

  if (!metaResp.ok) return new Response(await metaResp.text(), { status: metaResp.status });
  if (!dataResp.ok) return new Response(await dataResp.text(), { status: dataResp.status });

  const metaBuf = new Uint8Array(await metaResp.arrayBuffer());
  const meta = files.FileMetadataReply.decode(metaBuf) as { filename?: string; mimeType?: string };
  const dataBuf = new Uint8Array(await dataResp.arrayBuffer());
  const data = files.FileDataReply.decode(dataBuf) as { data: Uint8Array };

  const filename = safeFilename(meta.filename || "download.bin");
  const mime = meta.mimeType || "application/octet-stream";
  const headers = new Headers({
    "Content-Type": mime,
    "Content-Disposition": `inline; filename*=UTF-8''${encodeURIComponent(filename)}`,
    "Cache-Control": "private, no-store",
  });
  for (const cookie of setCookies) headers.append("Set-Cookie", cookie);
  return new Response(data.data, { status: 200, headers });
}

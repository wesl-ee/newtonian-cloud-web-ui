import { API_URL } from "@/lib/constants";
import { clearSession, loadSession, saveSession } from "@/lib/auth-storage";
import wire from "@/lib/proto/files";

type PB = {
  encode: (v: unknown) => { finish: () => Uint8Array };
  decode: (b: Uint8Array) => unknown;
};

type FilesNamespace = {
  StartUploadRequest: PB;
  StartUploadReply: PB;
  UploadChunkRequest: PB;
  UploadChunkReply: PB;
  CompleteUploadRequest: PB;
  CompleteUploadReply: PB;
  FileRequest: PB;
  FileMetadataReply: PB;
  ThumbnailsReply: PB;
  FileDataReply: PB;
  FileProofReply: PB;
  DeleteFileReply: PB;
  SpaceReply: PB;
  WalletChallengeRequest: PB;
  WalletChallengeReply: PB;
  WalletVerifyRequest: PB;
  RefreshRequest: PB;
  AuthReply: PB;
};

const files = (wire as { storage: { files: FilesNamespace } }).storage.files;
let refreshInFlight: Promise<string> | null = null;

function asNumber(v: number | { toNumber: () => number }): number {
  if (typeof v === "number") return v;
  return v.toNumber();
}

async function decodeError(resp: Response): Promise<string> {
  try {
    return await resp.text();
  } catch {
    return `${resp.status}`;
  }
}

async function pbPost<TReq, TRes>(
  path: string,
  reqType: PB | null,
  req: TReq | null,
  resType: PB,
  token?: string,
): Promise<TRes> {
  const body = reqType && req ? reqType.encode(req).finish() : undefined;
  const run = (authToken?: string) => fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: {
      ...(reqType ? { "Content-Type": "application/x-protobuf" } : {}),
      ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
    },
    body,
  });
  const resp = token ? await requestWithRefresh(token, run) : await run();
  if (!resp.ok) throw new Error(await decodeError(resp));
  const buf = new Uint8Array(await resp.arrayBuffer());
  return resType.decode(buf) as TRes;
}

async function pbGet<TRes>(path: string, resType: PB): Promise<TRes> {
  const resp = await fetch(`${API_URL}${path}`);
  if (!resp.ok) throw new Error(await decodeError(resp));
  const buf = new Uint8Array(await resp.arrayBuffer());
  return resType.decode(buf) as TRes;
}

export async function fetchJson<T>(path: string): Promise<T> {
  const resp = await fetch(`${API_URL}${path}`, { cache: "no-store" });
  if (!resp.ok) throw new Error(`${path}: ${resp.status}`);
  return (await resp.json()) as T;
}

async function fetchJsonAuth<T>(path: string, token: string): Promise<T> {
  const run = (authToken?: string) => fetch(`${API_URL}${path}`, {
    cache: "no-store",
    headers: authToken ? { Authorization: `Bearer ${authToken}` } : {},
  });
  const resp = await requestWithRefresh(token, run);
  if (!resp.ok) throw new Error(await decodeError(resp));
  return (await resp.json()) as T;
}

async function refreshAccessToken(): Promise<string> {
  if (refreshInFlight) return refreshInFlight;
  refreshInFlight = (async () => {
    const session = loadSession();
    if (!session?.refreshToken) throw new Error("missing refresh token");
    const reply = await pbPost<{ refreshToken: string }, { token: string; refreshToken: string; userId: string }>(
      "/auth/refresh",
      files.RefreshRequest,
      { refreshToken: session.refreshToken },
      files.AuthReply,
    );
    if (!reply.token || !reply.refreshToken || !reply.userId) throw new Error("refresh failed");
    saveSession({
      token: reply.token,
      refreshToken: reply.refreshToken,
      userId: reply.userId,
    });
    return reply.token;
  })();
  try {
    return await refreshInFlight;
  } catch (error) {
    clearSession();
    throw error;
  } finally {
    refreshInFlight = null;
  }
}

async function requestWithRefresh(
  token: string,
  run: (authToken: string) => Promise<Response>,
): Promise<Response> {
  const currentToken = loadSession()?.token || token;
  let resp = await run(currentToken);
  if (resp.status !== 401) return resp;
  const next = await refreshAccessToken();
  resp = await run(next);
  return resp;
}

export const api = {
  uploadStart(token: string, filename: string, mimeType: string, size: number, chunkSize: number) {
    return pbPost<{ filename: string; mimeType: string; size: number; chunkSize: number }, { uploadId: string; chunkSize: number }>(
      "/upload/start",
      files.StartUploadRequest,
      { filename, mimeType, size, chunkSize },
      files.StartUploadReply,
      token,
    ).then((r) => ({ upload_id: r.uploadId, chunk_size: r.chunkSize }));
  },
  uploadChunk(token: string, uploadId: string, chunkIndex: number, data: Uint8Array) {
    return pbPost<
      { uploadId: string; chunkIndex: number; data: Uint8Array },
      { bytesReceived: number | { toNumber: () => number }; nextChunkIndex: number; status: number }
    >(
      "/upload/chunk",
      files.UploadChunkRequest,
      { uploadId, chunkIndex, data },
      files.UploadChunkReply,
      token,
    ).then((r) => ({
      bytes_received: asNumber(r.bytesReceived),
      next_chunk_index: r.nextChunkIndex,
      status: r.status,
    }));
  },
  uploadComplete(token: string, uploadId: string) {
    return pbPost<{ uploadId: string }, { fileCid: string; pending: boolean }>(
      "/upload/complete",
      files.CompleteUploadRequest,
      { uploadId },
      files.CompleteUploadReply,
      token,
    ).then((r) => ({ file_cid: r.fileCid, pending: r.pending }));
  },
  fileGet(token: string, cid: string) {
    return pbPost<
      { fileCid: string },
      {
        fileCid: string;
        filename: string;
        mimeType: string;
        sizeBytes: number | { toNumber: () => number };
        status: string;
        height: number | { toNumber: () => number };
        processingStatus: string;
      }
    >(
      "/files/get",
      files.FileRequest,
      { fileCid: cid },
      files.FileMetadataReply,
      token,
    ).then((r) => ({
      file_cid: r.fileCid,
      filename: r.filename,
      mime_type: r.mimeType,
      size_bytes: asNumber(r.sizeBytes),
      status: r.status,
      height: asNumber(r.height),
      processing_status: r.processingStatus,
    }));
  },
  fileThumbnails(token: string, cid: string) {
    return pbPost<
      { fileCid: string },
      {
        fileCid: string;
        processingStatus: string;
        thumbnails: Array<{
          thumbnailCid: string;
          longEdge: number;
          mimeType: string;
          sizeBytes: number | { toNumber: () => number };
          width: number;
          height: number;
        }>;
      }
    >(
      "/files/thumbnails",
      files.FileRequest,
      { fileCid: cid },
      files.ThumbnailsReply,
      token,
    ).then((r) => ({
      file_cid: r.fileCid,
      processing_status: r.processingStatus,
      thumbnails: r.thumbnails.map((t) => ({
        thumbnail_cid: t.thumbnailCid,
        long_edge: t.longEdge,
        mime_type: t.mimeType,
        size_bytes: asNumber(t.sizeBytes),
        width: t.width,
        height: t.height,
      })),
    }));
  },
  fileData(token: string, cid: string) {
    return pbPost<{ fileCid: string }, { data: Uint8Array }>(
      "/files/data",
      files.FileRequest,
      { fileCid: cid },
      files.FileDataReply,
      token,
    );
  },
  fileProof(token: string, cid: string) {
    return pbPost<
      { fileCid: string },
      {
        leafHash: Uint8Array;
        globalRoot: Uint8Array;
        siblings: Uint8Array[];
        height: number | { toNumber: () => number };
        attested: boolean;
      }
    >(
      "/files/proof",
      files.FileRequest,
      { fileCid: cid },
      files.FileProofReply,
      token,
    ).then((r) => ({
      leaf_hash: r.leafHash,
      global_root: r.globalRoot,
      siblings: r.siblings,
      height: asNumber(r.height),
      attested: r.attested,
    }));
  },
  fileDelete(token: string, cid: string) {
    return pbPost("/files/delete", files.FileRequest, { fileCid: cid }, files.DeleteFileReply, token);
  },
  filesList(token: string, page = 1, pageSize = 50) {
    return fetchJsonAuth<{
      items: Array<{
        file_cid: string;
        filename: string;
        mime_type: string;
        size_bytes: number;
        status: string;
        processing_status: string;
        height: number;
        created_at: string;
      }>;
      next_page_token: string;
      final_page_token: string;
    }>(`/files/list?page=${page}&page_size=${pageSize}`, token);
  },
  userSpace(token: string) {
    return pbPost<
      null,
      { quotaBytes: number | { toNumber: () => number }; usedBytes: number | { toNumber: () => number } }
    >("/user/space", null, null, files.SpaceReply, token).then((r) => ({
      quota_bytes: asNumber(r.quotaBytes),
      used_bytes: asNumber(r.usedBytes),
    }));
  },
  walletChallenge(address: string) {
    return pbPost<{ address: string }, { nonce: string }>(
      "/auth/wallet/challenge",
      files.WalletChallengeRequest,
      { address },
      files.WalletChallengeReply,
    );
  },
  walletVerify(address: string, signature: string) {
    return pbPost<{ address: string; signature: string }, { token: string; refreshToken: string; userId: string }>(
      "/auth/wallet/verify",
      files.WalletVerifyRequest,
      { address, signature },
      files.AuthReply,
    ).then((r) => ({
      token: r.token,
      refresh_token: r.refreshToken,
      user_id: r.userId,
    }));
  },
  ssoCallback(code: string) {
    return pbGet<{ token: string; refreshToken: string; userId: string }>(
      `/auth/sso/callback?code=${encodeURIComponent(code)}`,
      files.AuthReply,
    ).then((r) => ({
      token: r.token,
      refresh_token: r.refreshToken,
      user_id: r.userId,
    }));
  },
};

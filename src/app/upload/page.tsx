"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/providers/auth-provider";
import { api } from "@/lib/api";
import { formatBytes } from "@/lib/fmt";
import { pushKnownCid } from "@/lib/auth-storage";

type UploadRow = {
  id: string;
  file: File;
  status: "ready" | "uploading" | "done" | "error";
  progress: number;
  message: string;
  cid?: string;
};

const DEFAULT_CHUNK_SIZE = 1024 * 1024;

function bar(progress: number): string {
  const width = 22;
  const fill = Math.max(0, Math.min(width, Math.round(progress * width)));
  return `[${"=".repeat(fill)}${" ".repeat(width - fill)}] ${Math.round(progress * 100)}%`;
}

export default function UploadPage() {
  const auth = useAuth();
  const router = useRouter();
  const [rows, setRows] = useState<UploadRow[]>([]);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  const token = auth.session?.token || "";
  const userId = auth.session?.userId || "";
  const hasReady = useMemo(() => rows.some((r) => r.status === "ready" || r.status === "error"), [rows]);

  useEffect(() => {
    if (auth.ready && !auth.session) router.replace("/login");
  }, [auth.ready, auth.session, router]);

  function setRow(id: string, patch: Partial<UploadRow>) {
    setRows((curr) => curr.map((row) => (row.id === id ? { ...row, ...patch } : row)));
  }

  function addFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    const incoming: UploadRow[] = Array.from(files).map((file) => ({
      id: `${file.name}-${file.size}-${Math.random().toString(36).slice(2)}`,
      file,
      status: "ready",
      progress: 0,
      message: "",
    }));
    setRows((curr) => [...curr, ...incoming]);
  }

  async function uploadRow(row: UploadRow) {
    if (!token || !userId) return;
    try {
      setRow(row.id, { status: "uploading", progress: 0, message: "starting" });
      const start = await api.uploadStart(
        token,
        row.file.name,
        row.file.type || "application/octet-stream",
        row.file.size,
        DEFAULT_CHUNK_SIZE,
      );
      const chunkSize = start.chunk_size || DEFAULT_CHUNK_SIZE;
      let index = 0;
      let sent = 0;
      while (sent < row.file.size) {
        const next = Math.min(sent + chunkSize, row.file.size);
        const arr = new Uint8Array(await row.file.slice(sent, next).arrayBuffer());
        const rep = await api.uploadChunk(token, start.upload_id, index, arr);
        sent += arr.byteLength;
        index = rep.next_chunk_index;
        setRow(row.id, { progress: row.file.size === 0 ? 1 : sent / row.file.size });
      }
      const done = await api.uploadComplete(token, start.upload_id);
      pushKnownCid(userId, done.file_cid);
      // remove progress bar after finished
      setRow(row.id, { status: "done", progress: 0, message: "Done", cid: done.file_cid });
    } catch (err) {
      setRow(row.id, { status: "error", progress: 0, message: err instanceof Error ? err.message : "upload failed" });
    }
  }

  async function uploadAll() {
    if (!token || !userId || busy) return;
    setBusy(true);
    setStatus("");
    const queue = rows.filter((r) => r.status === "ready" || r.status === "error");
    for (const row of queue) {
      await uploadRow(row);
    }
    setBusy(false);
    setStatus("upload complete");
  }

  if (!auth.ready) return <p>loading...</p>;
  if (!auth.session) return <p>loading...</p>;

  return (
    <div className="stack">
      <h1>Upload</h1>
      <section className="stack-tight">
        <input
          id="upload-files"
          type="file"
          multiple
          onChange={(e) => {
            addFiles(e.currentTarget.files);
            e.currentTarget.value = "";
          }}
        />
        <div className="row">
          <button className="action-link" onClick={() => void uploadAll()} disabled={!hasReady || busy}>
            {busy ? "uploading..." : "upload all"}
          </button>
          <button className="action-link" onClick={() => setRows([])} disabled={busy || rows.length === 0}>
            clear
          </button>
        </div>
      </section>

      {rows.length === 0 ? (
        <p className="muted">no files queued</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>File</th>
              <th>Size</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>{row.file.name}</td>
                <td>{formatBytes(row.file.size)}</td>
                <td>
                  {row.status === "uploading" ? <span>{bar(row.progress)}</span> : null}
                  {row.status === "done" ? <span>Done</span> : null}
                  {row.status === "ready" ? <span>ready</span> : null}
                  {row.status === "error" ? <span>error</span> : null}
                  {row.status === "uploading" && row.message ? <span> {row.message}</span> : null}
                  {row.status === "error" && row.message ? <span> {row.message}</span> : null}
                  {row.status === "done" && row.cid ? (
                    <span>
                      {" "}
                      <Link className="action-link" href={`/files/${encodeURIComponent(row.cid)}`}>
                        {row.cid}
                      </Link>
                    </span>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {status ? <p className="muted">{status}</p> : null}
    </div>
  );
}

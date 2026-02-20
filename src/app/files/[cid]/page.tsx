"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "@/providers/auth-provider";
import { api } from "@/lib/api";
import { formatBytes, toHex } from "@/lib/fmt";
import { removeKnownCid } from "@/lib/auth-storage";

type FileMeta = {
  file_cid: string;
  filename: string;
  mime_type: string;
  size_bytes: number;
  status: string;
  height: number;
};

type FileProof = {
  leaf_hash: Uint8Array;
  global_root: Uint8Array;
  siblings: Uint8Array[];
  height: number;
  attested: boolean;
};

export default function FileDetailPage() {
  const auth = useAuth();
  const router = useRouter();
  const params = useParams<{ cid: string }>();
  const cid = decodeURIComponent(params.cid || "");
  const [file, setFile] = useState<FileMeta | null>(null);
  const [proof, setProof] = useState<FileProof | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!auth.ready || !auth.session || !cid) return;
    void Promise.all([api.fileGet(auth.session.token, cid), api.fileProof(auth.session.token, cid)])
      .then(([f, p]) => {
        setFile(f);
        setProof(p);
      })
      .catch((e: unknown) => setStatus(e instanceof Error ? e.message : "load failed"));
  }, [auth.ready, auth.session, cid]);

  useEffect(() => {
    if (auth.ready && !auth.session) router.replace("/login");
  }, [auth.ready, auth.session, router]);

  useEffect(() => {
    if (!auth.session || !file) {
      setPreviewUrl("");
      return;
    }
    let active = true;
    let url = "";
    void api
      // temporary: assume files are images and render from cid data; swap to /thumb/{cid}/{small,medium,large} once endpoint ships.
      .fileData(auth.session.token, file.file_cid)
      .then((data) => {
        if (!active) return;
        const blob = new Blob([data.data], { type: file.mime_type || "application/octet-stream" });
        url = URL.createObjectURL(blob);
        setPreviewUrl(url);
      })
      .catch(() => setPreviewUrl(""));
    return () => {
      active = false;
      if (url) URL.revokeObjectURL(url);
    };
  }, [auth.session, file]);

  const orientation = useMemo(() => {
    if (!file?.height) return "landscape";
    return file.height > 1200 ? "portrait" : "landscape";
  }, [file?.height]);

  async function download() {
    if (!auth.session || !file) return;
    try {
      const data = await api.fileData(auth.session.token, file.file_cid);
      const blob = new Blob([data.data], { type: file.mime_type || "application/octet-stream" });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = file.filename || "download.bin";
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      URL.revokeObjectURL(url);
    } catch (e) {
      setStatus(e instanceof Error ? e.message : "download failed");
    }
  }

  async function deleteFile() {
    if (!auth.session || !file) return;
    try {
      await api.fileDelete(auth.session.token, file.file_cid);
      removeKnownCid(auth.session.userId, file.file_cid);
      router.push("/files");
      router.refresh();
    } catch (e) {
      setStatus(e instanceof Error ? e.message : "delete failed");
    }
  }

  if (!auth.ready) return <p>loading...</p>;
  if (!auth.session) return <p>loading...</p>;
  if (!file) {
    return (
      <div className="stack">
        <h1>File</h1>
        <p>{status || "loading..."}</p>
      </div>
    );
  }

  return (
    <div className="stack">
      <ul className="slash-flat-list">
        <li>
          <button className="action-link" onClick={() => void download()}>
            Download File ({formatBytes(file.size_bytes)})
          </button>
        </li>
        <li>{file.mime_type}</li>
      </ul>

      <div id="file-view" className={`orientation-${orientation}`}>
        <div className="preview-pane">
          <h3>Preview</h3>
          {previewUrl ? (
            <div className="file-preview-container">
              <a href={previewUrl} target="_blank" rel="noreferrer" className="file-preview-link">
                <img className="detail-thumb" src={previewUrl} alt={file.filename || file.file_cid} />
              </a>
            </div>
          ) : (
            <div className="detail-thumb detail-thumb-empty" />
          )}
        </div>

        <div className="stack">
          <section className="detail-section">
            <h3>File Info</h3>
            <dl className="detail-pairs">
              <dt className="detail-label">CID</dt>
              <dd className="detail-value detail-cid-value">{file.file_cid}</dd>
              <dt className="detail-label">Name</dt>
              <dd className="detail-value">{file.filename || "(unnamed)"}</dd>
              <dt className="detail-label">Mimetype</dt>
              <dd className="detail-value">{file.mime_type}</dd>
              <dt className="detail-label">Status</dt>
              <dd className="detail-value">{file.status}</dd>
              <dt className="detail-label">Size</dt>
              <dd className="detail-value">{formatBytes(file.size_bytes)}</dd>
              <dt className="detail-label">Leaf Hash</dt>
              <dd className="detail-value">{proof ? toHex(proof.leaf_hash || new Uint8Array()) : "-"}</dd>
            </dl>
          </section>

          {proof ? (
            <section className="detail-section">
              <h3>Proof</h3>
              <dl className="detail-pairs">
                <dt className="detail-label">Attested</dt>
                <dd className="detail-value">{proof.attested ? "Yes" : "Not Yet"}</dd>
                <dt className="detail-label">{proof.attested ? "Height" : "Expected height"}</dt>
                <dd className="detail-value">{proof.height}</dd>
                {proof.attested ? (
                  <>
                    <dt className="detail-label">Global Root</dt>
                    <dd className="detail-value">{toHex(proof.global_root || new Uint8Array())}</dd>
                  </>
                ) : null}
              </dl>
            </section>
          ) : null}
        </div>
      </div>

      <ul className="slash-flat-list">
        <li>
          <Link className="action-link" href="/files">
            back
          </Link>
        </li>
        <li>
          <button className="action-link" onClick={() => void deleteFile()}>
            forget file
          </button>
        </li>
      </ul>

      {status ? <p className="muted">{status}</p> : null}
    </div>
  );
}

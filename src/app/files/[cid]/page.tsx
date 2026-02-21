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
  processing_status: string;
  height: number;
};

type FileProof = {
  leaf_hash: Uint8Array;
  global_root: Uint8Array;
  siblings: Uint8Array[];
  height: number;
  attested: boolean;
};

function thumbSrc(cid: string): string {
  return `/api/thumb/${encodeURIComponent(cid)}`;
}

function fileSrc(cid: string): string {
  return `/api/file/${encodeURIComponent(cid)}`;
}

export default function FileDetailPage() {
  const auth = useAuth();
  const router = useRouter();
  const params = useParams<{ cid: string }>();
  const cid = decodeURIComponent(params.cid || "");
  const [file, setFile] = useState<FileMeta | null>(null);
  const [proof, setProof] = useState<FileProof | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [previewMime, setPreviewMime] = useState("");
  const [previewWidth, setPreviewWidth] = useState(1);
  const [previewHeight, setPreviewHeight] = useState(1);
  const [processingStatus, setProcessingStatus] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!auth.ready || !auth.session || !cid) return;
    let active = true;
    void Promise.all([api.fileGet(auth.session.token, cid), api.fileProof(auth.session.token, cid)])
      .then(([f, p]) => {
        if (!active) return;
        setFile(f);
        setProof(p);
        setProcessingStatus(f.processing_status || "");
      })
      .catch((e: unknown) => setStatus(e instanceof Error ? e.message : "load failed"));
    return () => {
      active = false;
    };
  }, [auth.ready, auth.session, cid]);

  useEffect(() => {
    if (auth.ready && !auth.session) router.replace("/login");
  }, [auth.ready, auth.session, router]);

  useEffect(() => {
    if (!auth.session || !file) return;
    let active = true;
    const token = auth.session.token;

    const refresh = async () => {
      try {
        const thumbsReply = await api.fileThumbnails(token, file.file_cid);
        if (!active) return;
        const statusNow = thumbsReply.processing_status || file.processing_status || "";
        setProcessingStatus(statusNow);
        const thumbs = [...thumbsReply.thumbnails].sort((a, b) => a.long_edge - b.long_edge);
        const largest = thumbs[thumbs.length - 1];
        if (!largest) {
          setPreviewUrl("");
          setPreviewMime("");
          setPreviewWidth(1);
          setPreviewHeight(1);
          return;
        }
        if (!active) return;
        setPreviewMime(largest.mime_type || "application/octet-stream");
        setPreviewWidth(largest.width || largest.long_edge || 1);
        setPreviewHeight(largest.height || largest.long_edge || 1);
        setPreviewUrl(thumbSrc(largest.thumbnail_cid));
      } catch {
        if (!active) return;
        setPreviewUrl("");
        setPreviewMime("");
        setPreviewWidth(1);
        setPreviewHeight(1);
      }
    };

    void refresh();
    if (processingStatus === "processing") {
      const tick = window.setInterval(() => void refresh(), 3000);
      return () => {
        active = false;
        window.clearInterval(tick);
      };
    }

    return () => {
      active = false;
    };
  }, [auth.session, file, processingStatus]);

  const orientation = useMemo(() => {
    if (!file?.height) return "landscape";
    return file.height > 1200 ? "portrait" : "landscape";
  }, [file?.height]);

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

  if (!auth.ready || !auth.session) return <p>loading...</p>;
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
          <a className="action-link" href={fileSrc(file.file_cid)} target="_blank" rel="noreferrer">
            Download File ({formatBytes(file.size_bytes)})
          </a>
        </li>
        <li>{file.mime_type}</li>
      </ul>

      <div id="file-view" className={`orientation-${orientation}`}>
        <div className="preview-pane">
          <h3>Preview</h3>
          {previewUrl ? (
            <div className="file-preview-container">
              {file.mime_type.startsWith("video/") && previewMime.startsWith("video/") ? (
                <video className="detail-thumb" src={previewUrl} width={previewWidth} height={previewHeight} muted loop autoPlay playsInline controls />
              ) : (
                <a href={fileSrc(file.file_cid)} target="_blank" rel="noreferrer" className="file-preview-link">
                  <img className="detail-thumb" src={previewUrl} width={previewWidth} height={previewHeight} alt={file.filename || file.file_cid} />
                </a>
              )}
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
              <dt className="detail-label">Processing</dt>
              <dd className="detail-value">{processingStatus || file.processing_status}</dd>
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

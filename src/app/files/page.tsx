"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import { formatBytes } from "@/lib/fmt";
import { useAuth } from "@/providers/auth-provider";
import { loadKnownCids, removeKnownCid } from "@/lib/auth-storage";

type FileMeta = {
  file_cid: string;
  filename: string;
  mime_type: string;
  size_bytes: number;
  status: string;
  height: number;
};

export default function FilesPage() {
  const auth = useAuth();
  const router = useRouter();
  const [space, setSpace] = useState<{ used_bytes: number; quota_bytes: number } | null>(null);
  const [knownCids, setKnownCids] = useState<string[]>([]);
  const [rows, setRows] = useState<FileMeta[]>([]);
  const [previewUrls, setPreviewUrls] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<Record<string, true>>({});
  const [selectMode, setSelectMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const token = auth.session?.token || "";
  const userId = auth.session?.userId || "";
  const selectedCount = useMemo(() => Object.keys(selected).length, [selected]);

  useEffect(() => {
    if (!auth.ready || !auth.session) return;
    setKnownCids(loadKnownCids(auth.session.userId));
    void api
      .userSpace(auth.session.token)
      .then(setSpace)
      .catch((e: unknown) => setStatus(e instanceof Error ? e.message : "space failed"));
  }, [auth.ready, auth.session]);

  useEffect(() => {
    if (auth.ready && !auth.session) router.replace("/login");
  }, [auth.ready, auth.session, router]);

  useEffect(() => {
    if (!token || knownCids.length === 0) {
      setRows([]);
      return;
    }
    let active = true;
    setLoading(true);
    void Promise.all(
      knownCids.map(async (cid) => {
        try {
          return await api.fileGet(token, cid);
        } catch {
          return null;
        }
      }),
    ).then((list) => {
      if (!active) return;
      setRows(list.filter((x): x is FileMeta => !!x));
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, [knownCids, token]);

  useEffect(() => {
    if (!token || rows.length === 0) {
      setPreviewUrls({});
      return;
    }
    let active = true;
    const next: Record<string, string> = {};
    const blobUrls: string[] = [];
    void Promise.all(
      rows.map(async (f) => {
        try {
          // temporary: assume files are images and render from cid data; swap to /thumb/{cid}/{small,medium,large} once endpoint ships.
          const data = await api.fileData(token, f.file_cid);
          const blob = new Blob([data.data], { type: f.mime_type || "application/octet-stream" });
          const url = URL.createObjectURL(blob);
          blobUrls.push(url);
          next[f.file_cid] = url;
        } catch {
          next[f.file_cid] = "";
        }
      }),
    ).then(() => {
      if (!active) {
        blobUrls.forEach((url) => URL.revokeObjectURL(url));
        return;
      }
      setPreviewUrls((prev) => {
        Object.values(prev).forEach((url) => URL.revokeObjectURL(url));
        return next;
      });
    });
    return () => {
      active = false;
      blobUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [rows, token]);

  const quotaLabel = useMemo(() => {
    if (!space) return "";
    return `${formatBytes(space.used_bytes)} / ${formatBytes(space.quota_bytes)}`;
  }, [space]);

  function toggleSelected(cid: string) {
    setSelected((curr) => {
      if (curr[cid]) {
        const next = { ...curr };
        delete next[cid];
        return next;
      }
      return { ...curr, [cid]: true };
    });
  }

  async function onDeleteMany(cids: string[]) {
    if (!token || !userId || cids.length === 0) return;
    const results = await Promise.allSettled(cids.map((cid) => api.fileDelete(token, cid)));
    const deleted = cids.filter((_, i) => results[i].status === "fulfilled");
    if (deleted.length > 0) {
      let next = loadKnownCids(userId);
      deleted.forEach((cid) => {
        next = removeKnownCid(userId, cid);
      });
      setKnownCids(next);
      setSelected({});
      setSpace(await api.userSpace(token));
      setStatus(`forgot ${deleted.length} file${deleted.length === 1 ? "" : "s"}`);
      return;
    }
    setStatus("forget failed");
  }

  if (!auth.ready) return <p>loading...</p>;
  if (!auth.session) return <p>loading...</p>;

  return (
    <div className="stack">
      <div className="files-toolbar">
        <h1>Files</h1>
        <div className="files-toolbar-meta">
          {quotaLabel ? <p className="muted">space {quotaLabel}</p> : null}
          <button
            className="action-link"
            onClick={() => {
              setSelectMode((v) => !v);
              setSelected({});
            }}
          >
            {selectMode ? "exit select mode" : "select mode"}
          </button>
        </div>
      </div>

      {selectMode ? (
        <section className="select-box stack-tight">
          <p>{selectedCount} selected</p>
          <ul className="slash-list select-actions">
            <li>
              <button
                className="action-link"
                onClick={() =>
                  setSelected(Object.fromEntries(rows.map((f) => [f.file_cid, true])) as Record<string, true>)
                }
              >
                select all
              </button>
            </li>
            <li>
              <button className="action-link" onClick={() => setSelected({})}>
                clear
              </button>
            </li>
            <li>
              <button
                className="action-link"
                onClick={() => void onDeleteMany(Object.keys(selected))}
                disabled={selectedCount === 0}
              >
                forget selected
              </button>
            </li>
          </ul>
        </section>
      ) : null}

      {loading ? (
        <p>loading...</p>
      ) : rows.length === 0 ? (
        <p className="muted">no known files yet</p>
      ) : (
        <div className="mason-grid">
          {rows.map((f) => (
            <article key={f.file_cid} className="file-tile">
              {selectMode ? (
                <button className="file-tile-hit" onClick={() => toggleSelected(f.file_cid)}>
                  {previewUrls[f.file_cid] ? (
                    <img
                      className={`file-thumb${selected[f.file_cid] ? " file-thumb-selected" : ""}`}
                      src={previewUrls[f.file_cid]}
                      alt={f.filename || f.file_cid}
                    />
                  ) : (
                    <div className={`file-thumb file-thumb-empty${selected[f.file_cid] ? " file-thumb-selected" : ""}`} />
                  )}
                </button>
              ) : (
                <Link className="file-thumb-link" href={`/files/${encodeURIComponent(f.file_cid)}`}>
                  {previewUrls[f.file_cid] ? (
                    <img className="file-thumb" src={previewUrls[f.file_cid]} alt={f.filename || f.file_cid} />
                  ) : (
                    <div className="file-thumb file-thumb-empty" />
                  )}
                </Link>
              )}
              <span className="file-meta-chip">
                {(f.mime_type || "unknown").replace(/^image\//, "")} / {formatBytes(f.size_bytes)}
              </span>
            </article>
          ))}
        </div>
      )}
      {status ? <p className="muted">{status}</p> : null}
    </div>
  );
}

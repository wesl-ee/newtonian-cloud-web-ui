"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import { formatBytes } from "@/lib/fmt";
import { useAuth } from "@/providers/auth-provider";

type FileMeta = {
  file_cid: string;
  filename: string;
  mime_type: string;
  size_bytes: number;
  status: string;
  processing_status: string;
  height: number;
};

type Thumbnail = {
  thumbnail_cid: string;
  long_edge: number;
  mime_type: string;
  width: number;
  height: number;
};

type PreviewItem = {
  url: string;
  mime: string;
  width: number;
  height: number;
};

type PagerToken = number | "ellipsis";

function thumbSrc(cid: string): string {
  return `/api/thumb/${encodeURIComponent(cid)}`;
}

export default function FilesPage() {
  const auth = useAuth();
  const router = useRouter();
  const [space, setSpace] = useState<{ used_bytes: number; quota_bytes: number } | null>(null);
  const [rows, setRows] = useState<FileMeta[]>([]);
  const [previews, setPreviews] = useState<Record<string, PreviewItem>>({});
  const [processing, setProcessing] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<Record<string, true>>({});
  const [selectMode, setSelectMode] = useState(false);
  const [page, setPage] = useState(1);
  const [pageInput, setPageInput] = useState("1");
  const [finalPage, setFinalPage] = useState(1);
  const [nextPageToken, setNextPageToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const thumbsInFlight = useRef<Record<string, true>>({});

  const token = auth.session?.token || "";
  const selectedCount = useMemo(() => Object.keys(selected).length, [selected]);
  const hasProcessing = useMemo(
    () => rows.some((row) => (processing[row.file_cid] || row.processing_status) === "processing"),
    [rows, processing],
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = Number.parseInt(new URLSearchParams(window.location.search).get("page") || "1", 10);
    const next = Number.isFinite(raw) ? Math.max(1, raw) : 1;
    if (next !== page) setPage(next);
  }, [page]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const raw = Number.parseInt(params.get("page") || "1", 10);
    const current = Number.isFinite(raw) ? Math.max(1, raw) : 1;
    if (params.get("page") !== null && current === page) return;
    params.set("page", String(page));
    window.history.replaceState({}, "", `/files?${params.toString()}`);
  }, [page, router]);

  useEffect(() => {
    if (!auth.ready || !auth.session) return;
    void api
      .userSpace(auth.session.token)
      .then(setSpace)
      .catch((e: unknown) => setStatus(e instanceof Error ? e.message : "space failed"));
  }, [auth.ready, auth.session]);

  useEffect(() => {
    if (auth.ready && !auth.session) router.replace("/login");
  }, [auth.ready, auth.session, router]);

  useEffect(() => {
    if (!token) return;
    let active = true;
    setLoading(true);
    void api
      .filesList(token, page, 50)
      .then((resp) => {
        if (!active) return;
        setRows(resp.items);
        setProcessing(Object.fromEntries(resp.items.map((item) => [item.file_cid, item.processing_status])));
        setPreviews({});
        thumbsInFlight.current = {};
        setNextPageToken(resp.next_page_token);
        setFinalPage(Math.max(1, Number(resp.final_page_token || "1")));
        if (page > Math.max(1, Number(resp.final_page_token || "1"))) setPage(Math.max(1, Number(resp.final_page_token || "1")));
        setLoading(false);
      })
      .catch((e: unknown) => {
        if (!active) return;
        setStatus(e instanceof Error ? e.message : "list failed");
        setRows([]);
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [page, token]);

  useEffect(() => {
    if (!token) return;
    if (rows.length === 0) {
      setPreviews({});
      thumbsInFlight.current = {};
      return;
    }
    let active = true;
    const targets = rows.filter(
      (row) =>
        (processing[row.file_cid] || row.processing_status) === "finished" &&
        !previews[row.file_cid] &&
        !thumbsInFlight.current[row.file_cid],
    );
    void (async () => {
      for (const row of targets) {
        if (!active) break;
        thumbsInFlight.current[row.file_cid] = true;
        try {
          const reply = await api.fileThumbnails(token, row.file_cid);
          if (!active) break;
          setProcessing((curr) => ({ ...curr, [row.file_cid]: reply.processing_status || row.processing_status || "processing" }));
          const thumbs = [...reply.thumbnails].sort((a, b) => a.long_edge - b.long_edge);
          const medium: Thumbnail | undefined =
            thumbs.find((t) => t.long_edge === 700) || thumbs.find((t) => t.long_edge > 700) || thumbs[thumbs.length - 1];
          if (!medium) continue;
          setPreviews((curr) => ({
            ...curr,
            [row.file_cid]: {
              url: thumbSrc(medium.thumbnail_cid),
              mime: medium.mime_type || "application/octet-stream",
              width: medium.width || medium.long_edge || 1,
              height: medium.height || medium.long_edge || 1,
            },
          }));
        } finally {
          delete thumbsInFlight.current[row.file_cid];
        }
      }
    })();
    return () => {
      active = false;
    };
  }, [rows, token, processing, previews]);

  useEffect(() => {
    if (!token || rows.length === 0 || !hasProcessing) return;
    let active = true;
    let busy = false;
    const tick = window.setInterval(() => {
      if (!active || busy) return;
      busy = true;
      void api
        .filesList(token, page, 50)
        .then((resp) => {
          if (!active) return;
          setRows(resp.items);
          setProcessing(Object.fromEntries(resp.items.map((item) => [item.file_cid, item.processing_status])));
          setNextPageToken(resp.next_page_token);
          setFinalPage(Math.max(1, Number(resp.final_page_token || "1")));
        })
        .catch(() => {})
        .finally(() => {
          busy = false;
        });
    }, 3000);
    return () => {
      active = false;
      window.clearInterval(tick);
    };
  }, [rows.length, token, page, hasProcessing]);

  const quotaLabel = useMemo(() => {
    if (!space) return "";
    return `${formatBytes(space.used_bytes)} / ${formatBytes(space.quota_bytes)}`;
  }, [space]);

  useEffect(() => {
    setPageInput(String(page));
  }, [page]);

  const pagerTokens = useMemo<PagerToken[]>(() => {
    if (finalPage <= 7) return Array.from({ length: finalPage }, (_, i) => i + 1);
    const out: PagerToken[] = [1];
    const start = Math.max(2, page - 1);
    const end = Math.min(finalPage - 1, page + 1);
    if (start > 2) out.push("ellipsis");
    for (let n = start; n <= end; n += 1) out.push(n);
    if (end < finalPage - 1) out.push("ellipsis");
    out.push(finalPage);
    return out;
  }, [finalPage, page]);

  const hasPrev = page > 1;
  const hasNext = !!nextPageToken;

  function jumpToPage() {
    const raw = Number.parseInt(pageInput, 10);
    if (!Number.isFinite(raw)) {
      setPageInput(String(page));
      return;
    }
    setPage(Math.max(1, Math.min(finalPage, raw)));
  }

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
    if (!token || cids.length === 0) return;
    const results = await Promise.allSettled(cids.map((cid) => api.fileDelete(token, cid)));
    const deleted = cids.filter((_, i) => results[i].status === "fulfilled");
    if (deleted.length > 0) {
      setRows((curr) => curr.filter((f) => !deleted.includes(f.file_cid)));
      setSelected({});
      setSpace(await api.userSpace(token));
      if (rows.length === deleted.length && page > 1) setPage((v) => Math.max(1, v - 1));
      setStatus(`forgot ${deleted.length} file${deleted.length === 1 ? "" : "s"}`);
      return;
    }
    setStatus("forget failed");
  }

  if (!auth.ready || !auth.session) return <p>loading...</p>;

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
              <button className="action-link" onClick={() => setSelected(Object.fromEntries(rows.map((f) => [f.file_cid, true])) as Record<string, true>)}>
                select all
              </button>
            </li>
            <li>
              <button className="action-link" onClick={() => setSelected({})}>
                clear
              </button>
            </li>
            <li>
              <button className="action-link" onClick={() => void onDeleteMany(Object.keys(selected))} disabled={selectedCount === 0}>
                forget selected
              </button>
            </li>
          </ul>
        </section>
      ) : null}

      <section className="hooya-pager">
        <p className="hooya-pager-label">Page</p>
        <div className="hooya-pager-row">
          {hasPrev ? <button className="action-link hooya-pager-link" disabled={loading} onClick={() => setPage((p) => Math.max(1, p - 1))}>←</button> : null}
          {pagerTokens.map((tokenItem, i) =>
            tokenItem === "ellipsis" ? (
              <span key={`ellipsis-${i}`} className="hooya-pager-ellipsis">…</span>
            ) : tokenItem === page ? (
              <form
                key={`jump-${tokenItem}`}
                className="hooya-pager-jump"
                onSubmit={(e) => {
                  e.preventDefault();
                  jumpToPage();
                }}
              >
                <input
                  className="hooya-pager-current"
                  type="number"
                  min={1}
                  max={finalPage}
                  value={pageInput}
                  onChange={(e) => setPageInput(e.target.value)}
                  onWheel={(e) => (e.currentTarget as HTMLInputElement).blur()}
                />
              </form>
            ) : (
              <button key={tokenItem} className="action-link hooya-pager-link" onClick={() => setPage(tokenItem)} disabled={loading}>{tokenItem}</button>
            ),
          )}
          {hasNext ? <button className="action-link hooya-pager-link" disabled={loading} onClick={() => setPage((p) => p + 1)}>→</button> : null}
        </div>
      </section>

      {loading ? (
        <p>loading...</p>
      ) : rows.length === 0 ? (
        <p className="muted">no files yet</p>
      ) : (
        <div className="mason-grid">
          {rows.map((f) => {
            const preview = previews[f.file_cid];
            const isVideo = f.mime_type.startsWith("video/") && (preview?.mime || "").startsWith("video/");
            const processingStatus = processing[f.file_cid] || f.processing_status;
            return (
              <article key={f.file_cid} className="file-tile">
                {selectMode ? (
                  <button className="file-tile-hit" onClick={() => toggleSelected(f.file_cid)}>
                    {preview ? (
                      isVideo ? (
                        <video
                          className={`file-thumb${selected[f.file_cid] ? " file-thumb-selected" : ""}`}
                          src={preview.url}
                          width={preview.width}
                          height={preview.height}
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          onMouseEnter={(e) => void e.currentTarget.play()}
                          onMouseLeave={(e) => {
                            e.currentTarget.pause();
                            e.currentTarget.currentTime = 0;
                          }}
                        />
                      ) : (
                        <img className={`file-thumb${selected[f.file_cid] ? " file-thumb-selected" : ""}`} src={preview.url} width={preview.width} height={preview.height} alt={f.filename || f.file_cid} />
                      )
                    ) : (
                      <div className={`file-thumb file-thumb-empty${selected[f.file_cid] ? " file-thumb-selected" : ""}`} />
                    )}
                  </button>
                ) : (
                  <Link className="file-thumb-link" href={`/files/${encodeURIComponent(f.file_cid)}`}>
                    {preview ? (
                      isVideo ? (
                        <video
                          className="file-thumb"
                          src={preview.url}
                          width={preview.width}
                          height={preview.height}
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          onMouseEnter={(e) => void e.currentTarget.play()}
                          onMouseLeave={(e) => {
                            e.currentTarget.pause();
                            e.currentTarget.currentTime = 0;
                          }}
                        />
                      ) : (
                        <img className="file-thumb" src={preview.url} width={preview.width} height={preview.height} alt={f.filename || f.file_cid} />
                      )
                    ) : (
                      <div className="file-thumb file-thumb-empty" />
                    )}
                  </Link>
                )}
                <ul className="slash-list file-meta-chip">
                  <li>{(f.mime_type || "unknown").replace(/^image\//, "")}</li>
                  <li>{formatBytes(f.size_bytes)}</li>
                  {processingStatus !== "finished" ? <li>{processingStatus}</li> : null}
                </ul>
              </article>
            );
          })}
        </div>
      )}

      <section className="hooya-pager">
        <p className="hooya-pager-label">Page</p>
        <div className="hooya-pager-row">
          {hasPrev ? <button className="action-link hooya-pager-link" disabled={loading} onClick={() => setPage((p) => Math.max(1, p - 1))}>←</button> : null}
          {pagerTokens.map((tokenItem, i) =>
            tokenItem === "ellipsis" ? (
              <span key={`ellipsis-bottom-${i}`} className="hooya-pager-ellipsis">…</span>
            ) : tokenItem === page ? (
              <form
                key={`jump-bottom-${tokenItem}`}
                className="hooya-pager-jump"
                onSubmit={(e) => {
                  e.preventDefault();
                  jumpToPage();
                }}
              >
                <input
                  className="hooya-pager-current"
                  type="number"
                  min={1}
                  max={finalPage}
                  value={pageInput}
                  onChange={(e) => setPageInput(e.target.value)}
                  onWheel={(e) => (e.currentTarget as HTMLInputElement).blur()}
                />
              </form>
            ) : (
              <button key={`bottom-${tokenItem}`} className="action-link hooya-pager-link" onClick={() => setPage(tokenItem)} disabled={loading}>{tokenItem}</button>
            ),
          )}
          {hasNext ? <button className="action-link hooya-pager-link" disabled={loading} onClick={() => setPage((p) => p + 1)}>→</button> : null}
        </div>
      </section>

      {status ? <p className="muted">{status}</p> : null}
    </div>
  );
}

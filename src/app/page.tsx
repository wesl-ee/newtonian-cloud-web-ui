import Link from "next/link";
import { fetchJson } from "@/lib/api";
import { formatBytes, timeAgo } from "@/lib/fmt";
import { HomeSignupBox } from "@/components/home-signup-box";

type PublicStats = { total_files: number; total_bytes: number };
type PublicFile = { cid: string; size_bytes: number; created_at: string };
type Paged<T> = { items: T[]; next_page_token: string; final_page_token: string };
type PublicCommit = { height: number; root: string; created_at: string };

export default async function HomePage() {
  const [stats, recentFiles, recentCommits] = await Promise.all([
    fetchJson<PublicStats>("/public/stats").catch(() => ({ total_files: 0, total_bytes: 0 })),
    fetchJson<Paged<PublicFile>>("/public/recent-files").catch(() => ({ items: [], next_page_token: "", final_page_token: "1" })),
    fetchJson<PublicCommit[]>("/public/recent-commits").catch(() => []),
  ]);

  return (
    <div className="stack">
      <section className="hero">
        <div>
          <div className="hero-graphic" aria-hidden />
          <h1>Newtonian Cloud</h1>
          <p>
            Verifiably Storing {stats.total_files} Files / {formatBytes(stats.total_bytes)}
          </p>
          <HomeSignupBox />
        </div>
      </section>
      <section className="split">
        <div>
          <h2 className="card-title">Recent Files</h2>
          <table>
            <thead>
              <tr>
                <th>CID</th>
                <th>Size</th>
                <th>Uploaded Time</th>
              </tr>
            </thead>
            <tbody>
              {recentFiles.items.length === 0 ? (
                <tr>
                  <td colSpan={3} className="muted">
                    no files yet
                  </td>
                </tr>
              ) : (
                recentFiles.items.map((f) => (
                  <tr key={`${f.cid}-${f.created_at}`}>
                    <td>
                      <Link className="action-link" href={`/files/${encodeURIComponent(f.cid)}`}>
                        <span className="cid-ellipsis">{f.cid}</span>
                      </Link>
                    </td>
                    <td>{formatBytes(f.size_bytes)}</td>
                    <td>{timeAgo(f.created_at)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="card-title">Recent Commits</h2>
          <table>
            <thead>
              <tr>
                <th>Height</th>
                <th>Root</th>
                <th>Validated Time</th>
              </tr>
            </thead>
            <tbody>
              {recentCommits.length === 0 ? (
                <tr>
                  <td colSpan={3} className="muted">
                    no commits yet
                  </td>
                </tr>
              ) : (
                recentCommits.map((c) => (
                  <tr key={`${c.height}-${c.created_at}`}>
                    <td>{c.height}</td>
                    <td>
                      <span className="cid-ellipsis">{c.root}</span>
                    </td>
                    <td>{timeAgo(c.created_at)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export function formatBytes(n: number): string {
  if (!Number.isFinite(n) || n < 0) return "0 B";
  const units = ["B", "KiB", "MiB", "GiB", "TiB"];
  let v = n;
  let i = 0;
  while (v >= 1024 && i < units.length - 1) {
    v /= 1024;
    i += 1;
  }
  const value = v >= 100 ? v.toFixed(0) : v >= 10 ? v.toFixed(1) : v.toFixed(2);
  return `${value} ${units[i]}`;
}

export function truncateCid(cid: string, keep = 8): string {
  if (!cid || cid.length <= keep * 2 + 3) return cid;
  return `${cid.slice(0, keep)}[...]${cid.slice(-keep)}`;
}

export function timeAgo(input: string): string {
  const t = Date.parse(input);
  if (!Number.isFinite(t)) return input;
  const delta = Math.max(0, Date.now() - t);
  const sec = Math.floor(delta / 1000);
  if (sec < 60) return `${sec} sec ago`;
  const min = Math.floor(sec / 60);
  if (min < 60) return `${min} min${min === 1 ? "" : "s"} ago`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr} hr${hr === 1 ? "" : "s"} ago`;
  const day = Math.floor(hr / 24);
  return `${day} day${day === 1 ? "" : "s"} ago`;
}

export function toHex(bytes: Uint8Array): string {
  return `0x${Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("")}`;
}

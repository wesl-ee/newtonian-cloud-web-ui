import { AUTH_TOKEN_KEY, AUTH_USER_KEY, USER_CIDS_KEY_PREFIX } from "@/lib/constants";

export type Session = {
  token: string;
  userId: string;
};

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

export function loadSession(): Session | null {
  if (!isBrowser()) return null;
  const token = window.localStorage.getItem(AUTH_TOKEN_KEY);
  const userId = window.localStorage.getItem(AUTH_USER_KEY);
  if (!token || !userId) return null;
  return { token, userId };
}

export function saveSession(session: Session): void {
  if (!isBrowser()) return;
  window.localStorage.setItem(AUTH_TOKEN_KEY, session.token);
  window.localStorage.setItem(AUTH_USER_KEY, session.userId);
}

export function clearSession(): void {
  if (!isBrowser()) return;
  window.localStorage.removeItem(AUTH_TOKEN_KEY);
  window.localStorage.removeItem(AUTH_USER_KEY);
}

function cidsKey(userId: string): string {
  return `${USER_CIDS_KEY_PREFIX}${userId}`;
}

export function loadKnownCids(userId: string): string[] {
  if (!isBrowser()) return [];
  const raw = window.localStorage.getItem(cidsKey(userId));
  if (!raw) return [];
  try {
    const arr = JSON.parse(raw) as string[];
    if (!Array.isArray(arr)) return [];
    return Array.from(new Set(arr.filter((x) => typeof x === "string")));
  } catch {
    return [];
  }
}

export function pushKnownCid(userId: string, cid: string): string[] {
  const list = loadKnownCids(userId);
  if (!list.includes(cid)) list.unshift(cid);
  const out = list.slice(0, 200);
  if (isBrowser()) window.localStorage.setItem(cidsKey(userId), JSON.stringify(out));
  return out;
}

export function removeKnownCid(userId: string, cid: string): string[] {
  const out = loadKnownCids(userId).filter((v) => v !== cid);
  if (isBrowser()) window.localStorage.setItem(cidsKey(userId), JSON.stringify(out));
  return out;
}

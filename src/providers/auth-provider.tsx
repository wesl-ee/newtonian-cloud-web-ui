"use client";

import {
  Session,
  clearSession as clearStoredSession,
  loadSession,
  saveSession,
} from "@/lib/auth-storage";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type AuthCtx = {
  ready: boolean;
  session: Session | null;
  set: (next: Session) => void;
  clear: () => void;
};

const AuthContext = createContext<AuthCtx | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const existing = loadSession();
    setSession(existing);
    if (existing) saveSession(existing);
    setReady(true);
  }, []);

  const value = useMemo<AuthCtx>(
    () => ({
      ready,
      session,
      set: (next) => {
        saveSession(next);
        setSession(next);
      },
      clear: () => {
        clearStoredSession();
        setSession(null);
      },
    }),
    [ready, session],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthCtx {
  const v = useContext(AuthContext);
  if (!v) throw new Error("useAuth must run inside AuthProvider");
  return v;
}

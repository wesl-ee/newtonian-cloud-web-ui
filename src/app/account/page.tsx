"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/providers/auth-provider";
import { api } from "@/lib/api";
import { formatBytes } from "@/lib/fmt";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const auth = useAuth();
  const router = useRouter();
  const [quota, setQuota] = useState<{ used_bytes: number; quota_bytes: number } | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!auth.ready || !auth.session) return;
    void api
      .userSpace(auth.session.token)
      .then(setQuota)
      .catch((e: unknown) => setError(e instanceof Error ? e.message : "failed"));
  }, [auth.ready, auth.session]);

  useEffect(() => {
    if (auth.ready && !auth.session) router.replace("/login");
  }, [auth.ready, auth.session, router]);

  if (!auth.ready) return <p>loading...</p>;
  if (!auth.session) return <p>loading...</p>;

  return (
    <div className="stack">
      <h1>Account</h1>
      {quota && (
        <p>
          quota: {formatBytes(quota.used_bytes)} / {formatBytes(quota.quota_bytes)}
        </p>
      )}
      {error && <p className="muted">{error}</p>}
      <div className="button-box">
        <button
          onClick={() => {
            auth.clear();
            router.push("/login");
            router.refresh();
          }}
        >
          sign out
        </button>
      </div>
    </div>
  );
}

"use client";

import { useAuth } from "@/providers/auth-provider";
import { api } from "@/lib/api";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function CallbackInner() {
  const params = useSearchParams();
  const router = useRouter();
  const auth = useAuth();
  const [message, setMessage] = useState("Completing SSO...");

  useEffect(() => {
    const code = params.get("code");
    if (!code) {
      setMessage("Missing OAuth code");
      return;
    }
    void (async () => {
      try {
        const reply = await api.ssoCallback(code);
        auth.set({ token: reply.token, userId: reply.user_id });
        router.push("/files");
        router.refresh();
      } catch (err) {
        setMessage(err instanceof Error ? err.message : "SSO callback failed");
      }
    })();
  }, [auth, params, router]);

  return (
    <div className="stack">
      <h1>SSO Callback</h1>
      <p>{message}</p>
    </div>
  );
}

export default function CallbackPage() {
  return (
    <Suspense fallback={<p>Completing SSO...</p>}>
      <CallbackInner />
    </Suspense>
  );
}

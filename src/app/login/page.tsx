"use client";

import { useMemo } from "react";
import { API_URL } from "@/lib/constants";
import { useAuth } from "@/providers/auth-provider";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const auth = useAuth();
  const router = useRouter();
  const ssoUrl = useMemo(() => `${API_URL}/auth/sso/redirect`, []);

  if (!auth.ready) return <p>loading...</p>;

  return (
    <div className="stack">
      <h1>Login</h1>
      {auth.session ? (
        <div className="stack">
          <p>signed in as {auth.session.userId}</p>
          <button onClick={() => router.push("/files")}>go to files</button>
        </div>
      ) : (
        <div className="stack">
          <div className="button-box">
            <a className="btn" href={ssoUrl}>
              Continue with Keycloak
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

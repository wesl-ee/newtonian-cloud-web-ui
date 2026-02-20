"use client";

import Link from "next/link";
import { useAuth } from "@/providers/auth-provider";

export function HomeSignupBox() {
  const auth = useAuth();
  if (!auth.ready || auth.session) return null;
  return (
    <Link className="btn btn-signup" href="/login">
      Sign Up
    </Link>
  );
}

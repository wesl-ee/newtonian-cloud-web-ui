import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/providers/auth-provider";
import { TopNav } from "@/components/top-nav";

export const metadata: Metadata = {
  title: "Newtonian Cloud",
  description: "Verifiable storage interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div className="shell">
            <TopNav />
            <hr className="top-rule" />
            <main className="page">{children}</main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}

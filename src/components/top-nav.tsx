"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavItem({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = isActive(pathname, href);
  return (
    <Link href={href} className="action-link">
      {active ? <strong>{label}</strong> : label}
    </Link>
  );
}

export function TopNav() {
  return (
    <nav className="top-nav">
      <ul className="top-nav-links slash-list">
        <li>
          <NavItem href="/" label="Home" />
        </li>
        <li>
          <NavItem href="/files" label="Files" />
        </li>
        <li>
          <NavItem href="/upload" label="Upload" />
        </li>
        <li>
          <NavItem href="/about" label="About" />
        </li>
      </ul>
      <span className="top-nav-account">
        <NavItem href="/account" label="Account" />
      </span>
    </nav>
  );
}

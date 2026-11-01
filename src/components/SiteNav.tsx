"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/85 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-5 py-3 sm:px-6">
        <Link href="/" className="font-sora text-lg font-bold">
          Sikandar<span className="text-primary">.</span>
        </Link>
        <div className="flex gap-1 text-sm font-medium">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`rounded-full px-3 py-1.5 transition-colors ${
                pathname === item.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

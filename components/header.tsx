"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
      {isHomePage ? (
        <>
          <a
            href="#features"
            className="transition-colors hover:text-foreground/80 text-foreground/90"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="transition-colors hover:text-foreground/80 text-foreground/90"
          >
            Pricing
          </a>
          <a
            href="#why-choose"
            className="transition-colors hover:text-foreground/80 text-foreground/90"
          >
            Why sssync?
          </a>
          <a
            href="#faq"
            className="transition-colors hover:text-foreground/80 text-foreground/90"
          >
            FAQ
          </a>
        </>
      ) : (
        <>
          <Link
            href="/#features"
            className="transition-colors hover:text-foreground/80 text-foreground/90"
          >
            Features
          </Link>
          <Link
            href="/#pricing"
            className="transition-colors hover:text-foreground/80 text-foreground/90"
          >
            Pricing
          </Link>
          <Link
            href="/#why-choose"
            className="transition-colors hover:text-foreground/80 text-foreground/90"
          >
            Why sssync?
          </Link>
          <Link
            href="/#faq"
            className="transition-colors hover:text-foreground/80 text-foreground/90"
          >
            FAQ
          </Link>
        </>
      )}
    </nav>
  );
}

export function Header() {
  return (
    <header className="container sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between border-b">
        <MainNav />
        <div className="flex items-center gap-4">
          {/* Your auth buttons/other elements */}
        </div>
      </div>
    </header>
  );
} 
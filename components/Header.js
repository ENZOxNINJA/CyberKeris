import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/cybersecurity", label: "Cybersecurity" },
  { href: "/software", label: "Software" },
  { href: "/shop", label: "Shop" },
  { href: "/blog", label: "Blog" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  // Track the mobile navigation drawer state.
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-primary/90 backdrop-blur">
      <div className="container-grid flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-semibold text-white">
          CyberKeris
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 text-sm md:flex">
          <Link href="/login" className="text-slate-300 transition hover:text-white">
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-accent px-4 py-2 font-medium text-white transition hover:bg-accent-soft"
          >
            Get Started
          </Link>
        </div>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-secondary/80 p-2 text-white transition hover:border-white/30 md:hidden"
        >
          <span className="sr-only">Open navigation</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {isOpen ? (
        <div className="border-t border-white/10 bg-primary/95 md:hidden">
          <div className="container-grid flex flex-col gap-4 py-6 text-sm text-slate-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-3">
              <Link
                href="/login"
                className="text-slate-300 transition hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="rounded-full bg-accent px-4 py-2 text-center font-medium text-white transition hover:bg-accent-soft"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

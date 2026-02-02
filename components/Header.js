import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/cybersecurity", label: "Cybersecurity" },
  { href: "/software", label: "Software" },
  { href: "/shop", label: "Shop" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-ink">
          Cyberkeris
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white"
          >
            Sign In
          </Link>
        </nav>
      </div>
    </header>
  );
}

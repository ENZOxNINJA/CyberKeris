import Link from "next/link";

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
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
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
        <div className="flex items-center gap-3 text-sm">
          <Link href="/login" className="text-slate-300 hover:text-white">
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-cyan-500 px-4 py-2 font-medium text-slate-950 transition hover:bg-cyan-400"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

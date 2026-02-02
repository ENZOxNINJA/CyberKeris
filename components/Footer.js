import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/faq", label: "FAQ" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="container-grid flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">CyberKeris</p>
          <p className="text-sm text-slate-400">
            Secure systems. Intelligent software. Global impact.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-xs text-slate-500">© 2024 CyberKeris. All rights reserved.</p>
      </div>
    </footer>
  );
}

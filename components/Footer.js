import Link from "next/link";

const footerGroups = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/careers", label: "Careers" },
      { href: "/portfolio", label: "Portfolio" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { href: "/cybersecurity", label: "Cybersecurity" },
      { href: "/software", label: "Software" },
      { href: "/ai-chat", label: "AI Chat" },
      { href: "/shop", label: "Shop" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/faq", label: "FAQ" },
      { href: "/blog", label: "Blog" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-primary">
      <div className="container-grid grid gap-10 py-12 lg:grid-cols-[1.2fr_2fr]">
        <div className="space-y-4">
          <p className="text-lg font-semibold text-white">CyberKeris</p>
          <p className="text-sm text-slate-400">
            Secure systems. Intelligent software. Global impact.
          </p>
          <div className="flex gap-4 text-slate-400">
            <a
              href="https://www.linkedin.com"
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 p-2 transition hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-1.5 6h3v11h-3v-11Zm7 0h2.9v1.5h.04c.4-.75 1.4-1.55 2.9-1.55 3.1 0 3.7 2.05 3.7 4.7v6.35h-3v-5.65c0-1.35 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.75h-3v-11Z" />
              </svg>
            </a>
            <a
              href="https://www.x.com"
              aria-label="X"
              className="rounded-full border border-white/10 p-2 transition hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M18.9 2H22l-6.8 7.8L23 22h-6.4l-4.9-6.4L5.8 22H2.6l7.3-8.4L1 2h6.6l4.4 5.8L18.9 2Zm-2.1 18h1.8L7.3 4H5.4l11.4 16Z" />
              </svg>
            </a>
            <a
              href="https://github.com"
              aria-label="GitHub"
              className="rounded-full border border-white/10 p-2 transition hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48 0-.24-.01-.86-.01-1.68-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.13-4.56-5.02 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.04.8-.23 1.65-.35 2.5-.35.85 0 1.7.12 2.5.35 1.9-1.31 2.74-1.04 2.74-1.04.56 1.42.21 2.47.1 2.73.64.71 1.03 1.62 1.03 2.73 0 3.9-2.35 4.75-4.58 5.01.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.83 0 .26.18.59.69.49A10.2 10.2 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title} className="space-y-3 text-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{group.title}</p>
              <div className="flex flex-col gap-2 text-slate-300">
                {group.links.map((link) => (
                  <Link key={link.href} href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-grid flex flex-col items-center justify-between gap-2 py-6 text-xs text-slate-500 md:flex-row">
          <p>© 2024 CyberKeris. All rights reserved.</p>
          <p>Enterprise security, AI, and software delivery platform.</p>
        </div>
      </div>
    </footer>
  );
}

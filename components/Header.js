import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/cybersecurity", label: "Cybersecurity" },
  { href: "/software", label: "Software" },
  { href: "/shop", label: "Shop" },
  { href: "/future", label: "Future" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/careers", label: "Careers" },
  { href: "/faq", label: "FAQ" },
  { href: "/ai-chat", label: "AI Chat" }
];

export default function Header() {
  return (
    <header>
      <nav
        style={{
          width: "min(1200px, 92%)",
          margin: "0 auto",
          padding: "1.5rem 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
          flexWrap: "wrap"
        }}
      >
        <div>
          <strong style={{ fontSize: "1.2rem" }}>CyberKeris</strong>
          <p style={{ fontSize: "0.85rem", opacity: 0.7 }}>Secure. Intelligent. Human.</p>
        </div>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

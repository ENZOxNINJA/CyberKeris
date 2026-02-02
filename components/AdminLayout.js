import Link from "next/link";

const adminLinks = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/manage-pages", label: "Manage Pages" },
  { href: "/admin/manage-users", label: "Manage Users" },
  { href: "/admin/manage-products", label: "Manage Products" },
  { href: "/admin/ai-chat-logs", label: "AI Chat Logs" },
  { href: "/admin/analytics", label: "Analytics" },
  { href: "/admin/notifications", label: "Notifications" },
  { href: "/admin/emails", label: "Emails" },
  { href: "/admin/cloud-storage", label: "Cloud Storage" }
];

export default function AdminLayout({ title, children }) {
  return (
    <section className="section">
      <span className="badge">Admin / Staff</span>
      <h1>{title}</h1>
      <div className="admin-layout">
        <aside className="admin-sidebar">
          <p style={{ fontWeight: 600, marginBottom: "1rem" }}>Navigation</p>
          <ul>
            {adminLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </aside>
        <div className="admin-content">{children}</div>
      </div>
    </section>
  );
}

import Link from "next/link";

const links = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/manage-pages", label: "Manage Pages" },
  { href: "/admin/manage-users", label: "Manage Users" },
  { href: "/admin/manage-products", label: "Manage Products" },
  { href: "/admin/ai-chat-logs", label: "AI Chat Logs" },
  { href: "/admin/analytics", label: "Analytics" },
  { href: "/admin/notifications", label: "Notifications" },
  { href: "/admin/emails", label: "Emails" },
  { href: "/admin/cloud-storage", label: "Cloud Storage" },
];

export default function AdminSidebar() {
  return (
    <aside className="glass h-fit rounded-2xl p-6 text-sm">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Navigation</p>
      <nav className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="text-slate-200 transition hover:text-white">
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-primary text-slate-100">
      <AdminHeader title={title} />
      <div className="container-grid grid gap-8 py-10 lg:grid-cols-[240px_1fr]">
        <AdminSidebar />
        <main className="space-y-8">{children}</main>
      </div>
    </div>
  );
}

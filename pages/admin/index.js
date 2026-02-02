import AdminLayout from "../../components/AdminLayout";
import Card from "../../components/Card";

const highlights = [
  {
    title: "Active users",
    description: "1,248 authenticated sessions in the last 24 hours.",
  },
  {
    title: "Security alerts",
    description: "6 high-priority alerts awaiting review.",
  },
  {
    title: "Storage usage",
    description: "72% of cloud storage capacity utilized.",
  },
];

export default function AdminDashboard() {
  return (
    <AdminLayout title="Admin Dashboard">
      <section className="grid gap-6 md:grid-cols-3">
        {highlights.map((item) => (
          <Card key={item.title} title={item.title} description={item.description} eyebrow="Snapshot" />
        ))}
      </section>
      <section className="glass rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-white">Operational checklist</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-300">
          <li>• Review AI chat logs for flagged content.</li>
          <li>• Validate new user onboarding approvals.</li>
          <li>• Schedule weekly analytics export.</li>
        </ul>
      </section>
    </AdminLayout>
  );
}

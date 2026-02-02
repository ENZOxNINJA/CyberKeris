import AdminLayout from "../../components/AdminLayout";

const metrics = [
  { label: "Monthly active users", value: "14,230" },
  { label: "Avg. response time", value: "1.8s" },
  { label: "AI chat satisfaction", value: "96%" },
];

export default function AnalyticsPage() {
  return (
    <AdminLayout title="Analytics">
      <div className="grid gap-6 md:grid-cols-3">
        {metrics.map((metric) => (
          <div key={metric.label} className="glass rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{metric.label}</p>
            <p className="mt-3 text-3xl font-semibold text-white">{metric.value}</p>
          </div>
        ))}
      </div>
      <div className="glass rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-white">Traffic overview</h2>
        <p className="mt-2 text-sm text-slate-300">
          Traffic is trending upward across AI chat and cloud storage modules. Export data weekly for leadership
          reporting.
        </p>
        <div className="mt-4 h-40 rounded-xl border border-dashed border-white/20 bg-slate-900/50" />
      </div>
    </AdminLayout>
  );
}

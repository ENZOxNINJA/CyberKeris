import Layout from "../../components/Layout";

export default function Notifications() {
  return (
    <Layout
      title="Notifications"
      description="Operational alerts and system announcements for staff teams."
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
        <p>
          Configure escalation rules, delivery channels, and staff routing.
        </p>
      </div>
    </Layout>
  );
}

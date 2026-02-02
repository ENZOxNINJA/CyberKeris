import Layout from "../../../../components/Layout";

export default function ViewFile() {
  return (
    <Layout
      title="View File"
      description="Preview and download secured assets."
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
        <p>Access audit logs and download history here.</p>
      </div>
    </Layout>
  );
}

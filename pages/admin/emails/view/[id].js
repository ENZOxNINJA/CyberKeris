import Layout from "../../../../components/Layout";

export default function ViewEmail() {
  return (
    <Layout
      title="View Email"
      description="Review message history and delivery status."
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
        <p>Full conversation context and attachments are visible here.</p>
      </div>
    </Layout>
  );
}

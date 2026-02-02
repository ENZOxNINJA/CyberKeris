import Layout from "../../../../components/Layout";

export default function EditEmail() {
  return (
    <Layout
      title="Edit Email"
      description="Update draft messages with audit-ready workflows."
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
        <p>Edit and approve outgoing communications before sending.</p>
      </div>
    </Layout>
  );
}

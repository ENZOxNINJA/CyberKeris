import Layout from "../../../components/Layout";

export default function ComposeEmail() {
  return (
    <Layout
      title="Compose Email"
      description="Draft secure client communications."
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
        <p>Compose workflow will include templates and approval routing.</p>
      </div>
    </Layout>
  );
}

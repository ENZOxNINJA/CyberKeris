import Layout from "../../../../components/Layout";

export default function EditFile() {
  return (
    <Layout
      title="Edit File"
      description="Update metadata and sharing permissions."
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
        <p>Track file versions and change history for audits.</p>
      </div>
    </Layout>
  );
}

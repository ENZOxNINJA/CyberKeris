import Layout from "../../components/Layout";

export default function ManagePages() {
  return (
    <Layout
      title="Manage Pages"
      description="Create, update, and publish web content across Cyberkeris.com."
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
        <p>
          Page editor modules will support drafts, approvals, and SEO metadata
          controls for marketing teams.
        </p>
      </div>
    </Layout>
  );
}

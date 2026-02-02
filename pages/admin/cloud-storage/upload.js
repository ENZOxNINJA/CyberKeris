import Layout from "../../../components/Layout";

export default function UploadFile() {
  return (
    <Layout
      title="Upload Files"
      description="Add secure documents to the Cyberkeris cloud storage vault."
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
        <p>Upload flows include antivirus scanning and encryption.</p>
      </div>
    </Layout>
  );
}

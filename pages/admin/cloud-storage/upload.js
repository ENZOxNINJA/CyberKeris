import AdminLayout from "../../../components/AdminLayout";

export default function CloudStorageUpload() {
  return (
    <AdminLayout title="Upload File">
      <div className="glass rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-white">Upload to secure storage</h2>
        <form className="mt-4 grid gap-4">
          <input
            type="file"
            className="rounded-xl border border-dashed border-white/20 bg-slate-900 px-4 py-6 text-sm text-slate-300"
          />
          <button className="w-fit rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-soft">
            Upload file
          </button>
        </form>
      </div>
    </AdminLayout>
  );
}

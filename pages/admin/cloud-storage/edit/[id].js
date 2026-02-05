import { useRouter } from "next/router";
import AdminLayout from "../../../../components/AdminLayout";

export default function EditCloudFile() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <AdminLayout title={`Edit File ${id ? `#${id}` : ""}`.trim()}>
      <div className="glass rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-white">Update file metadata</h2>
        <form className="mt-4 grid gap-4">
          <input
            className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white"
            defaultValue="Incident-Response-Playbook.pdf"
          />
          <textarea
            rows="4"
            className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white"
            defaultValue="Updated playbook with Q3 procedures."
          />
          <div className="flex gap-3">
            <button className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-soft">
              Save
            </button>
            <button className="rounded-full border border-white/20 px-6 py-3 text-sm text-white">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}

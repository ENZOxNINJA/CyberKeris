import { useRouter } from "next/router";
import AdminLayout from "../../../../components/AdminLayout";

export default function EditEmail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <AdminLayout title={`Edit Email ${id ? `#${id}` : ""}`.trim()}>
      <div className="glass rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-white">Edit draft</h2>
        <form className="mt-4 grid gap-4">
          <input
            className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white"
            defaultValue="Draft subject"
          />
          <textarea
            rows="6"
            className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white"
            defaultValue="Draft content ready for review."
          />
          <div className="flex gap-3">
            <button className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950">
              Save changes
            </button>
            <button className="rounded-full border border-white/20 px-6 py-3 text-sm text-white">
              Discard
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}

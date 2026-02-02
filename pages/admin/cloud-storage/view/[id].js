import { useRouter } from "next/router";
import AdminLayout from "../../../../components/AdminLayout";
import Link from "next/link";

export default function ViewCloudFile() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <AdminLayout title={`File ${id ? `#${id}` : ""}`.trim()}>
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Incident-Response-Playbook.pdf</h2>
          <Link
            href={`/admin/cloud-storage/edit/${id ?? "a1"}`}
            className="rounded-full border border-white/20 px-4 py-2 text-sm text-white"
          >
            Edit
          </Link>
        </div>
        <p className="mt-4 text-sm text-slate-300">
          Stored in secure cloud storage with access limited to Security and Admin roles.
        </p>
        <button className="mt-6 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950">
          Download
        </button>
      </div>
    </AdminLayout>
  );
}

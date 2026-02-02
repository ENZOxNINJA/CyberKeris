import { useRouter } from "next/router";
import AdminLayout from "../../../../components/AdminLayout";
import Link from "next/link";

export default function ViewEmail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <AdminLayout title={`Email ${id ? `#${id}` : ""}`.trim()}>
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Quarterly security briefing</h2>
          <Link
            href={`/admin/emails/edit/${id ?? "1"}`}
            className="rounded-full border border-white/20 px-4 py-2 text-sm text-white"
          >
            Edit
          </Link>
        </div>
        <p className="mt-4 text-sm text-slate-300">
          Hello team, please review the attached briefing for this quarter's security posture. Let us know if
          additional findings should be included.
        </p>
      </div>
    </AdminLayout>
  );
}

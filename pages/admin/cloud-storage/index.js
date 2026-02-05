import AdminLayout from "../../../components/AdminLayout";
import Link from "next/link";

const files = [
  { id: "a1", name: "Incident-Response-Playbook.pdf", owner: "Security" },
  { id: "b2", name: "SOC-Onboarding.xlsx", owner: "Operations" },
];

export default function CloudStorageIndex() {
  return (
    <AdminLayout title="Cloud Storage">
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Files</h2>
          <Link
            href="/admin/cloud-storage/upload"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-soft"
          >
            Upload
          </Link>
        </div>
        <div className="mt-4 space-y-3">
          {files.map((file) => (
            <Link
              key={file.id}
              href={`/admin/cloud-storage/view/${file.id}`}
              className="flex items-center justify-between rounded-xl border border-white/10 p-4 text-sm"
            >
              <div>
                <p className="text-white">{file.name}</p>
                <p className="text-xs text-slate-400">Owner: {file.owner}</p>
              </div>
              <span className="text-xs text-accent-soft">View</span>
            </Link>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}

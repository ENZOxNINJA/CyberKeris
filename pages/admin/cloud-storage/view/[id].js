import { useRouter } from "next/router";
import Link from "next/link";
import AdminLayout from "../../../../components/AdminLayout";

// Sample file metadata to mock a storage detail view.
const fileById = {
  a1: {
    name: "Incident-Response-Playbook.pdf",
    owner: "Security",
    size: "2.4 MB",
    updated: "2024-05-02",
    description: "Latest incident response playbook with escalation guidance.",
  },
  b2: {
    name: "SOC-Onboarding.xlsx",
    owner: "Operations",
    size: "1.1 MB",
    updated: "2024-04-18",
    description: "SOC onboarding checklist and staff training tracker.",
  },
};

// Helper to safely load a file record and handle unknown IDs.
function getFileById(id) {
  if (!id || !fileById[id]) {
    return null;
  }

  return { id, ...fileById[id] };
}

export default function CloudStorageViewPage() {
  const router = useRouter();
  const file = getFileById(router.query.id);

  return (
    <AdminLayout title="File Details">
      <div className="glass rounded-2xl p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Secure file</p>
            <h2 className="mt-2 text-xl font-semibold text-white">
              {file ? file.name : "File not found"}
            </h2>
          </div>
          <Link href="/admin/cloud-storage" className="text-sm text-cyan-300 hover:text-cyan-200">
            Back to files
          </Link>
        </div>

        <div className="mt-6 grid gap-4 text-sm text-slate-300 md:grid-cols-2">
          {file ? (
            <>
              <div className="rounded-xl border border-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Owner</p>
                <p className="mt-2 text-white">{file.owner}</p>
              </div>
              <div className="rounded-xl border border-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Size</p>
                <p className="mt-2 text-white">{file.size}</p>
              </div>
              <div className="rounded-xl border border-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Last updated</p>
                <p className="mt-2 text-white">{file.updated}</p>
              </div>
              <div className="rounded-xl border border-white/10 p-4 md:col-span-2">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Description</p>
                <p className="mt-2">{file.description}</p>
              </div>
            </>
          ) : (
            <p className="md:col-span-2">
              We couldn&apos;t locate this file. Return to the file list to select another record.
            </p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

// Example usage:
// Input: Navigate to /admin/cloud-storage/view/a1
// Output: Shows metadata for Incident-Response-Playbook.pdf.

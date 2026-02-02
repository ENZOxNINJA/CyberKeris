import AdminLayout from "../../../components/AdminLayout";
import Link from "next/link";

const inbox = [
  { id: "1", subject: "Quarterly security briefing", sender: "CISO" },
  { id: "2", subject: "Cloud storage access request", sender: "Ops" },
];

export default function EmailInbox() {
  return (
    <AdminLayout title="Email Inbox">
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Inbox</h2>
          <Link
            href="/admin/emails/compose"
            className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950"
          >
            Compose
          </Link>
        </div>
        <div className="mt-4 space-y-3">
          {inbox.map((email) => (
            <Link
              key={email.id}
              href={`/admin/emails/view/${email.id}`}
              className="flex items-center justify-between rounded-xl border border-white/10 p-4 text-sm"
            >
              <div>
                <p className="text-white">{email.subject}</p>
                <p className="text-xs text-slate-400">{email.sender}</p>
              </div>
              <span className="text-xs text-cyan-300">View</span>
            </Link>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}

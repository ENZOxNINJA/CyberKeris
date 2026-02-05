import { useRouter } from "next/router";
import Link from "next/link";
import AdminLayout from "../../../../components/AdminLayout";

// In-memory sample email data keyed by ID.
const emailById = {
  "1": {
    subject: "Quarterly security briefing",
    sender: "CISO",
    preview: "Please review the attached briefing slides before Friday.",
    body:
      "Team,\n\nAttached is the quarterly security briefing for review. Please send any feedback by Friday so we can finalize the deck for leadership.\n\nThanks,\nCISO",
  },
  "2": {
    subject: "Cloud storage access request",
    sender: "Ops",
    preview: "Requesting access to the Q3 operational runbooks folder.",
    body:
      "Hello,\n\nOperations is requesting access to the Q3 operational runbooks folder for upcoming audits. Please advise on approval steps.\n\nRegards,\nOps",
  },
};

// Helper to fetch a single email while handling missing IDs.
function getEmailById(id) {
  if (!id || !emailById[id]) {
    return null;
  }

  return { id, ...emailById[id] };
}

export default function EmailViewPage() {
  const router = useRouter();
  const email = getEmailById(router.query.id);

  return (
    <AdminLayout title="View Email">
      <div className="glass rounded-2xl p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Message</p>
            <h2 className="mt-2 text-xl font-semibold text-white">
              {email ? email.subject : "Email not found"}
            </h2>
          </div>
          <Link href="/admin/emails" className="text-sm text-cyan-300 hover:text-cyan-200">
            Back to inbox
          </Link>
        </div>

        <div className="mt-6 space-y-4 text-sm text-slate-300">
          {email ? (
            <>
              <div className="rounded-xl border border-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">From</p>
                <p className="mt-2 text-white">{email.sender}</p>
              </div>
              <div className="rounded-xl border border-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Preview</p>
                <p className="mt-2">{email.preview}</p>
              </div>
              <div className="rounded-xl border border-white/10 p-4 whitespace-pre-wrap">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Body</p>
                <p className="mt-2">{email.body}</p>
              </div>
            </>
          ) : (
            <p>
              We couldn&apos;t locate this message. Return to the inbox to select another email.
            </p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

// Example usage:
// Input: Navigate to /admin/emails/view/1
// Output: Renders the "Quarterly security briefing" email details.

import AdminLayout from "../../components/AdminLayout";

const logs = [
  {
    user: "Mina Ross",
    summary: "Asked for incident response checklist for ransomware.",
    status: "Reviewed",
  },
  {
    user: "Ravi Patel",
    summary: "Generated customer notification email template.",
    status: "Flagged",
  },
];

export default function AIChatLogs() {
  return (
    <AdminLayout title="AI Chat Logs">
      <div className="glass rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-white">Recent conversations</h2>
        <div className="mt-4 space-y-4">
          {logs.map((log) => (
            <div key={log.user} className="rounded-xl border border-white/10 p-4">
              <div className="flex items-center justify-between">
                <p className="font-medium text-white">{log.user}</p>
                <span className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-300">
                  {log.status}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-300">{log.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}

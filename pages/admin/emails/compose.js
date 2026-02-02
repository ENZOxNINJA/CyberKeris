import AdminLayout from "../../../components/AdminLayout";

export default function EmailCompose() {
  return (
    <AdminLayout title="Compose Email">
      <div className="glass rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-white">New message</h2>
        <form className="mt-4 grid gap-4">
          <input
            className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white"
            placeholder="Recipient"
          />
          <input
            className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white"
            placeholder="Subject"
          />
          <textarea
            rows="6"
            className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white"
            placeholder="Write your message..."
          />
          <button className="w-fit rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950">
            Send email
          </button>
        </form>
      </div>
    </AdminLayout>
  );
}

import AdminLayout from "../../components/AdminLayout";

const pages = [
  { name: "Home", status: "Published", owner: "Marketing" },
  { name: "Cybersecurity", status: "Scheduled", owner: "Security" },
  { name: "Shop", status: "Draft", owner: "Commerce" },
];

export default function ManagePages() {
  return (
    <AdminLayout title="Manage Pages">
      <div className="glass rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-white">Content workflow</h2>
        <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-900/60 text-xs uppercase text-slate-400">
              <tr>
                <th className="px-4 py-3">Page</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Owner</th>
              </tr>
            </thead>
            <tbody>
              {pages.map((page) => (
                <tr key={page.name} className="border-t border-white/10">
                  <td className="px-4 py-3 text-white">{page.name}</td>
                  <td className="px-4 py-3">{page.status}</td>
                  <td className="px-4 py-3">{page.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}

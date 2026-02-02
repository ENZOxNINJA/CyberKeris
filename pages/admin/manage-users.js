import AdminLayout from "../../components/AdminLayout";

const users = [
  { name: "Maya Turner", role: "Admin", status: "Active" },
  { name: "Jared Ngu", role: "Staff", status: "Pending" },
  { name: "Lena Ortiz", role: "User", status: "Active" },
];

export default function ManageUsers() {
  return (
    <AdminLayout title="Manage Users">
      <div className="glass rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-white">User access</h2>
        <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-900/60 text-xs uppercase text-slate-400">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.name} className="border-t border-white/10">
                  <td className="px-4 py-3 text-white">{user.name}</td>
                  <td className="px-4 py-3">{user.role}</td>
                  <td className="px-4 py-3">{user.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}

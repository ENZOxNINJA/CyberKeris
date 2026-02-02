import AdminLayout from "../../components/AdminLayout";

const products = [
  { name: "Secure Workspace Suite", price: "$4,500", status: "Active" },
  { name: "Threat Intel Pack", price: "$2,100", status: "Active" },
  { name: "Compliance Toolkit", price: "$1,800", status: "Draft" },
];

export default function ManageProducts() {
  return (
    <AdminLayout title="Manage Products">
      <div className="glass rounded-2xl p-6">
        <h2 className="text-lg font-semibold text-white">Product catalog</h2>
        <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-900/60 text-xs uppercase text-slate-400">
              <tr>
                <th className="px-4 py-3">Product</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.name} className="border-t border-white/10">
                  <td className="px-4 py-3 text-white">{product.name}</td>
                  <td className="px-4 py-3">{product.price}</td>
                  <td className="px-4 py-3">{product.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}

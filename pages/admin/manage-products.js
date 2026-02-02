import Layout from "../../components/Layout";
import AdminLayout from "../../components/AdminLayout";

const products = [
  { name: "Zero Trust Assessment", status: "Active" },
  { name: "Incident Response Workshop", status: "Draft" },
  { name: "Compliance Accelerator", status: "Active" }
];

export default function ManageProducts() {
  return (
    <Layout>
      <AdminLayout title="Manage Products">
        <p style={{ opacity: 0.8 }}>
          Track service packages, pricing updates, and catalog readiness.
        </p>
        <div className="card-grid" style={{ marginTop: "1.5rem" }}>
          {products.map((product) => (
            <div key={product.name} className="card">
              <h3>{product.name}</h3>
              <p style={{ marginTop: "0.75rem", opacity: 0.8 }}>{product.status}</p>
            </div>
          ))}
        </div>
      </AdminLayout>
    </Layout>
  );
}

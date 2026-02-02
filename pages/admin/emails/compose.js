import Layout from "../../../components/Layout";
import AdminLayout from "../../../components/AdminLayout";

export default function EmailComposePage() {
  return (
    <Layout>
      <AdminLayout title="Compose Email">
        <p style={{ opacity: 0.8 }}>
          Draft secure communications with built-in compliance guidelines.
        </p>
        <div className="card" style={{ marginTop: "1.5rem" }}>
          <p>Use approved templates for security notifications and customer updates.</p>
        </div>
      </AdminLayout>
    </Layout>
  );
}

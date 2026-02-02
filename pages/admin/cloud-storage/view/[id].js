import { useRouter } from "next/router";
import Layout from "../../../../components/Layout";
import AdminLayout from "../../../../components/AdminLayout";

export default function CloudStorageViewPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <AdminLayout title="View File">
        <p style={{ opacity: 0.8 }}>
          Viewing file <strong>{id || "(loading)"}</strong>.
        </p>
        <div className="card" style={{ marginTop: "1.5rem" }}>
          <p>Download options are available for authorized staff.</p>
        </div>
      </AdminLayout>
    </Layout>
  );
}

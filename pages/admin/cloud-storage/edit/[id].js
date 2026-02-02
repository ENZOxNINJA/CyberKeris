import { useRouter } from "next/router";
import Layout from "../../../../components/Layout";
import AdminLayout from "../../../../components/AdminLayout";

export default function CloudStorageEditPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <AdminLayout title="Edit File Metadata">
        <p style={{ opacity: 0.8 }}>
          Editing file <strong>{id || "(loading)"}</strong> metadata.
        </p>
        <div className="card" style={{ marginTop: "1.5rem" }}>
          <p>Update tags, retention policies, and access roles.</p>
        </div>
      </AdminLayout>
    </Layout>
  );
}

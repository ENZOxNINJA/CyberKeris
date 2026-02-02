import { useRouter } from "next/router";
import Layout from "../../../../components/Layout";
import AdminLayout from "../../../../components/AdminLayout";

export default function EmailEditPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <AdminLayout title="Edit Email">
        <p style={{ opacity: 0.8 }}>
          Update content for email draft <strong>{id || "(loading)"}</strong>.
        </p>
        <div className="card" style={{ marginTop: "1.5rem" }}>
          <p>Edit subject lines and messaging before sending.</p>
        </div>
      </AdminLayout>
    </Layout>
  );
}

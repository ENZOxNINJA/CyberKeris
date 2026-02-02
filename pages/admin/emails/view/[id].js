import { useRouter } from "next/router";
import Layout from "../../../../components/Layout";
import AdminLayout from "../../../../components/AdminLayout";

export default function EmailViewPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <AdminLayout title="View Email">
        <p style={{ opacity: 0.8 }}>
          Viewing message <strong>{id || "(loading)"}</strong>.
        </p>
        <div className="card" style={{ marginTop: "1.5rem" }}>
          <p>Content preview is available once the email is loaded.</p>
        </div>
      </AdminLayout>
    </Layout>
  );
}

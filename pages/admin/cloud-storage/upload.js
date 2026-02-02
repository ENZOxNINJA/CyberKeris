import Layout from "../../../components/Layout";
import AdminLayout from "../../../components/AdminLayout";

export default function CloudStorageUploadPage() {
  return (
    <Layout>
      <AdminLayout title="Upload File">
        <p style={{ opacity: 0.8 }}>
          Upload encrypted documents or evidence artifacts to secure storage.
        </p>
        <div className="card" style={{ marginTop: "1.5rem" }}>
          <p>All uploads are scanned and access-controlled.</p>
        </div>
      </AdminLayout>
    </Layout>
  );
}

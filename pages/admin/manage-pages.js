import Layout from "../../components/Layout";
import AdminLayout from "../../components/AdminLayout";

const pages = ["Home", "About", "Cybersecurity", "Software", "Shop", "Blog"];

export default function ManagePages() {
  return (
    <Layout>
      <AdminLayout title="Manage Pages">
        <p style={{ opacity: 0.8 }}>
          Review published pages, update hero content, and manage SEO metadata.
        </p>
        <ul style={{ marginTop: "1rem", paddingLeft: "1.2rem", lineHeight: 1.8 }}>
          {pages.map((page) => (
            <li key={page}>{page}</li>
          ))}
        </ul>
      </AdminLayout>
    </Layout>
  );
}

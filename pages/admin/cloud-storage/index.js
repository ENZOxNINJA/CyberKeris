import Layout from "../../../components/Layout";
import AdminLayout from "../../../components/AdminLayout";

const files = [
  { name: "IR-Playbook.pdf", size: "1.4 MB" },
  { name: "Risk-Register.xlsx", size: "860 KB" },
  { name: "SOC-Runbook.docx", size: "540 KB" }
];

export default function CloudStoragePage() {
  return (
    <Layout>
      <AdminLayout title="Cloud Storage">
        <p style={{ opacity: 0.8 }}>
          Securely manage evidence, reports, and operational artifacts.
        </p>
        <div className="card-grid" style={{ marginTop: "1.5rem" }}>
          {files.map((file) => (
            <div key={file.name} className="card">
              <h3>{file.name}</h3>
              <p style={{ marginTop: "0.75rem", opacity: 0.8 }}>{file.size}</p>
            </div>
          ))}
        </div>
      </AdminLayout>
    </Layout>
  );
}

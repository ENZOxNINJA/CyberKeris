import Layout from "../../components/Layout";
import AdminLayout from "../../components/AdminLayout";

const metrics = [
  { label: "Open Alerts", value: "14" },
  { label: "Active Users", value: "128" },
  { label: "Systems Monitored", value: "52" }
];

export default function AdminDashboard() {
  return (
    <Layout>
      <AdminLayout title="Security Operations Dashboard">
        <p style={{ opacity: 0.8 }}>
          Monitor critical metrics, workflows, and service health from a single secure console.
        </p>
        <div className="card-grid" style={{ marginTop: "1.5rem" }}>
          {metrics.map((metric) => (
            <div key={metric.label} className="card">
              <h3>{metric.label}</h3>
              <p style={{ marginTop: "0.75rem", fontSize: "1.4rem" }}>{metric.value}</p>
            </div>
          ))}
        </div>
      </AdminLayout>
    </Layout>
  );
}

import Layout from "../../components/Layout";
import AdminLayout from "../../components/AdminLayout";

const logs = [
  {
    user: "Amina Yusuf",
    topic: "Incident response checklist",
    status: "Reviewed"
  },
  { user: "Kai Chen", topic: "Threat summary report", status: "Flagged" },
  { user: "Nadia Salem", topic: "Cloud risk review", status: "Approved" }
];

export default function AiChatLogs() {
  return (
    <Layout>
      <AdminLayout title="AI Chat Logs">
        <p style={{ opacity: 0.8 }}>
          Review AI conversations for compliance, quality, and continuous improvement.
        </p>
        <div className="card-grid" style={{ marginTop: "1.5rem" }}>
          {logs.map((log) => (
            <div key={log.topic} className="card">
              <h3>{log.topic}</h3>
              <p style={{ marginTop: "0.75rem", opacity: 0.8 }}>{log.user}</p>
              <p style={{ marginTop: "0.35rem", opacity: 0.6 }}>{log.status}</p>
            </div>
          ))}
        </div>
      </AdminLayout>
    </Layout>
  );
}

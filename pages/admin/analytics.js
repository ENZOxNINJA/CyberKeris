import Layout from "../../components/Layout";
import AdminLayout from "../../components/AdminLayout";

const insights = [
  "Mean time to detect: 4 minutes",
  "Mean time to respond: 21 minutes",
  "Compliance tasks completed: 92%"
];

export default function AnalyticsPage() {
  return (
    <Layout>
      <AdminLayout title="Analytics">
        <p style={{ opacity: 0.8 }}>
          Track operational readiness, SLA performance, and compliance posture.
        </p>
        <ul style={{ marginTop: "1rem", paddingLeft: "1.2rem", lineHeight: 1.8 }}>
          {insights.map((insight) => (
            <li key={insight}>{insight}</li>
          ))}
        </ul>
      </AdminLayout>
    </Layout>
  );
}

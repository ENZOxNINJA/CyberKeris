import Layout from "../../components/Layout";
import Card from "../../components/Card";

const metrics = [
  { title: "Security Alerts", body: "Weekly response time and remediation rates." },
  { title: "Traffic", body: "SEO performance and engagement analytics." },
  { title: "AI Chat", body: "Resolution accuracy and satisfaction scoring." },
];

export default function Analytics() {
  return (
    <Layout
      title="Analytics"
      description="Operational metrics for security, engagement, and AI performance."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {metrics.map((metric) => (
          <Card key={metric.title} title={metric.title}>
            {metric.body}
          </Card>
        ))}
      </div>
    </Layout>
  );
}

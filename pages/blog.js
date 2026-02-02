import Layout from "../components/Layout";
import Card from "../components/Card";

const posts = [
  {
    title: "Zero Trust in 90 Days",
    body: "A phased blueprint for adopting zero trust security models.",
  },
  {
    title: "AI Governance for Enterprises",
    body: "Operationalizing compliance, risk, and ethics for AI deployments.",
  },
  {
    title: "Security Metrics That Matter",
    body: "KPIs and dashboards that executive teams actually use.",
  },
];

export default function Blog() {
  return (
    <Layout
      title="Cyberkeris Insights"
      description="Thought leadership, playbooks, and research for modern security teams."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.title} title={post.title}>
            {post.body}
          </Card>
        ))}
      </div>
    </Layout>
  );
}

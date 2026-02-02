import Layout from "../components/Layout";
import Card from "../components/Card";

const initiatives = [
  {
    title: "AI Safety",
    body: "Governance frameworks for responsible AI adoption and monitoring.",
  },
  {
    title: "Quantum Readiness",
    body: "Post-quantum cryptography planning and risk assessments.",
  },
  {
    title: "Autonomous Operations",
    body: "Research into automated security operations and remediation.",
  },
];

export default function Future() {
  return (
    <Layout
      title="Future Tech & Research"
      description="Exploring new frontiers in cybersecurity, AI, and digital trust."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {initiatives.map((initiative) => (
          <Card key={initiative.title} title={initiative.title}>
            {initiative.body}
          </Card>
        ))}
      </div>
    </Layout>
  );
}

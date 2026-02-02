import Layout from "../components/Layout";
import Card from "../components/Card";

const chatFeatures = [
  {
    title: "Contextual Assistance",
    body: "AI chat experiences tailored to cybersecurity, software, and operations."
  },
  {
    title: "Secure Memory",
    body: "Role-based access, audit logs, and secure storage for conversations."
  },
  {
    title: "Integrations",
    body: "Connect chat workflows to knowledge bases, tickets, and analytics."
  }
];

export default function AiChat() {
  return (
    <Layout
      title="AI Chat"
      description="A secure AI chat workspace for authenticated Cyberkeris clients."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {chatFeatures.map((feature) => (
          <Card key={feature.title} title={feature.title}>
            {feature.body}
          </Card>
        ))}
      </div>
    </Layout>
  );
}

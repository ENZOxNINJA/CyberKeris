import Layout from "../components/Layout";
import Card from "../components/Card";

const portfolioItems = [
  {
    title: "Financial Services",
    body: "SOC modernization and regulatory compliance for a regional bank.",
  },
  {
    title: "Healthcare Platform",
    body: "Secure patient data systems with zero trust architecture.",
  },
  {
    title: "Retail AI Assistant",
    body: "Conversational AI for omnichannel customer support.",
  },
];

export default function Portfolio() {
  return (
    <Layout
      title="Client Portfolio"
      description="Selected engagements spanning cybersecurity, software, and AI delivery."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {portfolioItems.map((item) => (
          <Card key={item.title} title={item.title}>
            {item.body}
          </Card>
        ))}
      </div>
    </Layout>
  );
}

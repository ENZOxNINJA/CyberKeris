import Layout from "../components/Layout";
import Card from "../components/Card";

const products = [
  {
    title: "Security Starter Kit",
    body: "Baseline policies, asset inventory, and employee readiness training.",
  },
  {
    title: "SOC Playbook",
    body: "Incident response templates with automation blueprints.",
  },
  {
    title: "AI Chat Accelerator",
    body: "Deploy-ready AI chat interface with governance guardrails.",
  },
];

export default function Shop() {
  return (
    <Layout
      title="Cyberkeris Shop"
      description="Digital products and accelerators designed for security-first teams."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <Card key={product.title} title={product.title}>
            {product.body}
          </Card>
        ))}
      </div>
    </Layout>
  );
}

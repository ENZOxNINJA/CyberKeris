import Layout from "../components/Layout";
import Card from "../components/Card";

const capabilities = [
  {
    title: "Product Engineering",
    body: "Full-stack delivery for web, mobile, and cloud-native platforms.",
  },
  {
    title: "Enterprise Integration",
    body: "APIs, data pipelines, and legacy modernization initiatives.",
  },
  {
    title: "Quality & DevSecOps",
    body: "Secure CI/CD, automated testing, and reliability engineering.",
  },
];

export default function Software() {
  return (
    <Layout
      title="Software Solutions"
      description="Build secure, scalable, and high-performing digital products."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {capabilities.map((capability) => (
          <Card key={capability.title} title={capability.title}>
            {capability.body}
          </Card>
        ))}
      </div>
      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-ink">Delivery Model</h2>
        <p className="mt-2 text-sm text-slate-600">
          Agile squads, product discovery, and continuous delivery to align with
          your business outcomes.
        </p>
      </section>
    </Layout>
  );
}

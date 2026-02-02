import Layout from "../components/Layout";
import Card from "../components/Card";

const services = [
  {
    title: "Assessment & Strategy",
    body: "Risk assessments, compliance mapping, and security roadmap planning.",
  },
  {
    title: "Managed Detection",
    body: "24/7 monitoring with threat intelligence and incident response playbooks.",
  },
  {
    title: "Cloud Security",
    body: "Zero trust architecture and continuous posture management.",
  },
];

export default function Cybersecurity() {
  return (
    <Layout
      title="Cybersecurity Services"
      description="Enterprise-grade protection across risk, operations, and resilience."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} title={service.title}>
            {service.body}
          </Card>
        ))}
      </div>
      <section className="rounded-2xl bg-slate-900 p-6 text-white">
        <h2 className="text-xl font-semibold">Security Operations Center</h2>
        <p className="mt-2 text-sm text-white/80">
          Centralized operations, automation, and forensic readiness for every client.
        </p>
      </section>
    </Layout>
  );
}

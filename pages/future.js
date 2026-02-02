import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Card from "../components/Card";

const initiatives = [
  {
    title: "Autonomous SOC",
    description: "AI-driven triage, response, and continuous learning for security operations.",
  },
  {
    title: "Privacy-preserving AI",
    description: "Federated and encrypted AI workflows for regulated industries.",
  },
  {
    title: "Digital resilience labs",
    description: "Simulation environments for crisis readiness and red team exercises.",
  },
];

export default function FuturePage() {
  return (
    <Layout title="Future | CyberKeris" description="Research and innovation initiatives.">
      <HeroSection
        title="Future-focused innovation."
        subtitle="We invest in R&D that advances autonomous security, intelligent collaboration, and resilient infrastructure."
      />
      <section className="container-grid mt-16 grid gap-6 md:grid-cols-3">
        {initiatives.map((initiative) => (
          <Card
            key={initiative.title}
            title={initiative.title}
            description={initiative.description}
            eyebrow="Research"
          />
        ))}
      </section>
    </Layout>
  );
}

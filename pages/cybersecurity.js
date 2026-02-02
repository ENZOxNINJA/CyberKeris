import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Card from "../components/Card";

const services = [
  {
    title: "Security Operations Center",
    description: "24/7 monitoring, incident response playbooks, and coordinated remediation.",
  },
  {
    title: "Governance & Compliance",
    description: "Risk assessments, audit readiness, and policy automation across your stack.",
  },
  {
    title: "Zero Trust Architecture",
    description: "Identity-first controls, segmentation, and continuous verification.",
  },
];

export default function CybersecurityPage() {
  return (
    <Layout title="Cybersecurity | CyberKeris" description="Enterprise cybersecurity services.">
      <HeroSection
        title="Defensive depth for every layer."
        subtitle="CyberKeris designs security programs that protect data, applications, and infrastructure with measurable outcomes."
      />
      <section className="container-grid mt-16 grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} title={service.title} description={service.description} eyebrow="Service" />
        ))}
      </section>
    </Layout>
  );
}

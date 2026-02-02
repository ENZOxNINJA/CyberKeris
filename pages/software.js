import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Card from "../components/Card";

const capabilities = [
  {
    title: "Product Engineering",
    description: "Agile delivery, DevSecOps pipelines, and scalable platform architecture.",
  },
  {
    title: "Cloud Migration",
    description: "Secure modernization, containerization, and cost-optimized infrastructure.",
  },
  {
    title: "Data Platforms",
    description: "Analytics, observability, and data governance for critical systems.",
  },
];

export default function SoftwarePage() {
  return (
    <Layout title="Software | CyberKeris" description="Full-stack software solutions and cloud delivery.">
      <HeroSection
        title="Software that powers secure growth."
        subtitle="We build enterprise-ready applications and digital platforms with security, scalability, and speed in mind."
      />
      <section className="container-grid mt-16 grid gap-6 md:grid-cols-3">
        {capabilities.map((capability) => (
          <Card key={capability.title} title={capability.title} description={capability.description} eyebrow="Capability" />
        ))}
      </section>
    </Layout>
  );
}

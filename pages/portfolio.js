import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Card from "../components/Card";

const projects = [
  {
    title: "Global Financial SOC",
    description: "Modernized SOC operations with AI triage and compliance reporting.",
  },
  {
    title: "Healthcare Data Platform",
    description: "HIPAA-ready analytics stack with zero trust controls and audit automation.",
  },
  {
    title: "Retail Commerce Security",
    description: "Secured omnichannel ecommerce with resilient cloud infrastructure.",
  },
];

export default function PortfolioPage() {
  return (
    <Layout title="Portfolio | CyberKeris" description="Selected engagements and outcomes.">
      <HeroSection
        title="Evidence-driven results."
        subtitle="Explore highlights from cybersecurity transformations, software modernization, and AI enablement."
      />
      <section className="container-grid mt-16 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} title={project.title} description={project.description} eyebrow="Case study" />
        ))}
      </section>
    </Layout>
  );
}

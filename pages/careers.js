import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Card from "../components/Card";

const roles = [
  {
    title: "Senior Security Analyst",
    description: "Lead incident response, threat hunting, and client security strategy.",
  },
  {
    title: "Full-stack Engineer",
    description: "Build secure, scalable applications across the CyberKeris platform.",
  },
  {
    title: "AI Solutions Architect",
    description: "Design intelligent workflows and conversational AI experiences.",
  },
];

export default function CareersPage() {
  return (
    <Layout title="Careers | CyberKeris" description="Join the CyberKeris team.">
      <HeroSection
        title="Join a mission-driven team."
        subtitle="CyberKeris is hiring cybersecurity, software, and AI talent to build the future of secure digital operations."
      />
      <section className="container-grid mt-16 grid gap-6 md:grid-cols-3">
        {roles.map((role) => (
          <Card key={role.title} title={role.title} description={role.description} eyebrow="Open role" />
        ))}
      </section>
    </Layout>
  );
}

import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Card from "../components/Card";

const values = [
  {
    title: "Mission-first security",
    description: "Every engagement starts with risk reduction, resilience, and measurable trust.",
  },
  {
    title: "Full-stack execution",
    description: "From strategy to code, our teams deliver production-ready systems and automation.",
  },
  {
    title: "Human-centered design",
    description: "We craft experiences that empower analysts, engineers, and customers alike.",
  },
];

export default function AboutPage() {
  return (
    <Layout title="About | CyberKeris" description="Learn about CyberKeris leadership and mission.">
      <HeroSection
        title="Built for the security demands of modern enterprises."
        subtitle="CyberKeris is a multidisciplinary team of cybersecurity strategists, software engineers, and AI architects. We help organizations secure operations and accelerate innovation."
      />
      <section className="container-grid mt-16 grid gap-6 md:grid-cols-3">
        {values.map((value) => (
          <Card key={value.title} title={value.title} description={value.description} eyebrow="Our values" />
        ))}
      </section>
    </Layout>
  );
}

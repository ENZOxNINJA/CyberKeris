import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Card from "../components/Card";

const products = [
  {
    title: "Secure Workspace Suite",
    description: "Endpoint hardening, identity controls, and managed protection bundled for teams.",
  },
  {
    title: "Threat Intel Pack",
    description: "Curated intelligence feeds with automated enrichment and alerting.",
  },
  {
    title: "Compliance Toolkit",
    description: "Policy templates, assessment workflows, and reporting dashboards.",
  },
];

export default function ShopPage() {
  return (
    <Layout title="Shop | CyberKeris" description="Enterprise-ready security and software bundles.">
      <HeroSection
        title="Curated solutions, ready to deploy."
        subtitle="Explore packaged cybersecurity and software offerings designed for rapid onboarding."
      />
      <section className="container-grid mt-16 grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <Card key={product.title} title={product.title} description={product.description} eyebrow="Product" />
        ))}
      </section>
    </Layout>
  );
}

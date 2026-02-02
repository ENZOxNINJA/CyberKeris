import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Card from "../components/Card";

const posts = [
  {
    title: "Zero Trust in 90 Days",
    description: "A practical roadmap for rolling out zero trust initiatives across hybrid environments.",
  },
  {
    title: "AI Chat Governance",
    description: "How to enable AI-driven support while meeting compliance requirements.",
  },
  {
    title: "Building Resilient APIs",
    description: "Patterns for secure, observable, and scalable API ecosystems.",
  },
];

export default function BlogPage() {
  return (
    <Layout title="Blog | CyberKeris" description="Insights on cybersecurity, software, and AI.">
      <HeroSection
        title="Insights from the CyberKeris team."
        subtitle="Explore articles, guides, and thought leadership from our cybersecurity and software experts."
      />
      <section className="container-grid mt-16 grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.title} title={post.title} description={post.description} eyebrow="Article" />
        ))}
      </section>
    </Layout>
  );
}

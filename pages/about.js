import Layout from "../components/Layout";
import Card from "../components/Card";

const pillars = [
  {
    title: "Mission",
    body: "Protect organizations with modern cyber defense and ethical innovation.",
  },
  {
    title: "Vision",
    body: "Advance secure digital ecosystems across software, AI, and cloud.",
  },
  {
    title: "Values",
    body: "Integrity, resilience, customer focus, and continuous learning.",
  },
];

export default function About() {
  return (
    <Layout
      title="About Cyberkeris"
      description="A multidisciplinary team delivering cybersecurity, software, and AI services for global enterprises."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <Card key={pillar.title} title={pillar.title}>
            {pillar.body}
          </Card>
        ))}
      </div>
      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-ink">Leadership & Culture</h2>
        <p className="mt-2 text-sm text-slate-600">
          Our leadership blends cybersecurity, engineering, and product strategy to
          guide clients through transformation initiatives.
        </p>
      </section>
    </Layout>
  );
}

import Layout from "../components/Layout";
import Card from "../components/Card";

const highlights = [
  {
    title: "Cybersecurity Programs",
    body: "Threat modeling, governance, and managed response designed for enterprise resilience.",
  },
  {
    title: "Software Engineering",
    body: "Product strategy, cloud-native delivery, and lifecycle support for complex systems.",
  },
  {
    title: "AI & Future Tech",
    body: "AI chat experiences, automation, and responsible research for emerging capabilities.",
  },
];

export default function Home() {
  return (
    <Layout
      title="Secure, intelligent, and scalable digital ecosystems"
      description="Cyberkeris delivers cybersecurity, software, and AI solutions with enterprise-grade execution."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {highlights.map((item) => (
          <Card key={item.title} title={item.title}>
            {item.body}
          </Card>
        ))}
      </div>
      <section className="rounded-2xl bg-ink p-8 text-white">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">
              Build a secure roadmap with Cyberkeris.
            </h2>
            <p className="text-white/80">
              Engage our teams for assessments, delivery, and managed services.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-ink"
          >
            Start a conversation
          </a>
        </div>
      </section>
    </Layout>
  );
}

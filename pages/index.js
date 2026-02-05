import Link from "next/link";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Card from "../components/Card";

const focusAreas = [
  {
    title: "Cybersecurity Operations",
    description: "Threat hunting, SOC readiness, incident response, and resilient infrastructure design.",
    eyebrow: "Security",
  },
  {
    title: "Software Delivery",
    description: "Enterprise platforms, cloud-native systems, and product engineering with compliance baked in.",
    eyebrow: "Engineering",
  },
  {
    title: "AI & Automation",
    description: "Intelligent chat, analytics, and workflow automation tailored to your mission.",
    eyebrow: "AI",
  },
];

export default function HomePage() {
  return (
    <Layout
      title="CyberKeris | Enterprise Cybersecurity & Software"
      description="CyberKeris delivers cybersecurity, software, and AI solutions with enterprise-grade governance."
    >
      <HeroSection
        title="Secure, intelligent, and future-ready digital ecosystems."
        subtitle="CyberKeris brings together cybersecurity leadership, full-stack engineering, AI chat, and an enterprise-grade platform for operations, commerce, and staff management."
        cta={
          <>
            <Link
              href="/contact"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-soft"
            >
              Talk to our team
            </Link>
            <Link
              href="/ai-chat"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white"
            >
              Explore AI Chat
            </Link>
          </>
        }
      />

      <section className="container-grid mt-16 grid gap-6 md:grid-cols-3">
        {focusAreas.map((area) => (
          <Card key={area.title} {...area} />
        ))}
      </section>

      <section className="container-grid mt-16">
        <div className="glass rounded-2xl p-8">
          <h2 className="section-title">Unified platform for every team</h2>
          <p className="section-subtitle">
            CyberKeris combines public-facing experiences, commerce, knowledge management, and admin operations
            into a single secure stack. From AI chat to cloud storage governance, everything is integrated.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Role-based access for users, staff, and admins",
              "PWA-ready experience with offline-friendly assets",
              "Integrated analytics, notifications, and audit logging",
              "Modular components for rapid delivery",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-slate-200">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

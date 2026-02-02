import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";

const faqs = [
  {
    question: "Do you provide managed security services?",
    answer: "Yes. We deliver 24/7 monitoring, incident response, and compliance management.",
  },
  {
    question: "Can we integrate existing tools?",
    answer: "Our team integrates with leading SIEM, IAM, and cloud platforms using secure APIs.",
  },
  {
    question: "Is the platform PWA-ready?",
    answer: "Yes. The site includes a service worker, manifest, and mobile-optimized layouts.",
  },
];

export default function FAQPage() {
  return (
    <Layout title="FAQ | CyberKeris" description="Frequently asked questions.">
      <HeroSection
        title="Questions answered."
        subtitle="Find quick answers about our services, platform, and engagement model."
      />
      <section className="container-grid mt-16 space-y-6">
        {faqs.map((faq) => (
          <div key={faq.question} className="glass rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
            <p className="mt-2 text-sm text-slate-300">{faq.answer}</p>
          </div>
        ))}
      </section>
    </Layout>
  );
}

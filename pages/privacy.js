import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";

export default function PrivacyPage() {
  return (
    <Layout title="Privacy | CyberKeris" description="CyberKeris privacy policy.">
      <HeroSection
        title="Privacy and data stewardship."
        subtitle="We protect personal data with transparent governance, encryption, and controlled access."
      />
      <section className="container-grid mt-16">
        <div className="glass rounded-2xl p-8 text-sm text-slate-300">
          <p>
            CyberKeris collects only the information required to deliver services, support customer requests, and
            maintain platform security. Data is encrypted in transit and at rest, with access governed by
            role-based policies.
          </p>
          <p className="mt-4">
            For data requests or deletion inquiries, contact privacy@cyberkeris.com.
          </p>
        </div>
      </section>
    </Layout>
  );
}

import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";

export default function TermsPage() {
  return (
    <Layout title="Terms | CyberKeris" description="CyberKeris terms and conditions.">
      <HeroSection
        title="Terms of service."
        subtitle="Review the terms governing CyberKeris services, platform access, and usage."
      />
      <section className="container-grid mt-16">
        <div className="glass rounded-2xl p-8 text-sm text-slate-300">
          <p>
            By using CyberKeris services, you agree to follow security requirements, protect login credentials,
            and comply with applicable laws. Service availability and features may evolve with notice.
          </p>
          <p className="mt-4">
            For questions, contact legal@cyberkeris.com.
          </p>
        </div>
      </section>
    </Layout>
  );
}

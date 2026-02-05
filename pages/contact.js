import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";

export default function ContactPage() {
  return (
    <Layout title="Contact | CyberKeris" description="Contact CyberKeris for enterprise solutions.">
      <HeroSection
        title="Let’s secure your next initiative."
        subtitle="Tell us about your goals and our team will respond with a tailored cybersecurity or software roadmap."
      />
      <section className="container-grid mt-16">
        <div className="glass rounded-2xl p-8">
          <form className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-300" htmlFor="name">
                Full name
              </label>
              <input
                id="name"
                className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white"
                placeholder="Alex Morgan"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-300" htmlFor="email">
                Work email
              </label>
              <input
                id="email"
                type="email"
                className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white"
                placeholder="alex@company.com"
              />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm text-slate-300" htmlFor="message">
                How can we help?
              </label>
              <textarea
                id="message"
                rows="4"
                className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white"
                placeholder="Share details about your goals, timelines, or challenges."
              />
            </div>
            <div className="md:col-span-2">
              <button className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-soft">
                Send request
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}

import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";

const threads = [
  {
    title: "Incident response workflow",
    excerpt: "Summarize containment steps for a suspected phishing campaign.",
  },
  {
    title: "Policy drafting",
    excerpt: "Draft a data retention policy aligned with SOC 2 requirements.",
  },
];

export default function AIChatPage() {
  return (
    <Layout title="AI Chat | CyberKeris" description="Secure AI chat for cybersecurity teams.">
      <HeroSection
        title="AI chat built for secure operations."
        subtitle="Ask questions, generate playbooks, and analyze security data with governance controls."
      />
      <section className="container-grid mt-16 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="glass rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Secure chat</h2>
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-300">
              Authenticated
            </span>
          </div>
          <div className="mt-6 space-y-4 text-sm text-slate-300">
            <div className="rounded-xl bg-slate-900/60 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Assistant</p>
              <p className="mt-2">
                Hello! I can help you draft incident response plans, summarize vulnerabilities, and prepare
                stakeholder updates.
              </p>
            </div>
            <div className="rounded-xl bg-slate-900/60 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">You</p>
              <p className="mt-2">Provide a quick status update for our SOC leadership.</p>
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <input
              className="flex-1 rounded-full border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white"
              placeholder="Ask CyberKeris AI..."
            />
            <button className="rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950">
              Send
            </button>
          </div>
        </div>
        <aside className="space-y-4">
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white">Suggested threads</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              {threads.map((thread) => (
                <div key={thread.title} className="rounded-xl border border-white/10 p-4">
                  <p className="font-medium text-white">{thread.title}</p>
                  <p className="mt-2 text-xs text-slate-400">{thread.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white">Security guardrails</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>• Role-based access and monitoring</li>
              <li>• Prompt audit logging for compliance</li>
              <li>• Secure context isolation per tenant</li>
            </ul>
          </div>
        </aside>
      </section>
    </Layout>
  );
}

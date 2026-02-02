import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";

export default function SignupPage() {
  return (
    <Layout title="Signup | CyberKeris" description="Create a CyberKeris account.">
      <HeroSection
        title="Start building securely."
        subtitle="Create an account to access AI chat, secure storage, and enterprise insights."
      />
      <section className="container-grid mt-16">
        <div className="glass mx-auto max-w-xl rounded-2xl p-8">
          <form className="grid gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-300" htmlFor="signup-name">
                Full name
              </label>
              <input
                id="signup-name"
                className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white"
                placeholder="Taylor James"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-300" htmlFor="signup-email">
                Email
              </label>
              <input
                id="signup-email"
                type="email"
                className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white"
                placeholder="taylor@company.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-300" htmlFor="signup-password">
                Password
              </label>
              <input
                id="signup-password"
                type="password"
                className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white"
                placeholder="Create a secure password"
              />
            </div>
            <button className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-soft">
              Create account
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

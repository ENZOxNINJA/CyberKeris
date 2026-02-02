import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";

export default function LoginPage() {
  return (
    <Layout title="Login | CyberKeris" description="Login to access CyberKeris services.">
      <HeroSection
        title="Welcome back."
        subtitle="Access your AI chat, reports, and workspace with secure authentication."
      />
      <section className="container-grid mt-16">
        <div className="glass mx-auto max-w-xl rounded-2xl p-8">
          <form className="grid gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-300" htmlFor="login-email">
                Email
              </label>
              <input
                id="login-email"
                type="email"
                className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white"
                placeholder="you@company.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-300" htmlFor="login-password">
                Password
              </label>
              <input
                id="login-password"
                type="password"
                className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white"
                placeholder="••••••••"
              />
            </div>
            <button className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-soft">
              Sign in
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

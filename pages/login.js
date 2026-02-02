import Layout from "../components/Layout";

export default function Login() {
  return (
    <Layout
      title="Login"
      description="Secure access for clients, staff, and administrators."
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-ink">Sign in</h2>
        <p className="mt-2 text-sm text-slate-600">
          Authentication will be connected to JWT or session-based access.
        </p>
      </div>
    </Layout>
  );
}

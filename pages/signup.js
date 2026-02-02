import Layout from "../components/Layout";

export default function Signup() {
  return (
    <Layout
      title="Create an Account"
      description="Register to access AI chat, updates, and secure resources."
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-ink">Sign up</h2>
        <p className="mt-2 text-sm text-slate-600">
          Account creation workflows will be connected to secure identity services.
        </p>
      </div>
    </Layout>
  );
}

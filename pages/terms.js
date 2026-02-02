import Layout from "../components/Layout";

export default function Terms() {
  return (
    <Layout
      title="Terms of Service"
      description="Guidelines for using Cyberkeris services and digital products."
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
        <p>
          By accessing Cyberkeris services, you agree to comply with applicable
          laws, confidentiality requirements, and acceptable use guidelines.
        </p>
      </div>
    </Layout>
  );
}

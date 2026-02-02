import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout
      title="Contact Cyberkeris"
      description="Connect with our team to plan assessments, delivery, or partnerships."
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-ink">Reach our team</h2>
        <p className="mt-2 text-sm text-slate-600">
          Email hello@cyberkeris.com or submit a request through our secure intake.
        </p>
        <div className="mt-4 grid gap-4 text-sm text-slate-600 md:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs uppercase text-slate-400">Headquarters</p>
            <p className="mt-2 font-medium text-ink">Singapore</p>
            <p>Global service delivery with distributed teams.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs uppercase text-slate-400">Response time</p>
            <p className="mt-2 font-medium text-ink">24 hours</p>
            <p>Dedicated account managers for enterprise clients.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

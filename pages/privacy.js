import Layout from "../components/Layout";

export default function Privacy() {
  return (
    <Layout
      title="Privacy Policy"
      description="Our commitment to safeguarding personal and client data."
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
        <p>
          Cyberkeris collects only necessary information to deliver services,
          respond to inquiries, and improve customer experiences. We apply
          encryption, access controls, and audit trails across all data handling.
        </p>
      </div>
    </Layout>
  );
}

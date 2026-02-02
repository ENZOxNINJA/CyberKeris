import Layout from "../../components/Layout";

export default function AiChatLogs() {
  return (
    <Layout
      title="AI Chat Logs"
      description="Audit and review AI chat usage for compliance and improvements."
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
        <p>
          Logs capture conversation metadata, escalation notes, and resolution
          outcomes.
        </p>
      </div>
    </Layout>
  );
}

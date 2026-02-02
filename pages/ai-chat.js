import Layout from "../components/Layout";

const samplePrompts = [
  "Summarize today’s critical alerts.",
  "Draft a phishing response playbook.",
  "Map compliance tasks for next quarter."
];

export default function AiChatPage() {
  return (
    <Layout>
      <section className="section">
        <span className="badge">AI Chat</span>
        <h1>Ask CyberKeris AI for guidance.</h1>
        <p style={{ marginTop: "1rem", maxWidth: "700px", opacity: 0.8 }}>
          The AI assistant provides secure, context-aware recommendations for security operations,
          software delivery, and executive reporting.
        </p>
      </section>
      <section className="section">
        <h2>Suggested Prompts</h2>
        <div className="card-grid">
          {samplePrompts.map((prompt) => (
            <div key={prompt} className="card">
              <p style={{ opacity: 0.8 }}>&ldquo;{prompt}&rdquo;</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

import Layout from "../components/Layout";

export default function SignupPage() {
  return (
    <Layout>
      <section className="section">
        <span className="badge">Signup</span>
        <h1>Create your secure workspace.</h1>
        <p style={{ marginTop: "1rem", maxWidth: "640px", opacity: 0.8 }}>
          Request an account to access CyberKeris services and AI assistance.
        </p>
        <div className="card" style={{ marginTop: "1.5rem" }}>
          <p>Account provisioning is managed by our team within 24 hours.</p>
          <button
            type="button"
            style={{
              marginTop: "1rem",
              padding: "0.65rem 1.4rem",
              borderRadius: "999px",
              border: "1px solid rgba(148, 163, 184, 0.4)",
              background: "rgba(15, 23, 42, 0.8)",
              color: "inherit",
              cursor: "pointer"
            }}
          >
            Request Access
          </button>
        </div>
      </section>
    </Layout>
  );
}

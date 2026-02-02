import Layout from "../components/Layout";

export default function LoginPage() {
  return (
    <Layout>
      <section className="section">
        <span className="badge">Login</span>
        <h1>Welcome back.</h1>
        <p style={{ marginTop: "1rem", maxWidth: "640px", opacity: 0.8 }}>
          Sign in to access AI chat, analytics, and your personalized security dashboard.
        </p>
        <div className="card" style={{ marginTop: "1.5rem" }}>
          <p>Authentication is handled via secure identity providers.</p>
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
            Continue with SSO
          </button>
        </div>
      </section>
    </Layout>
  );
}

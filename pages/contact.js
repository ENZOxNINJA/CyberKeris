import Layout from "../components/Layout";

export default function ContactPage() {
  return (
    <Layout>
      <section className="section">
        <span className="badge">Contact</span>
        <h1>Let’s secure your next mission.</h1>
        <p style={{ marginTop: "1rem", maxWidth: "700px", opacity: 0.8 }}>
          Reach out to schedule a consultation, request a demo, or explore partnership
          opportunities.
        </p>
      </section>
      <section className="section">
        <h2>Contact Information</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Headquarters</h3>
            <p style={{ marginTop: "0.75rem", opacity: 0.8 }}>
              88 Sentinel Avenue, Cyber City, Remote-first
            </p>
          </div>
          <div className="card">
            <h3>Email</h3>
            <p style={{ marginTop: "0.75rem", opacity: 0.8 }}>hello@cyberkeris.com</p>
          </div>
          <div className="card">
            <h3>Hotline</h3>
            <p style={{ marginTop: "0.75rem", opacity: 0.8 }}>+1 (555) 010-0110</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import Layout from "../components/Layout";

export default function TermsPage() {
  return (
    <Layout>
      <section className="section">
        <span className="badge">Terms</span>
        <h1>Terms of service.</h1>
        <p style={{ marginTop: "1rem", maxWidth: "700px", opacity: 0.8 }}>
          Our terms outline the responsibilities, usage policies, and service expectations for
          CyberKeris customers and partners.
        </p>
      </section>
      <section className="section">
        <h2>Highlights</h2>
        <ul style={{ marginTop: "1rem", paddingLeft: "1.2rem", lineHeight: 1.8 }}>
          <li>Clear service agreements and deliverables.</li>
          <li>Respectful use of platform resources.</li>
          <li>Support response expectations and escalation paths.</li>
        </ul>
      </section>
    </Layout>
  );
}

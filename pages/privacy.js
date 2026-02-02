import Layout from "../components/Layout";

export default function PrivacyPage() {
  return (
    <Layout>
      <section className="section">
        <span className="badge">Privacy</span>
        <h1>Privacy-first data practices.</h1>
        <p style={{ marginTop: "1rem", maxWidth: "700px", opacity: 0.8 }}>
          We collect only the data required to deliver our services and protect it using
          industry-standard safeguards.
        </p>
      </section>
      <section className="section">
        <h2>Key Principles</h2>
        <ul style={{ marginTop: "1rem", paddingLeft: "1.2rem", lineHeight: 1.8 }}>
          <li>Transparent data usage and retention policies.</li>
          <li>Encryption for data in transit and at rest.</li>
          <li>User control over personal information.</li>
        </ul>
      </section>
    </Layout>
  );
}

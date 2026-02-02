import Layout from "../components/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <section className="section">
        <span className="badge">About</span>
        <h1>Building trust through secure innovation.</h1>
        <p style={{ marginTop: "1rem", maxWidth: "720px", opacity: 0.8 }}>
          CyberKeris is a security-first technology studio specializing in cybersecurity, software
          engineering, and AI automation. Our mission is to deliver resilient, transparent, and
          ethical digital experiences for organizations worldwide.
        </p>
      </section>
      <section className="section">
        <h2>Our Values</h2>
        <ul style={{ marginTop: "1rem", paddingLeft: "1.2rem", lineHeight: 1.8 }}>
          <li>Security-by-design across every engagement.</li>
          <li>Human-centered AI that amplifies teams.</li>
          <li>Transparent reporting and measurable outcomes.</li>
        </ul>
      </section>
    </Layout>
  );
}

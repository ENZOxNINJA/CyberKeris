import Layout from "../components/Layout";

const capabilities = [
  "Full-stack product engineering",
  "Secure API development",
  "DevSecOps automation",
  "Legacy modernization"
];

export default function SoftwarePage() {
  return (
    <Layout>
      <section className="section">
        <span className="badge">Software Engineering</span>
        <h1>Secure software that scales with your business.</h1>
        <p style={{ marginTop: "1rem", maxWidth: "700px", opacity: 0.8 }}>
          We deliver resilient platforms, user-centric experiences, and automated workflows that
          stand up to enterprise demands.
        </p>
      </section>
      <section className="section">
        <h2>Capabilities</h2>
        <div className="card-grid">
          {capabilities.map((capability) => (
            <div key={capability} className="card">
              <h3>{capability}</h3>
              <p style={{ marginTop: "0.75rem", opacity: 0.8 }}>
                Designed with security and performance at every layer.
              </p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

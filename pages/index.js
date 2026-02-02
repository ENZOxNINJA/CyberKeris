import Layout from "../components/Layout";

const highlights = [
  {
    title: "Cyber Defense",
    description: "24/7 monitoring, threat intelligence, and incident response."
  },
  {
    title: "Secure Software",
    description: "Modern applications with built-in security and compliance."
  },
  {
    title: "AI Operations",
    description: "Human-first automation for security, IT, and analytics."
  }
];

export default function HomePage() {
  return (
    <Layout>
      <section className="section">
        <span className="badge">CyberKeris Platform</span>
        <h1>Protecting organizations with intelligent cyber resilience.</h1>
        <p style={{ marginTop: "1rem", maxWidth: "680px", opacity: 0.8 }}>
          CyberKeris delivers enterprise-grade security, software engineering, and AI-powered
          operations with a focus on measurable risk reduction and human-centered design.
        </p>
      </section>
      <section className="section">
        <h2>Highlights</h2>
        <div className="card-grid">
          {highlights.map((item) => (
            <div key={item.title} className="card">
              <h3>{item.title}</h3>
              <p style={{ marginTop: "0.75rem", opacity: 0.8 }}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

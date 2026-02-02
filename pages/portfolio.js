import Layout from "../components/Layout";

const projects = [
  "Global fintech SOC transformation",
  "Healthcare threat detection modernization",
  "Government secure collaboration platform",
  "Retail AI fraud prevention"
];

export default function PortfolioPage() {
  return (
    <Layout>
      <section className="section">
        <span className="badge">Portfolio</span>
        <h1>Case studies from high-impact engagements.</h1>
        <p style={{ marginTop: "1rem", maxWidth: "700px", opacity: 0.8 }}>
          Explore how we help teams modernize security, software delivery, and AI readiness.
        </p>
      </section>
      <section className="section">
        <h2>Featured Work</h2>
        <ul style={{ marginTop: "1rem", paddingLeft: "1.2rem", lineHeight: 1.8 }}>
          {projects.map((project) => (
            <li key={project}>{project}</li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

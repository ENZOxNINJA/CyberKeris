import Layout from "../components/Layout";

const services = [
  "Managed SOC & incident response",
  "Threat modeling and risk assessments",
  "Cloud security posture management",
  "Compliance readiness (ISO, SOC 2, HIPAA)"
];

export default function CybersecurityPage() {
  return (
    <Layout>
      <section className="section">
        <span className="badge">Cybersecurity</span>
        <h1>Proactive defense for modern enterprises.</h1>
        <p style={{ marginTop: "1rem", maxWidth: "700px", opacity: 0.8 }}>
          Our cybersecurity practice delivers end-to-end protection, from advisory services to
          always-on monitoring. We help teams respond faster, reduce exposure, and stay compliant.
        </p>
      </section>
      <section className="section">
        <h2>Core Services</h2>
        <ul style={{ marginTop: "1rem", paddingLeft: "1.2rem", lineHeight: 1.8 }}>
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

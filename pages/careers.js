import Layout from "../components/Layout";

const openings = [
  { role: "Security Operations Lead", location: "Remote" },
  { role: "Full-stack Engineer", location: "Hybrid" },
  { role: "AI Product Strategist", location: "Remote" }
];

export default function CareersPage() {
  return (
    <Layout>
      <section className="section">
        <span className="badge">Careers</span>
        <h1>Join a mission-driven security collective.</h1>
        <p style={{ marginTop: "1rem", maxWidth: "700px", opacity: 0.8 }}>
          We are looking for curious, collaborative, and bold thinkers who want to build a safer
          digital world.
        </p>
      </section>
      <section className="section">
        <h2>Open Roles</h2>
        <div className="card-grid">
          {openings.map((opening) => (
            <div key={opening.role} className="card">
              <h3>{opening.role}</h3>
              <p style={{ marginTop: "0.75rem", opacity: 0.8 }}>{opening.location}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

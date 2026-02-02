import Layout from "../components/Layout";

const roadmap = [
  "Autonomous security co-pilot",
  "Quantum-safe readiness program",
  "AI model risk governance",
  "Global partner ecosystem"
];

export default function FuturePage() {
  return (
    <Layout>
      <section className="section">
        <span className="badge">Future</span>
        <h1>Designing the next era of secure intelligence.</h1>
        <p style={{ marginTop: "1rem", maxWidth: "700px", opacity: 0.8 }}>
          Our roadmap focuses on responsible AI, emerging threat protection, and sustainable
          digital operations.
        </p>
      </section>
      <section className="section">
        <h2>Innovation Roadmap</h2>
        <ul style={{ marginTop: "1rem", paddingLeft: "1.2rem", lineHeight: 1.8 }}>
          {roadmap.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

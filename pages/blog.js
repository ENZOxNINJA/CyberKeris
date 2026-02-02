import Layout from "../components/Layout";

const posts = [
  {
    title: "Zero Trust in Practice",
    summary: "Practical steps to implement a zero-trust strategy without friction."
  },
  {
    title: "AI for SOC Teams",
    summary: "How automation can reduce alert fatigue and speed up response."
  },
  {
    title: "Secure by Default Engineering",
    summary: "Embedding security controls into every development milestone."
  }
];

export default function BlogPage() {
  return (
    <Layout>
      <section className="section">
        <span className="badge">Blog</span>
        <h1>Insights, research, and cyber intelligence.</h1>
        <p style={{ marginTop: "1rem", maxWidth: "700px", opacity: 0.8 }}>
          Discover the latest perspectives from the CyberKeris team on security, software, and AI.
        </p>
      </section>
      <section className="section">
        <h2>Latest Articles</h2>
        <div className="card-grid">
          {posts.map((post) => (
            <article key={post.title} className="card">
              <h3>{post.title}</h3>
              <p style={{ marginTop: "0.75rem", opacity: 0.8 }}>{post.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}

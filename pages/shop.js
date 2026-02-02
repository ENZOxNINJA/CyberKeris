import Layout from "../components/Layout";

const products = [
  { name: "Zero Trust Assessment", price: "$2,500" },
  { name: "Incident Response Playbook", price: "$1,200" },
  { name: "Security Awareness Kit", price: "$800" }
];

export default function ShopPage() {
  return (
    <Layout>
      <section className="section">
        <span className="badge">Online Shop</span>
        <h1>Curated security toolkits and advisory packages.</h1>
        <p style={{ marginTop: "1rem", maxWidth: "680px", opacity: 0.8 }}>
          Explore ready-to-deploy resources that help your team improve security posture and
          accelerate maturity.
        </p>
      </section>
      <section className="section">
        <h2>Featured Products</h2>
        <div className="card-grid">
          {products.map((product) => (
            <div key={product.name} className="card">
              <h3>{product.name}</h3>
              <p style={{ marginTop: "0.75rem", opacity: 0.8 }}>Starting at {product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

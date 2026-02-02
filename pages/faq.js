import Layout from "../components/Layout";

const faqs = [
  {
    question: "How quickly can we get started?",
    answer: "Most engagements begin within two weeks after discovery."
  },
  {
    question: "Do you support compliance programs?",
    answer: "Yes, we align security controls with ISO, SOC 2, HIPAA, and more."
  },
  {
    question: "Is AI chat available to customers?",
    answer: "AI chat is available to authenticated users with role-based access."
  }
];

export default function FaqPage() {
  return (
    <Layout>
      <section className="section">
        <span className="badge">FAQ</span>
        <h1>Answers to common questions.</h1>
        <p style={{ marginTop: "1rem", maxWidth: "700px", opacity: 0.8 }}>
          Find quick guidance on our services, onboarding, and support.
        </p>
      </section>
      <section className="section">
        <h2>Frequently Asked Questions</h2>
        <div className="card-grid">
          {faqs.map((faq) => (
            <div key={faq.question} className="card">
              <h3>{faq.question}</h3>
              <p style={{ marginTop: "0.75rem", opacity: 0.8 }}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

import Layout from "../components/Layout";

const faqs = [
  {
    question: "Do you provide managed security services?",
    answer: "Yes. Our SOC provides monitoring, response, and reporting."
  },
  {
    question: "Can we integrate the AI chat into our platform?",
    answer: "We offer a modular AI chat stack with API integrations."
  },
  {
    question: "How quickly can an assessment start?",
    answer: "Initial discovery calls can begin within two weeks."
  }
];

export default function Faq() {
  return (
    <Layout
      title="Frequently Asked Questions"
      description="Answers to common questions about our services and delivery model."
    >
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-ink">{faq.question}</h2>
            <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

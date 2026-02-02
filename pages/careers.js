import Layout from "../components/Layout";
import Card from "../components/Card";

const roles = [
  {
    title: "Security Consultant",
    body: "Lead assessments, threat modeling, and security program delivery.",
  },
  {
    title: "Full-Stack Engineer",
    body: "Build customer-facing platforms with modern web frameworks.",
  },
  {
    title: "AI Researcher",
    body: "Advance AI safety, applied NLP, and automation.",
  },
];

export default function Careers() {
  return (
    <Layout
      title="Careers"
      description="Join a global team focused on secure, intelligent innovation."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {roles.map((role) => (
          <Card key={role.title} title={role.title}>
            {role.body}
          </Card>
        ))}
      </div>
    </Layout>
  );
}

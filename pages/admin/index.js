import Layout from "../../components/Layout";
import Card from "../../components/Card";

const adminCards = [
  {
    title: "Manage Pages",
    body: "Edit landing pages, blog updates, and announcements.",
  },
  {
    title: "User Administration",
    body: "Provision staff accounts and enforce role-based access.",
  },
  {
    title: "Analytics Overview",
    body: "Monitor traffic, engagement, and security metrics.",
  },
];

export default function AdminHome() {
  return (
    <Layout
      title="Admin Dashboard"
      description="Central hub for Cyberkeris staff and administrative operations."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {adminCards.map((card) => (
          <Card key={card.title} title={card.title}>
            {card.body}
          </Card>
        ))}
      </div>
    </Layout>
  );
}

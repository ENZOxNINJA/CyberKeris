import Layout from "../../../components/Layout";
import Card from "../../../components/Card";

const inbox = [
  { title: "Security Review", body: "New compliance request from finance." },
  { title: "Client Update", body: "Weekly incident summary ready to send." },
  { title: "Partner Outreach", body: "Vendor onboarding follow-ups." },
];

export default function Emails() {
  return (
    <Layout
      title="Email Inbox"
      description="Review customer messages and respond securely."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {inbox.map((item) => (
          <Card key={item.title} title={item.title}>
            {item.body}
          </Card>
        ))}
      </div>
    </Layout>
  );
}

import Layout from "../../../components/Layout";
import AdminLayout from "../../../components/AdminLayout";

const inbox = [
  { subject: "Incident update", from: "soc@cyberkeris.com" },
  { subject: "Quarterly review", from: "ciso@partner.com" },
  { subject: "New staff access", from: "hr@cyberkeris.com" }
];

export default function EmailInboxPage() {
  return (
    <Layout>
      <AdminLayout title="Email Inbox">
        <p style={{ opacity: 0.8 }}>
          Review inbound communications and coordinate response workflows.
        </p>
        <div className="card-grid" style={{ marginTop: "1.5rem" }}>
          {inbox.map((email) => (
            <div key={email.subject} className="card">
              <h3>{email.subject}</h3>
              <p style={{ marginTop: "0.75rem", opacity: 0.8 }}>{email.from}</p>
            </div>
          ))}
        </div>
      </AdminLayout>
    </Layout>
  );
}

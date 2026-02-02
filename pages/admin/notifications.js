import Layout from "../../components/Layout";
import AdminLayout from "../../components/AdminLayout";

const notifications = [
  "Patch window scheduled for Saturday 02:00 UTC.",
  "New compliance report is ready for review.",
  "SOC staffing rotation updated."
];

export default function NotificationsPage() {
  return (
    <Layout>
      <AdminLayout title="Notifications">
        <p style={{ opacity: 0.8 }}>
          Broadcast critical updates and operational alerts to staff.
        </p>
        <ul style={{ marginTop: "1rem", paddingLeft: "1.2rem", lineHeight: 1.8 }}>
          {notifications.map((notice) => (
            <li key={notice}>{notice}</li>
          ))}
        </ul>
      </AdminLayout>
    </Layout>
  );
}

import Layout from "../../components/Layout";
import AdminLayout from "../../components/AdminLayout";

const users = [
  { name: "Amina Yusuf", role: "Admin" },
  { name: "Kai Chen", role: "Security Analyst" },
  { name: "Nadia Salem", role: "Staff" }
];

export default function ManageUsers() {
  return (
    <Layout>
      <AdminLayout title="Manage Users">
        <p style={{ opacity: 0.8 }}>
          Control access levels, invite new members, and maintain compliance.
        </p>
        <div className="card-grid" style={{ marginTop: "1.5rem" }}>
          {users.map((user) => (
            <div key={user.name} className="card">
              <h3>{user.name}</h3>
              <p style={{ marginTop: "0.75rem", opacity: 0.8 }}>{user.role}</p>
            </div>
          ))}
        </div>
      </AdminLayout>
    </Layout>
  );
}

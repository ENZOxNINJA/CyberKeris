import Layout from "../../components/Layout";

export default function ManageUsers() {
  return (
    <Layout
      title="Manage Users"
      description="Administer roles, permissions, and user lifecycle actions."
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
        <p>
          Staff can manage user onboarding, access revocation, and security
          alerts from this console.
        </p>
      </div>
    </Layout>
  );
}

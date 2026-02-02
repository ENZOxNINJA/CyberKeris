import Layout from "../../components/Layout";

export default function ManageProducts() {
  return (
    <Layout
      title="Manage Products"
      description="Update product listings, pricing, and digital fulfillment."
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
        <p>
          Product data syncs with inventory, subscriptions, and billing systems.
        </p>
      </div>
    </Layout>
  );
}

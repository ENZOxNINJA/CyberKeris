import Layout from "../../../components/Layout";
import Card from "../../../components/Card";

const assets = [
  { title: "Incident Reports", body: "Secure PDF storage with role access." },
  { title: "Client Backups", body: "Encrypted storage with retention policies." },
  { title: "Templates", body: "Reusable playbooks and compliance docs." },
];

export default function CloudStorage() {
  return (
    <Layout
      title="Cloud Storage"
      description="Secure file management for staff and administrators."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {assets.map((asset) => (
          <Card key={asset.title} title={asset.title}>
            {asset.body}
          </Card>
        ))}
      </div>
    </Layout>
  );
}

import AdminLayout from "../../components/AdminLayout";

const notifications = [
  {
    title: "Security posture update",
    detail: "Weekly threat report is ready for review.",
    time: "10 min ago",
  },
  {
    title: "New staff onboarding",
    detail: "2 pending staff access approvals.",
    time: "45 min ago",
  },
];

export default function NotificationsPage() {
  return (
    <AdminLayout title="Notifications">
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div key={notification.title} className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">{notification.title}</h3>
              <span className="text-xs text-slate-400">{notification.time}</span>
            </div>
            <p className="mt-2 text-sm text-slate-300">{notification.detail}</p>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}

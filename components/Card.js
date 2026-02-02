export default function Card({ title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <div className="mt-3 text-sm text-slate-600">{children}</div>
    </div>
  );
}

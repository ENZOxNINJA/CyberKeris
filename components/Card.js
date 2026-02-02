export default function Card({ title, description, eyebrow }) {
  return (
    <div className="glass rounded-2xl p-6">
      {eyebrow ? <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{eyebrow}</p> : null}
      <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{description}</p>
    </div>
  );
}

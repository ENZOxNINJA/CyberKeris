export default function Card({ title, description, eyebrow }) {
  return (
    <div className="glass rounded-2xl p-6 transition hover:border-white/20 hover:shadow-xl">
      {eyebrow ? <p className="text-xs uppercase tracking-[0.2em] text-accent-soft">{eyebrow}</p> : null}
      <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{description}</p>
    </div>
  );
}

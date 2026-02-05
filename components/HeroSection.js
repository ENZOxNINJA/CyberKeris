export default function HeroSection({ title, subtitle, cta }) {
  return (
    <section className="container-grid">
      <div className="glass fade-in relative overflow-hidden rounded-3xl px-8 py-16 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.25),_transparent_55%)]" />
        <p className="text-xs uppercase tracking-[0.3em] text-accent-soft">Cyberkeris Enterprise</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
          {subtitle}
        </p>
        {cta ? (
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {cta}
          </div>
        ) : null}
      </div>
    </section>
  );
}

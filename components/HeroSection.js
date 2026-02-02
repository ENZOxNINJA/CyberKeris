export default function HeroSection({ title, subtitle, cta }) {
  return (
    <section className="container-grid">
      <div className="glass rounded-3xl px-8 py-16 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Cyberkeris Enterprise</p>
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

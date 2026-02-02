import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, title, description }) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Header />
      <main className="flex-1">
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.3em] text-cyber">
              Cyberkeris.com
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-ink">
              {title}
            </h1>
            {description ? (
              <p className="text-lg text-slate-600">{description}</p>
            ) : null}
          </div>
          {children}
        </section>
      </main>
      <Footer />
    </div>
  );
}

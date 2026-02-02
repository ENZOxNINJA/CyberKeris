import Link from "next/link";

export default function AdminHeader({ title }) {
  return (
    <header className="border-b border-white/10 bg-slate-950/80">
      <div className="container-grid flex flex-col gap-3 py-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Admin Console</p>
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
        </div>
        <div className="flex gap-3 text-sm text-slate-300">
          <Link href="/" className="hover:text-white">
            Back to site
          </Link>
          <button className="rounded-full border border-white/20 px-4 py-2 text-white">
            Sign out
          </button>
        </div>
      </div>
    </header>
  );
}

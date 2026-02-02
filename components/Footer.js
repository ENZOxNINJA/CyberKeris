export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© 2024 Cyberkeris. Securing digital futures.</p>
        <div className="flex gap-4">
          <a href="/privacy" className="hover:text-ink">
            Privacy
          </a>
          <a href="/terms" className="hover:text-ink">
            Terms
          </a>
          <a href="/careers" className="hover:text-ink">
            Careers
          </a>
        </div>
      </div>
    </footer>
  );
}

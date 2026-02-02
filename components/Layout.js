import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
  title = "CyberKeris",
  description = "Cybersecurity, software, and AI innovation for the enterprise.",
  children,
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f172a" />
      </Head>
      <Header />
      <main className="py-16">{children}</main>
      <Footer />
    </div>
  );
}

import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
  title = "CyberKeris",
  description = "Cybersecurity, software, and AI innovation for the enterprise.",
  children,
}) {
  return (
    <div className="min-h-screen bg-primary text-slate-100">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0D1117" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CyberKeris" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Header />
      <main className="py-16">{children}</main>
      <Footer />
    </div>
  );
}

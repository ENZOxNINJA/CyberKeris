import { useEffect } from "react";
import { Inter } from "next/font/google";
import "../styles/globals.css";

// Load the primary brand font once for the entire application.
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
      return;
    }

    navigator.serviceWorker.register("/service-worker.js").catch(() => {
      // Service worker registration should not block rendering.
    });
  }, []);

  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}

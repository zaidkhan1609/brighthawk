import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";

import { ConsultationProvider } from "@/app/context/ConsultationContext";
import ConsultationModal from "./components/ConsultationModal"; // ✅ ONLY ADDITION

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BrightHawk",
  description: "Empower Your Business with Smart Tech Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WNRMC9DL');`,
          }}
        />
      </head>

      <body className={inter.className}>
        {/* ✅ PROVIDER WRAPS EVERYTHING */}
        <ConsultationProvider>
          <NavBar />
          {children}
          <Footer />
          <Analytics />

          {/* ✅ THIS WAS THE ONLY MISSING PIECE */}
          <ConsultationModal />
        </ConsultationProvider>
      </body>
    </html>
  );
}

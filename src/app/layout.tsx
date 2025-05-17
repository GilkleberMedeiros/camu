import type { Metadata } from "next";
import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";


export const metadata: Metadata = {
  title: "Camu - LandPage para negócios físicos - Página principal",
  description: `
    camu é uma landpage com design minimalista criada e pensada 
    para pequenos negócios. Veja como será a página principal para o 
    seu negócio ou loja física.
  `,
  openGraph: {
    title: "Camu - LandPage para negócios físicos",
    description: "camu é uma landpage com design minimalista criada e pensada para pequenos negócios.", 
    siteName: "Camu",
    images: [
      {
        url: "/assets/tmp-logo.svg",
        width: 1200,
        height: 630,
        alt: "Camu - LandPage para negócios físicos",
      }
    ],
    locale: "pt_BR",
    type: "website"
  }, 
  twitter: {
    card: "summary_large_image",
    title: "Camu - LandPage para negócios físicos", 
    description: "camu é uma landpage com design minimalista criada e pensada para pequenos negócios.",
    images: ["/assets/tmp-logo.svg"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" style={{ minHeight: "100vh", height: "100vh" }}>
      <Head>
        <link
          rel="preload"
          href="/assets/fonts/Inter/Inter-VariableFont_opsz,wght.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body
        className="bg-main-white font-inter min-h-screen h-screen"
      >
        <GoogleTagManager gtmId="GTM-KB54ZM2M"/>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

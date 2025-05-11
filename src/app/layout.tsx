import type { Metadata } from "next";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" style={{ minHeight: "100vh", height: "100vh" }}>
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

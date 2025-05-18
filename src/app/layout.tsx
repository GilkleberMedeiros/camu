import type { Metadata } from "next";
import Head from "next/head";
import { WithContext, LocalBusiness } from "schema-dts";
import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import infos from "@/infos";


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
        url: "/assets/tmp-logo.png",
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
    images: ["/assets/tmp-logo.png"],
  }
};

const images = infos.infos.imageText;
const telephone = infos.infos.contact.phoneNumberDisplay;
const email = infos.infos.contact.email;

const schemaJsonLD: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness", 
  name: infos.name,
  email: email,
  telephone: telephone,
  image: images.map((v) => {
    return v.image.imageUrl;
  }), 
  description: "Camu é uma landpage com design minimalista criada e pensada para pequenos negócios.", 
  logo: "/assets/tmp-logo.png",
  url: "#invalid-url-example#.com", 
  priceRange: "R$15-200", 
  address: {
    "@type": "PostalAddress", 
    streetAddress: "R. da Cantareira, 306 - Centro Histórico de São Paulo", 
    addressLocality: "São Paulo", 
    addressRegion: "SP", 
    postalCode: "01024-900", 
    addressCountry: "BR"
  }, 
  geo: {
    "@type": "GeoCoordinates", 
    latitude: "-23.541893812743602", 
    longitude: "-46.628778102635096"
  }, 
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      opens: "07:00",
      closes: "17:00"
    }
  ], 
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

        {/* Json-LD Schema */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLD) }}
        />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

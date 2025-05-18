import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Camu - LandPage para negócios físicos - Página de localizações",
  description: `
    camu é uma landpage com design minimalista e responsivo criada e pensada 
    para pequenos negócios. Veja como será a página de localizações para seus 
    negócios ou lojas físicos.
  `,
  openGraph: {
    title: "Camu - LandPage para negócios físicos",
    description: `
      camu é uma landpage com design minimalista e responsivo criada e pensada para pequenos negócios.
    `, 
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
    description: `
      camu é uma landpage com design minimalista e responsivo criada e pensada para pequenos negócios.
    `,
    images: ["/assets/tmp-logo.png"],
  }
}

export default function LocalizacoesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return <>{children}</>;
}
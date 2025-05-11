import type { Metadata } from "next";

import RootLayout from "../layout";


export const metadata: Metadata = {
    title: "Camu - LandPage para negócios físicos - Página de localizações",
  description: `
    camu é uma landpage com design minimalista criada e pensada 
    para pequenos negócios. Veja como será a página de localizações para seus 
    negócios ou lojas físicos.
  `,
}

export default function LocalizacoesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return <>{children}</>;
}
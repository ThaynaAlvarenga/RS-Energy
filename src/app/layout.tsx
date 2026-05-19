import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RS Energy – Energia Solar por Assinatura",
  description: "Reduza sua conta de energia em até 40% com assinatura solar. Sem investimento inicial. Para residências, empresas e propriedades rurais.",
  openGraph: {
    title: "RS Energy – Energia Renovável",
    description: "Assinatura Solar sem investimento inicial.",
    url: "https://rsenergy.com.br",
    siteName: "RS Energy",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="font-sans bg-white text-navy-brand overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

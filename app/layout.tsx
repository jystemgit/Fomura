import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-manrope" });

export const metadata: Metadata = {
  metadataBase: new URL("https://fomura.com"),
  title: { default: "Fomura | Desarrollo Comercial", template: "%s | Fomura" },
  description: "Fomura ayuda a empresas, negocios y emprendedores a conseguir clientes y desarrollar su capacidad comercial mediante ventas, sistemas y formación en ventas",
  alternates: { canonical: "/" },
  openGraph: { title: "Fomura | Desarrollo Comercial", description: "Fomura ayuda a empresas, negocios y emprendedores a conseguir clientes y desarrollar su capacidad comercial mediante ventas, sistemas y formación en ventas", url: "https://fomura.com", siteName: "Fomura", locale: "es_AR", type: "website", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Fomura. La fórmula de tu éxito comercial" }] },
  twitter: { card: "summary_large_image", title: "Fomura | Desarrollo Comercial", description: "Ventas, sistemas comerciales y formación en ventas para desarrollar capacidad comercial", images: ["/og-image.png"] },
  keywords: ["desarrollo comercial", "adquisición de clientes", "ventas", "sistemas comerciales", "formación comercial", "capacitación en ventas", "generación de clientes"],
  authors: [{ name: "Fomura" }],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const structuredData = { "@context": "https://schema.org", "@type": "Organization", name: "Fomura", url: "https://fomura.com", logo: "https://fomura.com/brand/fomura-full-logo.png", description: "Empresa de adquisición de clientes y desarrollo comercial", founder: [{ "@type": "Person", name: "Augusto Valmont" }, { "@type": "Person", name: "Fermín Bettiga" }], email: "hola@fomura.com", sameAs: ["https://instagram.com/fomura.bb"] };
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body className={manrope.className}><Navbar />{children}<Footer /><WhatsAppButton /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body>
    </html>
  );
}

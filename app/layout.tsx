import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://fomura.com"),
  title: { default: "Fomura | Desarrollo comercial B2B", template: "%s | Fomura" },
  description: "Fomura diseña y construye sistemas comerciales para que empresas B2B consigan clientes, vendan mejor y crezcan con más claridad",
  alternates: { canonical: "/" },
  openGraph: { title: "Fomura | Desarrollo comercial B2B", description: "Diseñamos y construimos sistemas para adquirir y convertir clientes", url: "https://fomura.com", siteName: "Fomura", locale: "es_AR", type: "website", images: [{ url: "/brand/fomura-full-logo.png", width: 1983, height: 793, alt: "Fomura, desarrollo comercial B2B" }] },
  twitter: { card: "summary_large_image", title: "Fomura | Desarrollo comercial B2B", description: "Sistemas comerciales para empresas B2B", images: ["/brand/fomura-full-logo.png"] },
  keywords: ["desarrollo comercial B2B", "adquisición de clientes", "ventas B2B", "sistema comercial", "automatización comercial", "desarrollo de negocios"],
  authors: [{ name: "Fomura" }],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const structuredData = { "@context": "https://schema.org", "@type": "Organization", name: "Fomura", url: "https://fomura.com", logo: "https://fomura.com/brand/fomura-full-logo.png", description: "Desarrollo comercial B2B para adquirir clientes, vender mejor y construir capacidad comercial", email: "hola@fomura.com", sameAs: ["https://instagram.com/fomura.bb"] };
  return (
    <html lang="es">
      <body><Navbar />{children}<Footer /><WhatsAppButton /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body>
    </html>
  );
}

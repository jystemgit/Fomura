import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { WhyFomura } from "@/components/sections/WhyFomura";

export const metadata: Metadata = { title: "Nosotros", description: "Fomura es una empresa de adquisición de clientes y desarrollo comercial creada por Augusto Valmont y Fermín Bettiga", alternates: { canonical: "/nosotros" } };

export default function NosotrosPage() {
  return <main><section className="page-intro about-intro"><Container><p className="eyebrow">Sobre Fomura</p><h1>La fórmula de tu éxito comercial</h1><p>Fomura es una empresa de adquisición de clientes y desarrollo comercial creada por Augusto Valmont y Fermín Bettiga</p></Container></section><section className="section about-story"><Container className="about-grid"><SectionHeading eyebrow="Por qué existimos" title="Saber vender es una capacidad que se puede desarrollar" /><div><p>Fomura existe para ayudar a emprendedores, negocios y empresas a desarrollar su capacidad comercial</p><p>Enseñar y sistematizar una de las habilidades más importantes que un negocio puede desarrollar es el centro de nuestro propósito: saber vender</p><p>El crecimiento comercial puede construirse, medirse, optimizarse y sistematizarse</p></div></Container></section><WhyFomura /><FinalCTA /></main>;
}

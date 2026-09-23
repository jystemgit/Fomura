import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { principles } from "@/lib/content";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = { title: "Nosotros | Fomura", description: "Fomura es una compañía de desarrollo comercial B2B creada por Augusto y Fermín", alternates: { canonical: "/nosotros" } };

export default function NosotrosPage() {
  return <main><section className="page-intro about-intro"><Container><p className="eyebrow">Sobre Fomura</p><h1>El crecimiento comercial se puede diseñar, construir y optimizar</h1><p>Fomura es una compañía de desarrollo comercial B2B creada por Augusto + Fermín</p></Container></section><section className="section about-story"><Container className="about-grid"><SectionHeading eyebrow="Por qué existimos" title="La fórmula no es magia. Es entender qué variables mover" /><div><p>Creemos que una empresa no debería depender de la casualidad para conseguir clientes y vender. El crecimiento se vuelve más posible cuando la estrategia, la ejecución y la tecnología trabajan sobre un mismo sistema</p><p>Por eso Fomura existe: para ayudar a empresas B2B a construir la capacidad comercial que necesitan, con claridad sobre qué funciona, qué no y qué puede mejorar</p></div></Container></section><section className="section about-principles"><Container><SectionHeading eyebrow="Lo que creemos" title="Estrategia y ejecución pertenecen al mismo equipo" /><div className="principles-list">{principles.map((principle) => <article key={principle.title}><div><h3>{principle.title}</h3><p>{principle.description}</p></div></article>)}</div></Container></section><FinalCTA /></main>;
}

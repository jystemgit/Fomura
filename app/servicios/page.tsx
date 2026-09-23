import type { Metadata } from "next";
import { serviceGroups } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = { title: "Servicios | Fomura", description: "Construimos capacidad comercial para empresas B2B desde la adquisición hasta el desarrollo comercial", alternates: { canonical: "/servicios" } };

export default function ServiciosPage() {
  return <main><section className="page-intro"><Container><p className="eyebrow">Lo que construimos</p><h1>Construimos capacidad comercial</h1><p>Fomura integra adquisición, ventas, sistemas y desarrollo para que el crecimiento comercial pueda sostenerse y mejorar</p></Container></section><section className="section services-list-section"><Container><SectionHeading eyebrow="Áreas de trabajo" title="Un sistema conectado, cuatro áreas de impacto" /> <div className="service-groups">{serviceGroups.map((group) => <article className="service-group" key={group.title}><div><h2>{group.title}</h2><p className="service-outcome">{group.outcome}</p><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div></article>)}</div></Container></section><FinalCTA /></main>;
}

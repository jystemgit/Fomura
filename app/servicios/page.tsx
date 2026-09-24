import type { Metadata } from "next";
import { serviceDetails } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Servicios", description: "Desarrollo comercial a través de ventas, sistemas comerciales y formación en ventas", alternates: { canonical: "/servicios" } };

export default function ServiciosPage() {
  return <main><section className="page-intro services-intro"><Container><p className="eyebrow">Desarrollo comercial</p><h1>Tres formas de desarrollar tu capacidad comercial</h1><p>Fomura puede hacerlo, sistematizarlo y enseñarlo</p></Container></section><section className="section services-detail-section"><Container><SectionHeading eyebrow="Las unidades Fomura" title="Una arquitectura comercial conectada" /><div className="service-details">{serviceDetails.map((service) => <article className="service-detail" key={service.title}><div className="service-detail-heading"><p className="service-kicker">{service.title}</p><h2>{service.headline}</h2><p>{service.description}</p></div><div className="service-detail-body"><ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul><div className="service-model"><span>Cómo funciona</span><strong>{service.model}</strong></div><Button href={`/contacto?interes=${service.title.toLowerCase()}`}>{service.title === "Vender" ? "Quiero vender más" : service.title === "Sistematizar" ? "Mejorar mi sistema comercial" : "Quiero formarme"}</Button></div></article>)}</div></Container></section><FinalCTA /></main>;
}

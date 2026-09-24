import { businessUnits } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BusinessUnits() {
  return <section className="section units-section" id="unidades"><Container><SectionHeading eyebrow="La arquitectura Fomura" title="Tres formas de desarrollar tu capacidad comercial" description="Una misma compañía, tres maneras conectadas de hacer, ordenar y enseñar la venta" /><div className="units-grid">{businessUnits.map((unit) => <article className="unit-card" key={unit.title}><div className="unit-card-top"><h3>{unit.title}</h3></div><h4>{unit.headline}</h4><p className="unit-lead">{unit.description}</p><p className="unit-detail">{unit.detail}</p><Button href={unit.href} variant="secondary">{unit.cta}</Button></article>)}</div></Container></section>;
}

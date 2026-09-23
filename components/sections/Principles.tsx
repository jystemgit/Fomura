import { principles } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Principles() {
  return (
    <section className="section principles-section"><Container><SectionHeading eyebrow="Por qué Fomura" title="Principios para construir capacidad, no solo actividad" /><div className="principles-list">{principles.map((principle) => <article key={principle.title}><div><h3>{principle.title}</h3><p>{principle.description}</p></div></article>)}</div></Container></section>
  );
}

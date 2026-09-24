import { principles } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyFomura() {
  return <section className="section why-section"><Container><SectionHeading eyebrow="Por qué Fomura" title="Podemos hacerlo, sistematizarlo y enseñarlo" /><div className="principle-grid">{principles.map((principle) => <article key={principle.title}><h3>{principle.title}</h3><p>{principle.description}</p></article>)}</div></Container></section>;
}

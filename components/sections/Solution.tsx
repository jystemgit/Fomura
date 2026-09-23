import { pillars } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Solution() {
  return (
    <section className="section solution-section">
      <Container>
        <div className="solution-intro"><SectionHeading eyebrow="La respuesta Fomura" title="Convertimos el crecimiento comercial en un sistema" description="Trabajamos sobre las variables que hacen que una empresa pueda adquirir, convertir y crecer con más previsibilidad" /><span className="formula-mark" aria-hidden="true">f(x) = <b>crecimiento</b></span></div>
        <div className="pillar-grid">{pillars.map((pillar) => <article className="pillar-card" key={pillar.title}><h3>{pillar.title}</h3><p>{pillar.description}</p><span className="card-detail">{pillar.detail}</span></article>)}</div>
      </Container>
    </section>
  );
}

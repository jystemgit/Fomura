import { processSteps } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <section className="section process-section">
      <Container>
        <SectionHeading eyebrow="Cómo trabajamos" title="Del diagnóstico a un sistema que mejora" description="No empezamos por una herramienta, empezamos por entender qué necesita el negocio para crecer" />
        <div className="process-track">{processSteps.map((step) => <article className="process-step" key={step.title}><div className="step-top" aria-hidden="true"><i /></div><h3>{step.title}</h3><p>{step.description}</p></article>)}</div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Problem() {
  return (
    <section className="section problem-section" id="problema">
      <Container className="problem-grid">
        <SectionHeading eyebrow="El desafío" title="Un buen negocio necesita un sistema comercial que lo acompañe" />
        <div className="problem-copy"><p>Podés tener una gran oferta, un equipo sólido y un mercado con potencial sin un sistema que conecte adquisición, ventas y operación</p><p>El resultado suele ser conocido: meses buenos y malos, seguimientos que se pierden, datos dispersos y decisiones difíciles de medir</p></div>
      </Container>
    </section>
  );
}

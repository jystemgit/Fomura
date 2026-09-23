import { capabilities } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Capabilities() {
  return (
    <section className="section capabilities-section">
      <Container className="capabilities-grid"><SectionHeading eyebrow="Capacidades" title="Las piezas que hacen funcionar el sistema" description="Combinamos capacidades según el punto en el que está tu empresa, sin un catálogo cerrado y con foco en el problema comercial a resolver" /><div className="capability-list">{capabilities.map((capability) => <div className="capability-item" key={capability}><strong>{capability}</strong></div>)}</div></Container>
    </section>
  );
}

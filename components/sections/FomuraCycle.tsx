import { commercialCycle } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

function Flow({ items }: { items: string[] }) { return <div className="flow-list">{items.map((item, index) => <span key={item} className={index === 0 ? "flow-active" : ""}>{item}</span>)}</div>; }

export function FomuraCycle() {
  return <section className="section cycle-section"><Container><SectionHeading eyebrow="El ciclo Fomura" title="Hacer, medir, aprender y desarrollar capacidad" description="La evolución de Fomura parte de la ejecución comercial y convierte lo aprendido en sistemas y formación" /><Flow items={commercialCycle} /></Container></section>;
}

export function OperatingModel() {
  return <section className="section operating-section"><Container className="operating-layout"><SectionHeading eyebrow="Cómo operamos" title="Una operación que conecta la venta con el aprendizaje" /><div><Flow items={["Prospección", "Contacto", "Seguimiento", "Negociación", "Cierre", "Medición"]} /><p className="operating-note">En cada etapa buscamos claridad sobre lo que ocurre para poder ajustar y mejorar</p></div></Container></section>;
}

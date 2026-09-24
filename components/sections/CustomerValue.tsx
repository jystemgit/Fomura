import { thinkingModel, operatingModel } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

function CompactFlow({ items }: { items: string[] }) { return <div className="compact-flow">{items.map((item) => <span key={item}>{item}</span>)}</div>; }

export function CustomerValue() {
  return <><section className="section value-section"><Container className="value-layout"><SectionHeading eyebrow="Qué compra el cliente" title="Capacidad comercial y resultados" /><div className="value-columns"><article><h3>Vender</h3><p>Nuevos clientes y nuevas ventas</p></article><article><h3>Sistematizar</h3><p>Mejor capacidad y sistemas comerciales</p></article><article><h3>Formar</h3><p>Vendedores y equipos capacitados</p></article></div></Container></section><section className="section thinking-section"><Container><SectionHeading eyebrow="Cómo pensamos" title="Plan, acción, medición, aprendizaje, ajuste" description="Priorizamos la ejecución y usamos la evidencia para decidir qué hacer después" /><CompactFlow items={thinkingModel} /><div className="operating-mini"><span>Operación comercial</span><CompactFlow items={operatingModel} /></div></Container></section></>;
}

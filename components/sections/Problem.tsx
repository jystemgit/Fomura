import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Problem() {
  return <section className="section problem-section"><Container className="problem-layout"><SectionHeading eyebrow="El problema" title="Un buen producto no alcanza si no existe capacidad comercial" /><div className="problem-copy"><p>Una empresa puede tener un buen producto, un buen servicio, una buena idea, un mercado y capacidad operativa</p><p>Sin una forma consistente de adquirir clientes, vender, medir y mejorar, la oferta no siempre llega a las personas que la necesitan</p><div className="equation" aria-label="Producto más mercado más capacidad operativa no necesariamente equivale a ventas"><span>Producto</span><i>+</i><span>Mercado</span><i>+</i><span>Capacidad operativa</span><b>≠</b><strong>Ventas</strong></div></div></Container></section>;
}

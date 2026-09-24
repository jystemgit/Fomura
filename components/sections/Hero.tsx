import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { whatsappUrl } from "@/lib/contact";

export function SystemVisual() {
  return <div className="system-visual" aria-label="Visualización de desarrollo comercial" role="img"><div className="visual-grid" /><div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /><div className="visual-line line-a" /><div className="visual-line line-b" /><div className="visual-line line-c" /><div className="visual-node node-a" /><div className="visual-node node-b" /><div className="visual-node node-c" /><div className="visual-node node-d" /><div className="visual-core"><Image src="/brand/fomura-isotipo.png" alt="" width={72} height={72} /></div><span className="visual-label label-a">Hacer</span></div>;
}

export function Hero() {
  return <section className="hero"><Container className="hero-grid"><div className="hero-copy"><p className="eyebrow hero-eyebrow"><span className="eyebrow-dot" /> Desarrollo comercial</p><h1>La fórmula de tu <em>éxito comercial</em></h1><p className="hero-lede">Ayudamos a empresas, negocios y emprendedores a conseguir clientes y desarrollar su capacidad comercial</p><div className="hero-units"><span>Vendemos</span><span>Sistematizamos</span><span>Formamos</span></div><div className="hero-actions"><Button href={whatsappUrl}>Hablemos</Button><Button href="#unidades" variant="text">Conocé cómo trabajamos</Button></div></div><SystemVisual /></Container><div className="hero-scroll" aria-hidden="true"><span /> Conocé Fomura</div></section>;
}

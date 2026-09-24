import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FomuraIntro() {
  return <section className="section fomura-intro"><Container className="intro-layout"><SectionHeading eyebrow="Qué es Fomura" title="Desarrollo comercial" description="Fomura es una empresa de adquisición de clientes y desarrollo comercial" /><div className="intro-copy"><p>Ayudamos a empresas, negocios y emprendedores a desarrollar su capacidad comercial a través de tres formas concretas</p><div className="intro-words"><strong>Vender</strong><strong>Sistematizar</strong><strong>Formar</strong></div></div></Container></section>;
}

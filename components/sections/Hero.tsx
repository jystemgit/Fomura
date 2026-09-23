import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

export function SystemVisual() {
  return (
    <div className="system-visual" aria-label="Visualización abstracta de un sistema comercial" role="img">
      <div className="visual-grid" />
      <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
      <div className="visual-node node-a" /><div className="visual-node node-b" /><div className="visual-node node-c" /><div className="visual-node node-d" />
      <div className="visual-line line-a" /><div className="visual-line line-b" /><div className="visual-line line-c" />
      <div className="visual-core"><Image src="/brand/fomura-isotipo.png" alt="" width={72} height={72} /></div>
      <div className="visual-label label-a">Oportunidad</div><div className="visual-label label-b">Conversión</div><div className="visual-label label-c">Capacidad</div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero">
      <Container className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="eyebrow-dot" /> Desarrollo comercial B2B</p>
          <h1>La fórmula de tu <em>éxito comercial</em></h1>
          <p className="hero-lede">Diseñamos sistemas para que empresas B2B consigan clientes, vendan mejor y crezcan con más claridad</p>
          <div className="hero-actions"><Button href="/contacto">Hablemos</Button><Button href="/servicios" variant="text">Cómo trabajamos</Button></div>
          <p className="hero-note">Estrategia · adquisición · ventas · sistemas</p>
        </div>
        <SystemVisual />
      </Container>
      <div className="hero-scroll" aria-hidden="true"><span /> Conocé Fomura</div>
    </section>
  );
}

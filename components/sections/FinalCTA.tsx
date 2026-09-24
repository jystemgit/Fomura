import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { whatsappUrl } from "@/lib/contact";

export function FinalCTA() {
  return <section className="final-cta"><Container><p className="eyebrow">El próximo paso</p><h2>¿Querés desarrollar tu capacidad comercial?</h2><p>Contanos qué vendés, cómo conseguís clientes actualmente y qué querés mejorar</p><Button href={whatsappUrl} className="final-cta-button">Hablemos</Button></Container></section>;
}

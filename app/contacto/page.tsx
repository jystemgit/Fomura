import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = { title: "Contacto", description: "Hablemos sobre cómo desarrollar tu capacidad comercial", alternates: { canonical: "/contacto" } };

export default function ContactoPage() {
  return <main><section className="page-intro contact-intro"><Container><p className="eyebrow">Hablemos</p><h1>Hablemos de tu capacidad comercial</h1><p>Contanos qué vendés, cómo conseguís clientes actualmente y qué querés mejorar</p></Container></section><section className="section contact-section"><Container className="contact-grid"><div className="contact-aside"><h2>Empecemos por el desafío</h2><p>Una buena conversación parte de entender qué ofrecés, dónde están tus clientes y qué necesitás desarrollar</p><div className="contact-line" /></div><ContactForm /></Container></section></main>;
}

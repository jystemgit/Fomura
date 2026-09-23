import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = { title: "Contacto | Fomura", description: "Hablemos sobre cómo construir un sistema comercial para tu empresa", alternates: { canonical: "/contacto" } };

export default function ContactoPage() {
  return <main><section className="page-intro contact-intro"><Container><p className="eyebrow">Abramos la conversación</p><h1>¿Qué parte de tu sistema comercial podría mejorar?</h1><p>Contanos dónde está hoy tu empresa. Vamos a entender el desafío antes de pensar una respuesta</p></Container></section><section className="section contact-section"><Container className="contact-grid"><div className="contact-aside"><h2>Hablemos</h2><p>Una buena conversación empieza con un problema concreto</p><div className="contact-line" /></div><ContactForm /></Container></section></main>;
}

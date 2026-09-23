"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }
  if (sent) return <div className="form-success"><span>✓</span><h2>Recibimos tu mensaje</h2><p>Gracias por escribirnos. Te vamos a contactar para conocer mejor tu desafío comercial</p><button type="button" onClick={() => setSent(false)}>Enviar otro mensaje</button></div>;
  return <form className="contact-form" onSubmit={handleSubmit}>
    <div className="form-row"><label>Nombre<input name="nombre" type="text" required autoComplete="name" placeholder="Tu nombre" /></label><label>Empresa<input name="empresa" type="text" required autoComplete="organization" placeholder="Nombre de tu empresa" /></label></div>
    <div className="form-row"><label>Email<input name="email" type="email" required autoComplete="email" placeholder="tu@email.com" /></label><label>WhatsApp / teléfono<input name="telefono" type="tel" autoComplete="tel" placeholder="Tu número" /></label></div>
    <label>¿Qué querés mejorar?<select name="objetivo" defaultValue=""><option value="" disabled>Elegí una opción</option><option>Conseguir más clientes</option><option>Mejorar el proceso de ventas</option><option>Ordenar la operación comercial</option><option>Explorar una nueva oportunidad</option><option>Otro desafío</option></select></label>
    <label>Mensaje<textarea name="mensaje" required rows={5} placeholder="Contanos brevemente dónde está hoy tu empresa"></textarea></label>
    <Button type="submit">Hablemos</Button>
  </form>;
}

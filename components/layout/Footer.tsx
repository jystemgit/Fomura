import Link from "next/link";
import { navItems } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { FomuraLogo } from "./Logo";

function ContactIcon({ type }: { type: "mail" | "phone" | "instagram" }) {
  if (type === "mail") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 5.5h17v13h-17z" /><path d="m4 7 8 6 8-6" /></svg>;
  if (type === "phone") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 3.8 9.8 3l1.6 4-2.1 1.3a14 14 0 0 0 6.4 6.4l1.3-2.1 4 1.6-.8 2.6c-.3 1-1.3 1.7-2.4 1.6A15.8 15.8 0 0 1 5.6 6.2c-.1-1.1.6-2.1 1.6-2.4Z" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.5" /><circle cx="17.3" cy="6.8" r="1" className="icon-fill" /></svg>;
}

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-main">
          <div><FomuraLogo /><p>La fórmula de tu éxito comercial</p></div>
          <nav aria-label="Navegación del pie de página">
            {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </nav>
          <div className="footer-links"><Link className="footer-contact" href="/contacto"><ContactIcon type="mail" /> Iniciemos una conversación</Link><a href="mailto:hola@fomura.com"><ContactIcon type="mail" /> hola@fomura.com</a><a href="tel:+5492922432839"><ContactIcon type="phone" /> +54 9 2922 43 2839</a><a href="https://instagram.com/fomura.bb" target="_blank" rel="noreferrer"><ContactIcon type="instagram" /> @fomura.bb</a></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Fomura</span><span>Desarrollo comercial</span></div>
      </Container>
    </footer>
  );
}

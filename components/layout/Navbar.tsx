"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { whatsappUrl } from "@/lib/contact";
import { FomuraLogo } from "./Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="site-header">
      <Container className="nav-shell">
        <FomuraLogo />
        <button className={`menu-toggle ${open ? "is-open" : ""}`} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation" aria-label={open ? "Cerrar menú" : "Abrir menú"}>
          <span /><span /><span />
        </button>
        <nav id="main-navigation" className={`main-nav ${open ? "is-open" : ""}`} aria-label="Navegación principal">
          {navItems.map((item) => <Link key={item.href} href={item.href} className={pathname === item.href ? "is-active" : ""} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}</Link>)}
          <Button href={whatsappUrl}>Hablemos</Button>
        </nav>
      </Container>
    </header>
  );
}

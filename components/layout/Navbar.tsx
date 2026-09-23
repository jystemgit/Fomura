"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FomuraLogo } from "./Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Container className="nav-shell">
        <FomuraLogo />
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation" aria-label={open ? "Cerrar menú" : "Abrir menú"}>
          <span /><span />
        </button>
        <nav id="main-navigation" className={`main-nav ${open ? "is-open" : ""}`} aria-label="Navegación principal">
          {navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
          <Button href="/contacto">Hablemos</Button>
        </nav>
      </Container>
    </header>
  );
}

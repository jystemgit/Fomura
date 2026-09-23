import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Process } from "@/components/sections/Process";
import { Capabilities } from "@/components/sections/Capabilities";
import { Principles } from "@/components/sections/Principles";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Fomura | Desarrollo comercial B2B",
  description: "Fomura diseña y construye sistemas comerciales para que empresas B2B consigan clientes, vendan mejor y crezcan con más claridad",
  alternates: { canonical: "/" },
};

export default function Home() {
  return <main><Hero /><Problem /><Solution /><Process /><Capabilities /><Principles /><FinalCTA /></main>;
}

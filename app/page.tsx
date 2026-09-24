import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { FomuraIntro } from "@/components/sections/FomuraIntro";
import { BusinessUnits } from "@/components/sections/BusinessUnits";
import { FomuraCycle, OperatingModel } from "@/components/sections/FomuraCycle";
import { CustomerValue } from "@/components/sections/CustomerValue";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { WhyFomura } from "@/components/sections/WhyFomura";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Fomura | Desarrollo Comercial",
  description: "Fomura ayuda a empresas, negocios y emprendedores a conseguir clientes y desarrollar su capacidad comercial mediante ventas, sistemas y formación",
  alternates: { canonical: "/" },
};

export default function Home() {
  return <main><Hero /><Problem /><FomuraIntro /><BusinessUnits /><FomuraCycle /><OperatingModel /><CustomerValue /><WhyFomura /><WhoWeHelp /><FinalCTA /></main>;
}

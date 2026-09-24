export const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export const businessUnits = [
  {
    title: "Vender",
    headline: "Vendemos tu producto por vos",
    description: "Vos tenés el producto. Nosotros desarrollamos la venta.",
    detail: "Analizamos la oferta, preparamos el abordaje comercial y ejecutamos prospección, contacto, seguimiento, negociación, cierre y medición.",
    status: "Operación actual",
    cta: "Quiero vender más",
    href: "/contacto?interes=vender",
  },
  {
    title: "Sistematizar",
    headline: "Mejoramos tus sistemas comerciales",
    description: "Convertimos la actividad comercial en una estructura más ordenada, medible, repetible y mejorable.",
    detail: "Trabajamos sobre diagnóstico, procesos, CRM, automatización, documentación, métricas y optimización para desarrollar capacidad.",
    status: "Unidad en desarrollo",
    cta: "Mejorar mi sistema comercial",
    href: "/contacto?interes=sistematizar",
  },
  {
    title: "Formar",
    headline: "Capacitamos y formamos en ventas",
    description: "Desarrollamos personas y equipos capaces de vender profesionalmente.",
    detail: "Conocimiento, práctica y feedback para empresas que quieren formar vendedores y personas que quieren desarrollar una capacidad profesional.",
    status: "Unidad en desarrollo",
    cta: "Quiero formarme",
    href: "/contacto?interes=formar",
  },
];

export const salesActivities = ["Análisis", "Preparación", "Prospección", "Contacto", "Seguimiento", "Negociación", "Cierre", "Medición"];
export const commercialCycle = ["Vender", "Generar resultados", "Medir", "Aprender", "Sistematizar", "Formar", "Escalar"];
export const operatingModel = ["Adquirir", "Vender", "Entregar", "Medir", "Aprender", "Sistematizar"];
export const thinkingModel = ["Plan", "Acción", "Medición", "Aprendizaje", "Ajuste"];

export const principles = [
  { title: "Hacemos", description: "No nos limitamos a recomendar. Ejecutamos la actividad comercial y aprendemos de lo que ocurre." },
  { title: "Medimos", description: "Buscamos datos y resultados para evaluar qué está pasando y tomar mejores decisiones." },
  { title: "Aprendemos", description: "La metodología surge de la experiencia, la experimentación, los resultados y la documentación." },
  { title: "Sistematizamos", description: "Convertimos conocimiento comercial en procesos aplicables y repetibles." },
  { title: "Formamos", description: "El conocimiento comercial puede convertirse en capacidad en personas y equipos." },
];

export const serviceDetails = [
  {
    title: "Vender",
    headline: "Vendemos tu producto por vos",
    description: "Fomura trabaja comercialmente con productos y servicios de terceros, genera clientes para sus clientes y cobra una comisión por las ventas generadas.",
    items: salesActivities,
    model: "Comisión por las ventas generadas",
  },
  {
    title: "Sistematizar",
    headline: "Mejoramos tus sistemas comerciales",
    description: "Ordenamos la actividad comercial para desarrollar una capacidad más estructurada, medible, repetible y mejorable.",
    items: ["Diagnóstico", "Diseño de procesos", "CRM", "Automatización", "Documentación", "Métricas", "Optimización"],
    model: "La tecnología como medio para aumentar capacidad y eficiencia",
  },
  {
    title: "Formar",
    headline: "Capacitamos y formamos en ventas",
    description: "Desarrollamos personas y equipos capaces de vender de forma profesional, con conocimiento, práctica y feedback.",
    items: ["Formación de vendedores", "Equipos comerciales", "Habilidades de venta", "Práctica", "Feedback", "Desarrollo profesional"],
    model: "Para empresas y para personas",
  },
];

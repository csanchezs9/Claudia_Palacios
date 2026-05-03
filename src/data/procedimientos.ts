export type Procedimiento = {
  slug: string;
  name: string;
  short: string;
  description: string;
  benefits: string[];
  duration: string;
  category: "estetica" | "clinica" | "laser" | "tecnologia";
  faq: { q: string; a: string }[];
  image?: string;
};

const SLUGS_WITH_IMG = new Set([
  "biopsia-cutanea",
  "cirugia-dermatologica",
  "criocirugia",
  "geneo",
  "laser-co2-fraccionado",
  "luz-pulsada-intensa",
  "peeling-quimico",
  "plasma-rico-plaquetas",
  "spectrum-mask",
]);

export function procImage(slug: string): string | undefined {
  return SLUGS_WITH_IMG.has(slug) ? `/img/procedimientos/${slug}.jpg` : undefined;
}

export const PROCEDIMIENTOS: Procedimiento[] = [
  {
    slug: "toxina-botulinica",
    name: "Toxina Botulínica (Botox)",
    short: "Suaviza líneas de expresión y previene arrugas dinámicas.",
    description:
      "Aplicación de toxina botulínica tipo A para tratar líneas de expresión en frente, entrecejo y patas de gallo. Resultado natural y rejuvenecedor con duración de 4 a 6 meses.",
    benefits: [
      "Reduce arrugas dinámicas",
      "Previene profundización de líneas",
      "Resultado natural sin pérdida de expresión",
      "Procedimiento ambulatorio sin recuperación",
    ],
    duration: "20-30 minutos",
    category: "estetica",
    faq: [
      { q: "¿Cuánto duran los resultados?", a: "Entre 4 y 6 meses dependiendo del paciente y la zona tratada." },
      { q: "¿Es doloroso?", a: "Las microinyecciones causan una molestia mínima, similar a una picadura leve." },
    ],
  },
  {
    slug: "acido-hialuronico",
    name: "Ácido Hialurónico",
    short: "Rellena, hidrata y restaura volumen facial perdido.",
    description:
      "Inyección de ácido hialurónico de grado médico para rellenar surcos, dar volumen a labios, pómulos y mentón, y mejorar la calidad de la piel. Resultados visibles inmediatos.",
    benefits: [
      "Volumen natural y armónico",
      "Hidratación profunda",
      "Resultados inmediatos",
      "Reversible si se requiere",
    ],
    duration: "30-45 minutos",
    category: "estetica",
    faq: [
      { q: "¿Cuánto dura el efecto?", a: "Entre 9 y 18 meses según producto y zona aplicada." },
    ],
  },
  {
    slug: "laser-co2-fraccionado",
    name: "Láser CO2 Fraccionado",
    short: "Renueva la piel: cicatrices, arrugas y manchas.",
    description:
      "Láser ablativo fraccionado que estimula la regeneración cutánea y la producción de colágeno. Trata cicatrices de acné, arrugas finas y profundas, y mejora la textura general.",
    benefits: [
      "Mejora cicatrices de acné",
      "Reduce arrugas profundas",
      "Estimula colágeno",
      "Unifica el tono de piel",
    ],
    duration: "45-60 minutos",
    category: "laser",
    faq: [
      { q: "¿Cuántas sesiones se necesitan?", a: "Generalmente 1 a 3 sesiones espaciadas según indicación." },
    ],
  },
  {
    slug: "luz-pulsada-intensa",
    name: "Luz Pulsada Intensa (IPL)",
    short: "Trata manchas, rojeces y rejuvenece la piel.",
    description:
      "Tecnología IPL que actúa sobre lesiones pigmentadas, vasculares y mejora la textura de la piel sin tiempo de recuperación.",
    benefits: ["Reduce manchas solares", "Atenúa rojeces y telangiectasias", "Sin downtime"],
    duration: "30-45 minutos",
    category: "laser",
    faq: [],
  },
  {
    slug: "peeling-quimico",
    name: "Peeling Químico",
    short: "Renueva la superficie cutánea con ácidos médicos.",
    description:
      "Aplicación controlada de ácidos para exfoliar capas superficiales o medias de la piel. Mejora textura, manchas, acné y signos de envejecimiento.",
    benefits: ["Mejora manchas y melasma", "Trata acné activo", "Renueva textura"],
    duration: "30 minutos",
    category: "clinica",
    faq: [],
  },
  {
    slug: "plasma-rico-plaquetas",
    name: "Plasma Rico en Plaquetas (PRP)",
    short: "Bioestimulación con factores de crecimiento propios.",
    description:
      "Tratamiento que utiliza plasma del propio paciente, rico en factores de crecimiento, para regenerar la piel, tratar caída del cabello y rejuvenecer.",
    benefits: ["Estimula colágeno", "Mejora cabello y alopecia", "100% biocompatible"],
    duration: "45 minutos",
    category: "estetica",
    faq: [],
  },
  {
    slug: "criocirugia",
    name: "Criocirugía",
    short: "Eliminación de lesiones cutáneas con frío controlado.",
    description:
      "Aplicación de nitrógeno líquido para eliminar verrugas, queratosis y otras lesiones benignas de la piel.",
    benefits: ["Procedimiento rápido", "Sin sutura", "Cicatrización mínima"],
    duration: "10-15 minutos",
    category: "clinica",
    faq: [],
  },
  {
    slug: "biopsia-cutanea",
    name: "Biopsia Cutánea",
    short: "Diagnóstico preciso de lesiones sospechosas.",
    description:
      "Procedimiento ambulatorio para obtener una muestra de piel y enviarla a estudio histopatológico. Esencial para descartar cáncer de piel.",
    benefits: ["Diagnóstico definitivo", "Procedimiento seguro", "Resultado histopatológico"],
    duration: "20-30 minutos",
    category: "clinica",
    faq: [],
  },
  {
    slug: "cirugia-dermatologica",
    name: "Cirugía Dermatológica",
    short: "Extracción quirúrgica de lesiones cutáneas.",
    description:
      "Procedimiento quirúrgico ambulatorio para retirar lunares, quistes, lipomas y lesiones tumorales con sutura estética.",
    benefits: ["Cierre estético", "Anestesia local", "Recuperación rápida"],
    duration: "30-90 minutos",
    category: "clinica",
    faq: [],
  },
  {
    slug: "depilacion-laser",
    name: "Depilación Láser",
    short: "Eliminación definitiva del vello con láser de diodo.",
    description:
      "Tecnología láser segura para todo tipo de piel que reduce permanentemente el crecimiento del vello.",
    benefits: ["Resultado duradero", "Indoloro con sistema de enfriamiento", "Todas las áreas"],
    duration: "15-60 minutos según zona",
    category: "laser",
    faq: [],
  },
  {
    slug: "geneo",
    name: "Geneo",
    short: "Oxigenación, exfoliación e infusión en una sesión.",
    description:
      "Tecnología 3 en 1 que combina exfoliación, oxigenación e infusión de activos para una piel luminosa de inmediato.",
    benefits: ["Resultado inmediato", "Sin downtime", "Hidratación profunda"],
    duration: "45 minutos",
    category: "tecnologia",
    faq: [],
  },
  {
    slug: "spectrum-mask",
    name: "Spectrum Mask",
    short: "Fototerapia LED para regeneración cutánea.",
    description:
      "Máscara LED multicolor que trata acné, mejora colágeno, calma inflamación y rejuvenece según longitud de onda.",
    benefits: ["Anti-acné", "Rejuvenecedor", "Calma rojeces"],
    duration: "20-30 minutos",
    category: "tecnologia",
    faq: [],
  },
  {
    slug: "mesoterapia",
    name: "Mesoterapia Facial",
    short: "Microinyecciones de vitaminas y antioxidantes.",
    description:
      "Aplicación intradérmica de vitaminas, ácido hialurónico y antioxidantes para hidratar, iluminar y mejorar la calidad de la piel.",
    benefits: ["Luminosidad", "Hidratación profunda", "Antioxidante"],
    duration: "30 minutos",
    category: "estetica",
    faq: [],
  },
  {
    slug: "hilos-tensores",
    name: "Hilos Tensores",
    short: "Lifting facial sin cirugía.",
    description:
      "Inserción de hilos absorbibles para reposicionar tejidos y estimular colágeno. Efecto lifting natural.",
    benefits: ["Efecto lifting inmediato", "Estimula colágeno", "Sin cirugía"],
    duration: "60 minutos",
    category: "estetica",
    faq: [],
  },
  {
    slug: "radiofrecuencia",
    name: "Radiofrecuencia",
    short: "Tensa la piel y reduce flacidez.",
    description:
      "Energía electromagnética que calienta capas profundas de la piel para estimular colágeno y elastina.",
    benefits: ["Reduce flacidez", "Indoloro", "Sin downtime"],
    duration: "30-45 minutos",
    category: "tecnologia",
    faq: [],
  },
  {
    slug: "microneedling",
    name: "Microneedling",
    short: "Inducción de colágeno con microagujas.",
    description:
      "Microcanales en la piel que activan procesos de regeneración natural y mejoran cicatrices, poros y textura.",
    benefits: ["Reduce poros", "Mejora cicatrices", "Estimula colágeno"],
    duration: "45 minutos",
    category: "clinica",
    faq: [],
  },
];

export function getProcedimiento(slug: string) {
  return PROCEDIMIENTOS.find((p) => p.slug === slug);
}

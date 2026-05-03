export type Enfermedad = {
  slug: string;
  name: string;
  short: string;
  description: string;
  symptoms: string[];
  treatments: string[];
};

const ENF_SLUGS_WITH_IMG = new Set([
  "acne",
  "alopecia",
  "cancer-de-piel",
  "dermatitis-atopica",
  "hiperhidrosis",
  "melasma",
]);

export function enfImage(slug: string): string | undefined {
  return ENF_SLUGS_WITH_IMG.has(slug) ? `/img/enfermedades/${slug}.jpg` : undefined;
}

export const ENFERMEDADES: Enfermedad[] = [
  {
    slug: "acne",
    name: "Acné",
    short: "Tratamiento integral del acné en todas sus fases.",
    description:
      "El acné es una enfermedad crónica de la piel que afecta los folículos pilosebáceos. Requiere tratamiento personalizado según tipo, severidad y edad del paciente.",
    symptoms: ["Comedones", "Pústulas", "Nódulos inflamatorios", "Cicatrices residuales"],
    treatments: ["Tratamiento tópico y oral", "Peelings químicos", "Spectrum Mask LED", "Láser CO2 para cicatrices"],
  },
  {
    slug: "melasma",
    name: "Melasma",
    short: "Manchas oscuras del rostro: enfoque integral.",
    description:
      "Hiperpigmentación crónica del rostro relacionada con factores hormonales, genéticos y exposición solar. Requiere manejo a largo plazo y fotoprotección estricta.",
    symptoms: ["Manchas marrones simétricas", "Localización en mejillas, frente, labio superior"],
    treatments: ["Despigmentantes tópicos", "Peelings químicos", "Mesoterapia", "Luz pulsada intensa"],
  },
  {
    slug: "rosacea",
    name: "Rosácea",
    short: "Manejo del enrojecimiento y vasos visibles.",
    description:
      "Enfermedad inflamatoria crónica que afecta principalmente el rostro central, con enrojecimiento persistente y telangiectasias.",
    symptoms: ["Enrojecimiento persistente", "Vasos sanguíneos visibles", "Pápulas y pústulas", "Sensación de ardor"],
    treatments: ["Tratamiento tópico y oral", "Luz pulsada intensa", "Cuidado dermocosmético específico"],
  },
  {
    slug: "psoriasis",
    name: "Psoriasis",
    short: "Manejo médico de la psoriasis crónica.",
    description:
      "Enfermedad autoinmune crónica que produce placas eritemato-escamosas. Requiere seguimiento médico permanente.",
    symptoms: ["Placas rojas con escamas blancas", "Picazón", "Compromiso de uñas y articulaciones"],
    treatments: ["Tópicos especializados", "Fototerapia", "Tratamiento sistémico"],
  },
  {
    slug: "dermatitis-atopica",
    name: "Dermatitis Atópica",
    short: "Cuidado especializado de piel atópica.",
    description:
      "Enfermedad inflamatoria crónica de la piel asociada a alergias y sequedad cutánea. Frecuente en niños y adultos.",
    symptoms: ["Picazón intensa", "Piel seca", "Eccemas en pliegues", "Brotes recurrentes"],
    treatments: ["Hidratación médica", "Corticoides tópicos", "Inmunomoduladores", "Educación en cuidado"],
  },
  {
    slug: "alopecia",
    name: "Alopecia",
    short: "Diagnóstico y tratamiento de la caída del cabello.",
    description:
      "Pérdida del cabello con múltiples causas: hormonal, autoinmune, nutricional o por estrés. El tratamiento depende del tipo identificado.",
    symptoms: ["Caída excesiva", "Adelgazamiento del cabello", "Áreas sin pelo"],
    treatments: ["Tratamiento médico", "PRP capilar", "Mesoterapia capilar"],
  },
  {
    slug: "verrugas",
    name: "Verrugas",
    short: "Eliminación segura de verrugas víricas.",
    description:
      "Lesiones cutáneas causadas por el virus del papiloma humano (VPH). Pueden aparecer en cualquier zona del cuerpo.",
    symptoms: ["Lesiones rugosas", "Crecimiento progresivo", "Localización variable"],
    treatments: ["Criocirugía", "Cauterización", "Tratamientos tópicos"],
  },
  {
    slug: "lunares",
    name: "Lunares y Nevus",
    short: "Evaluación dermatoscópica y manejo.",
    description:
      "Evaluación profesional de lunares con dermatoscopio digital para detectar cambios sospechosos y prevenir cáncer de piel.",
    symptoms: ["Lunares atípicos", "Cambios de color, forma o tamaño", "Picor o sangrado"],
    treatments: ["Dermatoscopia digital", "Biopsia cutánea", "Cirugía dermatológica"],
  },
  {
    slug: "cancer-de-piel",
    name: "Cáncer de Piel",
    short: "Detección temprana y manejo oncológico cutáneo.",
    description:
      "Diagnóstico, biopsia y manejo de cáncer de piel: carcinoma basocelular, escamocelular y melanoma. La detección temprana salva vidas.",
    symptoms: ["Lesiones que no cicatrizan", "Cambios en lunares", "Lesiones de crecimiento rápido"],
    treatments: ["Biopsia", "Cirugía dermatológica", "Manejo multidisciplinario"],
  },
  {
    slug: "hiperhidrosis",
    name: "Hiperhidrosis",
    short: "Tratamiento del sudor excesivo.",
    description:
      "Sudoración excesiva en axilas, palmas, plantas o rostro. Afecta significativamente la calidad de vida.",
    symptoms: ["Sudor excesivo", "Manchas de sudor", "Mal olor", "Impacto social"],
    treatments: ["Toxina botulínica", "Antitranspirantes médicos"],
  },
  {
    slug: "vitiligo",
    name: "Vitíligo",
    short: "Manejo médico y cosmético del vitíligo.",
    description:
      "Pérdida de pigmento en la piel por destrucción de melanocitos. Manejo enfocado en estabilización y repigmentación.",
    symptoms: ["Manchas blancas", "Bordes definidos", "Distribución variable"],
    treatments: ["Tópicos inmunomoduladores", "Fototerapia", "Camuflaje cosmético"],
  },
  {
    slug: "envejecimiento-cutaneo",
    name: "Envejecimiento Cutáneo",
    short: "Plan integral antiedad personalizado.",
    description:
      "Abordaje integral del envejecimiento de la piel combinando prevención, tratamiento médico y procedimientos estéticos.",
    symptoms: ["Arrugas", "Flacidez", "Manchas solares", "Pérdida de volumen"],
    treatments: ["Toxina botulínica", "Ácido hialurónico", "Láser CO2", "Radiofrecuencia"],
  },
];

export function getEnfermedad(slug: string) {
  return ENFERMEDADES.find((e) => e.slug === slug);
}

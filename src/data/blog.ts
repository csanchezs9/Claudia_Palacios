export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "dermatologia" | "habitos-saludables" | "ayurveda" | "yoga" | "naturaleza";
  date: string;
  readMinutes: number;
  content: string;
  image: string;
};

export const CATEGORIES: Record<BlogPost["category"], string> = {
  dermatologia: "Dermatología",
  "habitos-saludables": "Hábitos Saludables",
  ayurveda: "Ayurveda",
  yoga: "Yoga",
  naturaleza: "Naturaleza",
};

export const POSTS: BlogPost[] = [
  {
    slug: "rutina-cuidado-piel-medellin",
    title: "Rutina de cuidado facial ideal para el clima de Medellín",
    excerpt:
      "Cómo adaptar tu skincare a la altura, humedad y radiación UV de Medellín para obtener resultados reales.",
    category: "dermatologia",
    date: "2025-04-12",
    readMinutes: 6,
    image: "/img/galeria/galeria-4.jpg",
    content:
      "El clima de Medellín, con su altitud de 1.500 metros, alta radiación UV y humedad variable, exige una rutina de cuidado facial específica...",
  },
  {
    slug: "melasma-mitos-verdades",
    title: "Melasma: mitos y verdades del tratamiento",
    excerpt:
      "Lo que realmente funciona contra el melasma según la evidencia clínica y la experiencia de consultorio.",
    category: "dermatologia",
    date: "2025-03-28",
    readMinutes: 8,
    image: "/img/enfermedades/melasma.jpg",
    content:
      "El melasma es una de las causas más frecuentes de consulta dermatológica estética...",
  },
  {
    slug: "alimentacion-piel-sana",
    title: "Alimentación que cuida tu piel desde adentro",
    excerpt:
      "Nutrientes clave que mejoran visiblemente la calidad de la piel a largo plazo.",
    category: "habitos-saludables",
    date: "2025-03-10",
    readMinutes: 5,
    image: "/img/galeria/galeria-5.jpg",
    content:
      "La piel es el reflejo de lo que comemos. Una alimentación equilibrada...",
  },
  {
    slug: "ayurveda-piel",
    title: "Ayurveda y dermatología: una mirada complementaria",
    excerpt:
      "Cómo los principios ayurvédicos pueden complementar (no reemplazar) el cuidado dermatológico.",
    category: "ayurveda",
    date: "2025-02-22",
    readMinutes: 7,
    image: "/img/galeria/galeria-6.jpg",
    content: "El Ayurveda ofrece una perspectiva interesante sobre la relación...",
  },
  {
    slug: "yoga-cortisol-piel",
    title: "Yoga, cortisol y piel: la conexión que importa",
    excerpt:
      "El estrés crónico inflama la piel. Estas prácticas de yoga ayudan a desinflamarla.",
    category: "yoga",
    date: "2025-02-08",
    readMinutes: 6,
    image: "/img/galeria/galeria-7.jpg",
    content: "El cortisol elevado de manera crónica tiene efectos visibles sobre la piel...",
  },
  {
    slug: "proteccion-solar-tropico",
    title: "Protección solar en clima tropical: lo que sí funciona",
    excerpt:
      "FPS, PA+++, reaplicación y mitos sobre el bloqueador en climas ecuatoriales.",
    category: "dermatologia",
    date: "2025-01-25",
    readMinutes: 7,
    image: "/img/galeria/galeria-8.jpg",
    content: "El sol en latitudes ecuatoriales como Medellín es especialmente intenso...",
  },
  {
    slug: "naturaleza-bienestar-piel",
    title: "El poder de la naturaleza para una piel saludable",
    excerpt:
      "Caminatas, contacto con plantas y cómo el entorno natural reduce inflamación cutánea.",
    category: "naturaleza",
    date: "2025-01-12",
    readMinutes: 5,
    image: "/img/galeria/galeria-9.jpg",
    content: "Estudios recientes demuestran que el contacto con espacios naturales...",
  },
  {
    slug: "rutina-noche-anti-edad",
    title: "Rutina nocturna anti-edad: 4 pasos esenciales",
    excerpt:
      "Limpieza profunda, retinol, péptidos e hidratación. La noche es cuando la piel se regenera.",
    category: "habitos-saludables",
    date: "2024-12-28",
    readMinutes: 6,
    image: "/img/consultorio/consultorio-1.jpg",
    content: "Durante el sueño la piel entra en modo reparación...",
  },
  {
    slug: "respiracion-pranayama-piel",
    title: "Pranayama: respiración consciente para una piel luminosa",
    excerpt:
      "Cómo técnicas ayurvédicas de respiración mejoran oxigenación y luminosidad cutánea.",
    category: "ayurveda",
    date: "2024-12-15",
    readMinutes: 5,
    image: "/img/consultorio/consultorio-2.jpg",
    content: "El pranayama, antigua técnica de control de la respiración...",
  },
  {
    slug: "estres-acne-adulto",
    title: "Estrés y acné adulto: la relación silenciosa",
    excerpt:
      "Por qué el acné en mujeres adultas se dispara con cortisol y cómo abordarlo integralmente.",
    category: "dermatologia",
    date: "2024-12-01",
    readMinutes: 8,
    image: "/img/enfermedades/acne.jpg",
    content: "El acné adulto femenino tiene componentes hormonales y de estilo de vida...",
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}

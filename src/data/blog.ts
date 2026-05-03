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
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}

import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PROCEDIMIENTOS } from "@/data/procedimientos";
import { AnchorNav } from "@/components/procedimientos/anchor-nav";
import { CategorySection } from "@/components/procedimientos/category-section";
import { whatsappUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Procedimientos Dermatológicos en Medellín",
  description:
    "Toxina botulínica, ácido hialurónico, láser CO2, peelings y más. Procedimientos dermatológicos avanzados con la Dra. Claudia Palacios en Medellín.",
  alternates: { canonical: "/procedimientos" },
};

type Cat = "estetica" | "clinica" | "laser" | "tecnologia";

const CATEGORY_META: Record<
  Cat,
  { label: string; tagline: string; description: string; hero: string }
> = {
  estetica: {
    label: "Estética",
    tagline: "para realzar tu belleza natural",
    description:
      "Tratamientos diseñados para potenciar tu mejor versión, conservando la naturalidad y armonía de cada rostro.",
    hero: "toxina-botulinica",
  },
  clinica: {
    label: "Clínica",
    tagline: "para diagnóstico y manejo médico",
    description:
      "Procedimientos médicos que diagnostican, tratan y resuelven condiciones dermatológicas con precisión científica.",
    hero: "cirugia-dermatologica",
  },
  laser: {
    label: "Láser",
    tagline: "tecnología que renueva la piel",
    description:
      "Energía láser de última generación para renovar, reparar y rejuvenecer la piel con resultados visibles.",
    hero: "laser-co2-fraccionado",
  },
  tecnologia: {
    label: "Tecnología",
    tagline: "lo último en cuidado dermatológico",
    description:
      "Equipamiento de vanguardia para tratamientos no invasivos con máxima eficacia y mínimo tiempo de recuperación.",
    hero: "geneo",
  },
};

const ORDER: Cat[] = ["estetica", "clinica", "laser", "tecnologia"];
const VARIANTS = ["ivory", "surface", "rose", "ivory"] as const;

export default function ProcedimientosPage() {
  const grouped = ORDER.map((cat, i) => {
    const meta = CATEGORY_META[cat];
    const all = PROCEDIMIENTOS.filter((p) => p.category === cat);
    const hero = all.find((p) => p.slug === meta.hero) ?? all[0];
    const rest = all.filter((p) => p.slug !== hero.slug);
    return { cat, meta, hero, rest, variant: VARIANTS[i] };
  });

  return (
    <>
      <section className="container-page pt-20 pb-16 lg:pt-28 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
          Procedimientos
        </span>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mt-5 leading-[1] tracking-tight">
          Tratamientos a la <span className="font-accent italic text-primary">medida</span> de tu piel
        </h1>
        <p className="text-muted text-base sm:text-lg lg:text-xl mt-8 max-w-2xl mx-auto leading-relaxed">
          Procedimientos clínicos, estéticos y de tecnología avanzada
          realizados con rigor médico y resultados naturales.
        </p>
      </section>

      <AnchorNav />

      {grouped.map(({ cat, meta, hero, rest, variant }, i) => (
        <CategorySection
          key={cat}
          id={cat}
          label={meta.label}
          tagline={meta.tagline}
          description={meta.description}
          hero={hero}
          rest={rest}
          variant={variant}
          index={i}
        />
      ))}

      <section className="section-y">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-dark via-primary to-primary-dark px-8 py-16 lg:px-16 lg:py-20 text-surface">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary-light/20 blur-3xl" />
            <div className="relative max-w-3xl text-center mx-auto">
              <h2 className="font-display text-4xl lg:text-5xl text-surface mb-6">
                ¿No sabes cuál tratamiento te conviene?
              </h2>
              <p className="text-surface/90 text-lg mb-10 leading-relaxed">
                Agenda una valoración personalizada y diseñemos juntos el plan
                ideal para tu piel.
              </p>
              <a
                href={whatsappUrl("Hola Dra. Claudia, quisiera asesoría sobre cuál procedimiento es mejor para mí.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-surface text-primary-dark px-8 py-4 rounded-pill font-medium hover:bg-background transition-colors"
              >
                Hablar con la doctora <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

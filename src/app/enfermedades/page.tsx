import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ENFERMEDADES } from "@/data/enfermedades";

export const metadata: Metadata = {
  title: "Enfermedades de la Piel — Tratamientos en Medellín",
  description:
    "Acné, melasma, rosácea, psoriasis, dermatitis y más. Diagnóstico y tratamiento con la Dra. Claudia Palacios en Medellín.",
  alternates: { canonical: "/enfermedades" },
};

export default function EnfermedadesPage() {
  return (
    <>
      <section className="container-page pt-16 pb-12 lg:pt-24">
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
          Enfermedades
        </span>
        <h1 className="text-5xl lg:text-6xl mt-4 max-w-3xl">
          Diagnóstico y tratamiento de condiciones de la piel
        </h1>
        <p className="text-muted text-lg mt-6 max-w-2xl">
          Manejo médico integral de las principales enfermedades dermatológicas
          con un enfoque personalizado para cada paciente.
        </p>
      </section>

      <section className="container-page pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ENFERMEDADES.map((e) => (
            <Link
              key={e.slug}
              href={`/enfermedades/${e.slug}`}
              className="group relative bg-surface rounded-[var(--radius-card)] border border-border p-8 transition-all hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5"
            >
              <h2 className="text-xl mb-2 group-hover:text-primary transition-colors">
                {e.name}
              </h2>
              <p className="text-sm text-muted leading-relaxed">{e.short}</p>
              <ArrowUpRight
                size={18}
                className="absolute top-6 right-6 text-muted group-hover:text-primary transition-colors"
              />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

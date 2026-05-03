import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROCEDIMIENTOS, procImage } from "@/data/procedimientos";

export const metadata: Metadata = {
  title: "Procedimientos Dermatológicos en Medellín",
  description:
    "Toxina botulínica, ácido hialurónico, láser CO2, peelings y más. Procedimientos dermatológicos avanzados con la Dra. Claudia Palacios en Medellín.",
  alternates: { canonical: "/procedimientos" },
};

const CATEGORY_LABELS = {
  estetica: "Estética",
  clinica: "Clínica",
  laser: "Láser",
  tecnologia: "Tecnología",
} as const;

export default function ProcedimientosPage() {
  return (
    <>
      <section className="container-page pt-16 pb-12 lg:pt-24">
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
          Procedimientos
        </span>
        <h1 className="text-5xl lg:text-6xl mt-4 max-w-3xl">
          Tratamientos dermatológicos a la medida de tu piel
        </h1>
        <p className="text-muted text-lg mt-6 max-w-2xl">
          Procedimientos clínicos, estéticos y de tecnología avanzada
          realizados con rigor médico y resultados naturales.
        </p>
      </section>

      <section className="container-page pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROCEDIMIENTOS.map((p) => {
            const img = procImage(p.slug);
            return (
              <Link
                key={p.slug}
                href={`/procedimientos/${p.slug}`}
                className="group bg-surface rounded-[var(--radius-card)] border border-border overflow-hidden transition-all hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  {img ? (
                    <Image
                      src={img}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/15 via-accent/10 to-primary-dark/10" />
                  )}
                </div>
                <div className="p-7 relative">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-medium">
                    {CATEGORY_LABELS[p.category]}
                  </span>
                  <h2 className="text-xl mt-2 mb-2 group-hover:text-primary transition-colors">
                    {p.name}
                  </h2>
                  <p className="text-sm text-muted leading-relaxed">{p.short}</p>
                  <ArrowUpRight
                    size={18}
                    className="absolute top-6 right-6 text-muted group-hover:text-primary transition-colors"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}

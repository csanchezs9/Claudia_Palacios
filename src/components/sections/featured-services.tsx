import Link from "next/link";
import { ArrowUpRight, Sparkles, Syringe, Zap, Sun, Microscope, Droplet } from "lucide-react";

const FEATURED = [
  { slug: "toxina-botulinica", name: "Toxina Botulínica", desc: "Suaviza líneas de expresión naturalmente.", Icon: Syringe },
  { slug: "acido-hialuronico", name: "Ácido Hialurónico", desc: "Volumen e hidratación profunda.", Icon: Droplet },
  { slug: "laser-co2-fraccionado", name: "Láser CO2", desc: "Renueva la piel desde su estructura.", Icon: Zap },
  { slug: "luz-pulsada-intensa", name: "Luz Pulsada IPL", desc: "Trata manchas y rojeces.", Icon: Sun },
  { slug: "plasma-rico-plaquetas", name: "PRP", desc: "Bioestimulación natural.", Icon: Sparkles },
  { slug: "biopsia-cutanea", name: "Diagnóstico Clínico", desc: "Dermatoscopia y biopsias.", Icon: Microscope },
];

export function FeaturedServices() {
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
              Procedimientos
            </span>
            <h2 className="text-4xl lg:text-5xl mt-3">
              Tratamientos que devuelven la confianza en tu piel
            </h2>
          </div>
          <Link
            href="/procedimientos"
            className="text-sm text-primary inline-flex items-center gap-1 hover:gap-2 transition-all"
          >
            Ver todos los procedimientos <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURED.map(({ slug, name, desc, Icon }) => (
            <Link
              key={slug}
              href={`/procedimientos/${slug}`}
              className="group relative bg-surface rounded-[var(--radius-card)] border border-border p-8 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-surface transition-colors">
                <Icon size={20} />
              </div>
              <h3 className="text-xl mb-2">{name}</h3>
              <p className="text-sm text-muted leading-relaxed">{desc}</p>
              <ArrowUpRight
                size={18}
                className="absolute top-6 right-6 text-muted group-hover:text-primary transition-colors"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

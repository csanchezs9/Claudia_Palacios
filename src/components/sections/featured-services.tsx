"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Clock, Sparkles } from "lucide-react";

type Procedure = {
  slug: string;
  name: string;
  category: string;
  desc: string;
  duration: string;
  sessions: string;
  image: string;
};

const PROCEDURES: Procedure[] = [
  {
    slug: "laser-co2-fraccionado",
    name: "Láser CO2 Fraccionado",
    category: "Renovación",
    desc: "Tecnología fraccionada que estimula colágeno desde la dermis profunda. Trata cicatrices, arrugas, textura y poros en una sola sesión transformadora.",
    duration: "45 min",
    sessions: "1-3 sesiones",
    image: "/img/procedimientos/laser-co2-fraccionado.jpg",
  },
  {
    slug: "luz-pulsada-intensa",
    name: "Luz Pulsada IPL",
    category: "Manchas",
    desc: "Pulsos de luz selectiva que tratan manchas solares, rojeces, lesiones vasculares y unifican el tono cutáneo sin tiempo de recuperación.",
    duration: "30 min",
    sessions: "3-5 sesiones",
    image: "/img/procedimientos/luz-pulsada-intensa.jpg",
  },
  {
    slug: "plasma-rico-plaquetas",
    name: "Plasma Rico en Plaquetas",
    category: "Bioestimulación",
    desc: "Tu propia sangre como fuente regenerativa. Factores de crecimiento que rejuvenecen, densifican y devuelven luminosidad natural a la piel.",
    duration: "60 min",
    sessions: "3 sesiones",
    image: "/img/procedimientos/plasma-rico-plaquetas.jpg",
  },
  {
    slug: "peeling-quimico",
    name: "Peeling Químico",
    category: "Renovación celular",
    desc: "Exfoliación controlada que renueva capas superficiales y medias. Mejora textura, manchas, líneas finas y devuelve frescura visible.",
    duration: "30 min",
    sessions: "Según protocolo",
    image: "/img/procedimientos/peeling-quimico.jpg",
  },
  {
    slug: "geneo",
    name: "Geneo",
    category: "Oxigenación",
    desc: "Exfoliación, oxigenación e infusión de activos en una sesión. Resultado inmediato sin recuperación, ideal previo a eventos importantes.",
    duration: "45 min",
    sessions: "1 sesión",
    image: "/img/procedimientos/geneo.jpg",
  },
  {
    slug: "spectrum-mask",
    name: "Spectrum Mask",
    category: "LED terapéutico",
    desc: "Máscara LED multiespectro que actúa sobre acné, inflamación, rejuvenecimiento y reparación celular según longitud de onda aplicada.",
    duration: "20 min",
    sessions: "Cura semanal",
    image: "/img/procedimientos/spectrum-mask.jpg",
  },
];

export function FeaturedServices() {
  const [active, setActive] = useState(0);
  const current = PROCEDURES[active];

  return (
    <section className="section-y bg-background">
      <div className="container-page">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
            Procedimientos destacados
          </span>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl mt-5 leading-[1.05] tracking-tight">
            Tecnología clínica con{" "}
            <span className="font-accent italic text-primary">criterio médico</span>
          </h2>
          <p className="text-muted text-base lg:text-lg mt-6 leading-relaxed">
            Cada tratamiento se selecciona según tu diagnóstico personalizado.
            Selecciona uno para conocer detalles.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <ol className="lg:col-span-5 flex flex-col">
            {PROCEDURES.map((p, i) => {
              const isActive = i === active;
              return (
                <li key={p.slug}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`w-full text-left py-6 border-t border-border transition-all duration-300 ${
                      isActive ? "pl-6" : "pl-0 hover:pl-3"
                    } ${i === PROCEDURES.length - 1 ? "border-b" : ""}`}
                  >
                    <div className="flex items-baseline gap-4">
                      <span
                        className={`font-mono text-xs transition-colors ${
                          isActive ? "text-primary" : "text-muted/60"
                        }`}
                      >
                        0{i + 1}
                      </span>
                      <div className="flex-1">
                        <span
                          className={`block text-[10px] uppercase tracking-[0.3em] mb-1.5 transition-colors ${
                            isActive ? "text-accent-dark" : "text-muted/50"
                          }`}
                        >
                          {p.category}
                        </span>
                        <h3
                          className={`font-display tracking-tight leading-[1.05] transition-all duration-300 ${
                            isActive
                              ? "text-3xl lg:text-4xl text-primary"
                              : "text-2xl lg:text-3xl text-foreground/70"
                          }`}
                        >
                          {p.name}
                        </h3>
                      </div>
                      <ArrowUpRight
                        size={18}
                        className={`transition-all duration-300 ${
                          isActive
                            ? "text-primary opacity-100 translate-x-0"
                            : "text-muted opacity-0 -translate-x-2"
                        }`}
                      />
                    </div>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="lg:col-span-7 lg:sticky lg:top-28 lg:self-start">
            <div className="relative aspect-[4/5] lg:aspect-[5/6] rounded-[1.5rem] overflow-hidden bg-foreground shadow-2xl shadow-primary/10">
              {PROCEDURES.map((p, i) => (
                <div
                  key={p.slug}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    i === active ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10">
                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-5 text-surface/90 text-xs uppercase tracking-[0.2em]">
                  <span className="inline-flex items-center gap-2">
                    <Clock size={14} className="text-accent" />
                    {current.duration}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Sparkles size={14} className="text-accent" />
                    {current.sessions}
                  </span>
                </div>
                <p className="text-surface/95 text-base lg:text-lg leading-relaxed mb-7 max-w-xl">
                  {current.desc}
                </p>
                <Link
                  href={`/procedimientos/${current.slug}`}
                  className="inline-flex items-center gap-2 bg-surface text-foreground px-6 py-3 rounded-pill text-sm font-medium hover:bg-accent hover:text-surface transition-colors"
                >
                  Ver procedimiento completo
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/procedimientos"
            className="inline-flex items-center gap-2 text-primary text-sm hover:gap-3 transition-all"
          >
            Explorar catálogo completo de procedimientos
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

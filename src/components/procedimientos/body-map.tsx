"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Clock } from "lucide-react";
import { PROCEDIMIENTOS, procImage, type Procedimiento } from "@/data/procedimientos";

type ZoneId = "cuero-cabelludo" | "rostro" | "cuello-escote" | "manos" | "cuerpo";

type Zone = {
  id: ZoneId;
  label: string;
  description: string;
  procedureSlugs: string[];
  hotspot: { cx: number; cy: number; r: number };
};

const ZONES: Zone[] = [
  {
    id: "cuero-cabelludo",
    label: "Cuero cabelludo",
    description: "Caída del cabello, alopecia y bioestimulación capilar.",
    procedureSlugs: ["plasma-rico-plaquetas", "mesoterapia"],
    hotspot: { cx: 250, cy: 95, r: 14 },
  },
  {
    id: "rostro",
    label: "Rostro",
    description:
      "Tratamientos para frente, ojos, mejillas, labios y mentón. Rejuvenecimiento, manchas y armonización.",
    procedureSlugs: [
      "toxina-botulinica",
      "acido-hialuronico",
      "peeling-quimico",
      "geneo",
      "spectrum-mask",
      "microdermabrasion",
      "hilos-tensores",
      "microneedling",
      "luz-pulsada-intensa",
      "laser-co2-fraccionado",
    ],
    hotspot: { cx: 250, cy: 220, r: 18 },
  },
  {
    id: "cuello-escote",
    label: "Cuello y escote",
    description:
      "Líneas finas, manchas y flacidez del cuello y zona del escote.",
    procedureSlugs: [
      "acido-hialuronico",
      "radiofrecuencia",
      "microneedling",
      "plasma-rico-plaquetas",
      "peeling-quimico",
    ],
    hotspot: { cx: 250, cy: 360, r: 16 },
  },
  {
    id: "cuerpo",
    label: "Cuerpo",
    description:
      "Depilación láser, lesiones cutáneas, manchas y cuidado dermatológico corporal.",
    procedureSlugs: [
      "depilacion-laser",
      "radiofrecuencia",
      "mesoterapia",
      "spectrum-mask",
    ],
    hotspot: { cx: 250, cy: 490, r: 18 },
  },
  {
    id: "manos",
    label: "Manos",
    description:
      "Manchas solares, verrugas, rejuvenecimiento del dorso de las manos.",
    procedureSlugs: [
      "criocirugia",
      "peeling-quimico",
      "laser-co2-fraccionado",
      "infiltraciones",
    ],
    hotspot: { cx: 100, cy: 525, r: 14 },
  },
];

const DIAGNOSTIC_SLUGS = [
  "biopsia-cutanea",
  "cirugia-dermatologica",
  "criocirugia",
  "infiltraciones",
  "fibroblastos",
];

function findProc(slug: string): Procedimiento | undefined {
  return PROCEDIMIENTOS.find((p) => p.slug === slug);
}

export function BodyMap() {
  const [activeId, setActiveId] = useState<ZoneId>("rostro");
  const active = ZONES.find((z) => z.id === activeId)!;
  const procedures = active.procedureSlugs.map(findProc).filter(Boolean) as Procedimiento[];

  return (
    <section className="container-page py-16 lg:py-24">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Body silhouette */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
          <div className="relative max-w-md mx-auto">
            <div
              aria-hidden
              className="absolute inset-0 -m-8 rounded-full bg-gradient-to-b from-primary/8 via-accent/4 to-transparent blur-3xl"
            />
            <svg
              viewBox="0 0 500 700"
              className="relative w-full h-auto text-foreground/30"
              role="img"
              aria-label="Mapa anatómico interactivo"
            >
              {/* Head */}
              <ellipse
                cx="250"
                cy="180"
                rx="92"
                ry="115"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              {/* Neck */}
              <path
                d="M213 285 Q 213 320 215 350 M 287 285 Q 287 320 285 350"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              {/* Shoulders + torso */}
              <path
                d="M 80 470 Q 130 410 215 360 M 285 360 Q 370 410 420 470"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M 80 470 L 80 690 M 420 470 L 420 690"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              {/* Chest hint */}
              <path
                d="M 215 360 Q 250 425 285 360"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="3 4"
                opacity="0.5"
              />
              {/* Arms hint */}
              <path
                d="M 80 470 Q 75 540 100 580"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M 420 470 Q 425 540 400 580"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />

              {/* Hotspots */}
              {ZONES.map((z) => {
                const isActive = z.id === activeId;
                return (
                  <g
                    key={z.id}
                    onClick={() => setActiveId(z.id)}
                    style={{ cursor: "pointer" }}
                    role="button"
                    aria-label={`Seleccionar zona: ${z.label}`}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveId(z.id);
                      }
                    }}
                  >
                    {/* Pulse ring (active only) */}
                    {isActive && (
                      <circle
                        cx={z.hotspot.cx}
                        cy={z.hotspot.cy}
                        r={z.hotspot.r}
                        fill="var(--color-primary)"
                        opacity="0.3"
                      >
                        <animate
                          attributeName="r"
                          from={z.hotspot.r}
                          to={z.hotspot.r * 2.2}
                          dur="2s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          from="0.3"
                          to="0"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                    {/* Tap target (invisible larger circle) */}
                    <circle
                      cx={z.hotspot.cx}
                      cy={z.hotspot.cy}
                      r={z.hotspot.r * 2}
                      fill="transparent"
                    />
                    {/* Visible dot */}
                    <circle
                      cx={z.hotspot.cx}
                      cy={z.hotspot.cy}
                      r={isActive ? z.hotspot.r : z.hotspot.r * 0.65}
                      fill={isActive ? "var(--color-primary)" : "var(--color-surface)"}
                      stroke="var(--color-primary)"
                      strokeWidth="2"
                      style={{ transition: "r 0.3s ease, fill 0.3s ease" }}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Zone label below */}
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center mt-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
                Zona seleccionada
              </p>
              <h3 className="font-display text-3xl mt-2">{active.label}</h3>
            </motion.div>
          </div>

          {/* Mobile-friendly zone chips below illustration */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 lg:hidden">
            {ZONES.map((z) => {
              const isActive = z.id === activeId;
              return (
                <button
                  key={z.id}
                  onClick={() => setActiveId(z.id)}
                  className={`relative px-4 py-2 text-xs rounded-full transition-colors ${
                    isActive
                      ? "text-surface bg-primary"
                      : "text-muted bg-surface border border-border hover:text-foreground"
                  }`}
                >
                  {z.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Procedures panel */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-8">
                <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
                  Tratamientos disponibles
                </span>
                <h3 className="font-display text-4xl lg:text-5xl mt-2 leading-tight">
                  {active.label}
                </h3>
                <p className="text-muted mt-3 leading-relaxed max-w-xl">
                  {active.description}
                </p>
                <p className="text-sm text-foreground/70 mt-4">
                  <span className="font-medium text-primary">{procedures.length}</span> procedimiento
                  {procedures.length !== 1 ? "s" : ""} para esta zona
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {procedures.map((p, i) => (
                  <motion.div
                    key={p.slug}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.05 * i,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={`/procedimientos/${p.slug}`}
                      className="group flex gap-4 p-4 bg-surface rounded-[var(--radius-card)] border border-border hover:border-primary/40 hover:shadow-md transition-all h-full"
                    >
                      <div className="relative shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                        <Image
                          src={procImage(p.slug)}
                          alt={p.name}
                          fill
                          sizes="80px"
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
                          {p.name}
                        </h4>
                        <p className="text-xs text-muted mt-1 line-clamp-2 leading-relaxed">
                          {p.short}
                        </p>
                        <div className="flex items-center justify-between mt-2 text-[11px] text-muted">
                          <span className="flex items-center gap-1">
                            <Clock size={11} /> {p.duration}
                          </span>
                          <ArrowUpRight
                            size={14}
                            className="text-muted group-hover:text-primary group-hover:rotate-45 transition-all"
                          />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export function DiagnosticSection() {
  const procedures = DIAGNOSTIC_SLUGS.map(findProc).filter(Boolean) as Procedimiento[];

  return (
    <section className="bg-surface section-y border-t border-border">
      <div className="container-page">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
            Diagnóstico y manejo médico
          </span>
          <h2 className="font-display text-4xl lg:text-5xl mt-3 leading-tight">
            Procedimientos clínicos transversales
          </h2>
          <p className="text-muted mt-4 leading-relaxed">
            Procedimientos médicos que aplican a cualquier zona del cuerpo:
            biopsias, cirugía dermatológica, criocirugía, infiltraciones y
            fibroblastos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {procedures.map((p) => (
            <Link
              key={p.slug}
              href={`/procedimientos/${p.slug}`}
              className="group block bg-background rounded-[var(--radius-card)] border border-border overflow-hidden hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={procImage(p.slug)}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg leading-tight group-hover:text-primary transition-colors">
                  {p.name}
                </h3>
                <p className="text-sm text-muted mt-2 line-clamp-2 leading-relaxed">
                  {p.short}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

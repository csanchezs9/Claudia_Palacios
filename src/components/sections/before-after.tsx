"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, GripVertical, ShieldCheck } from "lucide-react";

type Case = {
  id: string;
  procedure: string;
  duration: string;
  before: string;
  after: string;
  caption: string;
};

const CASES: Case[] = [
  {
    id: "melasma",
    procedure: "Melasma",
    duration: "6 sesiones · 4 meses",
    before: "/img/antes-despues/melasma-antes.jpg",
    after: "/img/antes-despues/melasma-despues.jpg",
    caption: "Protocolo combinado: despigmentantes médicos + IPL + fotoprotección.",
  },
  {
    id: "acne",
    procedure: "Acné y cicatrices",
    duration: "Plan integral · 6 meses",
    before: "/img/antes-despues/acne-antes.jpg",
    after: "/img/antes-despues/acne-despues.jpg",
    caption: "Tratamiento médico + láser CO2 fraccionado + control hormonal.",
  },
  {
    id: "rejuvenecimiento",
    procedure: "Rejuvenecimiento facial",
    duration: "Plan personalizado",
    before: "/img/antes-despues/rejuv-antes.jpg",
    after: "/img/antes-despues/rejuv-despues.jpg",
    caption: "Bioestimulación + láser + cuidado tópico médico.",
  },
];

export function BeforeAfter() {
  const [active, setActive] = useState(0);
  const current = CASES[active];

  return (
    <section className="section-y bg-surface">
      <div className="container-page">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
              Resultados reales
            </span>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl mt-4 leading-[1.05] tracking-tight">
              Antes y <span className="font-accent italic text-primary">después</span>
            </h2>
            <p className="text-muted mt-5 leading-relaxed">
              Casos clínicos publicados con consentimiento informado de las
              pacientes. Resultados individuales, no garantizados.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 text-xs text-success">
            <ShieldCheck size={14} />
            <span className="uppercase tracking-[0.2em]">Casos verificados</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <Comparator key={current.id} before={current.before} after={current.after} />
            <p className="text-sm text-muted mt-4 leading-relaxed">
              <span className="text-foreground font-medium">{current.procedure}.</span>{" "}
              {current.caption}{" "}
              <span className="text-muted/70">— {current.duration}</span>
            </p>
          </div>

          <div className="lg:col-span-4 space-y-3">
            {CASES.map((c, i) => {
              const isActive = i === active;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all ${
                    isActive
                      ? "border-primary bg-primary/5 shadow-md shadow-primary/10"
                      : "border-border bg-surface hover:border-primary/40"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-display text-xl text-foreground">
                      {c.procedure}
                    </span>
                    <span className="font-mono text-[10px] text-muted">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="text-xs text-muted mt-1">{c.duration}</div>
                </button>
              );
            })}

            <Link
              href="/contacto"
              className="block mt-6 text-sm text-primary hover:gap-3 inline-flex items-center gap-2 transition-all"
            >
              Solicita una valoración personalizada
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <p className="text-[11px] text-muted/70 mt-10 max-w-3xl leading-relaxed">
          * Las fotografías se publican con autorización escrita de las pacientes
          conforme a la Ley 1581 de 2012 (Habeas Data) y a las normas éticas de
          la práctica dermatológica colombiana. Los resultados varían según el
          tipo de piel, edad, condición de base y adherencia al protocolo
          indicado por la doctora.
        </p>
      </div>
    </section>
  );
}

function Comparator({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromX = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, ratio)));
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] lg:aspect-[16/10] rounded-2xl overflow-hidden bg-foreground select-none touch-none cursor-ew-resize"
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
        setFromX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) setFromX(e.clientX);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
    >
      <Image
        src={after}
        alt="Después del tratamiento"
        fill
        sizes="(max-width: 1024px) 100vw, 60vw"
        className="object-cover"
      />
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <div className="relative w-screen max-w-none h-full">
          <Image
            src={before}
            alt="Antes del tratamiento"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
            style={{ objectPosition: "left center" }}
          />
        </div>
      </div>

      <span className="absolute top-4 left-4 bg-foreground/80 text-surface text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-pill backdrop-blur-sm">
        Antes
      </span>
      <span className="absolute top-4 right-4 bg-primary text-surface text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-pill">
        Después
      </span>

      <div
        className="absolute inset-y-0 w-0.5 bg-surface shadow-[0_0_20px_rgba(0,0,0,0.3)] pointer-events-none"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-surface flex items-center justify-center shadow-xl">
          <GripVertical size={20} className="text-primary" />
        </div>
      </div>
    </div>
  );
}

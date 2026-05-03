"use client";

import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";

type Review = {
  text: string;
  name: string;
  procedure: string;
  date: string;
  rating: number;
  initials: string;
  gradient: string;
};

const REVIEWS: Review[] = [
  {
    text: "La doctora es muy profesional y dedicada. Mi tratamiento de melasma cambió completamente mi piel y mi confianza. Después de años intentando soluciones, finalmente encontré resultados reales.",
    name: "María L.",
    procedure: "Tratamiento de melasma",
    date: "Hace 2 semanas",
    rating: 5,
    initials: "ML",
    gradient: "from-primary to-primary-dark",
  },
  {
    text: "Excelente atención. Me explicó todo el procedimiento con paciencia y los resultados del láser CO2 son impresionantes. Las cicatrices que tenía hace años prácticamente desaparecieron.",
    name: "Carolina R.",
    procedure: "Láser CO2 Fraccionado",
    date: "Hace 1 mes",
    rating: 5,
    initials: "CR",
    gradient: "from-accent to-accent-dark",
  },
  {
    text: "Resultados naturales y muy buen seguimiento post-tratamiento. La doctora es honesta sobre lo que puede y no puede lograrse. La recomiendo sin duda alguna.",
    name: "Juliana M.",
    procedure: "Toxina Botulínica",
    date: "Hace 3 semanas",
    rating: 5,
    initials: "JM",
    gradient: "from-primary-dark to-primary",
  },
  {
    text: "Llegué con acné severo y autoestima por el suelo. Hoy mi piel está sana y mi confianza renovada. Gracias por el trato humano y profesional de todo el equipo.",
    name: "Andrea P.",
    procedure: "Tratamiento integral acné",
    date: "Hace 2 meses",
    rating: 5,
    initials: "AP",
    gradient: "from-accent-dark to-primary",
  },
  {
    text: "El IPL para mis manchas solares fue transformador. Resultado visible desde la primera sesión y el consultorio es impecable. Una experiencia médica de lujo.",
    name: "Patricia G.",
    procedure: "Luz Pulsada IPL",
    date: "Hace 5 días",
    rating: 5,
    initials: "PG",
    gradient: "from-primary to-accent",
  },
];

const STATS = [
  { value: "4.9", label: "Calificación promedio", suffix: "★" },
  { value: "200+", label: "Reseñas verificadas" },
  { value: "98%", label: "Recomendación" },
  { value: "15", label: "Años de práctica", suffix: "+" },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % REVIEWS.length), 6000);
    return () => clearInterval(id);
  }, [paused]);

  const next = () => setActive((i) => (i + 1) % REVIEWS.length);
  const prev = () => setActive((i) => (i - 1 + REVIEWS.length) % REVIEWS.length);
  const current = REVIEWS[active];

  return (
    <section className="section-y bg-gradient-to-b from-surface via-background to-surface relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="container-page relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
            Pacientes
          </span>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl mt-4 leading-[1.05] tracking-tight">
            Historias reales,{" "}
            <span className="font-accent italic text-primary">resultados visibles</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden mb-16 max-w-4xl mx-auto">
          {STATS.map((s) => (
            <div key={s.label} className="bg-surface px-4 py-6 lg:px-6 lg:py-8 text-center">
              <div className="font-display text-3xl lg:text-5xl text-primary leading-none">
                {s.value}
                {s.suffix && <span className="text-accent">{s.suffix}</span>}
              </div>
              <div className="text-[10px] lg:text-xs uppercase tracking-[0.2em] text-muted mt-3">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div
          className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="relative">
              {REVIEWS.map((r, i) => {
                const offset = i - active;
                const isActive = i === active;
                return (
                  <button
                    key={r.name}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Ver reseña de ${r.name}`}
                    className={`absolute inset-x-0 top-0 transition-all duration-700 ease-out ${
                      isActive
                        ? "opacity-100 translate-y-0 scale-100 z-20"
                        : Math.abs(offset) === 1
                          ? "opacity-40 z-10"
                          : "opacity-0 z-0 pointer-events-none"
                    }`}
                    style={{
                      transform: isActive
                        ? "translateY(0) scale(1)"
                        : `translateY(${offset * 12}px) scale(${1 - Math.abs(offset) * 0.04})`,
                    }}
                  >
                    <div
                      className={`relative aspect-square rounded-3xl bg-gradient-to-br ${r.gradient} p-1 shadow-2xl shadow-primary/20`}
                    >
                      <div className="w-full h-full rounded-[1.4rem] bg-surface flex flex-col items-center justify-center p-8">
                        <div
                          className={`w-32 h-32 rounded-full bg-gradient-to-br ${r.gradient} flex items-center justify-center font-display text-4xl text-surface mb-5 shadow-lg`}
                        >
                          {r.initials}
                        </div>
                        <div className="font-display text-2xl text-foreground">{r.name}</div>
                        <div className="text-xs text-muted mt-1">{r.procedure}</div>
                        <div className="inline-flex items-center gap-1 mt-4 text-xs text-success">
                          <BadgeCheck size={14} />
                          Paciente verificada
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
              <div className="invisible">
                <div className="aspect-square" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 order-1 lg:order-2 relative">
            <div className="relative bg-surface rounded-3xl border border-border p-8 lg:p-12 shadow-xl shadow-primary/5 min-h-[340px]">
              <span className="font-display text-[200px] lg:text-[280px] text-primary/[0.08] absolute -top-12 -left-2 leading-none pointer-events-none select-none">
                &ldquo;
              </span>

              <div className="relative">
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-accent text-accent"
                    />
                  ))}
                  <span className="ml-3 text-xs text-muted uppercase tracking-[0.2em]">
                    {current.date}
                  </span>
                </div>

                <p
                  key={active}
                  className="font-display text-2xl lg:text-3xl xl:text-4xl text-foreground leading-[1.3] tracking-tight animate-fade-in"
                >
                  {current.text}
                </p>

                <div className="flex items-center justify-between mt-10 pt-8 border-t border-border">
                  <div>
                    <div className="font-medium text-foreground">{current.name}</div>
                    <div className="text-xs text-muted mt-0.5">{current.procedure}</div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={prev}
                      aria-label="Reseña anterior"
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:border-primary hover:text-primary transition-colors"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <span className="font-mono text-xs text-muted tabular-nums">
                      {String(active + 1).padStart(2, "0")} / {String(REVIEWS.length).padStart(2, "0")}
                    </span>
                    <button
                      type="button"
                      onClick={next}
                      aria-label="Siguiente reseña"
                      className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:border-primary hover:text-primary transition-colors"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {REVIEWS.map((r, i) => (
                <button
                  key={r.name}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Ir a reseña ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === active ? "w-8 bg-primary" : "w-1.5 bg-border hover:bg-muted/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

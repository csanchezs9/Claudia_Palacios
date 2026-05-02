import Link from "next/link";
import { ArrowUpRight, Award, GraduationCap, Stethoscope } from "lucide-react";

const POINTS = [
  { Icon: Stethoscope, title: "Dermatología integral", desc: "Diagnóstico clínico, estética y láser bajo un mismo enfoque." },
  { Icon: GraduationCap, title: "Formación continua", desc: "Vinculada a UPB y EAFIT, en constante actualización." },
  { Icon: Award, title: "Avales profesionales", desc: "Miembro activo de ASOCOLDERMA y DMAS/SADE." },
];

export function AboutPreview() {
  return (
    <section className="section-y bg-surface">
      <div className="container-page grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-square max-w-md mx-auto lg:max-w-none w-full">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-accent/20 via-primary/10 to-primary-dark/15" />
          <div className="absolute inset-6 rounded-[1.5rem] bg-background border border-border flex items-center justify-center">
            <div className="text-center px-8">
              <p className="font-accent italic text-primary text-2xl">
                "Cuidar la piel es cuidar la salud. Cada paciente, una historia única."
              </p>
              <p className="mt-6 text-sm uppercase tracking-[0.2em] text-muted">
                Dra. Claudia Palacios
              </p>
            </div>
          </div>
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
            La Doctora
          </span>
          <h2 className="text-4xl lg:text-5xl mt-3 mb-6">
            Más de 15 años cuidando la piel de los antioqueños
          </h2>
          <p className="text-muted leading-relaxed mb-10">
            La Dra. Claudia Palacios es dermatóloga con un enfoque integral
            que combina tratamientos clínicos rigurosos, estética avanzada y
            tecnología láser de última generación. Cada plan terapéutico se
            diseña a la medida del paciente.
          </p>
          <div className="space-y-5 mb-10">
            {POINTS.map(({ Icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="text-lg">{title}</h3>
                  <p className="text-sm text-muted">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/sobre-la-doctora"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
          >
            Conoce más sobre la doctora <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

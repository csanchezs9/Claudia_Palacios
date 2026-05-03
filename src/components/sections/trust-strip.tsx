import { ShieldCheck } from "lucide-react";

const AFFILIATIONS = [
  { name: "ASOCOLDERMA", subtitle: "Asociación Colombiana de Dermatología" },
  { name: "SADE / DMAS", subtitle: "Soc. Antioqueña de Dermatología" },
  { name: "UPB", subtitle: "Universidad Pontificia Bolivariana" },
  { name: "U. de Antioquia", subtitle: "Pregrado Medicina" },
  { name: "EAFIT", subtitle: "Formación continua" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-surface/60">
      <div className="container-page py-10">
        <div className="flex items-center justify-center gap-2 mb-6">
          <ShieldCheck size={14} className="text-success" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted">
            Avalada por las principales instituciones médicas
          </span>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-6 items-start">
          {AFFILIATIONS.map((a) => (
            <li
              key={a.name}
              className="text-center px-2 border-r border-border last:border-r-0 md:[&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:md:border-r-[1px]"
            >
              <div className="font-display text-base lg:text-lg text-foreground/80 tracking-tight">
                {a.name}
              </div>
              <div className="text-[10px] text-muted mt-1 uppercase tracking-wider leading-tight">
                {a.subtitle}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

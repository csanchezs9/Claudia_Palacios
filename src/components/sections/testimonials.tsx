import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    text: "La doctora es muy profesional y dedicada. Mi tratamiento de melasma cambió completamente mi piel y mi confianza.",
    name: "María L.",
    detail: "Tratamiento de melasma",
  },
  {
    text: "Excelente atención. Me explicó todo el procedimiento con paciencia y los resultados del láser CO2 son impresionantes.",
    name: "Carolina R.",
    detail: "Láser CO2 Fraccionado",
  },
  {
    text: "Resultados naturales y muy buen seguimiento post-tratamiento. La recomiendo sin duda.",
    name: "Juliana M.",
    detail: "Toxina Botulínica",
  },
];

export function Testimonials() {
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
            Pacientes
          </span>
          <h2 className="text-4xl lg:text-5xl mt-3">
            Historias reales, resultados visibles
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-surface rounded-[var(--radius-card)] border border-border p-8"
            >
              <Quote className="text-primary/40 mb-4" size={28} />
              <p className="text-foreground/90 leading-relaxed mb-6">"{t.text}"</p>
              <div className="pt-6 border-t border-border">
                <p className="font-medium">{t.name}</p>
                <p className="text-xs text-muted mt-1">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

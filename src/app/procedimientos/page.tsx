import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { BodyMap, DiagnosticSection } from "@/components/procedimientos/body-map";
import { whatsappUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Procedimientos Dermatológicos en Medellín",
  description:
    "Mapa interactivo de tratamientos dermatológicos por zona del cuerpo. Toxina botulínica, ácido hialurónico, láser CO2, peelings y más con la Dra. Claudia Palacios en Medellín.",
  alternates: { canonical: "/procedimientos" },
};

export default function ProcedimientosPage() {
  return (
    <>
      <section className="container-page pt-20 pb-12 lg:pt-28 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
          Procedimientos
        </span>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mt-5 leading-[1] tracking-tight">
          Tratamientos a la <span className="font-accent italic text-primary">medida</span> de tu piel
        </h1>
        <p className="text-muted text-base sm:text-lg lg:text-xl mt-8 max-w-2xl mx-auto leading-relaxed">
          Selecciona la zona de tu cuerpo y descubre los procedimientos
          disponibles. Cada tratamiento se realiza con rigor médico y
          tecnología de vanguardia.
        </p>
      </section>

      <BodyMap />
      <DiagnosticSection />

      <section className="section-y">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-dark via-primary to-primary-dark px-8 py-16 lg:px-16 lg:py-20 text-surface">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary-light/20 blur-3xl" />
            <div className="relative max-w-3xl text-center mx-auto">
              <h2 className="font-display text-4xl lg:text-5xl text-surface mb-6">
                ¿No sabes cuál tratamiento te conviene?
              </h2>
              <p className="text-surface/90 text-lg mb-10 leading-relaxed">
                Agenda una valoración personalizada y diseñemos juntos el plan
                ideal para tu piel.
              </p>
              <a
                href={whatsappUrl("Hola Dra. Claudia, quisiera asesoría sobre cuál procedimiento es mejor para mí.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-surface text-primary-dark px-8 py-4 rounded-pill font-medium hover:bg-background transition-colors"
              >
                Hablar con la doctora <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

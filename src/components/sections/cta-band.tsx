import { whatsappUrl } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function CtaBand() {
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-dark via-primary to-primary-dark px-8 py-16 lg:px-16 lg:py-20 text-surface">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary-light/20 blur-3xl" />

          <div className="relative max-w-3xl">
            <h2 className="text-4xl lg:text-5xl text-surface mb-6">
              Tu piel merece atención experta
            </h2>
            <p className="text-surface/85 text-lg mb-10 leading-relaxed">
              Agenda tu consulta y diseñemos juntos un plan personalizado para
              alcanzar la piel saludable y luminosa que mereces.
            </p>
            <a
              href={whatsappUrl("Hola Dra. Claudia, quisiera agendar mi primera consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-surface text-primary-dark px-8 py-4 rounded-pill font-medium hover:bg-background transition-colors"
            >
              Agendar consulta <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

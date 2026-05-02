import type { Metadata } from "next";
import { GraduationCap, Award, BookOpen, Stethoscope } from "lucide-react";
import { whatsappUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Sobre la Dra. Claudia Palacios — Dermatóloga en Medellín",
  description:
    "Conoce a la Dra. Claudia Palacios, dermatóloga con más de 15 años de experiencia en Medellín. Formación, afiliaciones y filosofía de atención.",
  alternates: { canonical: "/sobre-la-doctora" },
};

const FORMATION = [
  "Médica cirujana — Universidad Pontificia Bolivariana (UPB)",
  "Especialización en Dermatología — Universidad reconocida",
  "Formación continua en dermatología estética y láser",
  "Cursos internacionales en toxina botulínica y rellenos dérmicos",
];

const AFFILIATIONS = [
  { name: "ASOCOLDERMA", desc: "Asociación Colombiana de Dermatología" },
  { name: "DMAS / SADE", desc: "Sociedad de Dermatología Estética" },
  { name: "UPB", desc: "Universidad Pontificia Bolivariana" },
  { name: "EAFIT", desc: "Vínculo académico" },
];

export default function SobreLaDoctora() {
  return (
    <>
      <section className="container-page pt-16 pb-12 lg:pt-24">
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
          La Doctora
        </span>
        <h1 className="text-5xl lg:text-6xl mt-4 max-w-3xl">
          Dra. Claudia Palacios
        </h1>
        <p className="text-muted text-lg mt-6 max-w-2xl leading-relaxed">
          Dermatóloga con más de 15 años de experiencia, dedicada al cuidado
          integral de la piel mediante un enfoque que combina ciencia, estética
          y atención humana.
        </p>
      </section>

      <section className="container-page pb-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6 text-foreground/90 leading-relaxed">
          <p>
            La Dra. Claudia Palacios ha construido una práctica reconocida en
            Medellín por su rigor médico, atención personalizada y dominio de
            las tecnologías más avanzadas en dermatología clínica, estética y
            láser.
          </p>
          <p>
            Su filosofía profesional se basa en escuchar a cada paciente,
            comprender sus expectativas y diseñar planes de tratamiento que
            respeten la individualidad de cada piel. Considera que la
            dermatología no es solo curar enfermedades, sino acompañar a las
            personas en una relación saludable y consciente con su piel.
          </p>
          <p>
            Mantiene vínculos académicos activos con universidades como UPB y
            EAFIT, y participa regularmente en congresos y formación continua
            para incorporar las últimas evidencias y técnicas a su consulta.
          </p>
        </div>

        <aside className="bg-surface border border-border rounded-[var(--radius-card)] p-8 self-start">
          <p className="font-accent italic text-primary text-2xl leading-snug">
            "La piel es el espejo de la salud. Cada consulta es una conversación
            que comienza por escuchar."
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.2em] text-muted">
            Dra. Claudia Palacios
          </p>
        </aside>
      </section>

      <section className="bg-surface section-y">
        <div className="container-page grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-primary" />
              <h2 className="text-3xl">Formación</h2>
            </div>
            <ul className="space-y-3">
              {FORMATION.map((f) => (
                <li key={f} className="flex gap-3 text-foreground/90">
                  <BookOpen size={16} className="text-primary mt-1 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-primary" />
              <h2 className="text-3xl">Afiliaciones</h2>
            </div>
            <ul className="space-y-4">
              {AFFILIATIONS.map((a) => (
                <li key={a.name}>
                  <p className="font-medium">{a.name}</p>
                  <p className="text-sm text-muted">{a.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <div className="bg-surface border border-border rounded-[var(--radius-card)] p-10 lg:p-14 text-center max-w-3xl mx-auto">
            <Stethoscope className="text-primary mx-auto mb-6" size={32} />
            <h2 className="text-3xl mb-4">Agenda tu primera consulta</h2>
            <p className="text-muted mb-8">
              Conozcamos juntos las necesidades de tu piel.
            </p>
            <a
              href={whatsappUrl("Hola Dra. Claudia, quisiera agendar mi primera consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

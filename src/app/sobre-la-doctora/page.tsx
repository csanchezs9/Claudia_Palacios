import type { Metadata } from "next";
import Image from "next/image";
import { GraduationCap, Award, BookOpen, Stethoscope, Phone, ExternalLink, Users } from "lucide-react";
import { whatsappUrl, SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Sobre la Dra. Claudia Palacios — Dermatóloga en Medellín",
  description:
    "Médica cirujana y dermatóloga de la UPB. Docente de la Facultad de Medicina de la Universidad de Antioquia. Atención en dermatología general, pediátrica, oncológica y cosmiatría.",
  alternates: { canonical: "/sobre-la-doctora" },
};

const FORMATION = [
  "Médica y Cirujana — Universidad Pontificia Bolivariana (UPB)",
  "Especialización en Dermatología — Universidad Pontificia Bolivariana",
  "Docente — Facultad de Medicina, Universidad de Antioquia",
  "Publicaciones científicas — Sociedad Colombiana de Dermatología",
  "Participación en simposios nacionales e internacionales",
];

const SERVICES = [
  "Dermatología general",
  "Dermatología pediátrica",
  "Dermatología oncológica",
  "Cosmiatría / Estética facial",
];

const CONSULTORIO_IMGS = [1, 2, 3, 4, 5, 6];

const SOCIEDADES = [
  {
    nombre: "ASOCOLDERMA",
    descripcion: "Asociación Colombiana de Dermatología y Cirugía Dermatológica",
    url: "https://asocolderma.org.co/",
  },
  {
    nombre: "SADE / DMAS",
    descripcion: "Sociedad Antioqueña de Dermatología y Especialidades",
    url: "https://dmas.com.co/SADE",
  },
  {
    nombre: "Universidad Pontificia Bolivariana",
    descripcion: "Formación médica y especialización en dermatología",
    url: "https://www.upb.edu.co/es/home",
  },
  {
    nombre: "Universidad de Antioquia",
    descripcion: "Docente de la Facultad de Medicina",
    url: "http://www.udea.edu.co/wps/portal/udea/web/inicio",
  },
  {
    nombre: "Universidad EAFIT",
    descripcion: "Vinculación académica y desarrollo profesional",
    url: "https://www.eafit.edu.co/",
  },
];

export default function SobreLaDoctora() {
  return (
    <>
      <section className="container-page pt-16 pb-16 lg:pt-24 grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
            La Doctora
          </span>
          <h1 className="text-5xl lg:text-6xl mt-4 mb-6">
            Dra. Claudia Palacios
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Médica y cirujana, dermatóloga de la Universidad Pontificia
            Bolivariana. Docente de la Facultad de Medicina de la Universidad
            de Antioquia.
          </p>
        </div>
        <div className="lg:col-span-2 relative aspect-[5/4] max-w-md mx-auto lg:max-w-none w-full">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/20 via-accent/15 to-primary-dark/10" />
          <div className="absolute inset-3 rounded-[1.75rem] overflow-hidden shadow-xl">
            <Image
              src="/img/galeria/galeria-2.jpg"
              alt="Dra. Claudia Palacios"
              fill
              sizes="(max-width: 1024px) 80vw, 40vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="container-page pb-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6 text-foreground/90 leading-relaxed">
          <p>
            Soy médica y cirujana de la Universidad Pontificia Bolivariana,
            posteriormente realicé mis estudios de especialización en
            dermatología en la misma universidad. He participado en múltiples
            simposios a nivel nacional e internacional presentando trabajos
            académicos y para mantenerme actualizada en los últimos avances
            de la dermatología.
          </p>
          <p>
            He publicado artículos científicos en revistas como las de la
            Sociedad Colombiana de Dermatología, entre otras, y actualmente
            me desempeño como docente de la Facultad de Medicina de la
            Universidad de Antioquia.
          </p>
          <p>
            Realizo consultas en dermatología general, pediátrica y oncológica.
            Atiendo a pacientes de todas las edades y géneros con enfermedades
            propias de la piel, manifestaciones cutáneas de enfermedades
            internas y, adicionalmente, tengo experiencia en cosmiatría —
            entendida como una herramienta de la dermatología para hacernos
            mejores externa e internamente, utilizando los conocimientos de la
            morfología y la estética humana, siempre buscando conservar la
            esencia y naturalidad de mis pacientes.
          </p>
          <p>
            Soy una médica integral, honesta, amable, perfeccionista, con gran
            sensibilidad por el otro. Siempre estoy dispuesta a escuchar las
            expectativas de mis pacientes y a realizar seguimiento permanente.
            Mi vocación se fundamenta en el deseo de ofrecer una atención
            personalizada, basada en la seguridad y el manejo integral, ya que
            la piel es uno de los regalos más maravillosos que tenemos y
            debemos cuidarla.
          </p>
        </div>

        <aside className="bg-surface border border-border rounded-[var(--radius-card)] p-8 self-start">
          <p className="font-accent italic text-primary text-2xl leading-snug">
            "La piel es uno de los regalos más maravillosos que tenemos. Mi
            vocación es cuidarla con honestidad, seguridad y cercanía."
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.2em] text-muted">
            Dra. Claudia Palacios
          </p>
          <div className="mt-8 pt-6 border-t border-border space-y-3 text-sm">
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
              <Phone size={16} className="text-primary" />
              {SITE.phoneDisplay}
            </a>
            <a
              href={whatsappUrl("Hola Dra. Claudia, quisiera agendar una consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full mt-4"
            >
              Agendar por WhatsApp
            </a>
          </div>
        </aside>
      </section>

      <section className="bg-surface section-y">
        <div className="container-page grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-primary" />
              <h2 className="text-3xl">Formación académica</h2>
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
              <Stethoscope className="text-primary" />
              <h2 className="text-3xl">Áreas de consulta</h2>
            </div>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s} className="flex gap-3 text-foreground/90">
                  <Award size={16} className="text-primary mt-1 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted mt-8 leading-relaxed">
              Atención a pacientes de todas las edades y géneros, con
              enfermedades de la piel y manifestaciones cutáneas de
              enfermedades internas.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
              El consultorio
            </span>
            <h2 className="text-4xl lg:text-5xl mt-3">
              Espacio diseñado para tu bienestar
            </h2>
            <p className="text-muted mt-4">
              Torre Medical · Consultorio 614 · El Poblado
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {CONSULTORIO_IMGS.map((i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border"
              >
                <Image
                  src={`/img/consultorio/consultorio-${i}.jpg`}
                  alt={`Consultorio Dra. Claudia Palacios — vista ${i}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface section-y">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
              Avales profesionales
            </span>
            <h2 className="text-4xl lg:text-5xl mt-3">
              Convenios y sociedades
            </h2>
            <p className="text-muted mt-4">
              Miembro activa de las principales organizaciones dermatológicas y académicas de Colombia.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SOCIEDADES.map((s) => (
              <a
                key={s.nombre}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between gap-4 border border-border rounded-[var(--radius-card)] p-6 bg-background hover:border-primary hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <Users size={20} className="text-primary mt-0.5 shrink-0" />
                    <ExternalLink size={14} className="text-muted group-hover:text-primary transition-colors shrink-0" />
                  </div>
                  <h3 className="font-display text-xl leading-snug">{s.nombre}</h3>
                  <p className="text-sm text-muted mt-2 leading-relaxed">{s.descripcion}</p>
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
                  Ver sitio oficial →
                </span>
              </a>
            ))}
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

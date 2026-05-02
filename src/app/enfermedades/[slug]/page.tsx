import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { ENFERMEDADES, getEnfermedad } from "@/data/enfermedades";
import { whatsappUrl } from "@/lib/utils";

export function generateStaticParams() {
  return ENFERMEDADES.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const e = getEnfermedad(slug);
  if (!e) return {};
  return {
    title: `${e.name} — Tratamiento en Medellín`,
    description: e.short,
    alternates: { canonical: `/enfermedades/${e.slug}` },
  };
}

export default async function EnfermedadPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const e = getEnfermedad(slug);
  if (!e) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: e.name,
    description: e.description,
    signOrSymptom: e.symptoms.map((s) => ({ "@type": "MedicalSymptom", name: s })),
    possibleTreatment: e.treatments.map((t) => ({ "@type": "MedicalTherapy", name: t })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="container-page pt-12 pb-24">
        <Link
          href="/enfermedades"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft size={16} /> Todas las enfermedades
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-5xl lg:text-6xl mb-6">{e.name}</h1>
            <p className="text-lg text-muted leading-relaxed mb-12">
              {e.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <h2 className="text-2xl mb-6">Síntomas comunes</h2>
                <ul className="space-y-3">
                  {e.symptoms.map((s) => (
                    <li key={s} className="flex gap-3 text-foreground/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl mb-6">Tratamientos</h2>
                <ul className="space-y-3">
                  {e.treatments.map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={14} />
                      </span>
                      <span className="text-foreground/90">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 self-start">
            <div className="bg-surface border border-border rounded-[var(--radius-card)] p-8">
              <h3 className="text-xl mb-3">Consulta especializada</h3>
              <p className="text-sm text-muted mb-6">
                Cada caso es único. Agenda una valoración para diseñar tu plan
                de tratamiento personalizado.
              </p>
              <a
                href={whatsappUrl(`Hola Dra. Claudia, quisiera información sobre ${e.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                Agendar consulta
              </a>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}

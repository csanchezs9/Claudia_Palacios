import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, Clock } from "lucide-react";
import { PROCEDIMIENTOS, getProcedimiento } from "@/data/procedimientos";
import { whatsappUrl } from "@/lib/utils";

export function generateStaticParams() {
  return PROCEDIMIENTOS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProcedimiento(slug);
  if (!p) return {};
  return {
    title: `${p.name} en Medellín`,
    description: p.short,
    alternates: { canonical: `/procedimientos/${p.slug}` },
  };
}

export default async function ProcedimientoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProcedimiento(slug);
  if (!p) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: p.name,
    description: p.description,
    procedureType: "https://schema.org/TherapeuticProcedure",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="container-page pt-12 pb-24">
        <Link
          href="/procedimientos"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft size={16} /> Todos los procedimientos
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-5xl lg:text-6xl mb-6">{p.name}</h1>
            <p className="text-lg text-muted leading-relaxed mb-10">
              {p.description}
            </p>

            <h2 className="text-2xl mb-6">Beneficios</h2>
            <ul className="space-y-3 mb-12">
              {p.benefits.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} />
                  </span>
                  <span className="text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>

            {p.faq.length > 0 && (
              <>
                <h2 className="text-2xl mb-6">Preguntas frecuentes</h2>
                <div className="space-y-4">
                  {p.faq.map((f) => (
                    <details
                      key={f.q}
                      className="bg-surface border border-border rounded-[var(--radius-card)] p-6 group"
                    >
                      <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
                        {f.q}
                        <span className="text-primary group-open:rotate-45 transition-transform">+</span>
                      </summary>
                      <p className="text-muted mt-4 leading-relaxed">{f.a}</p>
                    </details>
                  ))}
                </div>
              </>
            )}
          </div>

          <aside className="lg:sticky lg:top-28 self-start">
            <div className="bg-surface border border-border rounded-[var(--radius-card)] p-8">
              <div className="flex items-center gap-2 text-sm text-muted mb-6">
                <Clock size={16} className="text-primary" />
                <span>Duración: {p.duration}</span>
              </div>
              <h3 className="text-xl mb-3">¿Te interesa este tratamiento?</h3>
              <p className="text-sm text-muted mb-6">
                Agenda una valoración con la Dra. Claudia Palacios.
              </p>
              <a
                href={whatsappUrl(`Hola Dra. Claudia, quisiera información sobre ${p.name}.`)}
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

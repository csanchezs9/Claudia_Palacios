"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Clock } from "lucide-react";
import type { Procedimiento } from "@/data/procedimientos";
import { procImage } from "@/data/procedimientos";

type Variant = "ivory" | "surface" | "rose";

const VARIANT_BG: Record<Variant, string> = {
  ivory: "bg-background",
  surface: "bg-surface",
  rose: "bg-[linear-gradient(180deg,rgba(183,110,121,0.04)_0%,rgba(183,110,121,0.08)_100%)]",
};

export function CategorySection({
  id,
  label,
  tagline,
  description,
  hero,
  rest,
  variant,
  index,
}: {
  id: string;
  label: string;
  tagline: string;
  description: string;
  hero: Procedimiento;
  rest: Procedimiento[];
  variant: Variant;
  index: number;
}) {
  return (
    <section id={id} className={`section-y ${VARIANT_BG[variant]}`}>
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
              {String(index + 1).padStart(2, "0")} · Categoría
            </span>
            <h2 className="font-display text-5xl lg:text-7xl mt-3 leading-[1]">
              {label}
            </h2>
            <p className="font-accent italic text-primary text-2xl lg:text-3xl mt-2">
              {tagline}
            </p>
          </div>
          <p className="text-muted leading-relaxed max-w-md md:text-right">
            {description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 lg:row-span-2"
          >
            <Link
              href={`/procedimientos/${hero.slug}`}
              className="group relative block h-full min-h-[420px] lg:min-h-[560px] rounded-[var(--radius-card)] overflow-hidden border border-border bg-foreground"
            >
              <Image
                src={procImage(hero.slug)}
                alt={hero.name}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/10" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12 text-surface [text-shadow:_0_2px_12px_rgba(0,0,0,0.45)]">
                <span className="text-[11px] uppercase tracking-[0.25em] text-surface/85 mb-4">
                  Tratamiento destacado
                </span>
                <h3 className="font-display text-3xl lg:text-5xl leading-[1.05] mb-4 max-w-2xl group-hover:text-primary-light transition-colors">
                  {hero.name}
                </h3>
                <p className="text-surface/95 text-base lg:text-lg max-w-xl leading-relaxed mb-6">
                  {hero.short}
                </p>
                <div className="flex items-center gap-4 text-sm text-surface/90 [text-shadow:none]">
                  <span className="flex items-center gap-1.5 bg-surface/15 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <Clock size={13} /> {hero.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 group-hover:gap-2 transition-all">
                    Ver detalle <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {rest.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: 0.05 * (i + 1),
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href={`/procedimientos/${p.slug}`}
                className="group block h-full bg-surface rounded-[var(--radius-card)] border border-border overflow-hidden hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={procImage(p.slug)}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-display text-xl mb-2 leading-tight group-hover:text-primary transition-colors">
                    {p.name}
                  </h4>
                  <p className="text-sm text-muted leading-relaxed line-clamp-2 mb-4">
                    {p.short}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted">
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} /> {p.duration}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-muted group-hover:text-primary group-hover:rotate-45 transition-all"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

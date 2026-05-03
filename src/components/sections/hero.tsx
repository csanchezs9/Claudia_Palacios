"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";
import { whatsappUrl, SITE } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 min-h-[calc(100vh-5rem)] flex items-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container-page py-12 lg:py-16 grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary font-medium mb-6">
            Dermatología integral · Medellín
          </span>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl leading-[1.05] mb-6">
            Una piel sana.<br />
            <span className="font-accent italic text-primary">Una belleza natural.</span>
          </h1>
          <p className="text-lg text-muted max-w-xl leading-relaxed mb-10">
            Atención dermatológica personalizada con tecnología de última generación.
            Tratamientos clínicos, estéticos y láser en El Poblado, Medellín.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={whatsappUrl("Hola Dra. Claudia, quisiera agendar una cita.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar consulta
              <ArrowRight size={18} />
            </a>
            <a href={`tel:${SITE.phone}`} className="btn-outline">
              <Phone size={16} />
              Llamar ahora
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-sm text-muted">
            <div>
              <div className="font-display text-2xl text-foreground">15+</div>
              <div>años de experiencia</div>
            </div>
            <div>
              <div className="font-display text-2xl text-foreground">10K+</div>
              <div>pacientes atendidos</div>
            </div>
            <div>
              <div className="font-display text-2xl text-foreground">28</div>
              <div>tratamientos disponibles</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative aspect-[5/4] max-w-xl mx-auto lg:max-w-none w-full"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/20 via-accent/15 to-primary-dark/10" />
          <div className="absolute inset-4 rounded-[1.75rem] bg-surface shadow-2xl shadow-primary/10 overflow-hidden">
            <Image
              src="/img/galeria/galeria-1.jpg"
              alt="Dra. Claudia Palacios, dermatóloga en Medellín"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6">
              <p className="font-display text-xl text-surface">Dra. Claudia Palacios</p>
              <p className="text-xs text-surface/80 uppercase tracking-[0.2em] mt-1">
                ASOCOLDERMA · UPB · U. de Antioquia
              </p>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-surface rounded-2xl p-5 shadow-xl border border-border max-w-[220px]">
            <div className="flex items-center gap-2 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Atendiendo hoy
            </div>
            <p className="text-xs text-muted mt-2">
              Torre Medical · Cons. 614<br />Calle 7 #39-107, El Poblado
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

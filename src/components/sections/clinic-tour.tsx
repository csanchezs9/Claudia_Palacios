"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Play, Pause, Volume2, VolumeX, MapPin, Sparkles, ShieldCheck } from "lucide-react";

const HIGHLIGHTS = [
  {
    Icon: MapPin,
    title: "Torre Medical · El Poblado",
    desc: "Ubicación premium con parqueadero, fácil acceso y zona segura.",
  },
  {
    Icon: Sparkles,
    title: "Tecnología de última generación",
    desc: "Equipos láser, IPL y bioestimulación de uso médico-hospitalario.",
  },
  {
    Icon: ShieldCheck,
    title: "Protocolos clínicos rigurosos",
    desc: "Esterilización quirúrgica y bioseguridad en cada procedimiento.",
  },
];

export function ClinicTour() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          v.play().then(() => setPlaying(true)).catch(() => {});
        } else {
          v.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(v);
    return () => obs.disconnect();
  }, []);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <section className="section-y bg-gradient-to-b from-background to-surface relative overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container-page grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
            Conoce el consultorio
          </span>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl mt-4 leading-[1.05] tracking-tight">
            Un espacio diseñado para tu{" "}
            <span className="font-accent italic text-primary">bienestar</span>
          </h2>
          <p className="text-muted text-base lg:text-lg mt-6 leading-relaxed">
            Recorrido por nuestro consultorio en Torre Medical, El Poblado, donde
            cada detalle está pensado para una experiencia médica cómoda,
            segura y de alta gama.
          </p>

          <ul className="mt-10 space-y-5">
            {HIGHLIGHTS.map(({ Icon, title, desc }) => (
              <li key={title} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="text-base font-medium">{title}</h3>
                  <p className="text-sm text-muted mt-0.5">{desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <Link
            href="/contacto"
            className="btn-primary mt-10"
          >
            Reservar visita
          </Link>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="relative mx-auto max-w-[380px] lg:max-w-[420px]">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-accent/15 to-primary-dark/10 blur-2xl" />

            <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden bg-foreground shadow-2xl shadow-primary/20 ring-1 ring-border">
              <video
                ref={videoRef}
                src="/video/tour-consultorio.mp4"
                className="w-full h-full object-cover"
                muted
                playsInline
                loop
                preload="metadata"
                aria-label="Tour del consultorio de la Dra. Claudia Palacios en Torre Medical"
              />

              <button
                type="button"
                onClick={toggle}
                aria-label={playing ? "Pausar video" : "Reproducir video"}
                className="absolute inset-0 flex items-center justify-center group"
              >
                <span
                  className={`w-20 h-20 rounded-full bg-surface/90 backdrop-blur-sm text-primary flex items-center justify-center shadow-2xl transition-all duration-300 ${
                    playing
                      ? "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
                      : "opacity-100 scale-100 animate-pulse"
                  }`}
                >
                  {playing ? <Pause size={28} /> : <Play size={28} className="ml-1" />}
                </span>
              </button>

              <button
                type="button"
                onClick={toggleMute}
                aria-label={muted ? "Activar sonido" : "Silenciar"}
                className="absolute bottom-5 right-5 w-11 h-11 rounded-full bg-surface/90 backdrop-blur-sm text-foreground flex items-center justify-center shadow-lg hover:bg-surface transition-colors"
              >
                {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>

              <div className="absolute top-5 left-5 inline-flex items-center gap-2 bg-foreground/70 backdrop-blur-sm text-surface text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 rounded-pill">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-light animate-pulse" />
                Tour real
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

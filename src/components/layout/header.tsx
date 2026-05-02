"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn, whatsappUrl } from "@/lib/utils";

const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-la-doctora", label: "La Doctora" },
  { href: "/procedimientos", label: "Procedimientos" },
  { href: "/enfermedades", label: "Enfermedades" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-surface/90 backdrop-blur-md border-b border-border shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      )}
    >
      <div className="container-page flex items-center justify-between h-20">
        <Link href="/" className="flex flex-col leading-none group">
          <span className="font-display text-xl tracking-tight text-foreground transition-colors group-hover:text-primary">
            Dra. Claudia Palacios
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted mt-1">
            Dermatología · Medellín
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={whatsappUrl("Hola Dra. Claudia, quisiera agendar una cita.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            Agendar cita
          </a>
        </div>

        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="lg:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-surface border-t border-border">
          <nav className="container-page flex flex-col py-6 gap-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base text-foreground py-2 border-b border-border/50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappUrl("Hola Dra. Claudia, quisiera agendar una cita.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2"
              onClick={() => setOpen(false)}
            >
              Agendar cita
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

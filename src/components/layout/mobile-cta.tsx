"use client";

import { useEffect, useState } from "react";
import { Phone, Calendar } from "lucide-react";
import { SITE, whatsappUrl } from "@/lib/utils";

export function MobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`lg:hidden fixed bottom-0 inset-x-0 z-40 transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-surface/95 backdrop-blur-md border-t border-border shadow-[0_-2px_12px_rgba(0,0,0,0.06)] px-3 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] grid grid-cols-2 gap-2">
        <a
          href={`tel:${SITE.phone}`}
          className="flex items-center justify-center gap-2 py-3 rounded-pill border border-border text-foreground text-sm font-medium active:scale-95 transition-transform"
          aria-label="Llamar consultorio"
        >
          <Phone size={16} className="text-primary" />
          Llamar
        </a>
        <a
          href={whatsappUrl("Hola Dra. Claudia, quisiera agendar una cita.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 rounded-pill bg-primary text-surface text-sm font-medium active:scale-95 transition-transform shadow-md shadow-primary/20"
          aria-label="Agendar cita por WhatsApp"
        >
          <Calendar size={16} />
          Agendar cita
        </a>
      </div>
    </div>
  );
}

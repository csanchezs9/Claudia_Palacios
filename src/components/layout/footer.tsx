import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
    </svg>
  );
}
import { SITE } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-foreground text-surface mt-24">
      <div className="container-page py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full bg-surface/10 flex items-center justify-center p-1">
              <Image src="/img/logo.png" alt="Logo" width={40} height={40} className="object-contain" />
            </div>
            <div>
              <h3 className="font-display text-2xl">Dra. Claudia Palacios</h3>
              <p className="text-xs text-surface/70 uppercase tracking-[0.2em]">
                Dermatología integral
              </p>
            </div>
          </div>
          <p className="text-sm text-surface/80 mt-6 max-w-md leading-relaxed">
            Dermatología clínica, estética y láser en Medellín. Atención
            personalizada con tecnología de última generación.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href={SITE.social.instagram}
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-surface/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href={SITE.social.facebook}
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-surface/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
            >
              <FacebookIcon size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg text-surface">Navegación</h4>
          <ul className="mt-4 space-y-2 text-sm text-surface/80">
            <li><Link href="/sobre-la-doctora" className="hover:text-primary-light">La Doctora</Link></li>
            <li><Link href="/procedimientos" className="hover:text-primary-light">Procedimientos</Link></li>
            <li><Link href="/enfermedades" className="hover:text-primary-light">Enfermedades</Link></li>
            <li><Link href="/blog" className="hover:text-primary-light">Blog</Link></li>
            <li><Link href="/contacto" className="hover:text-primary-light">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-surface">Contacto</h4>
          <ul className="mt-4 space-y-3 text-sm text-surface/80">
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-primary-light" />
              <span>{SITE.address.street}<br />{SITE.address.city}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-primary-light" />
              <a href={`tel:${SITE.phone}`} className="hover:text-primary-light">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-primary-light" />
              <a href={`mailto:${SITE.email}`} className="hover:text-primary-light break-all">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-surface/10">
        <div className="container-page py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-surface/60">
          <p>© {new Date().getFullYear()} Dra. Claudia Palacios. Todos los derechos reservados.</p>
          <p>Registro médico vigente · ASOCOLDERMA · SADE/DMAS</p>
        </div>
      </div>
    </footer>
  );
}

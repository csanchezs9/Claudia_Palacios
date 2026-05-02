import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE = {
  name: "Dra. Claudia Palacios",
  title: "Dra. Claudia Palacios — Dermatóloga en Medellín",
  description:
    "Dermatóloga en Medellín especializada en dermatología clínica, estética y láser. Tratamientos para melasma, acné, rosácea, botox, ácido hialurónico y más. Consulta en Torre Medical, El Poblado.",
  url: "https://dermatologaclaudiapalacios.com",
  phone: "+573042019977",
  phoneDisplay: "+57 304 201 9977",
  phoneClinic: "+5744796389",
  phoneClinicDisplay: "+(57-4) 479 6389",
  email: "[email protected]",
  address: {
    street: "Calle 7 #39-107, Torre Medical, Consultorio 614",
    city: "Medellín",
    region: "Antioquia",
    country: "CO",
    zip: "050021",
  },
  whatsapp: "573042019977",
  social: {
    instagram: "https://www.instagram.com/dermatologaclaudiapalacios",
    facebook: "https://www.facebook.com/dermatologaclaudiapalacios",
  },
} as const;

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${SITE.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

"use client";

import { useState } from "react";
import { Send, Loader2, Check } from "lucide-react";
import { whatsappUrl } from "@/lib/utils";

const REASONS = [
  "Consulta dermatológica general",
  "Acné",
  "Melasma / manchas",
  "Rosácea",
  "Rejuvenecimiento facial",
  "Toxina botulínica",
  "Ácido hialurónico",
  "Láser CO2",
  "Otro tratamiento",
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState(REASONS[0]);
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !consent) return;
    setSubmitting(true);

    if (typeof window !== "undefined") {
      const w = window as unknown as { dataLayer?: unknown[] };
      w.dataLayer?.push({ event: "lead_submit", lead_reason: reason });
    }

    const text = `Hola Dra. Claudia, soy ${name}.
Motivo: ${reason}.
Teléfono: ${phone}.${message ? `\n\n${message}` : ""}`;

    setTimeout(() => {
      setDone(true);
      window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
    }, 400);
  };

  if (done) {
    return (
      <div className="bg-success/10 border border-success/30 rounded-2xl p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-success text-surface mx-auto flex items-center justify-center mb-4">
          <Check size={26} />
        </div>
        <h3 className="font-display text-2xl mb-2">¡Listo!</h3>
        <p className="text-muted text-sm">
          Te redirigimos a WhatsApp. Si no se abre,{" "}
          <a
            href={whatsappUrl(`Hola Dra. Claudia, soy ${name}. Motivo: ${reason}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            haz click aquí
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-surface border border-border rounded-2xl p-6 lg:p-8 space-y-5"
    >
      <div>
        <h3 className="font-display text-2xl mb-1">Solicita tu cita</h3>
        <p className="text-xs text-muted">Respuesta promedio en menos de 30 minutos hábiles.</p>
      </div>

      <div>
        <label htmlFor="name" className="block text-xs uppercase tracking-[0.2em] text-muted mb-2">
          Nombre completo
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-xs uppercase tracking-[0.2em] text-muted mb-2">
          WhatsApp / teléfono
        </label>
        <input
          id="phone"
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          autoComplete="tel"
          inputMode="tel"
          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
          placeholder="300 123 4567"
        />
      </div>

      <div>
        <label htmlFor="reason" className="block text-xs uppercase tracking-[0.2em] text-muted mb-2">
          Motivo de consulta
        </label>
        <select
          id="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
        >
          {REASONS.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="msg" className="block text-xs uppercase tracking-[0.2em] text-muted mb-2">
          Mensaje (opcional)
        </label>
        <textarea
          id="msg"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
          placeholder="Cuéntanos brevemente tu caso..."
        />
      </div>

      <label className="flex items-start gap-3 text-xs text-muted leading-relaxed cursor-pointer">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          required
          className="mt-1 w-4 h-4 accent-primary"
        />
        <span>
          Autorizo el tratamiento de mis datos personales conforme a la Ley 1581
          de 2012 (Habeas Data) para ser contactada por el equipo de la Dra. Claudia
          Palacios.
        </span>
      </label>

      <button
        type="submit"
        disabled={submitting || !name || !phone || !consent}
        className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            Enviar por WhatsApp
            <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}

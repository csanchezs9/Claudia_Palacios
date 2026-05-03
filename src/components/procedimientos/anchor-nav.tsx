"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const ANCHORS = [
  { id: "estetica", label: "Estética" },
  { id: "clinica", label: "Clínica" },
  { id: "laser", label: "Láser" },
  { id: "tecnologia", label: "Tecnología" },
];

export function AnchorNav() {
  const [active, setActive] = useState<string>("estetica");

  useEffect(() => {
    const sections = ANCHORS.map((a) => document.getElementById(a.id)).filter(
      Boolean
    ) as HTMLElement[];
    if (sections.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  function jump(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top, behavior: "smooth" });
  }

  return (
    <div className="sticky top-20 z-30 bg-background/85 backdrop-blur-md py-4 border-y border-border/40">
      <div className="container-page">
        <div className="flex flex-wrap justify-center gap-2">
          {ANCHORS.map((a) => {
            const isActive = active === a.id;
            return (
              <button
                key={a.id}
                onClick={() => jump(a.id)}
                className={`relative px-5 py-2 text-sm rounded-full whitespace-nowrap transition-colors ${
                  isActive ? "text-surface" : "text-muted hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="proc-anchor"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{a.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

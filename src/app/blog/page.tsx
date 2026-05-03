import type { Metadata } from "next";
import { POSTS } from "@/data/blog";
import { BlogGrid } from "@/components/blog/blog-grid";

export const metadata: Metadata = {
  title: "Blog — Dermatología y bienestar",
  description:
    "Consejos de cuidado de la piel, dermatología, hábitos saludables, ayurveda, yoga y bienestar. Blog de la Dra. Claudia Palacios.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 0%, rgba(183,110,121,0.10), transparent 60%), radial-gradient(50% 40% at 0% 30%, rgba(201,168,124,0.08), transparent 60%)",
        }}
      />

      <section className="container-page pt-20 pb-12 lg:pt-28">
        <div className="max-w-4xl">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
            Blog
          </span>
          <h1 className="font-display text-6xl lg:text-7xl xl:text-8xl mt-4 leading-[0.95]">
            Conocimiento que <span className="font-accent italic text-primary">cuida</span> tu piel
          </h1>
          <p className="text-muted text-lg lg:text-xl mt-8 max-w-2xl leading-relaxed">
            Artículos sobre dermatología clínica, hábitos saludables, ayurveda,
            yoga y la conexión profunda entre bienestar interior y la piel.
          </p>
        </div>
      </section>

      <BlogGrid posts={POSTS} />
    </div>
  );
}

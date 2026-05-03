import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { POSTS, CATEGORIES } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog — Dermatología y bienestar",
  description:
    "Consejos de cuidado de la piel, dermatología, hábitos saludables y bienestar. Blog de la Dra. Claudia Palacios.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <section className="container-page pt-16 pb-12 lg:pt-24">
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
          Blog
        </span>
        <h1 className="text-5xl lg:text-6xl mt-4 max-w-3xl">
          Conocimiento que cuida tu piel
        </h1>
        <p className="text-muted text-lg mt-6 max-w-2xl">
          Artículos sobre dermatología, hábitos saludables y bienestar integral.
        </p>
      </section>

      <section className="container-page pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group bg-surface rounded-[var(--radius-card)] border border-border overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 text-xs text-muted mb-3">
                  <span className="text-primary uppercase tracking-[0.15em]">
                    {CATEGORIES[p.category]}
                  </span>
                  <span>·</span>
                  <span>{p.readMinutes} min</span>
                </div>
                <h2 className="text-xl mb-3 group-hover:text-primary transition-colors">
                  {p.title}
                </h2>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {p.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                  Leer artículo <ArrowUpRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

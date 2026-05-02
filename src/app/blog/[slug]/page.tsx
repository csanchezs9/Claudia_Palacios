import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { POSTS, CATEGORIES, getPost } from "@/data/blog";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.excerpt,
    alternates: { canonical: `/blog/${p.slug}` },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();

  return (
    <article className="container-page pt-12 pb-24 max-w-3xl">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft size={16} /> Todos los artículos
      </Link>
      <div className="flex items-center gap-3 text-xs text-muted mb-4">
        <span className="text-primary uppercase tracking-[0.15em]">
          {CATEGORIES[p.category]}
        </span>
        <span>·</span>
        <span>{p.readMinutes} min de lectura</span>
        <span>·</span>
        <time>{new Date(p.date).toLocaleDateString("es-CO", { year: "numeric", month: "long", day: "numeric" })}</time>
      </div>
      <h1 className="text-4xl lg:text-5xl mb-6">{p.title}</h1>
      <p className="text-lg text-muted leading-relaxed mb-10">{p.excerpt}</p>
      <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed">
        <p>{p.content}</p>
      </div>
    </article>
  );
}

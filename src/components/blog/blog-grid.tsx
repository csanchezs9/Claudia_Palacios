"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Clock } from "lucide-react";
import type { BlogPost } from "@/data/blog";
import { CATEGORIES } from "@/data/blog";

type Category = BlogPost["category"];
type Filter = "todos" | Category;

const FILTER_LABELS: Record<Filter, string> = {
  todos: "Todos",
  ...CATEGORIES,
};

const FILTER_ORDER: Filter[] = [
  "todos",
  "dermatologia",
  "habitos-saludables",
  "ayurveda",
  "yoga",
  "naturaleza",
];

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("es-CO", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function HeroPost({ post }: { post: BlogPost }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="md:col-span-2 md:row-span-2"
    >
      <Link
        ref={ref}
        href={`/blog/${post.slug}`}
        className="group relative block h-full min-h-[480px] md:min-h-[640px] rounded-[var(--radius-card)] overflow-hidden border border-border bg-foreground"
      >
        <motion.div className="absolute inset-0" style={{ y, scale }}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
        <div className="relative h-full flex flex-col justify-end p-8 lg:p-12 text-surface">
          <div className="flex items-center gap-3 text-xs text-surface/85 mb-5">
            <span className="bg-primary px-3 py-1 rounded-full uppercase tracking-[0.2em] text-[10px]">
              Destacado
            </span>
            <span className="uppercase tracking-[0.15em]">
              {CATEGORIES[post.category]}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock size={12} /> {post.readMinutes} min
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-6xl leading-[1.05] mb-5 max-w-3xl group-hover:text-primary-light transition-colors">
            {post.title}
          </h2>
          <p className="text-surface/90 text-base lg:text-lg max-w-2xl leading-relaxed mb-6">
            {post.excerpt}
          </p>
          <span className="inline-flex items-center gap-2 text-sm group-hover:gap-3 transition-all">
            Leer artículo completo
            <ArrowUpRight size={16} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

function WidePost({ post }: { post: BlogPost }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="md:col-span-2"
    >
      <Link
        ref={ref}
        href={`/blog/${post.slug}`}
        className="group relative grid sm:grid-cols-5 h-full min-h-[280px] rounded-[var(--radius-card)] overflow-hidden border border-border bg-surface hover:border-primary/40 hover:shadow-lg transition-all"
      >
        <div className="relative sm:col-span-2 aspect-[4/3] sm:aspect-auto overflow-hidden">
          <motion.div className="absolute inset-0" style={{ x }}>
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover scale-110"
            />
          </motion.div>
        </div>
        <div className="sm:col-span-3 p-7 lg:p-9 flex flex-col justify-center">
          <div className="flex items-center gap-3 text-xs text-muted mb-4">
            <span className="text-primary uppercase tracking-[0.15em]">
              {CATEGORIES[post.category]}
            </span>
            <span>·</span>
            <span>{post.readMinutes} min</span>
          </div>
          <h2 className="font-display text-2xl lg:text-3xl mb-3 leading-tight group-hover:text-primary transition-colors">
            {post.title}
          </h2>
          <p className="text-muted text-sm leading-relaxed mb-5 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-muted">
            <time>{formatDate(post.date)}</time>
            <ArrowUpRight
              size={18}
              className="text-muted group-hover:text-primary group-hover:rotate-45 transition-all"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function StandardPost({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.05 * (index % 6),
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group block h-full bg-surface rounded-[var(--radius-card)] border border-border overflow-hidden hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5 transition-all"
      >
        <div className="relative aspect-[16/11] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] uppercase tracking-[0.15em] text-primary">
            {CATEGORIES[post.category]}
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-display text-xl mb-2 leading-tight group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <Clock size={12} /> {post.readMinutes} min
            </span>
            <time>{formatDate(post.date)}</time>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  const [filter, setFilter] = useState<Filter>("todos");

  const filtered = useMemo(() => {
    if (filter === "todos") return posts;
    return posts.filter((p) => p.category === filter);
  }, [filter, posts]);

  const [hero, wide, ...rest] = filtered;

  return (
    <>
      <div className="container-page sticky top-20 z-30 -mx-4 lg:mx-0">
        <div className="bg-background/80 backdrop-blur-md py-4 px-4 lg:px-0 -mx-4 lg:mx-0">
          <div className="flex gap-2 overflow-x-auto scrollbar-none">
            {FILTER_ORDER.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`relative px-4 py-2 text-sm rounded-full whitespace-nowrap transition-colors ${
                    active ? "text-surface" : "text-muted hover:text-foreground"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{FILTER_LABELS[f]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container-page pt-8 pb-24">
        {filtered.length === 0 ? (
          <div className="text-center py-32 text-muted">
            No hay artículos en esta categoría todavía.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 auto-rows-min gap-5">
            {hero && <HeroPost post={hero} />}
            {wide && <WidePost post={wide} />}
            {rest.map((post, i) => (
              <StandardPost key={post.slug} post={post} index={i} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

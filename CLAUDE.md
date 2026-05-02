# Claudia Palacios — Dermatologist Website

Rebuild of `https://dermatologaclaudiapalacios.com/` (currently WordPress, slow, poor SEO) into a fast, SEO-optimized, premium medical site.

## Goals

- 10× faster than current WordPress site (SSR + edge cache)
- Top Google ranking for `dermatóloga Medellín` and related long-tail keywords
- Mobile-first conversion-optimized design
- Premium, clean medical aesthetic — feminine but professional

## Tech Stack

- **Next.js 16** (App Router, Server Components, PPR)
- **React 19** (latest stable)
- **TypeScript** (strict mode)
- **Tailwind CSS 4**
- **shadcn/ui** for primitives
- **Framer Motion** for animations
- **next/image** with AVIF/WebP
- **next-intl** (ES primary, EN future)
- **MDX** for blog content
- **Vercel** hosting (edge + CDN)
- Schema.org JSON-LD: `MedicalBusiness`, `Physician`, `MedicalProcedure`, `FAQPage`, `BreadcrumbList`

## Color Palette

| Role | Color | Hex |
|---|---|---|
| Primary | Deep nude rose | `#B76E79` |
| Primary dark | Soft burgundy | `#7D3C47` |
| Accent | Champagne gold | `#C9A87C` |
| Background | Warm ivory | `#FAF7F2` |
| Surface | Pure white | `#FFFFFF` |
| Text primary | Charcoal | `#1F1B1A` |
| Text muted | Taupe | `#6B6360` |
| Border | Light beige | `#E8E2DA` |
| Success | Sage green | `#7B9E89` |

All text must meet WCAG AA contrast minimum.

## Typography

- **Headings/Display:** `Cormorant Garamond` (elegant serif)
- **Body:** `Inter` (modern sans-serif)
- **Hero accent (optional):** `Italiana`
- Scale: 12 / 14 / 16 / 18 / 20 / 24 / 32 / 48 / 64 / 80 px
- Line-height: 1.6 body, 1.15 headings
- Tracking: -0.02em headings, normal body

## Spacing & Layout

- 12-column grid, max-width `1280px`
- Spacing scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128
- Section vertical padding: 96px desktop, 64px mobile
- Border radius: 12px cards, 999px pill buttons
- Generous whitespace (premium clinic feel)

## Site Structure

1. **Home** — Hero with doctor photo + WhatsApp CTA, featured services, credentials, testimonials, blog preview, map
2. **Sobre la Dra.** — Bio, training, affiliations (ASOCOLDERMA, UPB, EAFIT), philosophy
3. **Procedimientos** — Grid of 16 procedures, individual page each with FAQ
4. **Enfermedades** — Grid of 12 conditions, individual page each
5. **Blog** — MDX, 5 categories (Dermatology, Healthy Habits, Ayurveda, Yoga, Nature), search
6. **Contacto** — Form + Torre Medical map + direct WhatsApp
7. **Agendar cita** — Persistent sticky CTA

## SEO Strategy

- Full SSR/SSG (vs current WordPress)
- Dynamic meta tags + Open Graph per page
- Auto-generated `sitemap.xml` and `robots.txt`
- JSON-LD on all relevant pages
- Core Web Vitals targets: LCP < 1.5s, CLS < 0.05, INP < 200ms
- Target keywords: `dermatóloga Medellín`, `dermatólogo El Poblado`, `botox Medellín`, `melasma tratamiento`, `[procedimiento] Medellín` × 16
- Clean URLs: `/procedimientos/laser-co2`, `/enfermedades/melasma`
- Alt text on all images, hierarchical headings
- Google Business Profile sync + reviews schema
- Blog: long-tail SEO posts (~1500 words each)
- Internal linking procedures ↔ related conditions
- Lighthouse 95+ all categories

## Conversion Elements

- Floating WhatsApp with page-contextual pre-message
- Sticky header "Agendar consulta" CTA
- Short form: name, WhatsApp, reason
- Real-name testimonials with photos (consented)
- Before/after gallery (consented)
- Trust signals: university logos, associations, years of experience
- Click-to-call on mobile
- Meta Pixel + GA4 + GTM

## Accessibility & Responsive

- Mobile-first (60%+ medical traffic is mobile)
- Breakpoints: 640 / 768 / 1024 / 1280 / 1536
- Touch targets ≥ 44px
- Visible focus, skip links, ARIA labels
- Lighthouse Accessibility 100

## Doctor Info

- **Name:** Dra. Claudia Palacios
- **Location:** Torre Medical, Consultorio 614, Calle 7 #39-107, Medellín, Colombia
- **Phone:** +(57-4) 479 6389 / 304 201 9977
- **Email:** [email protected]
- **Affiliations:** ASOCOLDERMA, DMAS/SADE, UPB, EAFIT
- **Social:** Facebook, Instagram, WhatsApp

## Delivery Phases

1. **Phase 1** — Next.js setup, design system, Home + Contact (week 1-2)
2. **Phase 2** — Procedures + Conditions (week 3-4)
3. **Phase 3** — MDX Blog + technical SEO (week 5)
4. **Phase 4** — Performance, schema, analytics, deploy (week 6)

## Repository

Remote: `https://github.com/csanchezs9/Claudia_Palacios.git`

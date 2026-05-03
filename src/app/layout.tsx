import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, Italiana } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { MobileCTA } from "@/components/layout/mobile-cta";
import { OrganizationSchema } from "@/components/seo/organization-schema";
import { Analytics, AnalyticsNoScript } from "@/components/analytics/analytics";
import { SITE } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "dermatóloga Medellín",
    "dermatólogo El Poblado",
    "Claudia Palacios",
    "botox Medellín",
    "ácido hialurónico Medellín",
    "tratamiento melasma",
    "tratamiento acné",
    "rosácea",
    "láser CO2",
    "depilación láser",
    "Torre Medical",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: SITE.url },
};

export const viewport: Viewport = {
  themeColor: "#b76e79",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-CO"
      className={`${inter.variable} ${cormorant.variable} ${italiana.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground pb-20 lg:pb-0">
        <AnalyticsNoScript />
        <OrganizationSchema />
        <Analytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <MobileCTA />
      </body>
    </html>
  );
}

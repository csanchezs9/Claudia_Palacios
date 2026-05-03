import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { FeaturedServices } from "@/components/sections/featured-services";
import { AboutPreview } from "@/components/sections/about-preview";
import { BeforeAfter } from "@/components/sections/before-after";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBand } from "@/components/sections/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <FeaturedServices />
      <AboutPreview />
      <BeforeAfter />
      <Testimonials />
      <CtaBand />
    </>
  );
}

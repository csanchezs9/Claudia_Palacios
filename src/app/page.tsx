import { Hero } from "@/components/sections/hero";
import { FeaturedServices } from "@/components/sections/featured-services";
import { AboutPreview } from "@/components/sections/about-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBand } from "@/components/sections/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <AboutPreview />
      <Testimonials />
      <CtaBand />
    </>
  );
}

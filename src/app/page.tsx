import { Hero } from "@/components/hero/Hero";
import { Services } from "@/components/services/Services";
import { FeaturedWork } from "@/components/work/FeaturedWork";
import { Testimonials } from "@/components/common/Testimonials";
import { CTABanner } from "@/components/common/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Services showCTA={true} />
      <FeaturedWork limit={3} showCTA={true} />
      <Testimonials />
      <CTABanner />
    </>
  );
}

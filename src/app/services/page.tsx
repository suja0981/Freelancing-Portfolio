import type { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { Services } from "@/components/services/Services";
import { Process } from "@/components/process/Process";
import { WhyChooseUs } from "@/components/common/WhyChooseUs";
import { CTABanner } from "@/components/common/CTABanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, web applications, UI/UX design, and SEO services. We build beautiful, fast, and scalable digital products.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="What we do"
        title="Services we offer"
        subtitle="We combine creativity and engineering excellence to deliver digital products that make a real impact."
      />
      <Services showCTA={false} showTitle={false} />
      <Process />
      <WhyChooseUs />
      <CTABanner />
    </>
  );
}

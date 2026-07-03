import type { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { FeaturedWork } from "@/components/work/FeaturedWork";
import { CTABanner } from "@/components/common/CTABanner";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore our portfolio of web applications, landing pages, and digital products we've built for startups and businesses.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        label="Our portfolio"
        title="Work we're proud of"
        subtitle="A selection of projects that showcase our expertise in design and development."
      />
      <FeaturedWork showCTA={false} showTitle={false} />
      <CTABanner />
    </>
  );
}

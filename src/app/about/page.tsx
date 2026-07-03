import type { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { Team } from "@/components/team/Team";
import { Testimonials } from "@/components/common/Testimonials";
import { FAQ } from "@/components/common/FAQ";
import { CTABanner } from "@/components/common/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the CodeCrew team. A small team with big ambitions — we combine engineering excellence with creative vision.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About us"
        title="The people behind CodeCrew"
        subtitle="A small team with big ambitions. We combine engineering excellence with creative vision to build products that matter."
      />
      <Team showTitle={false} />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </>
  );
}

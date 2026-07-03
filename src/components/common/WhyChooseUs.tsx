import { Container } from "../layout/Container";
import { SectionTitle } from "../common/SectionTitle";
import { PaperCard } from "../common/PaperCard";
import { ScrollReveal } from "../common/ScrollReveal";
import {
  Zap,
  Layers,
  Monitor,
  Search,
  Smartphone,
  HeartHandshake,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "We ship quality work on time, every time. No unnecessary delays.",
  },
  {
    icon: Layers,
    title: "Scalable Code",
    description:
      "Built to grow with your business. Clean architecture from day one.",
  },
  {
    icon: Monitor,
    title: "Modern UI",
    description:
      "Beautiful, contemporary interfaces that feel premium and intuitive.",
  },
  {
    icon: Search,
    title: "SEO First",
    description:
      "Every project is optimized for search engines and discoverability.",
  },
  {
    icon: Smartphone,
    title: "Responsive",
    description:
      "Pixel-perfect on every device, from mobile to ultra-wide displays.",
  },
  {
    icon: HeartHandshake,
    title: "Long-term Support",
    description:
      "We don't disappear after launch. Ongoing support and maintenance.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-card/30">
      <Container>
        <ScrollReveal>
          <SectionTitle
            label="Why us"
            title="Why teams choose to work with us"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={0.08 * i}>
            <PaperCard
              key={feature.title}
              className="p-7 md:p-8 flex items-start gap-5"
              hover={false}
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <feature.icon
                  size={20}
                  className="text-accent"
                  strokeWidth={1.8}
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-heading text-primary text-lg mb-1.5 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-secondary text-[13px] leading-[1.7]">
                  {feature.description}
                </p>
              </div>
            </PaperCard>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

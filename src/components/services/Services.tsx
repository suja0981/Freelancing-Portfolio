import { Container } from "../layout/Container";
import { SectionTitle } from "../common/SectionTitle";
import { ServiceCard } from "./ServiceCard";
import { Button } from "../common/Button";
import { ScrollReveal } from "../common/ScrollReveal";
import { Globe, LayoutDashboard, Palette, Search } from "lucide-react";

export const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive and scalable websites built with the latest technologies and best practices.",
  },
  {
    icon: LayoutDashboard,
    title: "Web Applications",
    description:
      "Powerful web apps tailored to your business needs with intuitive user experiences.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful interfaces with great user experience that delight your users and drive engagement.",
  },
  {
    icon: Search,
    title: "SEO & Performance",
    description:
      "Optimized for speed and search engines to maximize your online presence and reach.",
  },
];

interface ServicesProps {
  limit?: number;
  showCTA?: boolean;
  showTitle?: boolean;
}

export function Services({ limit, showCTA = true, showTitle = true }: ServicesProps) {
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-24 md:py-32 lg:py-40">
      <Container>
        {showTitle && (
          <ScrollReveal>
            <SectionTitle
              label="What we do"
              title="Services that we're really good at"
            />
          </ScrollReveal>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {displayServices.map((service, i) => (
            <ScrollReveal key={service.title} delay={0.1 * i}>
              <ServiceCard {...service} />
            </ScrollReveal>
          ))}
        </div>

        {showCTA && (
          <ScrollReveal delay={0.1}>
            <div className="flex justify-center mt-14 md:mt-16">
              <Button variant="secondary" href="/services">
                Explore All Services
              </Button>
            </div>
          </ScrollReveal>
        )}
      </Container>
    </section>
  );
}

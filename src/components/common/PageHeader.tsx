import { Container } from "../layout/Container";
import { ScrollReveal } from "./ScrollReveal";

interface PageHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function PageHeader({ label, title, subtitle }: PageHeaderProps) {
  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-20">
      <Container>
        <div className="max-w-2xl">
          <ScrollReveal delay={0.1}>
            <span className="font-handwritten text-accent text-xl md:text-2xl mb-4 block leading-none">
              {label}
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h1 className="font-heading text-primary text-[36px] sm:text-[44px] md:text-[52px] lg:text-[58px] leading-[1.1] tracking-tight mb-5">
              {title}
            </h1>
          </ScrollReveal>
          {subtitle && (
            <ScrollReveal delay={0.3}>
              <p className="text-secondary text-base md:text-[17px] leading-[1.7] max-w-xl">
                {subtitle}
              </p>
            </ScrollReveal>
          )}
        </div>
      </Container>
    </section>
  );
}

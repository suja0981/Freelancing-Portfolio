import { Container } from "../layout/Container";
import { Button } from "../common/Button";
import { TrustedCompanies } from "../common/TrustedCompanies";
import { HeroIllustration } from "./HeroIllustration";
import { ScrollReveal } from "../common/ScrollReveal";

export function Hero() {
  return (
    <section
      className="relative pt-32 md:pt-40 lg:pt-44 pb-20 md:pb-28 lg:pb-32 overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-200px)] lg:min-h-0">
          {/* Left — Text Content (45%) */}
          <div className="lg:col-span-5 flex flex-col order-2 lg:order-1">
            {/* Handwritten greeting */}
            <ScrollReveal delay={0.1}>
              <span className="font-handwritten text-accent text-xl md:text-[22px] mb-5 leading-none block">
                Hello! We are CodeCrew 👋
              </span>
            </ScrollReveal>

            {/* Main headline */}
            <ScrollReveal delay={0.2}>
              <h1 className="font-heading text-primary text-[40px] sm:text-[48px] md:text-[56px] lg:text-[60px] xl:text-[66px] leading-[1.08] tracking-tight mb-6">
                We turn{" "}
                <span className="relative inline-block">
                  ideas
                  {/* Hand-drawn underline */}
                  <svg
                    className="absolute -bottom-1.5 md:-bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 8.5C30 3.5 60 2 100 4.5C140 7 170 5.5 198 3"
                      stroke="#FF8A3D"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className="[stroke-dasharray:200] [stroke-dashoffset:0]"
                    />
                  </svg>
                </span>{" "}
                into
                <br />
                digital products
              </h1>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal delay={0.35}>
              <p className="text-secondary text-base md:text-[17px] leading-[1.7] mb-10 max-w-[420px]">
                We help startups and businesses build beautiful, fast and scalable
                websites and web applications.
              </p>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal delay={0.5}>
              <div className="flex flex-wrap items-center gap-4 mb-16">
                <Button variant="primary" href="/contact">
                  Start a Project
                </Button>
                <Button variant="secondary" href="/work">
                  View Our Work
                </Button>
              </div>
            </ScrollReveal>

            {/* Trust badges */}
            <ScrollReveal delay={0.6}>
              <TrustedCompanies />
            </ScrollReveal>
          </div>

          {/* Right — Illustration (55%) */}
          <ScrollReveal delay={0.3} direction="right" className="lg:col-span-7 order-1 lg:order-2">
            <HeroIllustration />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

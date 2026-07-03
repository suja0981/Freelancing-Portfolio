import { Container } from "../layout/Container";
import { Button } from "./Button";
import { ScrollReveal } from "./ScrollReveal";

export function CTABanner() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <ScrollReveal>
          <div className="relative bg-primary rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center overflow-hidden">
            {/* Subtle accent glow */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

            <span className="font-handwritten text-accent text-xl md:text-2xl mb-4 block leading-none relative z-10">
              Ready to start?
            </span>
            <h2 className="font-heading text-white text-3xl md:text-4xl lg:text-[48px] leading-[1.12] tracking-tight mb-5 relative z-10">
              Have a project in mind?
            </h2>
            <p className="text-white/60 text-base md:text-[17px] leading-relaxed max-w-md mx-auto mb-10 relative z-10">
              Let&apos;s turn your ideas into a digital product that your users
              will love.
            </p>
            <div className="relative z-10">
              <Button
                variant="secondary"
                href="/contact"
                className="bg-white text-primary border-white/20 hover:bg-white/95"
              >
                Let&apos;s Talk
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

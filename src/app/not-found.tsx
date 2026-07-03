import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";

export default function NotFound() {
  return (
    <section className="pt-32 md:pt-40 pb-24 md:pb-32">
      <Container>
        <div className="flex flex-col items-center text-center max-w-lg mx-auto">
          {/* Large 404 */}
          <span className="font-heading text-[120px] md:text-[180px] leading-none text-border/60 select-none mb-4">
            404
          </span>

          <span className="font-handwritten text-accent text-xl md:text-2xl mb-3 leading-none">
            Oops!
          </span>

          <h1 className="font-heading text-primary text-3xl md:text-4xl lg:text-[44px] leading-[1.15] tracking-tight mb-5">
            Page not found
          </h1>

          <p className="text-secondary text-base md:text-[17px] leading-relaxed mb-10">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </p>

          <div className="flex flex-wrap items-center gap-4 justify-center">
            <Button variant="primary" href="/">
              Back to Home
            </Button>
            <Button variant="secondary" href="/contact">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

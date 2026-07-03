"use client";

import { useState } from "react";
import { Container } from "../layout/Container";
import { SectionTitle } from "../common/SectionTitle";
import { PaperCard } from "../common/PaperCard";
import { ScrollReveal } from "../common/ScrollReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initial: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "CodeCrew understood our vision and turned it into a beautiful product. Highly recommended!",
    name: "Arjun Patel",
    role: "Founder",
    company: "Penta",
    initial: "A",
  },
  {
    quote:
      "The attention to detail and code quality was exceptional. They delivered ahead of schedule and exceeded our expectations.",
    name: "Sarah Chen",
    role: "CTO",
    company: "Cloudly",
    initial: "S",
  },
  {
    quote:
      "Working with CodeCrew felt like having an in-house team. They truly care about the product and the user experience.",
    name: "Michael Torres",
    role: "Product Lead",
    company: "Snapwise",
    initial: "M",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => {
    if (index < 0) setCurrent(testimonials.length - 1);
    else if (index >= testimonials.length) setCurrent(0);
    else setCurrent(index);
  };

  return (
    <section className="py-24 md:py-32 lg:py-40">
      <Container>
        <ScrollReveal>
          <SectionTitle
            label="Testimonials"
            title="What our clients say"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
        <div className="max-w-2xl mx-auto">
          {/* Card */}
          <PaperCard className="p-10 md:p-14 text-center relative" hover={false}>
            {/* Large quote marks */}
            <div className="flex justify-center mb-6">
              <span className="font-heading text-accent/30 text-6xl md:text-7xl leading-none select-none" aria-hidden="true">
                &ldquo;
              </span>
            </div>

            {/* Quote */}
            <blockquote className="font-heading text-primary text-xl md:text-2xl leading-[1.5] mb-8 min-h-[80px]">
              &ldquo;{testimonials[current].quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex flex-col items-center gap-3">
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-accent/10 border border-border flex items-center justify-center">
                <span className="font-heading text-accent text-lg">
                  {testimonials[current].initial}
                </span>
              </div>
              <div>
                <p className="text-primary font-semibold text-sm">
                  ~ {testimonials[current].name},{" "}
                  <span className="text-secondary font-normal">
                    {testimonials[current].role} @ {testimonials[current].company}
                  </span>
                </p>
              </div>
            </div>
          </PaperCard>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* Prev */}
            <button
              onClick={() => goTo(current - 1)}
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-secondary hover:text-primary hover:border-primary/20 transition-all duration-200 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={cn(
                    "rounded-full transition-all duration-300 cursor-pointer",
                    current === index
                      ? "w-7 h-2.5 bg-accent"
                      : "w-2.5 h-2.5 bg-border hover:bg-secondary/40"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={current === index ? "true" : undefined}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={() => goTo(current + 1)}
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-secondary hover:text-primary hover:border-primary/20 transition-all duration-200 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

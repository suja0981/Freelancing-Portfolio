"use client";

import { useState } from "react";
import { Container } from "../layout/Container";
import { SectionTitle } from "../common/SectionTitle";
import { ScrollReveal } from "../common/ScrollReveal";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What technologies do you use?",
    answer:
      "We primarily work with React, Next.js, TypeScript, Node.js, and modern CSS frameworks like Tailwind CSS. For databases, we use PostgreSQL and MongoDB. We always choose the best tools for each specific project.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary based on complexity. A landing page typically takes 2-3 weeks, a web application 6-10 weeks, and a full SaaS product 3-6 months. We'll provide a detailed timeline during our discovery phase.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We offer project-based pricing tailored to your specific needs. This ensures transparency and predictability. During our initial consultation, we'll discuss your requirements and provide a detailed quote.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Absolutely. We offer maintenance packages that include bug fixes, performance monitoring, security updates, and feature enhancements. We don't disappear after launch.",
  },
  {
    question: "Can you work with our existing codebase?",
    answer:
      "Yes, we regularly work with existing codebases. We'll start with a code audit to understand the current state, then propose improvements and new features that integrate seamlessly.",
  },
  {
    question: "How do you handle communication during a project?",
    answer:
      "We use a combination of Slack for daily communication, weekly video calls for progress updates, and project management tools like Linear for task tracking. You'll always know where things stand.",
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
        aria-expanded={isOpen}
      >
        <h3
          className={cn(
            "font-medium text-[15px] md:text-base pr-8 transition-colors duration-200",
            isOpen ? "text-primary" : "text-primary/80 group-hover:text-primary"
          )}
        >
          {item.question}
        </h3>
        <div
          className={cn(
            "w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300",
            isOpen
              ? "bg-accent border-accent text-white rotate-0"
              : "bg-card border-border text-secondary group-hover:border-primary/20"
          )}
        >
          {isOpen ? <Minus size={14} strokeWidth={2.5} /> : <Plus size={14} strokeWidth={2.5} />}
        </div>
      </button>

      {/* Answer — CSS transition on grid-rows for smooth height animation */}
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-secondary text-[14px] leading-[1.75] pb-6 pr-12">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-card/30">
      <Container>
        <ScrollReveal>
          <SectionTitle
            label="FAQ"
            title="Frequently asked questions"
            description="Everything you need to know before starting a project with us."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>

        <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl shadow-card px-8 md:px-10">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              item={faq}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

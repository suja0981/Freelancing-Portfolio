import { Container } from "../layout/Container";
import { SectionTitle } from "../common/SectionTitle";
import { ScrollReveal } from "../common/ScrollReveal";
import {
  Compass,
  FileSearch,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ProcessStepData {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}

const steps: ProcessStepData[] = [
  {
    icon: Compass,
    number: "01",
    title: "Discover",
    description: "We understand your needs and goals.",
  },
  {
    icon: FileSearch,
    number: "02",
    title: "Plan",
    description: "We plan the perfect solution for you.",
  },
  {
    icon: PenTool,
    number: "03",
    title: "Design",
    description: "We design with creativity and strategy.",
  },
  {
    icon: Code2,
    number: "04",
    title: "Develop",
    description: "We build with clean code and latest tech.",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Deliver",
    description: "We test, launch and support.",
  },
];

/* Hand-drawn wavy connector SVG between steps */
function StepConnector() {
  return (
    <svg
      className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-5"
      viewBox="0 0 200 20"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 10 C30 4, 50 16, 80 10 C110 4, 140 16, 170 10 L200 10"
        stroke="#E8E4DC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="6 4"
        className="[stroke-dasharray:200] [stroke-dashoffset:0]"
      />
    </svg>
  );
}

/* Vertical connector for mobile layout */
function VerticalConnector() {
  return (
    <svg
      className="lg:hidden w-5 h-12 mx-auto my-1"
      viewBox="0 0 20 50"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 0 C6 10, 14 20, 10 30 C6 40, 14 45, 10 50"
        stroke="#E8E4DC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="6 4"
      />
    </svg>
  );
}

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 lg:py-40">
      <Container>
        <ScrollReveal>
          <SectionTitle label="Our Process" title="Simple steps, strong results" />
        </ScrollReveal>

        {/* Desktop: Horizontal layout */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-0">
          {steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={0.1 * index} className="relative flex flex-col items-center text-center">
              {/* Connector line (between steps) */}
              {index < steps.length - 1 && <StepConnector />}

              {/* Icon container */}
              <div className="w-20 h-20 rounded-2xl bg-card border border-border shadow-card flex items-center justify-center mb-6">
                <step.icon
                  size={28}
                  className="text-accent"
                  strokeWidth={1.5}
                />
              </div>

              {/* Number */}
              <span className="text-secondary/40 text-xs font-semibold tracking-wider mb-2">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="font-heading text-primary text-lg mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-secondary text-[13px] leading-relaxed max-w-[160px]">
                {step.description}
              </p>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile / Tablet: Vertical layout */}
        <div className="lg:hidden flex flex-col items-center">
          {steps.map((step, index) => (
            <div key={step.title}>
              <div className="flex flex-col items-center text-center">
                {/* Icon container */}
                <div className="w-16 h-16 rounded-xl bg-card border border-border shadow-card flex items-center justify-center mb-4">
                  <step.icon
                    size={24}
                    className="text-accent"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Number */}
                <span className="text-secondary/40 text-xs font-semibold tracking-wider mb-1.5">
                  {step.number}
                </span>

                {/* Title */}
                <h3 className="font-heading text-primary text-lg mb-1.5">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-secondary text-sm leading-relaxed max-w-[220px]">
                  {step.description}
                </p>
              </div>

              {/* Vertical connector between steps */}
              {index < steps.length - 1 && <VerticalConnector />}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Container } from "../layout/Container";
import { Button } from "../common/Button";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormState {
  name: string;
  email: string;
  budget: string;
  project: string;
  timeline: string;
}

const budgetOptions = [
  "Select a budget range",
  "$1,000 – $3,000",
  "$3,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000+",
];

const timelineOptions = [
  "Select a timeline",
  "Less than 1 month",
  "1 – 2 months",
  "2 – 3 months",
  "3 – 6 months",
  "6+ months",
  "Not sure yet",
];

/* Shared input styling — notebook ruled-line inspired */
const inputBase = cn(
  "w-full bg-transparent text-primary text-[15px] placeholder:text-secondary/40",
  "py-4 border-b-[1.5px] border-border",
  "focus:outline-none focus:border-accent/60",
  "transition-colors duration-200"
);

const selectBase = cn(
  inputBase,
  "appearance-none cursor-pointer",
  "bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236D6D6D%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')]",
  "bg-[length:14px] bg-[right_0_center] bg-no-repeat"
);

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    budget: "",
    project: "",
    timeline: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        setForm({ name: "", email: "", budget: "", project: "", timeline: "" });
      } else {
        throw new Error(data.error || "Failed to process contact inquiry.");
      }
    } catch (err: any) {
      setSubmitError(err?.message || "Failed to send message. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pb-24 md:pb-32 lg:pb-40">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left — CTA Text */}
          <div>
            <span className="font-handwritten text-accent text-xl md:text-2xl mb-3 block leading-none">
              Let&apos;s work together
            </span>
            <h2 className="font-heading text-primary text-3xl md:text-4xl lg:text-[44px] leading-[1.15] tracking-tight mb-6">
              Have a project
              <br />
              in mind?
            </h2>
            <p className="text-secondary text-base md:text-[17px] leading-[1.7] max-w-md mb-8">
              Let&apos;s transform your ideas into real digital products that
              your users will love. Tell us about your project and we&apos;ll get
              back to you within 24 hours.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 mb-10 border-y border-border/60 py-5 max-w-md">
              <div>
                <span className="text-secondary/50 text-[10px] font-semibold uppercase tracking-wider block mb-1">
                  Average reply
                </span>
                <span className="font-heading text-primary text-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  &lt; 12 hours
                </span>
              </div>
              <div className="w-[1px] h-8 bg-border hidden sm:block" />
              <div>
                <span className="text-secondary/50 text-[10px] font-semibold uppercase tracking-wider block mb-1">
                  Availability
                </span>
                <span className="font-heading text-primary text-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  Accepting projects
                </span>
              </div>
            </div>

            {/* Decorative notebook illustration placeholder */}
            <div className="hidden lg:block relative w-48 h-48 mt-4">
              {/* Stylized envelope/mail illustration */}
              <svg
                viewBox="0 0 200 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-accent/15"
                aria-hidden="true"
              >
                <rect
                  x="10"
                  y="30"
                  width="180"
                  height="120"
                  rx="8"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M10 38L100 100L190 38"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M10 150L70 95"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M190 150L130 95"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Small stars */}
                <circle cx="30" cy="15" r="2" fill="currentColor" />
                <circle cx="170" cy="20" r="1.5" fill="currentColor" />
                <circle cx="155" cy="10" r="1" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* Right — Form / Success panel */}
          <div className="bg-card border border-border rounded-2xl shadow-card p-8 md:p-10 lg:p-12 relative overflow-hidden min-h-[480px] flex flex-col justify-center">
            {/* Notebook left margin line */}
            <div
              className="absolute top-0 bottom-0 left-12 md:left-14 w-[1px] bg-accent/10 pointer-events-none"
              aria-hidden="true"
            />

            {isSubmitted ? (
              <div className="relative z-10 pl-6 md:pl-8 text-left py-4">
                <span className="font-handwritten text-accent text-3xl block mb-4">
                  Success!
                </span>
                <h3 className="font-heading text-primary text-2xl md:text-3xl mb-4 leading-tight">
                  Inquiry Received
                </h3>
                <p className="text-secondary text-sm md:text-[15px] leading-[1.6] mb-8 max-w-sm">
                  A confirmation email has been sent to your inbox. We will review your project details and get back to you within 24 hours.
                </p>

                <div className="border-t border-border/80 pt-6">
                  <h4 className="text-primary font-semibold text-[13px] uppercase tracking-wider mb-4">
                    What happens next:
                  </h4>
                  <ul className="space-y-3.5" role="list">
                    <li className="flex items-start gap-3 text-secondary text-sm">
                      <span className="w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</span>
                      <span>Review of your project goals & requirements.</span>
                    </li>
                    <li className="flex items-start gap-3 text-secondary text-sm">
                      <span className="w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</span>
                      <span>Design research & initial solution planning.</span>
                    </li>
                    <li className="flex items-start gap-3 text-secondary text-sm">
                      <span className="w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</span>
                      <span>Scheduling a brief 15-minute call to align.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-8">
                  <Button
                    variant="secondary"
                    onClick={() => setIsSubmitted(false)}
                    icon={false}
                    className="text-[13px] py-2.5 px-6"
                  >
                    Send another query
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-1">
                {submitError && (
                  <div className="bg-red-50 text-red-600 text-sm p-4 rounded-xl border border-red-100 mb-6 pl-8 relative">
                    <span className="absolute left-3 top-4">⚠️</span>
                    {submitError}
                  </div>
                )}

                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-secondary/50 text-[11px] font-semibold uppercase tracking-[0.15em] block mb-1 pl-1"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    className={inputBase}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-secondary/50 text-[11px] font-semibold uppercase tracking-[0.15em] block mb-1 pl-1 pt-4"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputBase}
                  />
                </div>

                {/* Budget */}
                <div>
                  <label
                    htmlFor="contact-budget"
                    className="text-secondary/50 text-[11px] font-semibold uppercase tracking-[0.15em] block mb-1 pl-1 pt-4"
                  >
                    Budget Range
                  </label>
                  <select
                    id="contact-budget"
                    name="budget"
                    required
                    value={form.budget}
                    onChange={handleChange}
                    className={cn(
                      selectBase,
                      !form.budget && "text-secondary/40"
                    )}
                  >
                    {budgetOptions.map((option, i) => (
                      <option key={option} value={i === 0 ? "" : option} disabled={i === 0}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Project Details */}
                <div>
                  <label
                    htmlFor="contact-project"
                    className="text-secondary/50 text-[11px] font-semibold uppercase tracking-[0.15em] block mb-1 pl-1 pt-4"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="contact-project"
                    name="project"
                    required
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    value={form.project}
                    onChange={handleChange}
                    rows={4}
                    className={cn(inputBase, "resize-none")}
                  />
                </div>

                {/* Timeline */}
                <div>
                  <label
                    htmlFor="contact-timeline"
                    className="text-secondary/50 text-[11px] font-semibold uppercase tracking-[0.15em] block mb-1 pl-1 pt-4"
                  >
                    Timeline
                  </label>
                  <select
                    id="contact-timeline"
                    name="timeline"
                    required
                    value={form.timeline}
                    onChange={handleChange}
                    className={cn(
                      selectBase,
                      !form.timeline && "text-secondary/40"
                    )}
                  >
                    {timelineOptions.map((option, i) => (
                      <option key={option} value={i === 0 ? "" : option} disabled={i === 0}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit */}
                <div className="pt-8">
                  <Button
                    type="submit"
                    variant="primary"
                    icon={false}
                    className="w-full sm:w-auto justify-center gap-3"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Start a Conversation
                        <Send size={15} strokeWidth={2} />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

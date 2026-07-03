import { Container } from "../layout/Container";
import { SectionTitle } from "../common/SectionTitle";
import { PaperCard } from "../common/PaperCard";
import { ScrollReveal } from "../common/ScrollReveal";
import { ArrowUpRight } from "lucide-react";

interface Founder {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  tools: string[];
  initial: string;
  accentColor: string;
  portfolioUrl: string;
}

const founders: Founder[] = [
  {
    name: "Sujal Wadhankar",
    role: "Full-Stack Developer",
    bio: "Project management, obsessed with clean architecture and performance, backend focused.",
    skills: ["Node.js", "Express", "Next.js", "TypeScript", "PostgreSQL", "MongoDB", "Deployment"],
    tools: ["VS Code", "GitHub", "Vercel", "Docker", "AWS"],
    initial: "SW",
    accentColor: "from-accent/25 to-orange-100/60",
    portfolioUrl: "https://my-portfolio-gamma-wine-2sk9iqz02w.vercel.app/",
  },
  {
    name: "Shrihit Bandawar",
    role: "Full-Stack Developer",
    bio: "Frontend focused, Client consulting, Idea Exploration and process building, Designing.",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "UI Design", "Redux", "API Integration"],
    tools: ["Figma", "VS Code", "GitHub", "Netlify", "Notion"],
    initial: "SB",
    accentColor: "from-blue-100/60 to-indigo-50/40",
    portfolioUrl: "https://shrihit-portfolio.netlify.app/",
  },
];

interface TeamProps {
  showTitle?: boolean;
}

export function Team({ showTitle = true }: TeamProps) {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <Container>
        {showTitle && (
          <ScrollReveal>
            <SectionTitle
              label="Meet the team"
              title="The people behind CodeCrew"
              description="A small team with big ambitions. We combine engineering excellence with creative vision."
            />
          </ScrollReveal>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {founders.map((founder, i) => (
            <ScrollReveal key={founder.name} delay={0.15 * i}>
              <PaperCard
                className="p-8 md:p-10 flex flex-col justify-between h-full group"
                hover={true}
              >
                <div>
                  {/* Avatar area */}
                  <div className="flex items-center justify-between mb-7">
                    <div className="flex items-center gap-5">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${founder.accentColor} flex items-center justify-center border border-border/50`}
                      >
                        <span className="font-heading text-primary text-2xl font-bold">
                          {founder.initial}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-heading text-primary text-xl leading-tight">
                          {founder.name}
                        </h3>
                        <p className="text-secondary text-sm mt-0.5">
                          {founder.role}
                        </p>
                      </div>
                    </div>

                    {/* Portfolio External Link Button */}
                    <a
                      href={founder.portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-secondary hover:text-accent hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-300"
                      aria-label={`View ${founder.name}'s portfolio`}
                    >
                      <ArrowUpRight size={18} strokeWidth={2.2} />
                    </a>
                  </div>

                  {/* Bio */}
                  <p className="text-secondary text-[14px] leading-[1.75] mb-7">
                    {founder.bio}
                  </p>

                  {/* Skills */}
                  <div className="mb-5">
                    <p className="text-secondary/50 text-[11px] font-semibold uppercase tracking-[0.15em] mb-3">
                      Skills
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {founder.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[12px] text-primary/80 bg-background px-3 py-1.5 rounded-full border border-border font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tools */}
                <div className="mt-2">
                  <p className="text-secondary/50 text-[11px] font-semibold uppercase tracking-[0.15em] mb-3">
                    Tools
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {founder.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[12px] text-secondary bg-background/60 px-3 py-1.5 rounded-full border border-border/60"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </PaperCard>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

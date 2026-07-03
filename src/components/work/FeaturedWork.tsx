import { Container } from "../layout/Container";
import { SectionTitle } from "../common/SectionTitle";
import { ProjectCard } from "./ProjectCard";
import { Button } from "../common/Button";
import { ScrollReveal } from "../common/ScrollReveal";

export const projects = [
  {
    title: "SaaS Dashboard",
    category: "Web Application",
    description:
      "A comprehensive analytics dashboard with real-time data visualization, team collaboration, and customizable widgets.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    color: "from-orange-100/80 to-amber-50/60",
  },
  {
    title: "Landing Page",
    category: "Web Design",
    description:
      "A conversion-focused landing page with modern design, optimized user flow, and A/B tested call-to-actions.",
    technologies: ["React", "Framer Motion", "Styled Components"],
    color: "from-blue-100/80 to-indigo-50/60",
  },
  {
    title: "Task Management",
    category: "Web Application",
    description:
      "A productivity tool with intuitive task management, team workflows, calendar integration, and real-time sync.",
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    color: "from-emerald-100/80 to-green-50/60",
  },
];

interface FeaturedWorkProps {
  limit?: number;
  showCTA?: boolean;
  showTitle?: boolean;
}

export function FeaturedWork({ limit, showCTA = true, showTitle = true }: FeaturedWorkProps) {
  const displayProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-card/30">
      <Container>
        {showTitle && (
          <ScrollReveal>
            <SectionTitle
              label="Our Work"
              title="Some of our recent projects"
            />
          </ScrollReveal>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {displayProjects.map((project, i) => (
            <ScrollReveal key={project.title} delay={0.1 * i}>
              <ProjectCard {...project} />
            </ScrollReveal>
          ))}
        </div>

        {showCTA && (
          <ScrollReveal delay={0.1}>
            <div className="flex justify-center mt-14 md:mt-16">
              <Button variant="secondary" href="/work">
                View All Projects
              </Button>
            </div>
          </ScrollReveal>
        )}
      </Container>
    </section>
  );
}

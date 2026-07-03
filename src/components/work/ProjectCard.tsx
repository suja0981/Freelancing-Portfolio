import { ArrowUpRight } from "lucide-react";
import { PaperCard } from "../common/PaperCard";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  color: string;
}

export function ProjectCard({
  title,
  category,
  description,
  technologies,
  color,
}: ProjectCardProps) {
  return (
    <PaperCard className="overflow-hidden group cursor-pointer">
      {/* Image Area */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${color} transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
        />

        {/* Decorative UI mockup pattern */}
        <div className="absolute inset-6 md:inset-8 flex flex-col gap-3 opacity-[0.15]">
          {/* Title bar */}
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
            <div className="flex-1 h-3 rounded bg-primary/20 ml-3 max-w-[120px]" />
          </div>
          {/* Content lines */}
          <div className="flex-1 grid grid-cols-4 gap-2 mt-2">
            <div className="col-span-1 rounded-lg bg-primary/10" />
            <div className="col-span-3 flex flex-col gap-2">
              <div className="h-3 rounded bg-primary/15 w-[80%]" />
              <div className="h-3 rounded bg-primary/10 w-[60%]" />
              <div className="h-3 rounded bg-primary/10 w-[70%]" />
              <div className="flex-1 rounded-lg bg-primary/8 mt-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-7 md:p-8">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-heading text-primary text-xl md:text-[22px] leading-tight">
            {title}
          </h3>
          <ArrowUpRight
            size={18}
            strokeWidth={2}
            className="text-secondary/0 group-hover:text-secondary transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 mt-1"
          />
        </div>

        <p className="text-secondary/60 text-xs font-medium uppercase tracking-[0.12em] mb-3">
          {category}
        </p>

        <p className="text-secondary text-[14px] leading-[1.7] mb-6">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-[12px] text-secondary bg-background px-3 py-1.5 rounded-full border border-border font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </PaperCard>
  );
}

import { ArrowRight, type LucideIcon } from "lucide-react";
import { PaperCard } from "../common/PaperCard";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <PaperCard className="p-8 md:p-9 flex flex-col group cursor-pointer">
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-7">
        <Icon size={22} className="text-accent" strokeWidth={1.8} />
      </div>

      {/* Title */}
      <h3 className="font-heading text-primary text-xl md:text-[22px] mb-3 leading-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-secondary text-[14px] leading-[1.7] mb-7 flex-1">
        {description}
      </p>

      {/* Arrow */}
      <div className="flex items-center">
        <ArrowRight
          size={18}
          className="text-accent transition-transform duration-300 group-hover:translate-x-2"
          strokeWidth={2}
        />
      </div>
    </PaperCard>
  );
}

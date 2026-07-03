import { cn } from "@/lib/utils";

interface PaperCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: React.ElementType;
}

export function PaperCard({
  children,
  className,
  hover = true,
  as: Component = "div",
}: PaperCardProps) {
  return (
    <Component
      className={cn(
        "bg-card border border-border rounded-2xl shadow-card",
        hover &&
          "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-card-hover",
        className
      )}
    >
      {children}
    </Component>
  );
}

import { cn } from "@/lib/utils";

interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  label,
  title,
  description,
  align = "center",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex flex-col mb-16 md:mb-20",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {label && (
        <span className="font-handwritten text-accent text-xl md:text-2xl mb-3 leading-none">
          {label}
        </span>
      )}
      <h2 className="font-heading text-primary text-3xl md:text-4xl lg:text-[44px] leading-[1.15] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-secondary mt-5 max-w-xl text-base md:text-[17px] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

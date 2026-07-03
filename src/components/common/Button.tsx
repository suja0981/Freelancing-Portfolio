"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  className?: string;
  onClick?: () => void;
  icon?: boolean;
  type?: "button" | "submit";
}

export function Button({
  children,
  variant = "primary",
  href,
  className,
  onClick,
  icon = true,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2.5 rounded-full font-medium transition-all duration-300 ease-out cursor-pointer select-none";

  const sizeStyles = "px-7 py-3.5 text-[15px]";

  const variants = {
    primary: cn(
      "bg-primary text-white shadow-button",
      "hover:-translate-y-1 hover:shadow-button-hover",
      "active:translate-y-0 active:shadow-button"
    ),
    secondary: cn(
      "bg-card text-primary border border-border shadow-button",
      "hover:bg-white hover:-translate-y-1 hover:shadow-button-hover",
      "active:translate-y-0 active:shadow-button"
    ),
  };

  const content = (
    <>
      {children}
      {icon && (
        <ArrowUpRight
          size={16}
          strokeWidth={2.5}
          className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (href) {
    // Use Next.js Link for internal routes, <a> for anchors/external
    const isInternal = href.startsWith("/");

    if (isInternal) {
      return (
        <Link
          href={href}
          className={cn("group", baseStyles, sizeStyles, variants[variant], className)}
          onClick={onClick}
        >
          {content}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={cn("group", baseStyles, sizeStyles, variants[variant], className)}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn("group", baseStyles, sizeStyles, variants[variant], className)}
    >
      {content}
    </button>
  );
}

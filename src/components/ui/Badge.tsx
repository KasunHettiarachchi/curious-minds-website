import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "accent" | "interactive";
  categorySlug?: string;
  children: React.ReactNode;
}

export function Badge({
  variant = "default",
  categorySlug,
  className,
  children,
  ...props
}: BadgeProps) {
  const getCategoryStyles = (slug?: string) => {
    switch (slug) {
      case "space":
        return "bg-cyan-500/10 text-cyan-400 border-cyan-500/30";
      case "physics":
        return "bg-amber-500/10 text-amber-400 border-amber-500/30";
      case "mathematics":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      case "computer-science":
        return "bg-violet-500/10 text-violet-400 border-violet-500/30";
      case "nature":
        return "bg-rose-500/10 text-rose-400 border-rose-500/30";
      default:
        return "bg-slate-800/80 text-slate-300 border-slate-700/50";
    }
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-medium rounded-full border transition-colors",
        categorySlug
          ? getCategoryStyles(categorySlug)
          : variant === "outline"
          ? "border-slate-700 text-slate-400 bg-transparent"
          : variant === "interactive"
          ? "bg-indigo-500/15 text-indigo-300 border-indigo-500/40"
          : "bg-slate-800 text-slate-300 border-slate-700",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

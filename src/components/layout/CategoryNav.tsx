import React from "react";
import Link from "next/link";
import { CATEGORIES } from "@/data/categories";
import { Rocket, Atom, Sigma, Cpu, Leaf, Compass } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryNavProps {
  activeSlug?: string;
  className?: string;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Rocket,
  Atom,
  Sigma,
  Cpu,
  Leaf,
};

export function CategoryNav({ activeSlug, className }: CategoryNavProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <Link
        href="/"
        className={cn(
          "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border",
          !activeSlug
            ? "bg-slate-800 text-white border-slate-700 shadow-sm"
            : "bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700"
        )}
      >
        <Compass className="h-4 w-4 text-cyan-400" />
        <span>All Topics</span>
      </Link>

      {CATEGORIES.map((cat) => {
        const IconComponent = ICON_MAP[cat.iconName] || Compass;
        const isActive = activeSlug === cat.slug;

        return (
          <Link
            key={cat.slug}
            href={`/${cat.slug}/`}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border",
              isActive
                ? "bg-slate-800 text-white border-slate-700 shadow-sm"
                : "bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700"
            )}
          >
            <IconComponent
              className="h-4 w-4 transition-transform group-hover:scale-110"
              style={{ color: cat.color }}
            />
            <span>{cat.name}</span>
          </Link>
        );
      })}
    </div>
  );
}

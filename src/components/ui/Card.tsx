import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  accentColor?: string;
  children: React.ReactNode;
}

export function Card({
  hoverable = true,
  accentColor,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl bg-slate-900/60 border border-slate-800/80 p-6 backdrop-blur-sm transition-all duration-300 overflow-hidden",
        hoverable &&
          "hover:border-slate-700 hover:shadow-xl hover:shadow-slate-950/50 hover:-translate-y-0.5",
        className
      )}
      {...props}
    >
      {accentColor && (
        <div
          className="absolute top-0 left-0 right-0 h-1 opacity-75"
          style={{ backgroundColor: accentColor }}
        />
      )}
      {children}
    </div>
  );
}

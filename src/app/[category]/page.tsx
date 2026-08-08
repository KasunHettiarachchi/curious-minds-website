import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CATEGORIES, CATEGORY_MAP } from "@/data/categories";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CategoryNav } from "@/components/layout/CategoryNav";
import { CategorySlug } from "@/types";
import {
  Rocket,
  Atom,
  Sigma,
  Cpu,
  Leaf,
  ArrowLeft,
  PlayCircle,
  BookOpen,
  Sparkles,
} from "lucide-react";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Rocket,
  Atom,
  Sigma,
  Cpu,
  Leaf,
};

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = CATEGORY_MAP[slug as CategorySlug];

  if (!category) {
    notFound();
  }

  const IconComponent = ICON_MAP[category.iconName] || Rocket;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Back button & Category Nav */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
        <CategoryNav activeSlug={category.slug} />
      </div>

      {/* Category Hero Header */}
      <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-8 sm:p-12 relative overflow-hidden backdrop-blur-md">
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ backgroundColor: category.color }}
        />

        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 border border-slate-800 shadow-xl"
              style={{ color: category.color }}
            >
              <IconComponent className="h-7 w-7" />
            </div>
            <div>
              <Badge categorySlug={category.slug}>Category</Badge>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display mt-1">
                {category.name}
              </h1>
            </div>
          </div>

          <p className="text-lg font-medium text-cyan-400">{category.tagline}</p>
          <p className="text-slate-300 text-base leading-relaxed">
            {category.description}
          </p>
        </div>
      </div>

      {/* Articles / Topics List */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-cyan-400" />
            <span>Interactive Explanations</span>
          </h2>
          <span className="text-xs text-slate-400">
            Showing {category.name} content
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card accentColor={category.color} className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge categorySlug={category.slug}>{category.name}</Badge>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <PlayCircle className="h-3.5 w-3.5 text-cyan-400" /> Simulation Available
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white hover:text-cyan-300 transition-colors">
                Understanding {category.name}: Core Principles & Experiments
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Step-by-step visual exploration with real-time interactive parameters. Change values and observe the behavior live.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
              <span>Read time: 5-8 min</span>
              <span className="text-cyan-400 font-medium">Explore Article →</span>
            </div>
          </Card>

          <Card accentColor={category.color} className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge categorySlug={category.slug}>{category.name}</Badge>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Sparkles className="h-3.5 w-3.5 text-amber-400" /> Visual Guide
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white hover:text-cyan-300 transition-colors">
                Mathematical & Physical Foundations of {category.name}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Intuitive mental models paired with rigorous mathematical equations rendered cleanly in KaTeX.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
              <span>Read time: 6 min</span>
              <span className="text-cyan-400 font-medium">Explore Article →</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

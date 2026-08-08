import React from "react";
import Link from "next/link";
import { CATEGORIES } from "@/data/categories";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CategoryNav } from "@/components/layout/CategoryNav";
import {
  Rocket,
  Atom,
  Sigma,
  Cpu,
  Leaf,
  Sparkles,
  ArrowRight,
  PlayCircle,
  Eye,
  Sliders,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Rocket,
  Atom,
  Sigma,
  Cpu,
  Leaf,
};

export default function HomePage() {
  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-medium backdrop-blur-md animate-pulse-glow">
          <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
          <span>Interactive Science Platform</span>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.1]">
            Understand the Universe Through{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Interactive Experimentation
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Curious Minds brings complex scientific concepts to life. Read clear visual explanations and experiment directly in your browser.
          </p>
        </div>

        {/* Philosophy Pill */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md text-sm font-medium text-slate-300">
          <span className="flex items-center gap-1.5 text-cyan-400">
            <Eye className="h-4 w-4" /> Read it
          </span>
          <span className="text-slate-600">→</span>
          <span className="flex items-center gap-1.5 text-amber-400">
            <Sparkles className="h-4 w-4" /> Understand it
          </span>
          <span className="text-slate-600">→</span>
          <span className="flex items-center gap-1.5 text-emerald-400">
            <Sliders className="h-4 w-4" /> Interact with it
          </span>
        </div>

        {/* Category Navigation Bar */}
        <div className="pt-6 flex justify-center">
          <CategoryNav />
        </div>
      </section>

      {/* 5 Core Categories Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800/80 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-white font-display">
              Explore Core Subjects
            </h2>
            <p className="text-sm text-slate-400">
              Interactive visual guides across fundamental scientific disciplines.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((category) => {
            const Icon = ICON_MAP[category.iconName] || Rocket;

            return (
              <Link key={category.slug} href={`/${category.slug}/`} className="group">
                <Card
                  accentColor={category.color}
                  className="h-full flex flex-col justify-between group-hover:border-slate-700/80 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 shadow-inner group-hover:scale-105 transition-transform"
                        style={{ color: category.color }}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <Badge categorySlug={category.slug}>
                        {category.topicCount} Topics
                      </Badge>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                        <span>{category.name}</span>
                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-400" />
                      </h3>
                      <p className="text-xs font-semibold text-cyan-500/90 uppercase tracking-wide">
                        {category.tagline}
                      </p>
                      <p className="text-sm text-slate-400 leading-relaxed pt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-800/50 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1 text-slate-400">
                      <PlayCircle className="h-3.5 w-3.5 text-cyan-400" /> Interactive Demos
                    </span>
                    <span className="group-hover:text-white transition-colors font-medium">
                      Browse Category →
                    </span>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Interactive Concept Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Badge variant="interactive">Featured Concept</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
                Why Doesn&apos;t the Moon Fall Into Earth?
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Gravitational attraction pulls the Moon toward Earth continuously, yet it never collides. Through orbital mechanics, velocity, and curvature, discover how falling around the Earth creates a stable orbit.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/space/">
                  <Button variant="primary" size="lg" className="gap-2">
                    <PlayCircle className="h-5 w-5" />
                    <span>Explore Space Demos</span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual Demo Card Stub */}
            <div className="rounded-2xl bg-slate-950/80 border border-slate-800/80 p-6 flex flex-col items-center justify-center min-h-[260px] text-center space-y-4 shadow-2xl">
              <div className="relative flex items-center justify-center h-32 w-32 rounded-full border border-cyan-500/20 bg-cyan-500/5">
                {/* Earth center */}
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 shadow-lg shadow-cyan-500/50 flex items-center justify-center text-[10px] font-bold text-white">
                  Earth
                </div>
                {/* Orbit ring */}
                <div className="absolute h-28 w-28 rounded-full border border-dashed border-cyan-400/40 animate-spin" style={{ animationDuration: "12s" }}>
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-slate-200 shadow-md shadow-slate-100" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold text-cyan-400">Interactive Simulation Ready</p>
                <p className="text-xs text-slate-400">Adjust orbital velocity and observe trajectory</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

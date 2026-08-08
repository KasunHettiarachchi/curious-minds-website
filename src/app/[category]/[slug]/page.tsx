import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ARTICLES, ARTICLE_MAP } from "@/data/articles";
import { CATEGORY_MAP } from "@/data/categories";
import { CategorySlug } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

// Simulation components
import { OrbitalMotionDemo } from "@/components/simulation/OrbitalMotionDemo";
import { SolarSystemScaleDemo } from "@/components/simulation/SolarSystemScaleDemo";
import { ProjectileMotionDemo } from "@/components/simulation/ProjectileMotionDemo";
import { TimeDilationDemo } from "@/components/simulation/TimeDilationDemo";
import { PiEstimatorDemo } from "@/components/simulation/PiEstimatorDemo";
import { FractalVisualizerDemo } from "@/components/simulation/FractalVisualizerDemo";
import { SortingVisualizerDemo } from "@/components/simulation/SortingVisualizerDemo";
import { BinarySearchDemo } from "@/components/simulation/BinarySearchDemo";
import { PredatorPreyDemo } from "@/components/simulation/PredatorPreyDemo";
import { FibonacciSpiralDemo } from "@/components/simulation/FibonacciSpiralDemo";

import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Clock,
  User,
  Sparkles,
  HelpCircle,
  Brain,
  Atom,
  ExternalLink,
  CheckCircle2,
  History,
  Lightbulb,
  Globe,
  AlertTriangle,
} from "lucide-react";

interface ArticlePageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    category: article.category,
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const article = ARTICLE_MAP[`${category}/${slug}`];

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: `${article.title} | Curious Minds`,
      description: article.description,
      type: "article",
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { category: categorySlug, slug } = await params;
  const article = ARTICLE_MAP[`${categorySlug}/${slug}`];
  const category = CATEGORY_MAP[categorySlug as CategorySlug];

  if (!article || !category) {
    notFound();
  }

  const relatedArticles = ARTICLES.filter(
    (a) => a.category === category.slug && a.slug !== article.slug
  );

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href={`/${category.slug}/`} className="hover:text-white transition-colors capitalize">
          {category.name}
        </Link>
        <span>/</span>
        <span className="text-slate-200 truncate max-w-[200px] sm:max-w-xs font-medium">
          {article.title}
        </span>
      </nav>

      {/* Back button */}
      <div>
        <Link
          href={`/${category.slug}/`}
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to {category.name}</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <Badge categorySlug={category.slug}>{category.name}</Badge>
          <Badge variant="interactive" className="gap-1">
            <Sparkles className="h-3 w-3 text-cyan-400" /> Interactive Simulation
          </Badge>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display leading-[1.15]">
            {article.title}
          </h1>
          <p className="text-lg sm:text-xl text-cyan-400/90 font-medium">
            {article.subtitle}
          </p>
        </div>

        {/* Metadata bar */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-400 border-y border-slate-800/80 py-3">
          <span className="flex items-center gap-1.5">
            <User className="h-3.5 w-3.5 text-slate-400" /> {article.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-slate-400" /> {article.publishedAt}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-slate-400" /> {article.readTime}
          </span>
        </div>
      </header>

      {/* Opening Question Callout */}
      <section className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 space-y-3 shadow-xl">
        <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
          <HelpCircle className="h-4 w-4" />
          <span>The Core Question</span>
        </div>
        <p className="text-base sm:text-lg text-white font-medium italic leading-relaxed">
          &ldquo;{article.openingQuestion}&rdquo;
        </p>
      </section>

      {/* Historical Context Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white font-display flex items-center gap-2 border-b border-slate-800 pb-2">
          <History className="h-5 w-5 text-indigo-400" />
          <span>Historical Discovery & Background</span>
        </h2>
        <p className="text-slate-300 text-base leading-relaxed">
          {article.historicalContext}
        </p>
      </section>

      {/* Theoretical Principles */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white font-display flex items-center gap-2 border-b border-slate-800 pb-2">
          <Lightbulb className="h-5 w-5 text-amber-400" />
          <span>Theoretical Principles & Mechanism</span>
        </h2>
        <p className="text-slate-300 text-base leading-relaxed">
          {article.theoreticalPrinciples}
        </p>
      </section>

      {/* Intuitive Mental Model Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white font-display flex items-center gap-2 border-b border-slate-800 pb-2">
          <Brain className="h-5 w-5 text-cyan-400" />
          <span>Intuitive Mental Model</span>
        </h2>
        <p className="text-slate-300 text-base leading-relaxed">
          {article.intuition}
        </p>
      </section>

      {/* Interactive Simulation Container */}
      <section className="space-y-4 pt-2">
        <h2 className="text-2xl font-bold text-white font-display flex items-center gap-2 border-b border-slate-800 pb-2">
          <Sparkles className="h-5 w-5 text-cyan-400" />
          <span>Interactive Experimentation & Simulation</span>
        </h2>
        <p className="text-sm text-slate-400">
          Use the controls below to experiment with parameters in real-time.
        </p>

        {article.simulationType === "orbit" && <OrbitalMotionDemo />}
        {article.simulationType === "solar-scale" && <SolarSystemScaleDemo />}
        {article.simulationType === "projectile" && <ProjectileMotionDemo />}
        {article.simulationType === "time-dilation" && <TimeDilationDemo />}
        {article.simulationType === "pi-estimator" && <PiEstimatorDemo />}
        {article.simulationType === "fractal" && <FractalVisualizerDemo />}
        {article.simulationType === "sorting" && <SortingVisualizerDemo />}
        {article.simulationType === "binary-search" && <BinarySearchDemo />}
        {article.simulationType === "predator-prey" && <PredatorPreyDemo />}
        {article.simulationType === "fibonacci" && <FibonacciSpiralDemo />}
      </section>

      {/* Scientific & Mathematical Formulations */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white font-display flex items-center gap-2 border-b border-slate-800 pb-2">
          <Atom className="h-5 w-5 text-emerald-400" />
          <span>Mathematical Formulations & Equations</span>
        </h2>
        <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 space-y-3 font-mono text-sm text-slate-300 leading-relaxed">
          {article.mathematicalFormulas}
        </div>
      </section>

      {/* Real-World Applications */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white font-display flex items-center gap-2 border-b border-slate-800 pb-2">
          <Globe className="h-5 w-5 text-blue-400" />
          <span>Real-World Applications & Technology</span>
        </h2>
        <p className="text-slate-300 text-base leading-relaxed">
          {article.realWorldApplications}
        </p>
      </section>

      {/* Common Misconceptions */}
      <section className="rounded-2xl bg-rose-950/20 border border-rose-500/30 p-6 space-y-3">
        <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
          <AlertTriangle className="h-4 w-4" />
          <span>Common Misconceptions Debunked</span>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed">
          {article.commonMisconceptions}
        </p>
      </section>

      {/* Key Takeaway Box */}
      <section className="rounded-2xl bg-gradient-to-r from-emerald-950/40 via-teal-950/40 to-slate-900 border border-emerald-500/30 p-6 space-y-2">
        <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
          <CheckCircle2 className="h-5 w-5" />
          <span>Key Takeaway</span>
        </div>
        <p className="text-slate-200 text-base font-medium leading-relaxed">
          {article.keyTakeaway}
        </p>
      </section>

      {/* Sources & Further Reading */}
      <section className="space-y-4 border-t border-slate-800 pt-8">
        <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-cyan-400" />
          <span>Sources & Further Reading</span>
        </h3>
        <ul className="space-y-2 text-sm">
          {article.sources.map((src, idx) => (
            <li key={idx}>
              <a
                href={src.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-cyan-400 hover:underline"
              >
                <span>{src.title}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Related Articles Footer */}
      {relatedArticles.length > 0 && (
        <section className="space-y-6 border-t border-slate-800 pt-8">
          <h3 className="text-xl font-bold text-white font-display">
            Related Topics in {category.name}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                href={`/${category.slug}/${rel.slug}/`}
                className="group block"
              >
                <Card className="h-full space-y-2 p-4 hover:border-slate-700 transition-colors">
                  <Badge categorySlug={category.slug}>{category.name}</Badge>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {rel.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

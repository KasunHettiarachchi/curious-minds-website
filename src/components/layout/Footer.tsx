import React from "react";
import Link from "next/link";
import { CATEGORIES } from "@/data/categories";
import { Sparkles, Github, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Manifesto */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 p-0.5">
                <div className="flex h-full w-full items-center justify-center rounded-[6px] bg-slate-950">
                  <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                </div>
              </div>
              <span className="font-display text-lg font-bold text-white">
                Curious Minds
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              An interactive science and technology publication making complex concepts intuitive through high-quality visual explanations and real-time browser simulations.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
              <span>Read it</span>
              <span className="text-slate-600">→</span>
              <span>Understand it</span>
              <span className="text-slate-600">→</span>
              <span>Interact with it</span>
            </div>
          </div>

          {/* Categories Nav */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-slate-200 tracking-wider uppercase">
              Explore Topics
            </h3>
            <ul className="space-y-2 text-sm">
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/${cat.slug}/`}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Philosophy & Constraints */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-slate-200 tracking-wider uppercase">
              About Platform
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>100% Static & Open Source</li>
              <li>Runs entirely in browser</li>
              <li>No trackers or ad servers</li>
              <li>Deployable on GitHub Pages</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Curious Minds. Dedicated to science & exploration.</p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/KasunHettiarachchi/curious-minds-website"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-slate-300 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

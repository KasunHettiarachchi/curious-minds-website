"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CATEGORIES } from "@/data/categories";
import { Sparkles, Menu, X, Search, Moon, ArrowRight } from "lucide-react";
import { cn, getBasePath } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  const basePath = getBasePath();
  const cleanPathname = pathname ? pathname.replace(basePath, "") : "";

  const filteredCategories = CATEGORIES.filter(
    (cat) =>
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group transition-transform active:scale-95"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-950">
              <Sparkles className="h-4 w-4 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              Curious Minds
            </span>
            <span className="text-[10px] font-medium tracking-widest text-slate-400 uppercase -mt-1">
              Interactive Science
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {CATEGORIES.map((category) => {
            const href = `/${category.slug}/`;
            const isActive = cleanPathname.startsWith(`/${category.slug}`);

            return (
              <Link
                key={category.slug}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200",
                  isActive
                    ? "text-white bg-slate-800/90 shadow-sm border border-slate-700/60"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                )}
              >
                {category.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Quick Search trigger */}
          <button
            type="button"
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-400 bg-slate-900 border border-slate-800 rounded-xl hover:text-slate-200 hover:border-slate-700 transition-colors"
            onClick={() => setSearchOpen(true)}
            aria-label="Search articles and topics"
          >
            <Search className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Search...</span>
          </button>

          {/* Theme Indicator */}
          <div
            title="Dark mode is primary"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400"
          >
            <Moon className="h-4 w-4 text-cyan-400" />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-800 p-4 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-slate-400 flex-1">
                <Search className="h-4 w-4 text-cyan-400" />
                <input
                  type="text"
                  placeholder="Search topics, space, physics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-sm text-white focus:outline-none w-full placeholder:text-slate-500"
                  autoFocus
                />
              </div>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-slate-400 hover:text-white p-1"
                aria-label="Close search"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-60 overflow-y-auto space-y-2">
              {filteredCategories.length > 0 ? (
                filteredCategories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/${cat.slug}/`}
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-800 transition-colors group"
                  >
                    <div>
                      <p className="text-sm font-semibold text-white group-hover:text-cyan-300">
                        {cat.name}
                      </p>
                      <p className="text-xs text-slate-400">{cat.tagline}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </Link>
                ))
              ) : (
                <p className="text-xs text-slate-500 text-center py-6">
                  No matching subjects found. Try searching &quot;space&quot; or &quot;physics&quot;.
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950 px-4 py-4 space-y-1">
          {CATEGORIES.map((category) => {
            const href = `/${category.slug}/`;
            const isActive = cleanPathname.startsWith(`/${category.slug}`);

            return (
              <Link
                key={category.slug}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
                  isActive
                    ? "bg-slate-800 text-cyan-400 font-semibold"
                    : "text-slate-300 hover:bg-slate-900 hover:text-white"
                )}
              >
                <span>{category.name}</span>
                <span className="text-xs text-slate-500 font-normal">
                  {category.description.slice(0, 30)}...
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}

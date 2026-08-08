import React from "react";
import Link from "next/link";
import { Compass, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16 space-y-6">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
        <Sparkles className="h-8 w-8" />
      </div>

      <div className="space-y-2 max-w-md">
        <h1 className="text-4xl font-extrabold text-white font-display">
          404 — Topic Lost in Deep Space
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed">
          The educational concept or page you are looking for does not exist or has been moved. Explore our core subjects below.
        </p>
      </div>

      <Link href="/">
        <Button variant="primary" size="lg" className="gap-2">
          <Compass className="h-5 w-5" />
          <span>Return to All Topics</span>
        </Button>
      </Link>
    </div>
  );
}

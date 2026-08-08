"use client";

import React, { useState } from "react";
import { Sliders, RotateCcw, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const SORTED_ARRAY = [2, 5, 8, 12, 16, 23, 38, 45, 56, 67, 78, 89, 91, 95, 99];

export function BinarySearchDemo() {
  const [target, setTarget] = useState(45);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(SORTED_ARRAY.length - 1);
  const [mid, setMid] = useState<number | null>(null);
  const [stepCount, setStepCount] = useState(0);
  const [found, setFound] = useState(false);

  const handleNextStep = () => {
    if (left > right || found) return;

    const currentMid = Math.floor((left + right) / 2);
    setMid(currentMid);
    setStepCount((prev) => prev + 1);

    if (SORTED_ARRAY[currentMid] === target) {
      setFound(true);
    } else if (SORTED_ARRAY[currentMid] < target) {
      setLeft(currentMid + 1);
    } else {
      setRight(currentMid - 1);
    }
  };

  const handleReset = (newTarget: number = target) => {
    setTarget(newTarget);
    setLeft(0);
    setRight(SORTED_ARRAY.length - 1);
    setMid(null);
    setStepCount(0);
    setFound(false);
  };

  return (
    <div className="rounded-2xl bg-slate-950/90 border border-slate-800 p-6 space-y-6 backdrop-blur-md shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs">
        <span className="flex items-center gap-1.5 font-semibold text-violet-400">
          <Sliders className="h-4 w-4" /> Binary Search (Divide & Conquer) Visualizer
        </span>
        <span className="font-mono text-slate-400 text-[11px]">
          Target Value: <strong className="text-violet-300">{target}</strong>
        </span>
      </div>

      {/* Sorted Array Row */}
      <div className="bg-slate-900/90 rounded-xl border border-slate-800 p-4 flex flex-wrap items-center justify-center gap-1.5 min-h-[100px]">
        {SORTED_ARRAY.map((val, idx) => {
          const isMid = mid === idx;
          const isInRange = idx >= left && idx <= right;
          const isMatch = isMid && val === target && found;

          return (
            <button
              type="button"
              key={idx}
              onClick={() => handleReset(val)}
              className={`h-10 w-10 rounded-lg text-xs font-mono font-bold flex items-center justify-center border transition-all ${
                isMatch
                  ? "bg-emerald-500 text-slate-950 border-emerald-400 scale-110 shadow-lg shadow-emerald-500/50"
                  : isMid
                  ? "bg-amber-500 text-slate-950 border-amber-400 scale-105"
                  : isInRange
                  ? "bg-violet-900/40 text-violet-200 border-violet-700/60"
                  : "bg-slate-950/40 text-slate-600 border-slate-800 opacity-40"
              }`}
            >
              {val}
            </button>
          );
        })}
      </div>

      {/* Step Info Readout */}
      <div className="bg-slate-900/60 rounded-xl border border-slate-800/80 p-4 flex items-center justify-between text-xs text-slate-300">
        <div>
          <p className="font-semibold text-white">
            {found
              ? `🎯 Found target ${target} in ${stepCount} step(s)!`
              : mid !== null
              ? `Step ${stepCount}: Comparing target ${target} with mid element array[${mid}] = ${SORTED_ARRAY[mid]}`
              : "Click 'Next Step' to start dividing search space."}
          </p>
          <p className="text-slate-400 text-[11px] mt-0.5">
            Active search range: [{left} ... {right}] ({right >= left ? right - left + 1 : 0} items remaining)
          </p>
        </div>

        <span className="font-mono text-[11px] text-violet-400">
          Max steps: O(log₂ 15) = 4
        </span>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center pt-2">
        <Button variant="outline" size="sm" onClick={() => handleReset()} className="gap-1.5 text-xs">
          <RotateCcw className="h-3.5 w-3.5" /> Reset Search
        </Button>

        <Button
          variant="primary"
          size="sm"
          onClick={handleNextStep}
          disabled={left > right || found}
          className="gap-1.5 bg-gradient-to-r from-violet-500 to-indigo-600 text-xs"
        >
          <span>Next Search Step</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { Play, RotateCcw, Sliders } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function SortingVisualizerDemo() {
  const [array, setArray] = useState<number[]>([]);
  const [isSorting, setIsSorting] = useState(false);
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [sortedIndices, setSortedIndices] = useState<number[]>([]);
  const [speed, setSpeed] = useState(50);

  const ARRAY_SIZE = 16;

  const resetArray = () => {
    const newArr = Array.from({ length: ARRAY_SIZE }, () =>
      Math.floor(Math.random() * 85) + 15
    );
    setArray(newArr);
    setActiveIndices([]);
    setSortedIndices([]);
    setIsSorting(false);
  };

  useEffect(() => {
    resetArray();
  }, []);

  const runBubbleSort = async () => {
    setIsSorting(true);
    const arr = [...array];
    const n = arr.length;
    const sorted: number[] = [];

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        setActiveIndices([j, j + 1]);
        await new Promise((resolve) => setTimeout(resolve, 110 - speed));

        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setArray([...arr]);
        }
      }
      sorted.push(n - i - 1);
      setSortedIndices([...sorted]);
    }
    setActiveIndices([]);
    setIsSorting(false);
  };

  return (
    <div className="rounded-2xl bg-slate-950/90 border border-slate-800 p-6 space-y-6 backdrop-blur-md shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs">
        <span className="flex items-center gap-1.5 font-semibold text-violet-400">
          <Sliders className="h-4 w-4" /> Bubble Sort Algorithm Visualizer
        </span>
        <span className="font-mono text-slate-400 text-[11px]">
          Time Complexity: <strong className="text-violet-300">O(N²)</strong>
        </span>
      </div>

      {/* Bar Graph Visualizer */}
      <div className="bg-slate-900/80 rounded-xl border border-slate-800 p-6 h-52 flex items-end justify-center gap-2">
        {array.map((val, idx) => {
          const isActive = activeIndices.includes(idx);
          const isSorted = sortedIndices.includes(idx);

          return (
            <div
              key={idx}
              className="flex-1 flex flex-col items-center gap-1 transition-all duration-150"
            >
              <div
                className={`w-full rounded-t-lg transition-all duration-150 ${
                  isActive
                    ? "bg-amber-400 shadow-lg shadow-amber-500/50"
                    : isSorted
                    ? "bg-emerald-500 shadow-md shadow-emerald-500/30"
                    : "bg-violet-600/80"
                }`}
                style={{ height: `${val * 1.6}px` }}
              />
              <span className="text-[9px] font-mono text-slate-400">{val}</span>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <div className="flex items-center gap-3 text-xs text-slate-300 w-full sm:w-auto">
          <span>Animation Speed:</span>
          <input
            type="range"
            min="10"
            max="100"
            value={speed}
            disabled={isSorting}
            onChange={(e) => setSpeed(parseInt(e.target.value))}
            className="accent-violet-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
          />
        </div>

        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={resetArray}
            disabled={isSorting}
            className="gap-1.5"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Shuffle</span>
          </Button>

          <Button
            variant="primary"
            size="sm"
            onClick={runBubbleSort}
            disabled={isSorting}
            className="gap-1.5 bg-gradient-to-r from-violet-500 to-indigo-600 shadow-violet-500/20"
          >
            <Play className="h-3.5 w-3.5" />
            <span>{isSorting ? "Sorting..." : "Start Sort"}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

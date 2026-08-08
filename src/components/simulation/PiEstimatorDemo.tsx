"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Sliders } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function PiEstimatorDemo() {
  const [totalPoints, setTotalPoints] = useState(0);
  const [insideCircle, setInsideCircle] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [points, setPoints] = useState<{ x: number; y: number; isInside: boolean }[]>([]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      const newBatch: { x: number; y: number; isInside: boolean }[] = [];
      let addedInside = 0;

      for (let i = 0; i < 25; i++) {
        const x = Math.random() * 2 - 1; // -1 to 1
        const y = Math.random() * 2 - 1; // -1 to 1
        const distSq = x * x + y * y;
        const isInside = distSq <= 1;
        if (isInside) addedInside++;

        newBatch.push({ x, y, isInside });
      }

      setPoints((prev) => [...prev.slice(-150), ...newBatch]);
      setTotalPoints((prev) => prev + 25);
      setInsideCircle((prev) => prev + addedInside);
    }, 40);

    return () => clearInterval(interval);
  }, [isRunning]);

  const estimatedPi = totalPoints > 0 ? (4 * insideCircle) / totalPoints : 3.14159;
  const errorPercent = totalPoints > 0 ? Math.abs((estimatedPi - Math.PI) / Math.PI) * 100 : 0;

  const handleReset = () => {
    setIsRunning(false);
    setTotalPoints(0);
    setInsideCircle(0);
    setPoints([]);
  };

  return (
    <div className="rounded-2xl bg-slate-950/90 border border-slate-800 p-6 space-y-6 backdrop-blur-md shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs">
        <span className="flex items-center gap-1.5 font-semibold text-emerald-400">
          <Sliders className="h-4 w-4" /> Monte Carlo π (Pi) Random Dart Estimator
        </span>
        <span className="font-mono text-slate-400 text-[11px]">
          Darts Thrown: <strong className="text-emerald-300">{totalPoints}</strong>
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
        {/* Square & Inscribed Circle Visualizer */}
        <div className="relative bg-slate-900 border border-slate-800 rounded-xl h-48 w-48 mx-auto flex items-center justify-center overflow-hidden">
          {/* Circle Outline */}
          <div className="absolute h-44 w-44 rounded-full border-2 border-emerald-500/50 bg-emerald-500/5" />

          {/* Random Darts */}
          {points.map((pt, idx) => (
            <div
              key={idx}
              className={`absolute h-1.5 w-1.5 rounded-full ${
                pt.isInside ? "bg-emerald-400 shadow-sm shadow-emerald-400" : "bg-rose-500/80"
              }`}
              style={{
                left: `${(pt.x + 1) * 50}%`,
                top: `${(pt.y + 1) * 50}%`,
              }}
            />
          ))}
        </div>

        {/* Live Estimation Readout */}
        <div className="space-y-4 text-center sm:text-left">
          <div className="bg-slate-900/80 rounded-xl border border-slate-800 p-4 space-y-1">
            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
              Estimated Value of π
            </p>
            <div className="text-3xl font-mono font-bold text-emerald-400">
              {estimatedPi.toFixed(5)}
            </div>
            <p className="text-[11px] text-slate-400">
              Actual π ≈ <strong className="text-white">3.14159</strong> (Error: {errorPercent.toFixed(2)}%)
            </p>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            By dropping random points inside a unit square, the proportion of points falling inside the inscribed circle approaches <strong className="text-emerald-300">π / 4</strong>.
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-end gap-3 pt-2">
        <Button variant="outline" size="sm" onClick={handleReset} className="gap-1.5 text-xs">
          <RotateCcw className="h-3.5 w-3.5" /> Reset Darts
        </Button>

        <Button
          variant="primary"
          size="sm"
          onClick={() => setIsRunning(!isRunning)}
          className="gap-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 shadow-emerald-500/20 text-xs"
        >
          {isRunning ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          <span>{isRunning ? "Pause Darts" : "Throw Darts"}</span>
        </Button>
      </div>
    </div>
  );
}

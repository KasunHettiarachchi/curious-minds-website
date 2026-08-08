"use client";

import React, { useState, useEffect } from "react";
import { Sliders, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function TimeDilationDemo() {
  const [speedPercent, setSpeedPercent] = useState(80); // % speed of light
  const [stationaryTicks, setStationaryTicks] = useState(0);
  const [movingTicks, setMovingTicks] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const v = speedPercent / 100;
  // Lorentz factor γ = 1 / sqrt(1 - v^2)
  const gamma = 1 / Math.sqrt(1 - v * v);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setStationaryTicks((prev) => prev + 1);
      setMovingTicks((prev) => prev + 1 / gamma);
    }, 100);

    return () => clearInterval(interval);
  }, [isRunning, gamma]);

  const handleReset = () => {
    setStationaryTicks(0);
    setMovingTicks(0);
  };

  return (
    <div className="rounded-2xl bg-slate-950/90 border border-slate-800 p-6 space-y-6 backdrop-blur-md shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs">
        <span className="flex items-center gap-1.5 font-semibold text-amber-400">
          <Sliders className="h-4 w-4" /> Relativistic Time Dilation Simulator
        </span>
        <span className="font-mono text-slate-400 text-[11px]">
          Lorentz Factor γ: <strong className="text-amber-300">{gamma.toFixed(3)}</strong>
        </span>
      </div>

      {/* Clocks Comparison Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Stationary Clock */}
        <div className="bg-slate-900/80 rounded-xl border border-slate-800 p-4 space-y-2 text-center">
          <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
            Stationary Earth Observer (v = 0)
          </p>
          <div className="text-3xl font-mono font-bold text-cyan-400">
            {stationaryTicks.toFixed(1)} <span className="text-xs text-slate-400 font-sans">sec</span>
          </div>
          <p className="text-[11px] text-slate-400">Standard rest frame clock</p>
        </div>

        {/* Moving Rocket Clock */}
        <div className="bg-slate-900/80 rounded-xl border border-slate-800 p-4 space-y-2 text-center">
          <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
            Spacecraft Observer (v = {speedPercent}% c)
          </p>
          <div className="text-3xl font-mono font-bold text-amber-400">
            {movingTicks.toFixed(1)} <span className="text-xs text-slate-400 font-sans">sec</span>
          </div>
          <p className="text-[11px] text-slate-400">
            Ticks <strong className="text-white">{gamma.toFixed(2)}x</strong> slower relative to Earth
          </p>
        </div>
      </div>

      {/* Speed Slider */}
      <div className="space-y-2 pt-2">
        <div className="flex justify-between text-xs text-slate-300">
          <span>Spacecraft Speed (% of Light Speed c):</span>
          <span className="font-mono text-amber-400 font-bold">{speedPercent}% c</span>
        </div>
        <input
          type="range"
          min="10"
          max="99"
          value={speedPercent}
          onChange={(e) => setSpeedPercent(parseInt(e.target.value))}
          className="w-full accent-amber-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
        />
      </div>

      <div className="flex justify-between items-center pt-2 text-xs">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsRunning(!isRunning)}
          className="text-xs"
        >
          {isRunning ? "Pause Clocks" : "Resume Clocks"}
        </Button>

        <Button variant="ghost" size="sm" onClick={handleReset} className="gap-1 text-slate-400">
          <RotateCcw className="h-3.5 w-3.5" /> Reset Clocks
        </Button>
      </div>
    </div>
  );
}

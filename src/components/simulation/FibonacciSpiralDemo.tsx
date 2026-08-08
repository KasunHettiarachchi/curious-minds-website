"use client";

import React, { useState } from "react";
import { Sliders } from "lucide-react";

export function FibonacciSpiralDemo() {
  const [seedCount, setSeedCount] = useState(150);
  const [angleDeg, setAngleDeg] = useState(137.5); // Golden Angle

  // Render sunflower seeds in a Vogel spiral
  const seeds = Array.from({ length: seedCount }, (_, i) => {
    const r = Math.sqrt(i + 1) * 7;
    const theta = (i * angleDeg * Math.PI) / 180;
    const x = 100 + r * Math.cos(theta);
    const y = 100 + r * Math.sin(theta);
    return { x, y, idx: i };
  });

  return (
    <div className="rounded-2xl bg-slate-950/90 border border-slate-800 p-6 space-y-6 backdrop-blur-md shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs">
        <span className="flex items-center gap-1.5 font-semibold text-rose-400">
          <Sliders className="h-4 w-4" /> Golden Ratio (137.5°) Sunflower Seed Packing Visualizer
        </span>
        <span className="font-mono text-slate-400 text-[11px]">
          Angle: <strong className="text-rose-300">{angleDeg}°</strong>
        </span>
      </div>

      {/* SVG Seed Canvas */}
      <div className="bg-slate-900/90 rounded-xl border border-slate-800 p-4 h-56 flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 200 200" className="w-full h-full max-w-xs">
          {seeds.map((s) => (
            <circle
              key={s.idx}
              cx={s.x}
              cy={s.y}
              r="2.5"
              fill={angleDeg === 137.5 ? "#f43f5e" : "#fb7185"}
              opacity={0.8}
            />
          ))}
        </svg>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300 pt-2">
        <div className="space-y-1">
          <div className="flex justify-between">
            <span>Divergence Angle:</span>
            <span className="font-mono text-rose-400 font-bold">{angleDeg}°</span>
          </div>
          <input
            type="range"
            min="120"
            max="150"
            step="0.1"
            value={angleDeg}
            onChange={(e) => setAngleDeg(parseFloat(e.target.value))}
            className="w-full accent-rose-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
          />
          <button
            type="button"
            onClick={() => setAngleDeg(137.5)}
            className="text-[10px] text-cyan-400 hover:underline"
          >
            Reset to Golden Angle (137.5°)
          </button>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between">
            <span>Seed Count:</span>
            <span className="font-mono text-rose-400 font-bold">{seedCount} seeds</span>
          </div>
          <input
            type="range"
            min="50"
            max="300"
            value={seedCount}
            onChange={(e) => setSeedCount(parseInt(e.target.value))}
            className="w-full accent-rose-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

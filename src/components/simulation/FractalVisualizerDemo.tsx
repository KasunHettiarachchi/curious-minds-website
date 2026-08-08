"use client";

import React, { useState } from "react";
import { Sliders } from "lucide-react";

export function FractalVisualizerDemo() {
  const [depth, setDepth] = useState(4);

  // Koch Snowflake / Fractal Triangles generator helper
  const renderTriangles = (level: number, size: number, x: number, y: number): React.ReactNode => {
    if (level === 0) return null;

    const half = size / 2;
    const h = (size * Math.sqrt(3)) / 2;

    return (
      <g key={`${level}-${x}-${y}`}>
        <polygon
          points={`${x},${y - (2 * h) / 3} ${x - half},${y + h / 3} ${x + half},${y + h / 3}`}
          fill="none"
          stroke="#10b981"
          strokeWidth={0.8}
          opacity={0.4 + (level / depth) * 0.5}
        />
        {level > 1 && (
          <>
            {renderTriangles(level - 1, size / 2, x, y - h / 3)}
            {renderTriangles(level - 1, size / 2, x - half / 2, y + h / 6)}
            {renderTriangles(level - 1, size / 2, x + half / 2, y + h / 6)}
          </>
        )}
      </g>
    );
  };

  const totalShapes = Math.pow(3, depth) - 1;

  return (
    <div className="rounded-2xl bg-slate-950/90 border border-slate-800 p-6 space-y-6 backdrop-blur-md shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs">
        <span className="flex items-center gap-1.5 font-semibold text-emerald-400">
          <Sliders className="h-4 w-4" /> Sierpiński / Fractal Recursion Generator
        </span>
        <span className="font-mono text-slate-400 text-[11px]">
          Iteration Depth: <strong className="text-emerald-300">Level {depth}</strong>
        </span>
      </div>

      {/* Fractal Canvas */}
      <div className="bg-slate-900/90 rounded-xl border border-slate-800 p-4 h-52 flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 200 180" className="w-full h-full max-w-xs">
          {renderTriangles(depth, 160, 100, 100)}
        </svg>
      </div>

      {/* Control Slider */}
      <div className="space-y-2 pt-2 text-xs">
        <div className="flex justify-between text-slate-300">
          <span>Recursion Depth:</span>
          <span className="font-mono text-emerald-400">
            {depth} Recursions (~{totalShapes} recursive sub-structures)
          </span>
        </div>
        <input
          type="range"
          min="1"
          max="6"
          value={depth}
          onChange={(e) => setDepth(parseInt(e.target.value))}
          className="w-full accent-emerald-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
        />
      </div>
    </div>
  );
}

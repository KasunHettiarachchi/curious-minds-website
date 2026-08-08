"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Sliders } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function OrbitalMotionDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [velocity, setVelocity] = useState(1);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setAngle((prev) => (prev + velocity * 1.5) % 360);
    }, 30);

    return () => clearInterval(interval);
  }, [isPlaying, velocity]);

  const radians = (angle * Math.PI) / 180;
  const radius = 56; // orbital radius in px
  const moonX = Math.cos(radians) * radius;
  const moonY = Math.sin(radians) * radius;

  const handleReset = () => {
    setAngle(0);
    setVelocity(1);
    setIsPlaying(true);
  };

  return (
    <div className="rounded-2xl bg-slate-950/80 border border-slate-800/80 p-6 flex flex-col items-center justify-between min-h-[300px] text-center space-y-4 shadow-2xl backdrop-blur-md">
      <div className="w-full flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
        <span className="flex items-center gap-1 text-cyan-400 font-semibold">
          <Sliders className="h-3.5 w-3.5" /> Interactive Simulation
        </span>
        <span className="font-mono text-[11px] text-slate-400">
          Velocity: {velocity.toFixed(1)}x
        </span>
      </div>

      {/* Orbit Visualization */}
      <div className="relative flex items-center justify-center h-36 w-36 rounded-full border border-cyan-500/20 bg-cyan-500/5">
        {/* Orbit Ring */}
        <div className="absolute h-28 w-28 rounded-full border border-dashed border-cyan-400/40" />

        {/* Earth Center */}
        <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-500 to-teal-400 shadow-lg shadow-cyan-500/50 flex items-center justify-center text-[10px] font-bold text-white z-10">
          Earth
        </div>

        {/* Orbiting Moon */}
        <div
          className="absolute h-4 w-4 rounded-full bg-slate-200 shadow-md shadow-slate-100 flex items-center justify-center text-[8px] font-bold text-slate-900 transition-transform duration-75 pointer-events-none"
          style={{
            transform: `translate(${moonX}px, ${moonY}px)`,
          }}
          title="Moon"
        />
      </div>

      {/* Interactive Controls */}
      <div className="w-full space-y-3 pt-2">
        <div className="flex items-center gap-3 justify-center">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause simulation" : "Play simulation"}
            className="h-8 w-8 p-0 rounded-lg"
          >
            {isPlaying ? <Pause className="h-3.5 w-3.5 text-amber-400" /> : <Play className="h-3.5 w-3.5 text-emerald-400" />}
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={handleReset}
            aria-label="Reset simulation"
            className="h-8 w-8 p-0 rounded-lg"
          >
            <RotateCcw className="h-3.5 w-3.5 text-slate-400" />
          </Button>
        </div>

        <div className="flex items-center gap-2 px-4 text-xs text-slate-400">
          <span>Speed:</span>
          <input
            type="range"
            min="0.2"
            max="3"
            step="0.2"
            value={velocity}
            onChange={(e) => setVelocity(parseFloat(e.target.value))}
            className="w-full accent-cyan-400 h-1 bg-slate-800 rounded-lg cursor-pointer"
            aria-label="Adjust orbital speed"
          />
        </div>
      </div>
    </div>
  );
}

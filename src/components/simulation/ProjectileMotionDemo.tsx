"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, RotateCcw, Sliders } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ProjectileMotionDemo() {
  const [angle, setAngle] = useState(45);
  const [velocity, setVelocity] = useState(60);
  const [isFiring, setIsFiring] = useState(false);
  const [time, setTime] = useState(0);
  const [trajectory, setTrajectory] = useState<{ x: number; y: number }[]>([]);

  const g = 9.81; // gravity m/s^2

  const rad = (angle * Math.PI) / 180;
  const maxTime = (2 * velocity * Math.sin(rad)) / g;
  const maxDistance = (velocity ** 2 * Math.sin(2 * rad)) / g;
  const maxHeight = (velocity * Math.sin(rad)) ** 2 / (2 * g);

  useEffect(() => {
    if (!isFiring) return;

    const interval = setInterval(() => {
      setTime((prev) => {
        const nextT = prev + 0.1;
        if (nextT >= maxTime) {
          setIsFiring(false);
          return maxTime;
        }

        const x = velocity * Math.cos(rad) * nextT;
        const y = velocity * Math.sin(rad) * nextT - 0.5 * g * nextT ** 2;
        setTrajectory((old) => [...old, { x, y: Math.max(0, y) }]);
        return nextT;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [isFiring, maxTime, velocity, rad, g]);

  const handleFire = () => {
    setTime(0);
    setTrajectory([]);
    setIsFiring(true);
  };

  const handleReset = () => {
    setIsFiring(false);
    setTime(0);
    setTrajectory([]);
  };

  // SVG Scaling
  const svgWidth = 400;
  const svgHeight = 200;
  const scaleX = svgWidth / Math.max(100, maxDistance * 1.1);
  const scaleY = (svgHeight - 30) / Math.max(30, maxHeight * 1.2);

  const currentX = velocity * Math.cos(rad) * time;
  const currentY = Math.max(0, velocity * Math.sin(rad) * time - 0.5 * g * time ** 2);

  return (
    <div className="rounded-2xl bg-slate-950/90 border border-slate-800 p-6 space-y-6 backdrop-blur-md shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs">
        <span className="flex items-center gap-1.5 font-semibold text-amber-400">
          <Sliders className="h-4 w-4" /> Projectile Motion Simulator
        </span>
        <div className="flex gap-4 font-mono text-slate-400 text-[11px]">
          <span>Max Range: <strong className="text-white">{maxDistance.toFixed(1)}m</strong></span>
          <span>Max Height: <strong className="text-white">{maxHeight.toFixed(1)}m</strong></span>
        </div>
      </div>

      {/* SVG Trajectory Canvas */}
      <div className="relative bg-slate-900/80 rounded-xl border border-slate-800/80 p-4 h-52 flex items-end overflow-hidden">
        <svg className="w-full h-full overflow-visible">
          {/* Ground Line */}
          <line
            x1="0"
            y1={svgHeight - 20}
            x2={svgWidth}
            y2={svgHeight - 20}
            stroke="#334155"
            strokeWidth="2"
          />

          {/* Trajectory Polyline */}
          {trajectory.length > 1 && (
            <polyline
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2"
              strokeDasharray="4 2"
              points={trajectory
                .map(
                  (pt) =>
                    `${Math.min(svgWidth, pt.x * scaleX)},${
                      svgHeight - 20 - pt.y * scaleY
                    }`
                )
                .join(" ")}
            />
          )}

          {/* Projectile Cannonball */}
          <circle
            cx={Math.min(svgWidth, currentX * scaleX)}
            cy={svgHeight - 20 - currentY * scaleY}
            r="6"
            fill="#fbbf24"
            className="shadow-lg shadow-amber-500/50"
          />
        </svg>

        {/* Live Metrics readout */}
        <div className="absolute top-3 left-3 bg-slate-950/80 border border-slate-800 rounded-lg p-2 text-[10px] font-mono text-slate-300 space-y-0.5">
          <p>Time: {time.toFixed(2)} s</p>
          <p>Distance (X): {currentX.toFixed(1)} m</p>
          <p>Height (Y): {currentY.toFixed(1)} m</p>
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div className="space-y-1 text-xs text-slate-300">
          <div className="flex justify-between">
            <span>Launch Angle:</span>
            <span className="font-mono text-amber-400">{angle}°</span>
          </div>
          <input
            type="range"
            min="15"
            max="85"
            value={angle}
            disabled={isFiring}
            onChange={(e) => setAngle(parseInt(e.target.value))}
            className="w-full accent-amber-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer disabled:opacity-50"
          />
        </div>

        <div className="space-y-1 text-xs text-slate-300">
          <div className="flex justify-between">
            <span>Initial Velocity:</span>
            <span className="font-mono text-amber-400">{velocity} m/s</span>
          </div>
          <input
            type="range"
            min="20"
            max="100"
            value={velocity}
            disabled={isFiring}
            onChange={(e) => setVelocity(parseInt(e.target.value))}
            className="w-full accent-amber-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer disabled:opacity-50"
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <Button
          variant="outline"
          size="sm"
          onClick={handleReset}
          className="gap-1.5"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span>Reset</span>
        </Button>

        <Button
          variant="primary"
          size="sm"
          onClick={handleFire}
          disabled={isFiring}
          className="gap-1.5 bg-gradient-to-r from-amber-500 to-orange-600 shadow-amber-500/20"
        >
          <Play className="h-3.5 w-3.5" />
          <span>{isFiring ? "In Flight..." : "Launch Projectile"}</span>
        </Button>
      </div>
    </div>
  );
}

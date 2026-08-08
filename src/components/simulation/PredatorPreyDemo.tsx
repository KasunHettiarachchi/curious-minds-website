"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Sliders } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function PredatorPreyDemo() {
  const [rabbits, setRabbits] = useState(60);
  const [foxes, setFoxes] = useState(20);
  const [isRunning, setIsRunning] = useState(true);
  const [history, setHistory] = useState<{ rabbits: number; foxes: number }[]>([]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setRabbits((prevRabbits) => {
        setFoxes((prevFoxes) => {
          // Lotka-Volterra rate calculations
          const alpha = 0.08; // rabbit birth rate
          const beta = 0.003; // predation rate
          const gamma = 0.06; // fox death rate
          const delta = 0.002; // fox birth from prey

          const newRabbits = Math.max(
            5,
            prevRabbits + (alpha * prevRabbits - beta * prevRabbits * prevFoxes)
          );
          const newFoxes = Math.max(
            2,
            prevFoxes + (delta * prevRabbits * prevFoxes - gamma * prevFoxes)
          );

          setHistory((h) => [...h.slice(-40), { rabbits: newRabbits, foxes: newFoxes }]);
          return newFoxes;
        });
        return prevRabbits;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleReset = () => {
    setRabbits(60);
    setFoxes(20);
    setHistory([]);
  };

  const svgWidth = 360;
  const svgHeight = 120;

  return (
    <div className="rounded-2xl bg-slate-950/90 border border-slate-800 p-6 space-y-6 backdrop-blur-md shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs">
        <span className="flex items-center gap-1.5 font-semibold text-rose-400">
          <Sliders className="h-4 w-4" /> Lotka-Volterra Population Graph Simulator
        </span>
        <div className="flex gap-4 font-mono text-[11px]">
          <span className="text-emerald-400">Prey (Rabbits): {Math.round(rabbits)}</span>
          <span className="text-rose-400">Predators (Foxes): {Math.round(foxes)}</span>
        </div>
      </div>

      {/* Population Wave Graph */}
      <div className="bg-slate-900/90 rounded-xl border border-slate-800 p-4 h-40 flex items-end overflow-hidden relative">
        <svg className="w-full h-full overflow-visible">
          {/* Rabbits line (Emerald) */}
          {history.length > 1 && (
            <polyline
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              points={history
                .map((pt, idx) => `${(idx / 40) * svgWidth},${svgHeight - (pt.rabbits / 120) * svgHeight}`)
                .join(" ")}
            />
          )}

          {/* Foxes line (Rose) */}
          {history.length > 1 && (
            <polyline
              fill="none"
              stroke="#f43f5e"
              strokeWidth="2"
              points={history
                .map((pt, idx) => `${(idx / 40) * svgWidth},${svgHeight - (pt.foxes / 120) * svgHeight}`)
                .join(" ")}
            />
          )}
        </svg>

        <div className="absolute top-2 left-2 flex gap-4 text-[10px] font-mono">
          <span className="flex items-center gap-1 text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 inline-block" /> Rabbits (Prey)
          </span>
          <span className="flex items-center gap-1 text-rose-400">
            <span className="h-2 w-2 rounded-full bg-rose-400 inline-block" /> Foxes (Predators)
          </span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-end gap-3 pt-2">
        <Button variant="outline" size="sm" onClick={handleReset} className="gap-1.5 text-xs">
          <RotateCcw className="h-3.5 w-3.5" /> Reset Ecosystem
        </Button>

        <Button
          variant="primary"
          size="sm"
          onClick={() => setIsRunning(!isRunning)}
          className="gap-1.5 bg-gradient-to-r from-rose-500 to-pink-600 shadow-rose-500/20 text-xs"
        >
          {isRunning ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          <span>{isRunning ? "Pause Ecosystem" : "Simulate Cycle"}</span>
        </Button>
      </div>
    </div>
  );
}

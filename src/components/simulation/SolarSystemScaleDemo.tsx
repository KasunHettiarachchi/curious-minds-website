"use client";

import React, { useState } from "react";
import { Sliders } from "lucide-react";

const PLANETS = [
  { name: "Sun", distanceAU: 0, size: 24, color: "#f59e0b" },
  { name: "Mercury", distanceAU: 0.39, size: 4, color: "#94a3b8" },
  { name: "Venus", distanceAU: 0.72, size: 6, color: "#fef08a" },
  { name: "Earth", distanceAU: 1.0, size: 7, color: "#38bdf8" },
  { name: "Mars", distanceAU: 1.52, size: 5, color: "#f87171" },
  { name: "Jupiter", distanceAU: 5.2, size: 16, color: "#fb923c" },
  { name: "Saturn", distanceAU: 9.58, size: 14, color: "#fde047" },
  { name: "Uranus", distanceAU: 19.2, size: 10, color: "#22d3ee" },
  { name: "Neptune", distanceAU: 30.05, size: 10, color: "#818cf8" },
];

export function SolarSystemScaleDemo() {
  const [scaleMode, setScaleMode] = useState<"logarithmic" | "proportional">("logarithmic");
  const [selectedPlanet, setSelectedPlanet] = useState(PLANETS[3]); // Earth

  return (
    <div className="rounded-2xl bg-slate-950/90 border border-slate-800 p-6 space-y-6 backdrop-blur-md shadow-2xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-800 pb-3 gap-2 text-xs">
        <span className="flex items-center gap-1.5 font-semibold text-cyan-400">
          <Sliders className="h-4 w-4" /> Solar System Distance Visualizer
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setScaleMode("logarithmic")}
            className={`px-2.5 py-1 rounded-lg transition-colors ${
              scaleMode === "logarithmic"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                : "bg-slate-900 text-slate-400 border border-slate-800"
            }`}
          >
            Logarithmic Scale
          </button>
          <button
            type="button"
            onClick={() => setScaleMode("proportional")}
            className={`px-2.5 py-1 rounded-lg transition-colors ${
              scaleMode === "proportional"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                : "bg-slate-900 text-slate-400 border border-slate-800"
            }`}
          >
            True 1:1 Scale
          </button>
        </div>
      </div>

      {/* Orbit Scale Track */}
      <div className="relative bg-slate-900/90 rounded-xl border border-slate-800 p-6 h-36 flex items-center overflow-x-auto scrollbar-none">
        <div className="relative w-full min-w-[500px] flex items-center">
          {/* Distance Track Line */}
          <div className="absolute left-0 right-0 h-0.5 bg-slate-800" />

          {PLANETS.map((planet) => {
            let leftPercent = 0;
            if (scaleMode === "logarithmic") {
              leftPercent = planet.distanceAU === 0 ? 2 : (Math.log10(planet.distanceAU + 0.1) + 1) * 30 + 10;
            } else {
              leftPercent = (planet.distanceAU / 32) * 92 + 2;
            }

            const isSelected = selectedPlanet.name === planet.name;

            return (
              <button
                type="button"
                key={planet.name}
                onClick={() => setSelectedPlanet(planet)}
                className="absolute flex flex-col items-center group -translate-x-1/2 transition-all hover:scale-125 focus:outline-none"
                style={{ left: `${Math.min(96, Math.max(2, leftPercent))}%` }}
              >
                <div
                  className={`rounded-full transition-all ${
                    isSelected ? "ring-2 ring-white ring-offset-2 ring-offset-slate-950 scale-125" : ""
                  }`}
                  style={{
                    width: `${planet.size}px`,
                    height: `${planet.size}px`,
                    backgroundColor: planet.color,
                    boxShadow: `0 0 12px ${planet.color}80`,
                  }}
                />
                <span className="text-[10px] font-mono text-slate-300 mt-1 opacity-80 group-hover:opacity-100 whitespace-nowrap">
                  {planet.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Planet Readout */}
      <div className="bg-slate-900/60 rounded-xl border border-slate-800/80 p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
        <div>
          <h4 className="font-bold text-white text-sm" style={{ color: selectedPlanet.color }}>
            {selectedPlanet.name}
          </h4>
          <p className="text-slate-400 text-xs">
            Distance from Sun:{" "}
            <strong className="text-white">
              {selectedPlanet.distanceAU === 0
                ? "0 AU (Center Star)"
                : `${selectedPlanet.distanceAU} AU (~${(selectedPlanet.distanceAU * 149.6).toFixed(1)} million km)`}
            </strong>
          </p>
        </div>

        <p className="text-[11px] text-slate-400 max-w-sm text-center sm:text-right">
          {scaleMode === "proportional"
            ? "Notice how the outer planets stretch far out into deep space vacuum!"
            : "Logarithmic scaling compresses vast interplanetary distances so all planets fit on a single screen."}
        </p>
      </div>
    </div>
  );
}

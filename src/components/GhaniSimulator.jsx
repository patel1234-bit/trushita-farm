import React, { useState } from "react";
import { EXTRACTION_UNITS } from "../data/catalog.js";
import { showToast } from "../lib/store.js";

export default function GhaniSimulator() {
  const [unitId, setUnitId] = useState(1);
  const unit = EXTRACTION_UNITS[unitId];
  const oilHue = unitId === 1 ? "#D97706" : "#CA8A04";
  const oilHighlight = unitId === 1 ? "#FBBF24" : "#FACC15";

  const handleSwitch = (id) => {
    setUnitId(id);
    showToast(`Switched telemetry to ${EXTRACTION_UNITS[id].unitName}`);
  };

  return (
    <div className="relative bg-white rounded-sm p-6 sm:p-7 border border-zinc-300 shadow-xl overflow-hidden">
      {/* Unit Selector Tabs */}
      <div className="flex items-center gap-1 p-1 bg-zinc-100 rounded-sm mb-4">
        {[1, 2].map((id) => (
          <button
            key={id}
            onClick={() => handleSwitch(id)}
            className={`flex-1 py-1.5 px-3 text-xs rounded-sm transition-all ${
              unitId === id
                ? "font-bold bg-black text-white shadow-xs"
                : "font-semibold bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
            }`}
          >
            Visnagar Unit #{id}
          </button>
        ))}
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-3 pb-3 border-b border-zinc-100">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-sm">
            {unit.badge}
          </span>
          <h2 className="text-sm font-bold text-zinc-900 mt-1">{unit.seed}</h2>
        </div>
        <div className="flex items-center gap-1.5 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-sm shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span>Crushing Live</span>
        </div>
      </div>

      {/* Cutaway SVG Wood-Ghani Oil Pour Visualization */}
      <div className="relative w-full h-52 flex items-center justify-center my-2 bg-gradient-to-b from-zinc-50 via-white to-emerald-50/30 rounded-sm border border-zinc-200/70 overflow-hidden">
        <svg viewBox="0 0 320 200" className="w-full h-full" role="img" aria-label="Animated Wooden Ghani Oil Pour">
          <defs>
            <linearGradient id="kolhuWood" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#27272A" />
              <stop offset="100%" stopColor="#09090B" />
            </linearGradient>
            <linearGradient id="oilStream" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={oilHighlight} />
              <stop offset="100%" stopColor={oilHue} />
            </linearGradient>
          </defs>

          {/* Subtle top rotating gear ring */}
          <g transform="translate(115, 76)">
            <circle r="54" fill="none" stroke="#E4E4E7" strokeWidth="1.5" strokeDasharray="6 4" className="animate-ghani-slow" />
            <circle r="40" fill="#FAFAFA" stroke="#D4D4D8" strokeWidth="1.5" />
            {/* Carved Timber Mortar */}
            <path d="M-32 -22 L32 -22 L24 30 L-24 30 Z" fill="url(#kolhuWood)" rx="4" />
            <rect x="-36" y="-26" width="72" height="7" rx="2" fill="#059669" />
            {/* Rotating Pestle Shaft */}
            <g className="animate-ghani-reverse">
              <rect x="-6" y="-44" width="12" height="58" rx="4" fill="#3F3F46" stroke="#09090B" strokeWidth="1.5" />
              <circle cx="0" cy="-44" r="6" fill="#059669" />
            </g>
            {/* Seed Cluster Inside Basin */}
            <circle cx="-14" cy="-22" r="3" fill={oilHighlight} />
            <circle cx="13" cy="-23" r="3.5" fill={oilHue} />
            <circle cx="20" cy="-20" r="2.5" fill={oilHighlight} />
            {/* Extraction Spout */}
            <path d="M26 14 L58 22 L58 28 L25 22 Z" fill="#18181B" />
          </g>

          {/* Continuous Golden Oil Stream Pouring into Glass Vessel */}
          <path d="M173 102 Q188 106 188 124 L188 164" fill="none" stroke="url(#oilStream)" strokeWidth="4" strokeLinecap="round" />

          {/* Dripping Oil Droplets */}
          <circle cx="188" cy="120" r="3.5" fill={oilHighlight} className="animate-oil-drip" />

          {/* Glass Collection Vessel on Right */}
          <g transform="translate(162, 124)">
            <rect x="0" y="0" width="52" height="58" rx="4" fill="#FFFFFF" stroke="#D4D4D8" strokeWidth="1.8" />
            {/* Oil Fill */}
            <rect x="2" y="20" width="48" height="36" rx="2.5" fill="url(#oilStream)" opacity="0.92" />
            {/* Surface Ripple */}
            <ellipse cx="26" cy="20" rx="22" ry="3" fill={oilHighlight} />
            <ellipse cx="26" cy="20" rx="10" ry="1.5" fill="#FFFFFF" opacity="0.7" />
            {/* Label Badge on Vessel */}
            <rect x="8" y="31" width="36" height="16" rx="1.5" fill="#FFFFFF" opacity="0.95" />
            <text x="26" y="39" textAnchor="middle" fill="#09090B" fontSize="5.2" fontWeight="800">100% PURE</text>
            <text x="26" y="44.5" textAnchor="middle" fill="#059669" fontSize="4.2" fontWeight="700">WOOD PRESS</text>
          </g>

          {/* Floating Pure Tag */}
          <g transform="translate(226, 40)">
            <rect x="0" y="0" width="76" height="36" rx="3" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="1" />
            <text x="8" y="14" fill="#059669" fontSize="7" fontWeight="800">• UNREFINED</text>
            <text x="8" y="26" fill="#09090B" fontSize="7" fontWeight="700">ZERO SOLVENTS</text>
          </g>
        </svg>
      </div>

      {/* Pure Mechanical Telemetry (Zero Temperature) */}
      <div className="bg-zinc-50 rounded-sm p-3.5 border border-zinc-200 mt-3 space-y-2.5 text-xs">
        <div className="grid grid-cols-2 gap-3 pb-2.5 border-b border-zinc-200">
          <div>
            <span className="text-zinc-400 text-[10px] block font-semibold">Timber Kolhu Type:</span>
            <span className="font-bold text-emerald-700">{unit.method}</span>
          </div>
          <div>
            <span className="text-zinc-400 text-[10px] block font-semibold">Clarification:</span>
            <span className="font-bold text-zinc-900">{unit.filtration}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-[10px]">
          <div>
            <span className="text-zinc-400 block font-semibold">Pestle Speed:</span>
            <span className="font-bold text-zinc-900 text-xs">{unit.rpm}</span>
          </div>
          <div>
            <span className="text-zinc-400 block font-semibold">Extraction Yield:</span>
            <span className="font-bold text-zinc-900 text-xs">{unit.yield}</span>
          </div>
        </div>
      </div>

      <p className="text-[10px] text-zinc-400 text-center mt-3">
        100% mechanical timber extraction • Natural gravity settling • Zero solvent chemicals
      </p>
    </div>
  );
}

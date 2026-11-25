import React, { useState } from "react";
import { EXTRACTION_UNITS } from "../data/catalog.js";
import { showToast } from "../lib/store.js";

export default function GhaniSimulator() {
  const [unitId, setUnitId] = useState(1);
  const unit = EXTRACTION_UNITS[unitId];

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

      {/* Rotating Ghani Animation */}
      <div className="relative w-full h-48 flex items-center justify-center my-3">
        <div className="w-44 h-44 rounded-full border-2 border-dashed border-zinc-300 flex items-center justify-center animate-ghani-slow">
          <div className="w-36 h-36 rounded-full border border-zinc-200 bg-zinc-50 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-2 text-sm opacity-60">
              <span>🥜</span><span>🌾</span><span>🥜</span>
              <span>🌾</span><span>🌱</span><span>🌾</span>
              <span>🥜</span><span>🌾</span><span>🥜</span>
            </div>
          </div>
        </div>

        <div className="absolute w-28 h-28 rounded-full border-2 border-zinc-800 bg-zinc-800/10 flex items-center justify-center animate-ghani-reverse shadow-md">
          <div className="w-5 h-14 bg-zinc-900 rounded-full shadow-xs" />
        </div>

        <div className="absolute w-14 h-14 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-md glow-emerald">
          <span className="text-lg">💧</span>
        </div>

        <div className="absolute top-24 left-1/2 -translate-x-1/2">
          <div className="w-2.5 h-3.5 bg-emerald-600 rounded-full animate-oil-drip shadow-xs" />
        </div>
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

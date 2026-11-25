import React, { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { addToCart, setCartOpen, showToast } from "../lib/store.js";

const COOK_STYLES = [
  { id: "traditional", label: "Traditional", sub: "Frying & Curries", icon: "🥘", factor: 1.3 },
  { id: "balanced", label: "Balanced", sub: "Sabzi & Rotis", icon: "🥗", factor: 1.0 },
  { id: "diet", label: "Minimal", sub: "Light & Salads", icon: "🌿", factor: 0.75 }
];

export default function OilCalculator() {
  const [members, setMembers] = useState(4);
  const [style, setStyle] = useState("balanced");

  const factor = COOK_STYLES.find((s) => s.id === style)?.factor || 1.0;
  const totalLitres = Math.round(members * factor * 10) / 10;
  const groundnutL = Math.max(1, Math.round(totalLitres * 0.6));
  const mustardL = Math.max(1, Math.round(totalLitres * 0.3));
  const sesameMl = 500;

  const handleBundleAdd = () => {
    addToCart("groundnut", 1);
    addToCart("yellow-mustard", 1);
    addToCart("white-sesame", 0);
    setCartOpen(true);
    showToast("Added Recommended Family Bundle to cart!");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-zinc-50 p-6 sm:p-8 rounded-sm border border-zinc-200 shadow-sm">
      <div className="md:col-span-7 space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="family-slider" className="text-xs font-bold text-zinc-800">
              Family Members in Household:
            </label>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-sm">
              {members} {members === 1 ? "Person" : "Family Members"}
            </span>
          </div>
          <input
            type="range"
            id="family-slider"
            min="1"
            max="8"
            value={members}
            onChange={(e) => setMembers(parseInt(e.target.value, 10))}
            className="w-full accent-emerald-600 cursor-pointer h-1.5 bg-zinc-200 rounded-lg"
          />
          <div className="flex justify-between text-[10px] text-zinc-400 mt-1.5">
            <span>1 Person</span>
            <span>4 Members</span>
            <span>8+ Members</span>
          </div>
        </div>

        <div>
          <span className="text-xs font-bold text-zinc-800 block mb-2">Household Cooking Style:</span>
          <div className="grid grid-cols-3 gap-2">
            {COOK_STYLES.map((c) => (
              <button
                key={c.id}
                onClick={() => setStyle(c.id)}
                className={`p-3 text-center rounded-sm border text-xs font-semibold transition-all ${
                  style === c.id
                    ? "bg-black text-white border-black"
                    : "bg-white text-zinc-800 border-zinc-200 hover:border-zinc-300"
                }`}
              >
                <span className="block text-base mb-0.5">{c.icon}</span>
                {c.label}
                <span className="block text-[10px] opacity-75 mt-0.5">{c.sub}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="md:col-span-5 bg-white p-5 rounded-sm border border-zinc-200 shadow-xs">
        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
          Recommended Requirement
        </span>
        <div className="text-2xl font-black text-zinc-900 my-1">{totalLitres} Litres / Month</div>
        <p className="text-[11px] text-zinc-500 mb-3">Suggested balanced kitchen combination:</p>

        <div className="mb-4 space-y-1">
          <div className="flex items-center justify-between text-xs py-2 border-b border-zinc-100">
            <span className="font-semibold text-zinc-800">🥜 Wood-Pressed Groundnut</span>
            <span className="font-bold text-zinc-900">{groundnutL} Litre(s)</span>
          </div>
          <div className="flex items-center justify-between text-xs py-2 border-b border-zinc-100">
            <span className="font-semibold text-zinc-800">🌾 Wood-Pressed Mustard</span>
            <span className="font-bold text-zinc-900">{mustardL} Litre(s)</span>
          </div>
          <div className="flex items-center justify-between text-xs py-2">
            <span className="font-semibold text-zinc-800">🌱 Wood-Pressed Sesame</span>
            <span className="font-bold text-zinc-900">{sesameMl} ml</span>
          </div>
        </div>

        <button
          onClick={handleBundleAdd}
          className="w-full py-2.5 rounded-sm bg-black hover:bg-zinc-800 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-xs"
        >
          <ShoppingBag className="w-3.5 h-3.5 text-emerald-400" />
          <span>Add Recommended Bundle to Cart</span>
        </button>
      </div>
    </div>
  );
}

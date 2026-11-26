import React, { useState } from "react";
import { Flame, Sparkles, Utensils, HeartPulse, Plus, Check, ShieldCheck } from "lucide-react";
import { PRODUCTS } from "../data/catalog.js";
import { addToCart } from "../lib/store.js";
import { withBase } from "../lib/paths.js";

const PAIRINGS = [
  {
    id: "frying",
    label: "Daily Sabzi & Crisp Puris",
    icon: Flame,
    productId: "groundnut",
    aroma: "Warm, Authentic Peanut",
    texture: "Silky Golden Body",
    why: "Pressed from A1-grade G20 Gujarat groundnuts rich in monounsaturated fats (49.98g per 100g) that remain naturally stable for everyday sautéing and deep frying without foaming."
  },
  {
    id: "tadka",
    label: "Dal Tadka, Curries & Pickles",
    icon: Utensils,
    productId: "yellow-mustard",
    aroma: "Mellow Spice & Clean Pungency",
    texture: "Bright Amber Gold",
    why: "Cold-pressed yellow mustard retains natural pungency and Omega-3 & 6 fatty acids—making it ideal for aromatic tadka, stir-fries, and homemade pickles."
  },
  {
    id: "ayurveda",
    label: "Oil Pulling & Ayurvedic Care",
    icon: Sparkles,
    productId: "white-sesame",
    aroma: "Earthy Unjha Roasted Seed",
    texture: "Rich Golden Elixir",
    why: "Extracted from Unjha white sesame seeds with balanced MUFA (41.8g) and PUFA (42.3g). Widely cherished for traditional Kavala (oil pulling), massage, and savory tempering."
  },
  {
    id: "omega",
    label: "Salads, Dressings & Daily Omega",
    icon: HeartPulse,
    productId: "flaxseed",
    aroma: "Fresh Harvest Nutty Grain",
    texture: "Warm Amber Pressed",
    why: "Unrefined virgin flaxseed oil preserves delicate plant-based Omega-3, 6 & 9 fatty acids. Drizzle unheated over warm rotis, chutneys, salads, or smoothies."
  }
];

export default function OilPairingStudio() {
  const [selectedId, setSelectedId] = useState("frying");
  const [added, setAdded] = useState(false);

  const active = PAIRINGS.find((p) => p.id === selectedId) || PAIRINGS[0];
  const product = PRODUCTS.find((p) => p.id === active.productId) || PRODUCTS[0];
  const defaultIdx = product.sizes.findIndex((s) => s.default);
  const sizeIdx = defaultIdx !== -1 ? defaultIdx : 0;
  const sizeObj = product.sizes[sizeIdx];
  const rawImg = sizeObj.image || product.image;
  const imgSrc = rawImg.startsWith("/") ? withBase(rawImg) : rawImg;

  const handleQuickAdd = () => {
    addToCart(product.id, sizeIdx);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="bg-white rounded-sm border border-zinc-200 shadow-sm overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left: Kitchen Mood Selector */}
        <div className="lg:col-span-6 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-zinc-200 bg-zinc-50/70">
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-sm border border-emerald-200">
            Interactive Kitchen Guide
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight mt-3 mb-2">
            Match the Right Oil to Your Kitchen Ritual
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 mb-6">
            Traditional Indian kitchens use different oils for different dishes. Choose what you are preparing to discover its wood-pressed match:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {PAIRINGS.map((p) => {
              const Icon = p.icon;
              const isSelected = p.id === selectedId;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedId(p.id)}
                  className={`p-3.5 rounded-sm border text-left transition-all flex items-start gap-3 ${
                    isSelected
                      ? "bg-zinc-950 text-white border-zinc-950 shadow-sm"
                      : "bg-white text-zinc-800 border-zinc-200 hover:border-emerald-400"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-sm flex items-center justify-center shrink-0 ${
                      isSelected ? "bg-emerald-600 text-white" : "bg-emerald-50 text-emerald-700"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold block leading-snug">{p.label}</span>
                    <span className={`text-[10px] mt-0.5 block ${isSelected ? "text-emerald-300" : "text-zinc-500"}`}>
                      {p.aroma}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Matched Real Product Photograph & Notes */}
        <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 bg-white">
          <div className="w-48 h-56 rounded-sm border border-zinc-200 bg-zinc-50 overflow-hidden shrink-0 group p-2 flex items-center justify-center">
            <img
              src={imgSrc}
              alt={product.name}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-sm border border-emerald-200 mb-2">
              <ShieldCheck className="w-3 h-3" />
              <span>Ideal Match • {product.tag}</span>
            </div>
            <h3 className="text-xl font-black text-zinc-950 tracking-tight">{product.name}</h3>
            <p className="text-xs text-emerald-700 font-semibold mb-3">{product.hindiName}</p>
            <p className="text-xs text-zinc-600 leading-relaxed mb-4">{active.why}</p>

            <div className="grid grid-cols-2 gap-2 mb-4 text-[11px] bg-zinc-50 p-2.5 rounded-sm border border-zinc-200">
              <div>
                <span className="text-zinc-400 block font-semibold">Origin</span>
                <span className="font-bold text-zinc-900">{product.seedOrigin}</span>
              </div>
              <div>
                <span className="text-zinc-400 block font-semibold">Extraction</span>
                <span className="font-bold text-zinc-900">{product.pressingMethod}</span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3">
              <div>
                <span className="text-xl font-black text-zinc-950">₹{sizeObj.price}</span>
                <span className="text-[11px] text-zinc-500 ml-1">/ {sizeObj.size}</span>
              </div>

              <button
                onClick={handleQuickAdd}
                className="px-4 py-2.5 rounded-sm bg-black hover:bg-zinc-800 text-white text-xs font-bold inline-flex items-center gap-1.5 transition-all"
              >
                {added ? (
                  <span className="inline-flex items-center gap-1 text-emerald-400">
                    <Check className="w-3.5 h-3.5" /> Added!
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1">
                    Add to Cart <Plus className="w-3.5 h-3.5" />
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

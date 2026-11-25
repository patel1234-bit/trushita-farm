import React, { useState } from "react";
import { Info, Check, Plus } from "lucide-react";
import {
  useTrushitaStore,
  selectProductSize,
  addToCart,
  setQuickViewProduct
} from "../lib/store.js";

export default function ProductCard({ product }) {
  const store = useTrushitaStore();
  const [justAdded, setJustAdded] = useState(false);

  const selectedSizeIdx = store.selectedSizes[product.id] ?? 0;
  const currentSize = product.sizes[selectedSizeIdx] || product.sizes[0];

  const handleAdd = () => {
    addToCart(product.id, selectedSizeIdx);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <div className="product-card group flex flex-col justify-between p-4 sm:p-5 rounded-sm bg-white border border-zinc-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-zinc-300 transition-all duration-300">
      {/* Aspect-Square Preview */}
      <div className="relative mb-3.5 w-full aspect-square rounded-sm bg-zinc-50 flex items-center justify-center border border-zinc-100 overflow-hidden group-hover:bg-emerald-50/20 transition-colors">
        <span className="text-6xl filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
          {product.icon}
        </span>

        <div className="absolute top-2.5 right-2.5 bg-emerald-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded-sm flex items-center gap-1 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span>{product.tag}</span>
        </div>

        <div className="absolute bottom-2 left-2 text-[10px] font-semibold text-zinc-600 bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded-sm border border-zinc-200/80">
          {product.pressingMethod.split("(")[0].trim()}
        </div>

        <div className="absolute bottom-2 right-2 text-[10px] font-bold text-emerald-800 bg-emerald-50/95 backdrop-blur-xs px-2 py-0.5 rounded-sm border border-emerald-200/80">
          {product.nutritionTag}
        </div>
      </div>

      {/* Details & Size Switcher */}
      <div className="flex flex-col text-left px-0.5 flex-grow">
        <div className="flex items-start justify-between gap-1 mb-0.5">
          <h3 className="font-bold text-zinc-900 text-base tracking-tight group-hover:text-emerald-700 transition-colors">
            {product.name}
          </h3>
          <button
            onClick={() => setQuickViewProduct(product.id)}
            className="text-zinc-400 hover:text-emerald-600 p-0.5 transition-colors"
            title="View Full Nutrition"
            aria-label={`View details for ${product.name}`}
          >
            <Info className="w-4 h-4" />
          </button>
        </div>

        <p className="text-[11px] text-zinc-500 font-medium mb-3 line-clamp-2 leading-relaxed">
          {product.shortDesc}
        </p>

        <div className="mb-3">
          <div className="flex items-center justify-between text-[10px] text-zinc-400 font-medium mb-1">
            <span>Select Quantity:</span>
            <span className="text-emerald-700 font-bold">{currentSize.perLiter}</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {product.sizes.map((s, idx) => (
              <button
                key={s.size}
                onClick={() => selectProductSize(product.id, idx)}
                className={`px-2.5 py-1 text-[11px] rounded-sm transition-all ${
                  idx === selectedSizeIdx
                    ? "bg-black text-white font-bold shadow-xs"
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 font-medium"
                }`}
              >
                {s.size}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Price & Add CTA */}
      <div className="pt-2.5 border-t border-zinc-100 mt-auto">
        <div className="flex items-baseline justify-between mb-2.5">
          <div>
            <span className="text-xl font-bold text-zinc-900">₹{currentSize.price}</span>
            {currentSize.originalPrice && (
              <>
                <span className="text-xs text-zinc-400 line-through ml-1.5">₹{currentSize.originalPrice}</span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1 py-0.5 rounded ml-1">
                  {currentSize.savings}
                </span>
              </>
            )}
          </div>
          <span className="text-[10px] text-zinc-500 font-medium">Free Shipping ≥ ₹799</span>
        </div>

        <button
          onClick={handleAdd}
          className="w-full bg-black hover:bg-zinc-800 text-white font-bold text-xs py-2.5 rounded-sm shadow-xs transition-all transform hover:-translate-y-0.5 cursor-pointer text-center flex items-center justify-center gap-1.5"
        >
          {justAdded ? (
            <span className="inline-flex items-center gap-1 text-emerald-400">
              <Check className="w-3.5 h-3.5" /> Added Fresh!
            </span>
          ) : (
            <span className="inline-flex items-center gap-1">
              Add Fresh To Cart <Plus className="w-3.5 h-3.5" />
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

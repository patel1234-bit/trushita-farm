import React, { useState } from "react";
import { Info, Check, Plus, ShieldCheck, MapPin } from "lucide-react";
import {
  useTrushitaStore,
  selectProductSize,
  addToCart,
  setQuickViewProduct
} from "../lib/store.js";
import { withBase } from "../lib/paths.js";

export default function ProductCard({ product }) {
  const store = useTrushitaStore();
  const [justAdded, setJustAdded] = useState(false);

  const selectedSizeIdx = store.selectedSizes[product.id] ?? 0;
  const currentSize = product.sizes[selectedSizeIdx] || product.sizes[0];
  const rawImg = currentSize.image || product.image;
  const imgSrc = rawImg.startsWith("/") ? withBase(rawImg) : rawImg;

  const handleAdd = () => {
    addToCart(product.id, selectedSizeIdx);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <div className="product-card group flex flex-col justify-between p-4 sm:p-5 rounded-sm bg-white border border-zinc-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-lg hover:border-emerald-300/80 transition-all duration-300">
      {/* Authentic Product Photography Stage (dynamically switches photo by pack quantity) */}
      <div
        onClick={() => setQuickViewProduct(product.id)}
        className="relative mb-4 w-full aspect-[4/3] sm:aspect-square rounded-sm border border-zinc-200/80 bg-zinc-50 overflow-hidden cursor-pointer flex items-center justify-center p-3"
      >
        <img
          src={imgSrc}
          alt={`${product.name} - ${currentSize.size}`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        <div className="absolute top-2.5 right-2.5 bg-emerald-600 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-sm flex items-center gap-1.5 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span>{product.tag}</span>
        </div>

        <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs text-zinc-700 text-[10px] font-semibold px-2 py-0.5 rounded-sm border border-zinc-200/80 flex items-center gap-1">
          <MapPin className="w-2.5 h-2.5 text-emerald-600" />
          <span className="truncate max-w-[115px]">{product.seedOrigin.split(",")[0]}</span>
        </div>

        <div className="absolute bottom-2.5 left-2.5 text-[10px] font-semibold text-zinc-800 bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded-sm border border-zinc-200/80">
          {product.pressingMethod.split("(")[0].trim()}
        </div>

        <div className="absolute bottom-2.5 right-2.5 text-[10px] font-bold text-emerald-800 bg-emerald-50/95 backdrop-blur-xs px-2 py-0.5 rounded-sm border border-emerald-200/80">
          {product.nutritionTag}
        </div>
      </div>

      {/* Product Identity & Highlights */}
      <div className="flex flex-col text-left px-0.5 flex-grow">
        <div className="flex items-start justify-between gap-2 mb-1">
          <div>
            <h3
              onClick={() => setQuickViewProduct(product.id)}
              className="font-bold text-zinc-900 text-base tracking-tight group-hover:text-emerald-700 transition-colors cursor-pointer"
            >
              {product.name}
            </h3>
            <span className="text-[11px] font-semibold text-emerald-700 block">
              {product.hindiName}
            </span>
          </div>
          <button
            onClick={() => setQuickViewProduct(product.id)}
            className="text-zinc-400 hover:text-emerald-600 p-1 rounded-sm hover:bg-emerald-50 transition-colors shrink-0"
            title="View Origin & Purity Specifications"
            aria-label={`View details for ${product.name}`}
          >
            <Info className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-zinc-600 font-medium mb-3 line-clamp-2 leading-relaxed">
          {product.shortDesc}
        </p>

        {/* Purity Micro-Highlight */}
        <div className="mb-3 px-2.5 py-2 bg-zinc-50 border border-zinc-200/70 rounded-sm flex items-center gap-2 text-[11px] text-zinc-700">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span className="truncate font-medium">
            {product.filtration} • 0% Hexane
          </span>
        </div>

        {/* Quantity Selector */}
        <div className="mb-3.5">
          <div className="flex items-center justify-between text-[10px] text-zinc-500 font-semibold mb-1.5">
            <span>Available Quantities:</span>
            <span className="text-emerald-700 font-bold">{currentSize.perLiter}</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {product.sizes.map((s, idx) => (
              <button
                key={s.size}
                onClick={() => selectProductSize(product.id, idx)}
                className={`px-2.5 py-1 text-[11px] rounded-sm transition-all cursor-pointer ${
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

      {/* Price & Add to Cart CTA */}
      <div className="pt-3 border-t border-zinc-100 mt-auto">
        <div className="flex items-baseline justify-between mb-2.5">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-extrabold text-zinc-950">₹{currentSize.price}</span>
            <span className="text-[11px] text-zinc-500 font-medium">/ {currentSize.size}</span>
          </div>
          <span className="text-[10px] text-emerald-700 font-semibold">Free Shipping ≥ ₹799</span>
        </div>

        <button
          onClick={handleAdd}
          className={`w-full font-bold text-xs py-2.5 rounded-sm shadow-xs transition-all transform hover:-translate-y-0.5 cursor-pointer text-center flex items-center justify-center gap-1.5 ${
            justAdded
              ? "bg-emerald-600 text-white"
              : "bg-black hover:bg-zinc-800 text-white"
          }`}
        >
          {justAdded ? (
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" /> Added Fresh to Cart
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5">
              Add Fresh To Cart <Plus className="w-3.5 h-3.5" />
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

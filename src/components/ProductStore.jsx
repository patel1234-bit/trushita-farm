import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { PRODUCTS } from "../data/catalog.js";
import { useTrushitaStore } from "../lib/store.js";
import ProductCard from "./ProductCard.jsx";

export default function ProductStore({ featuredOnly = false }) {
  const store = useTrushitaStore();
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  useEffect(() => {
    if (featuredOnly) return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("focus") === "search") {
      const inp = document.getElementById("product-search-input");
      if (inp) setTimeout(() => inp.focus(), 200);
    }
  }, [featuredOnly]);

  if (featuredOnly) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PRODUCTS.filter((p) => p.featured).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }

  let filtered = category === "all" ? [...PRODUCTS] : PRODUCTS.filter((p) => p.category === category);

  if (query.trim() !== "") {
    const q = query.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.hindiName.toLowerCase().includes(q) ||
        p.shortDesc.toLowerCase().includes(q)
    );
  }

  if (sortBy === "price-asc") {
    filtered.sort(
      (a, b) =>
        a.sizes[store.selectedSizes[a.id] ?? 0].price -
        b.sizes[store.selectedSizes[b.id] ?? 0].price
    );
  } else if (sortBy === "price-desc") {
    filtered.sort(
      (a, b) =>
        b.sizes[store.selectedSizes[b.id] ?? 0].price -
        a.sizes[store.selectedSizes[a.id] ?? 0].price
    );
  } else if (sortBy === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  const tabs = [
    { id: "all", label: "All Oils (8)" },
    { id: "cooking", label: "Daily Cooking (3)" },
    { id: "wellness", label: "Ayurvedic & Wellness (4)" },
    { id: "bundles", label: "Family Combo (1)" }
  ];

  return (
    <div>
      {/* Search & Sort Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex flex-wrap gap-1.5">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setCategory(t.id)}
              className={`px-3.5 py-1.5 rounded-sm text-xs transition-all ${
                category === t.id
                  ? "font-bold bg-black text-white shadow-xs"
                  : "font-medium bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2.5 items-center">
          <div className="w-full sm:w-64 relative">
            <input
              type="text"
              id="product-search-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search groundnut, mustard, sesame..."
              className="w-full px-3.5 py-2 pl-9 text-xs rounded-sm border border-zinc-300 focus:outline-hidden focus:ring-1 focus:ring-emerald-600 bg-white"
            />
            <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-2.5" />
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 text-xs font-semibold rounded-sm border border-zinc-300 bg-white text-zinc-800 focus:outline-hidden focus:ring-1 focus:ring-emerald-600"
          >
            <option value="featured">Sort: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Customer Rated</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      {filtered.length === 0 ? (
        <div className="py-16 text-center bg-zinc-50 rounded-sm border border-zinc-200 p-8">
          <Search className="w-8 h-8 text-zinc-400 mx-auto mb-2" />
          <h4 className="text-base font-bold text-zinc-900">No matching oils found</h4>
          <p className="text-xs text-zinc-500 mt-1">
            Try searching for &quot;groundnut&quot;, &quot;mustard&quot;, &quot;sesame&quot; or clear your filter.
          </p>
          <button
            onClick={() => {
              setQuery("");
              setCategory("all");
            }}
            className="mt-4 px-4 py-2 bg-black text-white text-xs font-bold rounded-sm"
          >
            Reset Filter
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

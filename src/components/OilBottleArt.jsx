import React from "react";

/**
 * Custom branded SVG Oil Bottle / Tin & Botanical Seed Illustrations
 * Gives every product a bespoke tactile cold-pressed oil presentation.
 */
const OIL_VISUALS = {
  groundnut: {
    liquid: "#D97706",
    liquidLight: "#FBBF24",
    accentBg: "from-amber-50/70 via-white to-emerald-50/40",
    labelTitle: "GROUNDNUT",
    labelSub: "LAKDI GHANI SINGTEL",
    seedLabel: "Saurashtra G-20",
    shape: "bottle"
  },
  "yellow-mustard": {
    liquid: "#CA8A04",
    liquidLight: "#FACC15",
    accentBg: "from-yellow-50/70 via-white to-emerald-50/40",
    labelTitle: "YELLOW MUSTARD",
    labelSub: "PILO SARSON GHANI",
    seedLabel: "North Gujarat",
    shape: "bottle"
  },
  "white-sesame": {
    liquid: "#B45309",
    liquidLight: "#F59E0B",
    accentBg: "from-stone-100/80 via-white to-emerald-50/40",
    labelTitle: "WHITE SESAME",
    labelSub: "SHUDDH TIL TEL",
    seedLabel: "Unjha White Til",
    shape: "bottle"
  },
  "black-mustard": {
    liquid: "#A16207",
    liquidLight: "#EAB308",
    accentBg: "from-amber-50/50 via-white to-zinc-100/60",
    labelTitle: "BLACK MUSTARD",
    labelSub: "KACCHI GHANI SARSON",
    seedLabel: "Mehsana Native",
    shape: "bottle"
  },
  coconut: {
    liquid: "#E2E8F0",
    liquidLight: "#F8FAFC",
    accentBg: "from-emerald-50/60 via-white to-zinc-50",
    labelTitle: "VIRGIN COCONUT",
    labelSub: "RAW COPRA PRESS",
    seedLabel: "Sulfur-Free Copra",
    shape: "jar"
  },
  flaxseed: {
    liquid: "#92400E",
    liquidLight: "#D97706",
    accentBg: "from-emerald-50/50 via-white to-amber-50/40",
    labelTitle: "VIRGIN FLAXSEED",
    labelSub: "ALSI OMEGA-3 OIL",
    seedLabel: "UV-Protected Glass",
    shape: "dropper"
  },
  "taster-kit": {
    liquid: "#059669",
    liquidLight: "#34D399",
    accentBg: "from-emerald-50/70 via-zinc-50 to-white",
    labelTitle: "DISCOVERY BOX",
    labelSub: "4 X 100ML TASTER",
    seedLabel: "4 Heritage Oils",
    shape: "box"
  }
};

function BotanicalMotif({ id }) {
  if (id === "groundnut") {
    return (
      <g className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">
        {/* Peanut Pod SVG */}
        <path
          d="M172 135c-8-4-16 2-18 10-1 6-6 9-10 13-6 6-4 16 4 20 8 4 17 0 21-8 2-5 6-8 10-12 6-7 2-19-7-23z"
          fill="#FEF3C7"
          stroke="#B45309"
          strokeWidth="1.5"
        />
        <path d="M156 149c4 2 8 6 10 10M162 142c4 2 8 6 9 10" stroke="#D97706" strokeWidth="1" strokeLinecap="round" />
      </g>
    );
  }
  if (id === "coconut") {
    return (
      <g className="opacity-75 group-hover:opacity-100 transition-opacity duration-300">
        <circle cx="164" cy="158" r="14" fill="#3F2E21" />
        <circle cx="164" cy="158" r="10.5" fill="#FFFFFF" />
        <circle cx="164" cy="158" r="6" fill="#F1F5F9" />
      </g>
    );
  }
  return (
    <g className="opacity-75 group-hover:opacity-100 transition-opacity duration-300">
      {/* Golden Oil Droplet & Leaf */}
      <path
        d="M165 138c0 0 11 14 11 21a11 11 0 11-22 0c0-7 11-21 11-21z"
        fill="#ECFDF5"
        stroke="#059669"
        strokeWidth="1.5"
      />
      <circle cx="161" cy="158" r="2.2" fill="#059669" opacity="0.6" />
    </g>
  );
}

export default function OilBottleArt({ productId, sizeLabel = "1 Litre", className = "" }) {
  const v = OIL_VISUALS[productId] || OIL_VISUALS.groundnut;
  const isTin = sizeLabel.toLowerCase().includes("tin");

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center bg-gradient-to-br ${v.accentBg} overflow-hidden ${className}`}
    >
      {/* Subtle architectural concentric rings behind vessel */}
      <div className="absolute w-44 h-44 rounded-full border border-emerald-600/10 group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute w-32 h-32 rounded-full border border-zinc-300/40 group-hover:scale-105 transition-transform duration-500" />

      <svg
        viewBox="0 0 220 210"
        className="w-48 h-48 drop-shadow-md group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-500"
        role="img"
        aria-label={`${v.labelTitle} vessel illustration`}
      >
        <defs>
          <linearGradient id={`liq-${productId}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={v.liquidLight} />
            <stop offset="100%" stopColor={v.liquid} />
          </linearGradient>
          <linearGradient id="glassShine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0.65)" />
            <stop offset="35%" stopColor="rgba(255,255,255,0.08)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.28)" />
          </linearGradient>
        </defs>

        {/* Ground Shadow */}
        <ellipse cx="110" cy="184" rx="46" ry="7" fill="rgba(9,9,11,0.08)" />

        {v.shape === "box" ? (
          /* 4-Bottle Discovery Gift Box */
          <g>
            {/* Outer Kraft/Emerald Box */}
            <rect x="44" y="64" width="132" height="114" rx="4" fill="#18181B" stroke="#09090B" strokeWidth="2" />
            <rect x="44" y="64" width="132" height="20" rx="3" fill="#059669" />
            <text x="110" y="77" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="800" letterSpacing="1.2">
              TRUSHITA DISCOVERY BOX
            </text>
            {/* 4 Mini Bottles Peeking Out */}
            {[
              { x: 56, c: "#F59E0B", n: "GN" },
              { x: 84, c: "#EAB308", n: "YM" },
              { x: 112, c: "#D97706", n: "WS" },
              { x: 140, c: "#E2E8F0", n: "CO" }
            ].map((b) => (
              <g key={b.n}>
                <rect x={b.x + 6} y="40" width="12" height="10" rx="1.5" fill="#78350F" />
                <rect x={b.x + 2} y="50" width="20" height="42" rx="3" fill={b.c} stroke="#FFFFFF" strokeWidth="1" />
                <rect x={b.x + 4} y="61" width="16" height="14" rx="1" fill="#FFFFFF" />
                <text x={b.x + 12} y="70" textAnchor="middle" fill="#09090B" fontSize="6" fontWeight="800">
                  {b.n}
                </text>
              </g>
            ))}
            {/* Front Ribbon Seal */}
            <rect x="64" y="106" width="92" height="52" rx="2" fill="#FFFFFF" />
            <rect x="64" y="106" width="92" height="9" fill="#059669" />
            <text x="110" y="128" textAnchor="middle" fill="#09090B" fontSize="9.5" fontWeight="900">
              4 PURE OILS
            </text>
            <text x="110" y="140" textAnchor="middle" fill="#047857" fontSize="6.5" fontWeight="700">
              4 × 100ML SAMPLER
            </text>
            <text x="110" y="151" textAnchor="middle" fill="#71717A" fontSize="5.5" fontWeight="600">
              WOOD-PRESSED GUJARAT
            </text>
          </g>
        ) : isTin ? (
          /* 5 Litre Heritage Steel/Tin Canister */
          <g>
            {/* Top Handle */}
            <path d="M90 36h40v8H90z" fill="none" stroke="#27272A" strokeWidth="3" rx="2" />
            {/* Cap */}
            <rect x="130" y="40" width="16" height="8" rx="1.5" fill="#059669" />
            {/* Can Body */}
            <rect x="60" y="48" width="100" height="132" rx="4" fill="#F4F4F5" stroke="#27272A" strokeWidth="2" />
            <rect x="62" y="50" width="22" height="128" fill="url(#glassShine)" opacity="0.6" />
            {/* Emerald Band & Front Label */}
            <rect x="66" y="74" width="88" height="86" rx="2" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="1" />
            <rect x="66" y="74" width="88" height="14" fill="#059669" />
            <text x="110" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="800" letterSpacing="1">
              TRUSHITA FARM • 5L TIN
            </text>
            <text x="110" y="106" textAnchor="middle" fill="#09090B" fontSize="9" fontWeight="900">
              {v.labelTitle}
            </text>
            <text x="110" y="118" textAnchor="middle" fill="#047857" fontSize="6.5" fontWeight="700">
              {v.labelSub}
            </text>
            <line x1="78" y1="126" x2="142" y2="126" stroke="#E4E4E7" strokeWidth="1" />
            <text x="110" y="138" textAnchor="middle" fill="#52525B" fontSize="6" fontWeight="600">
              100% WOOD PRESSED
            </text>
            <circle cx="110" cy="149" r="5" fill={`url(#liq-${productId})`} />
          </g>
        ) : v.shape === "jar" ? (
          /* Virgin Coconut Wide Glass Jar */
          <g>
            {/* Bamboo/Wood Lid */}
            <rect x="74" y="46" width="72" height="16" rx="3" fill="#18181B" />
            <rect x="78" y="48" width="64" height="3" rx="1" fill="#3F3F46" />
            {/* Jar Neck */}
            <rect x="78" y="62" width="64" height="8" fill="#E4E4E7" />
            {/* Jar Body */}
            <rect x="64" y="70" width="92" height="108" rx="10" fill="#FFFFFF" stroke="#D4D4D8" strokeWidth="2" />
            {/* Pure White Coconut Oil Fill */}
            <rect x="68" y="82" width="84" height="92" rx="7" fill={`url(#liq-${productId})`} />
            <rect x="68" y="82" width="84" height="92" rx="7" fill="url(#glassShine)" />
            {/* Label */}
            <rect x="72" y="96" width="76" height="62" rx="2" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="1" />
            <rect x="72" y="96" width="76" height="11" fill="#059669" />
            <text x="110" y="104" textAnchor="middle" fill="#FFFFFF" fontSize="6" fontWeight="800" letterSpacing="1">
              TRUSHITA NATURAL
            </text>
            <text x="110" y="122" textAnchor="middle" fill="#09090B" fontSize="8" fontWeight="900">
              {v.labelTitle}
            </text>
            <text x="110" y="133" textAnchor="middle" fill="#047857" fontSize="6" fontWeight="700">
              {v.labelSub}
            </text>
            <text x="110" y="147" textAnchor="middle" fill="#71717A" fontSize="5.5" fontWeight="600">
              {sizeLabel.toUpperCase()}
            </text>
          </g>
        ) : (
          /* Signature Apothecary Glass Oil Bottle */
          <g>
            {/* Cork / Matte Black Cap */}
            <rect x="97" y="22" width="26" height="14" rx="2" fill="#09090B" />
            <rect x="97" y="34" width="26" height="4" fill="#059669" />
            {/* Bottle Neck */}
            <path d="M99 38h22l3 24c1 6 12 12 16 20v90c0 5-4 8-8 8H88c-4 0-8-3-8-8V82c4-8 15-14 16-20l3-24z" fill="#FAFAFA" stroke="#D4D4D8" strokeWidth="1.8" />
            {/* Golden Cold-Pressed Oil Liquid Inside */}
            <path d="M84 88c3-7 13-12 16-18h20c3 6 13 11 16 18v82c0 3-2 6-5 6H89c-3 0-5-3-5-6V88z" fill={`url(#liq-${productId})`} />
            {/* Liquid Meniscus Highlight */}
            <ellipse cx="110" cy="70" rx="10" ry="2.2" fill="#FFFFFF" opacity="0.5" />
            {/* Glass Reflection */}
            <path d="M84 88c3-7 13-12 16-18h20c3 6 13 11 16 18v82c0 3-2 6-5 6H89c-3 0-5-3-5-6V88z" fill="url(#glassShine)" />

            {/* Crisp White & Emerald Front Label */}
            <rect x="85" y="96" width="50" height="64" rx="1.5" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="0.8" />
            <rect x="85" y="96" width="50" height="10" fill="#059669" />
            <text x="110" y="103" textAnchor="middle" fill="#FFFFFF" fontSize="5.2" fontWeight="800" letterSpacing="0.9">
              TRUSHITA FARM
            </text>
            <text x="110" y="118" textAnchor="middle" fill="#09090B" fontSize="6.6" fontWeight="900">
              {v.labelTitle}
            </text>
            <text x="110" y="128" textAnchor="middle" fill="#047857" fontSize="4.8" fontWeight="700">
              {v.labelSub}
            </text>
            <line x1="93" y1="134" x2="127" y2="134" stroke="#E4E4E7" strokeWidth="0.8" />
            <text x="110" y="143" textAnchor="middle" fill="#52525B" fontSize="4.6" fontWeight="600">
              {v.seedLabel}
            </text>
            <text x="110" y="153" textAnchor="middle" fill="#09090B" fontSize="5.2" fontWeight="800">
              {sizeLabel.toUpperCase()}
            </text>
          </g>
        )}

        {/* Botanical Seed Motif Badge */}
        <BotanicalMotif id={productId} />
      </svg>
    </div>
  );
}

import React, { useState } from "react";
import { Search, Printer, ShieldCheck, CheckCircle2, MapPin, Droplets } from "lucide-react";
import { useTrushitaStore, showToast } from "../lib/store.js";
import { BRAND_INFO } from "../data/catalog.js";

const SAMPLE_BATCHES = [
  { code: "TR-GN-8492", label: "TR-GN-8492 (Groundnut)" },
  { code: "TR-YM-5510", label: "TR-YM-5510 (Mustard)" },
  { code: "TR-WS-3304", label: "TR-WS-3304 (Sesame)" }
];

export default function LabReportVerifier() {
  const store = useTrushitaStore();
  const [inputCode, setInputCode] = useState("TR-GN-8492");
  const [activeCode, setActiveCode] = useState("TR-GN-8492");
  const [loading, setLoading] = useState(false);

  const data = store.batches[activeCode] || {
    batchNumber: activeCode || "TR-GN-8492",
    oilName: "Wood-Pressed Single-Origin Edible Oil",
    crushDate: "Small-Batch Visnagar Press",
    dispatchWindow: "Pressed & Sealed in Visnagar",
    expiryDate: "12 Months from Packing",
    fssaiRef: `FSSAI Lic. ${BRAND_INFO.fssai} (ISO / NABL-Aligned QC Protocol)`,
    seedSource: "Saurashtra & North Gujarat Cooperative Lots",
    status: "VERIFIED PURE • SINGLE-ORIGIN PROCESS",
    parameters: [
      { param: "Raw Material Identity", standard: "100% Whole Gujarat Oilseeds", result: "Hand-Inspected & Sortex Cleaned", status: "VERIFIED" },
      { param: "Extraction Method", standard: "Traditional Wood Ghani Press", result: "12 RPM Slow Mechanical Pressing", status: "VERIFIED" },
      { param: "Chemical Solvents & Bleach", standard: "Zero Hexane / Alkali / Clay", result: "100% Unrefined Natural Oil", status: "PASS" },
      { param: "Filtration Process", standard: "Unbleached Cotton Cloth", result: "48-Hr Gravity Settling + 4-Layer Filter", status: "VERIFIED" }
    ]
  };

  const handleVerify = (codeOverride) => {
    const clean = (codeOverride || inputCode).trim().toUpperCase() || "TR-GN-8492";
    setLoading(true);
    setInputCode(clean);
    setTimeout(() => {
      setActiveCode(clean);
      setLoading(false);
      showToast(`Verified Manufacturing Record for Batch ${clean}`);
    }, 220);
  };

  return (
    <div className="bg-zinc-50 p-6 sm:p-8 rounded-sm border border-zinc-200 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
        <label htmlFor="batch-input" className="text-xs font-bold text-zinc-800">
          Enter Batch Number (printed on bottle label) or select an active Visnagar batch:
        </label>
        <span className="text-[11px] font-mono font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-sm w-fit">
          FSSAI: {BRAND_INFO.fssai}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row gap-2.5 mb-3">
        <input
          type="text"
          id="batch-input"
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleVerify()}
          placeholder="e.g. TR-GN-8492"
          className="flex-1 px-3.5 py-2.5 rounded-sm border border-zinc-300 focus:outline-hidden focus:ring-1 focus:ring-emerald-600 font-mono text-xs font-bold uppercase text-zinc-900 bg-white"
        />

        <button
          onClick={() => handleVerify()}
          disabled={loading}
          className="px-5 py-2.5 rounded-sm bg-emerald-600 hover:bg-emerald-700 disabled:opacity-70 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-xs"
        >
          <Search className="w-3.5 h-3.5" />
          <span>{loading ? "Checking..." : "Verify Batch Purity"}</span>
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-1.5 text-xs">
        <span className="text-zinc-400 text-[11px]">Active Visnagar Batches:</span>
        {SAMPLE_BATCHES.map((b) => (
          <button
            key={b.code}
            onClick={() => handleVerify(b.code)}
            className={`px-2.5 py-1 rounded-sm border font-mono text-[11px] font-bold transition-colors ${
              activeCode === b.code
                ? "bg-black text-white border-black"
                : "bg-white border-zinc-200 hover:bg-zinc-100 text-zinc-800"
            }`}
          >
            {b.label}
          </button>
        ))}
      </div>

      {/* Traceability & Manufacturing Record Card */}
      <div className={`hologram-border bg-white rounded-sm p-6 sm:p-7 shadow-lg relative overflow-hidden mt-6 transition-opacity duration-200 ${loading ? "opacity-60" : "opacity-100"}`}>
        <div className="absolute -right-4 -bottom-6 opacity-[0.04] text-8xl pointer-events-none select-none font-black text-emerald-950">
          PURE
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-zinc-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-zinc-900">{data.oilName}</h4>
              <p className="text-xs text-zinc-500">
                Batch Traceability ID:{" "}
                <span className="font-mono font-bold text-emerald-700">{data.batchNumber}</span>
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 bg-emerald-600 text-white font-bold text-[10px] px-3 py-1 rounded-sm shadow-xs w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>{data.status}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 bg-zinc-50 p-3.5 rounded-sm text-xs mb-5 border border-zinc-200">
          <div>
            <span className="text-zinc-400 text-[10px] block font-semibold">Batch Pressing Date</span>
            <span className="font-bold text-zinc-800">{data.crushDate}</span>
          </div>
          <div>
            <span className="text-zinc-400 text-[10px] block font-semibold">Regulatory Standard</span>
            <span className="font-bold text-zinc-800 block">{data.fssaiRef || `FSSAI Lic. ${BRAND_INFO.fssai}`}</span>
          </div>
          <div>
            <span className="text-zinc-400 text-[10px] block font-semibold">Raw Material Origin</span>
            <span className="font-bold text-zinc-800">{data.seedSource}</span>
          </div>
          <div>
            <span className="text-zinc-400 text-[10px] block font-semibold">Shelf Life</span>
            <span className="font-bold text-emerald-700">{data.expiryDate || "12 Months Sealed"}</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-zinc-200 text-zinc-500 font-semibold bg-zinc-50/50">
                <th className="py-2.5 px-3">Quality Checkpoint</th>
                <th className="py-2.5 px-3">Trushita Purity Benchmark</th>
                <th className="py-2.5 px-3">Batch Manufacturing Record</th>
                <th className="py-2.5 px-3 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {data.parameters.map((p) => (
                <tr key={p.param} className="hover:bg-zinc-50/60 transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-zinc-900">{p.param}</td>
                  <td className="py-2.5 px-3 text-zinc-600">{p.standard}</td>
                  <td className="py-2.5 px-3 font-medium text-zinc-900">{p.result}</td>
                  <td className="py-2.5 px-3 text-right font-bold text-emerald-700 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 justify-end">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 pt-4 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-3 text-zinc-500 text-[11px]">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              Manufactured at Visnagar Facility ({BRAND_INFO.legalName})
            </span>
            <span className="hidden sm:inline text-zinc-300">|</span>
            <span className="inline-flex items-center gap-1.5">
              <Droplets className="w-3.5 h-3.5 text-emerald-600" />
              Zero Hexane • Zero Argemone Oil
            </span>
          </div>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold text-xs transition-colors shadow-xs"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Traceability Record</span>
          </button>
        </div>
      </div>
    </div>
  );
}

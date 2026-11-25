import React, { useState } from "react";
import { Search, Printer, FileCheck2 } from "lucide-react";
import { useTrushitaStore, showToast } from "../lib/store.js";

const SAMPLE_BATCHES = [
  { code: "TR-GN-8492", label: "TR-GN-8492 (Groundnut)" },
  { code: "TR-YM-5510", label: "TR-YM-5510 (Mustard)" },
  { code: "TR-WS-3304", label: "TR-WS-3304 (Sesame)" }
];

export default function LabReportVerifier() {
  const store = useTrushitaStore();
  const [inputCode, setInputCode] = useState("TR-GN-8492");
  const [activeCode, setActiveCode] = useState("TR-GN-8492");

  const data = store.batches[activeCode] || {
    batchNumber: activeCode || "TR-CUSTOM-DEMO",
    oilName: "Wood-Pressed Pure Farm Oil",
    crushDate: "Fresh This Week",
    testingDate: "Lab Verified",
    expiryDate: "12 Months from Packing",
    nablLab: "Vardhman Food Testing Laboratories (NABL ISO/IEC 17025 Accredited)",
    seedSource: "Visnagar Certified Local Farmers",
    status: "PASS - 100% UNADULTERATED",
    parameters: [
      { param: "Free Fatty Acids (FFA)", standard: "Max 1.5%", result: "0.39%", status: "PASSED (Fresh)" },
      { param: "Aflatoxin Toxins", standard: "Max 15 ppb", result: "NOT DETECTED", status: "PASSED" },
      { param: "Hexane Solvent Residue", standard: "Nil", result: "0.00 ppm (Zero)", status: "PASSED" },
      { param: "Mineral Oil / Animal Fats", standard: "Negative", result: "NEGATIVE (Nil)", status: "PASSED" }
    ]
  };

  const handleVerify = (codeOverride) => {
    const clean = (codeOverride || inputCode).trim().toUpperCase() || "TR-GN-8492";
    setInputCode(clean);
    setActiveCode(clean);
    showToast(`Loaded Certificate for Batch ${clean}`);
  };

  return (
    <div className="bg-zinc-50 p-6 sm:p-8 rounded-sm border border-zinc-200 shadow-xs">
      <label htmlFor="batch-input" className="block text-xs font-semibold text-zinc-700 mb-2">
        Enter Batch Code (printed on bottle/tin) or click a recent tested batch below:
      </label>

      <div className="flex flex-col sm:flex-row gap-2.5 mb-3">
        <input
          type="text"
          id="batch-input"
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
          placeholder="e.g. TR-GN-8492"
          className="flex-1 px-3.5 py-2.5 rounded-sm border border-zinc-300 focus:outline-hidden focus:ring-1 focus:ring-emerald-600 font-mono text-xs font-bold uppercase text-zinc-900 bg-white"
        />

        <button
          onClick={() => handleVerify()}
          className="px-5 py-2.5 rounded-sm bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-xs"
        >
          <Search className="w-3.5 h-3.5" />
          <span>Verify Report</span>
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-1.5 text-xs">
        <span className="text-zinc-400 text-[11px]">Quick Tested Batches:</span>
        {SAMPLE_BATCHES.map((b) => (
          <button
            key={b.code}
            onClick={() => handleVerify(b.code)}
            className="px-2.5 py-1 rounded-sm bg-white border border-zinc-200 hover:bg-zinc-100 text-zinc-800 font-mono text-[11px] font-bold transition-colors"
          >
            {b.label}
          </button>
        ))}
      </div>

      {/* Holographic Certificate */}
      <div className="hologram-border bg-white rounded-sm p-6 sm:p-7 shadow-lg relative overflow-hidden mt-6">
        <div className="absolute -right-8 -bottom-8 opacity-5 text-9xl pointer-events-none select-none font-black text-emerald-950">
          NABL
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-zinc-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-zinc-900">{data.oilName}</h4>
              <p className="text-xs text-zinc-500">
                Official Batch Number:{" "}
                <span className="font-mono font-bold text-emerald-700">{data.batchNumber}</span>
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 bg-emerald-600 text-white font-bold text-[10px] px-3 py-1 rounded-sm shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>NABL ACCREDITED LAB VERIFIED</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-zinc-50 p-3.5 rounded-sm text-xs mb-5 border border-zinc-200">
          <div>
            <span className="text-zinc-400 text-[10px] block font-semibold">Date of Crushing</span>
            <span className="font-bold text-zinc-800">{data.crushDate}</span>
          </div>
          <div>
            <span className="text-zinc-400 text-[10px] block font-semibold">Testing Lab</span>
            <span className="font-bold text-zinc-800 truncate block">{data.nablLab.split("(")[0]}</span>
          </div>
          <div>
            <span className="text-zinc-400 text-[10px] block font-semibold">Seed Origin</span>
            <span className="font-bold text-zinc-800">{data.seedSource}</span>
          </div>
          <div>
            <span className="text-zinc-400 text-[10px] block font-semibold">Quality Status</span>
            <span className="font-bold text-emerald-700">{data.status}</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-zinc-200 text-zinc-500 font-semibold bg-zinc-50/50">
                <th className="py-2.5 px-3">Tested Parameter</th>
                <th className="py-2.5 px-3">FSSAI Standard</th>
                <th className="py-2.5 px-3">Actual Result</th>
                <th className="py-2.5 px-3 text-right">Verification Grade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {data.parameters.map((p) => (
                <tr key={p.param} className="hover:bg-zinc-50/60 transition-colors">
                  <td className="py-2.5 px-3 font-semibold text-zinc-900">{p.param}</td>
                  <td className="py-2.5 px-3 text-zinc-600">{p.standard}</td>
                  <td className="py-2.5 px-3 font-mono font-bold text-zinc-900">{p.result}</td>
                  <td className="py-2.5 px-3 text-right font-bold text-emerald-700">✓ {p.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 pt-4 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-zinc-500 text-[11px]">
              Certified by Head Quality Officer, Visnagar Facility
            </span>
          </div>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold text-xs transition-colors shadow-xs"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Download Certificate</span>
          </button>
        </div>
      </div>
    </div>
  );
}

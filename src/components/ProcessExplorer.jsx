import React, { useState } from "react";
import { PROCESS_STEPS } from "../data/catalog.js";
import { withBase } from "../lib/paths.js";

const STEP_LABELS = [
  "01. Seed Sourcing",
  "02. Sun Drying",
  "03. Wood Ghani",
  "04. Sedimentation",
  "05. Cotton Filter"
];

export default function ProcessExplorer() {
  const [stepIndex, setStepIndex] = useState(2);
  const step = PROCESS_STEPS[stepIndex];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-wrap gap-1.5 mb-6">
        {STEP_LABELS.map((label, idx) => (
          <button
            key={label}
            onClick={() => setStepIndex(idx)}
            className={`flex-1 py-2.5 px-3 text-center rounded-sm text-xs transition-all ${
              idx === stepIndex
                ? "bg-black text-white font-bold shadow-xs"
                : "bg-zinc-100 text-zinc-700 font-medium hover:bg-zinc-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="bg-zinc-50 rounded-sm p-6 sm:p-8 border border-zinc-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-5 aspect-[4/3] rounded-sm overflow-hidden border border-zinc-200 bg-white">
          <img
            src={withBase(step.image)}
            alt={step.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:col-span-7">
          <div className="flex items-center justify-between mb-3 pb-3 border-b border-zinc-200">
            <span className="px-2.5 py-0.5 rounded-sm text-[10px] font-bold bg-black text-white">
              Stage 0{step.step} of 05
            </span>
            <div className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-sm">
              {step.methodTag}
            </div>
          </div>

          <h2 className="text-xl font-bold text-zinc-900 mb-1">{step.title}</h2>
          <p className="text-xs font-medium text-emerald-700 mb-3">{step.gujarati}</p>
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-5">{step.detail}</p>

          <div className="bg-white p-4 rounded-sm border border-zinc-200">
            <h3 className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Stage Highlights:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {step.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-xs text-zinc-700 font-medium">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

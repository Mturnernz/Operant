import React from 'react';
import { Terminal, Shield, ArrowRight, Database, Code2, AlertTriangle, Layers } from 'lucide-react';

export const SelfTaughtDifference: React.FC = () => {
  return (
    <section id="scope" className="py-16 md:py-20 border-b border-[#1F222A] bg-[#0E1015]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-[#6B768E] mb-2 uppercase tracking-wider">
            <span>[SECTION 01]</span>
            <span>//</span>
            <span>OPERATIONAL REALITY</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
            How I Work With Small & Mid-Sized Businesses
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9AA3B8] leading-relaxed">
            I am a self-taught practitioner. I learned software engineering by building tools that have to function in production without bureaucratic safety nets. Here is exactly what that means for your company.
          </p>
        </div>

        {/* 3 Clear Columns: The Contrast */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="p-6 bg-[#12141C] border border-[#202533] space-y-4">
            <div className="font-mono text-xs text-[#707B95] uppercase">Alternative 01</div>
            <h3 className="font-heading text-lg font-semibold text-white">Large Tech Agencies</h3>
            <ul className="space-y-2 text-xs text-[#8A95AC] font-mono leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-red-400">×</span>
                <span>$30k–$80k retainers to cover non-technical account managers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">×</span>
                <span>Work is handed off to junior subcontractors.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">×</span>
                <span>Months of scoping meetings before a single line of code runs.</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-[#12141C] border border-[#202533] space-y-4">
            <div className="font-mono text-xs text-[#707B95] uppercase">Alternative 02</div>
            <h3 className="font-heading text-lg font-semibold text-white">Brittle No-Code Zapier Stacks</h3>
            <ul className="space-y-2 text-xs text-[#8A95AC] font-mono leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-red-400">×</span>
                <span>Silent failures when webhook payloads or fields change.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">×</span>
                <span>No dedicated interface for staff to inspect raw transaction state.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">×</span>
                <span>Monthly per-task SaaS fees that compound uncontrollably.</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-[#141824] border border-[#343F58] space-y-4 relative">
            <div className="absolute top-4 right-4 font-mono text-[10px] px-2 py-0.5 bg-emerald-950 text-emerald-300 border border-emerald-800">
              OPERANT APPROACH
            </div>
            <div className="font-mono text-xs text-emerald-400 uppercase">This Studio</div>
            <h3 className="font-heading text-lg font-semibold text-white">Direct Builder Partnership</h3>
            <ul className="space-y-2 text-xs text-[#BAC3D6] font-mono leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Direct engineer contact: phone, Slack, and scheduled screen shares.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Custom code pipelines running on robust relational cloud databases.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Bespoke owner management app for 100% operational transparency.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 3 Explicit Steps to Delivery */}
        <div id="architecture" className="pt-8 border-t border-[#1C202A]">
          <div className="font-mono text-xs text-[#6B768E] mb-6 uppercase tracking-wider">
            [EXECUTION TIMELINE] // TYPICAL 3-PHASE ROLLOUT
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-[#111319] border border-[#1D212B]">
              <div className="font-mono text-xs text-[#525E77] mb-1">PHASE 01 // DAYS 1–5</div>
              <h4 className="font-heading text-base font-semibold text-white mb-2">Process Audit & Data Mapping</h4>
              <p className="text-xs text-[#8A95AC] leading-relaxed">
                I spend time with your dispatchers, admins, or technicians to document the exact inputs, error cases, and file types handled daily.
              </p>
            </div>

            <div className="p-5 bg-[#111319] border border-[#1D212B]">
              <div className="font-mono text-xs text-[#525E77] mb-1">PHASE 02 // DAYS 6–18</div>
              <h4 className="font-heading text-base font-semibold text-white mb-2">Pipeline & Management App Build</h4>
              <p className="text-xs text-[#8A95AC] leading-relaxed">
                I write the backend automations, configure LLM parsing for unstructured text/attachments, and deliver your dedicated internal web dashboard.
              </p>
            </div>

            <div className="p-5 bg-[#111319] border border-[#1D212B]">
              <div className="font-mono text-xs text-[#525E77] mb-1">PHASE 03 // ONGOING</div>
              <h4 className="font-heading text-base font-semibold text-white mb-2">Hiccup & Exception Support</h4>
              <p className="text-xs text-[#8A95AC] leading-relaxed">
                Edge cases are quarantined without halting operations. I resolve schema drift, tune prompt thresholds, and fix technical bugs directly.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

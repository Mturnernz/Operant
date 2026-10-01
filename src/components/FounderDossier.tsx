import React from 'react';
import { Shield, FileCheck, CheckCircle2, TrendingUp, Award, Building, UserCheck } from 'lucide-react';

export const FounderDossier: React.FC = () => {
  return (
    <section id="dossier" className="py-16 md:py-20 border-b border-[#1F222A] bg-[#0E1015]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-[#6B768E] mb-2 uppercase tracking-wider">
            <span>[DOSSIER 01]</span>
            <span>//</span>
            <span>THE PRACTITIONER PROFILE</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Built by Mike Turner: Government Investigator, Enterprise Ops Leader, Military Commander
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9AA4B8] leading-relaxed">
            Most software agencies employ account executives and junior developers who have never managed a real balance sheet or investigated an operational failure under intense pressure. My background combines high-stakes public sector investigation with enterprise-scale P&amp;L leadership.
          </p>
        </div>

        {/* 4 Career Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 font-mono">
          
          {/* Pillar 1: Government Investigations */}
          <div className="p-6 bg-[#12141C] border border-[#202534] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#6F7B95] uppercase">May 2026 – Present</span>
              <span className="text-[10px] px-2 py-0.5 bg-emerald-950 text-emerald-300 border border-emerald-800">
                ACTIVE SWORN OFFICER
              </span>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-white">Investigator — Criminal Investigations</h3>
              <div className="text-xs text-[#7F8B9F] mt-0.5">Government Law Enforcement &amp; Public Safety</div>
            </div>
            <p className="text-xs text-[#95A0B5] font-sans leading-relaxed">
              Investigating volume crime and disrupting illegal activity through covert/overt investigation, threat assessments, warrant writing, and structured prosecution file preparation for judicial scrutiny.
            </p>
            <div className="p-3 bg-[#0B0C10] border border-[#1B1E28] text-xs text-[#8A96AC] space-y-1">
              <div className="text-[#64708A] text-[10px] uppercase font-mono">Operational Advantage for SMBs:</div>
              <div className="text-white text-[11px] font-sans">
                Evidence assessment, zero tolerance for unverified data assumptions, and forensic audit logging that withstands rigorous third-party examination.
              </div>
            </div>
          </div>

          {/* Pillar 2: Major Fuel Supplier */}
          <div className="p-6 bg-[#12141C] border border-[#202534] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#6F7B95] uppercase">Enterprise Retail Ops</span>
              <span className="text-[10px] px-2 py-0.5 bg-[#1B2130] text-[#93A6CC] border border-[#2B354C]">
                ENTERPRISE P&amp;L
              </span>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-white">Retail Operations Manager</h3>
              <div className="text-xs text-[#7F8B9F] mt-0.5">Major National Fuel Supplier (80 Unmanned Retail Sites)</div>
            </div>
            <p className="text-xs text-[#95A0B5] font-sans leading-relaxed">
              Accountable for approximately 90% of the company's national P&amp;L across 80 unmanned, automated retail sites. Delivered nationwide digital receipting and engineered Power BI automated benchmarking for proactive pricing intervention.
            </p>
            <div className="p-3 bg-[#0B0C10] border border-[#1B1E28] text-xs text-[#8A96AC] space-y-1">
              <div className="text-[#64708A] text-[10px] uppercase font-mono">Operational Advantage for SMBs:</div>
              <div className="text-white text-[11px] font-sans">
                Designing distributed systems where unmanned physical infrastructure must function continuously without manual on-site intervention.
              </div>
            </div>
          </div>

          {/* Pillar 3: Major Energy Gentailer */}
          <div className="p-6 bg-[#12141C] border border-[#202534] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#6F7B95] uppercase">Enterprise Tech Ops</span>
              <span className="text-[10px] px-2 py-0.5 bg-[#1B2130] text-[#93A6CC] border border-[#2B354C]">
                ROBOTIC AUTOMATION
              </span>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-white">Operations Manager — Prepay Division</h3>
              <div className="text-xs text-[#7F8B9F] mt-0.5">Major National Energy Gentailer</div>
            </div>
            <p className="text-xs text-[#95A0B5] font-sans leading-relaxed">
              Led back-office redesign through process mapping and robotic process automation (RPA), reducing team headcount from 7 to 5 FTE while maintaining SLAs. Delivered customer mobile application adopted by ~75% of customer base.
            </p>
            <div className="p-3 bg-[#0B0C10] border border-[#1B1E28] text-xs text-[#8A96AC] space-y-1">
              <div className="text-[#64708A] text-[10px] uppercase font-mono">Operational Advantage for SMBs:</div>
              <div className="text-white text-[11px] font-sans">
                Practical, measured labor reduction through automation and Salesforce onboarding journey reporting that materially reduces credit exposure.
              </div>
            </div>
          </div>

          {/* Pillar 4: Global Exporter & Military Reserves */}
          <div className="p-6 bg-[#12141C] border border-[#202534] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#6F7B95] uppercase">Global Supply &amp; Command</span>
              <span className="text-[10px] px-2 py-0.5 bg-[#1B2130] text-[#93A6CC] border border-[#2B354C]">
                EXPORT &amp; CRISIS OPS
              </span>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-white">Sales Operations Manager &amp; Infantry Captain</h3>
              <div className="text-xs text-[#7F8B9F] mt-0.5">Global Food &amp; Dairy Exporter · Military Reserves (10 Yrs Command)</div>
            </div>
            <p className="text-xs text-[#95A0B5] font-sans leading-relaxed">
              Managed forecast-to-invoice global export supply chains across key Quick Service Restaurant accounts. 10 years commanding 150-person military reserve units, executing discipline, contingency planning, and emergency operations.
            </p>
            <div className="p-3 bg-[#0B0C10] border border-[#1B1E28] text-xs text-[#8A96AC] space-y-1">
              <div className="text-[#64708A] text-[10px] uppercase font-mono">Academic Foundation:</div>
              <div className="text-white text-[11px] font-sans">
                Bachelor of Commerce (University of Auckland) in Operations &amp; Supply Chain Management + Information Systems.
              </div>
            </div>
          </div>

        </div>

        {/* 3 Explicit Principles of Working with Mike */}
        <div id="architecture" className="pt-8 border-t border-[#1C202A] font-mono">
          <div className="text-xs text-[#6B768E] mb-6 uppercase tracking-wider">
            [CORE PRINCIPLES] // HOW OPERANT BY MIKE ENGAGES
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-[#11131A] border border-[#1D222E]">
              <div className="text-xs text-[#525E77] mb-1">01 // FORENSIC AUDIT</div>
              <h4 className="font-heading text-base font-semibold text-white mb-2">No Soft Assumptions</h4>
              <p className="text-xs text-[#8A95AC] font-sans leading-relaxed">
                We inspect the actual raw email payloads, messy PDFs, and vendor spreadsheets. We build around how your business actually behaves in the wild.
              </p>
            </div>

            <div className="p-5 bg-[#11131A] border border-[#1D222E]">
              <div className="text-xs text-[#525E77] mb-1">02 // BESPOKE OPERATING DASHBOARD</div>
              <h4 className="font-heading text-base font-semibold text-white mb-2">Total Visibility &amp; Control</h4>
              <p className="text-xs text-[#8A95AC] font-sans leading-relaxed">
                Your team receives a tailored internal CRM that logs every automated decision, flags anomalies, and allows instant manual overrides.
              </p>
            </div>

            <div className="p-5 bg-[#11131A] border border-[#1D222E]">
              <div className="text-xs text-[#525E77] mb-1">03 // ACTIVE HICCUP TRIAGE</div>
              <h4 className="font-heading text-base font-semibold text-white mb-2">Direct Builder On-Call</h4>
              <p className="text-xs text-[#8A95AC] font-sans leading-relaxed">
                When format drift or third-party API changes occur, exceptions are quarantined safely while I triage and resolve the root cause under SLA.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

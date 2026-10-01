import React, { useState, useMemo } from 'react';
import { 
  Check, 
  ArrowRight, 
  RotateCcw, 
  Copy, 
  Clock, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  FileText,
  AlertCircle
} from 'lucide-react';
import { AuditRecommendation } from '../types';

interface AuditToolProps {
  onApplyToBooking?: (summary: string) => void;
}

const INDUSTRIES = [
  { id: 'field-services', label: 'Field Services & Trades (HVAC, Electrical, Plumbing)' },
  { id: 'professional', label: 'Professional Services (Legal, Accounting, Consulting)' },
  { id: 'ecommerce', label: 'E-Commerce, Wholesale & Distribution' },
  { id: 'logistics', label: 'Logistics, Freight & Fleet Dispatch' },
  { id: 'property', label: 'Property Management & Real Estate' },
  { id: 'health', label: 'Clinics & Specialized Healthcare Practices' },
];

const BOTTLENECKS = [
  { id: 'lead-triage', title: 'Slow Lead Response & Quote Generation', desc: 'Inbound requests sit in inboxes for hours before manual review and pricing.' },
  { id: 'invoice-ocr', title: 'Document & Invoice Processing Friction', desc: 'Staff manually typing line items from vendor PDFs into accounting or inventory.' },
  { id: 'cross-tool', title: 'Double-Entry Between Disconnected Tools', desc: 'Re-keying customer information between Gmail, CRM, spreadsheets, and dispatch.' },
  { id: 'customer-status', title: 'Repetitive Status Inquiries & Check-ins', desc: 'Staff answering "where is my order/job?" calls instead of high-value tasks.' },
  { id: 'dispatch-routing', title: 'Manual Job Assignment & Technician Dispatch', desc: 'Spreadsheet-based scheduling with zero real-time client notifications.' },
];

const TOOL_OPTIONS = [
  'Google Sheets / Excel',
  'QuickBooks / Xero',
  'Gmail / Outlook Shared Inboxes',
  'HubSpot / Pipedrive',
  'Industry-Specific Legacy Software',
  'Slack / Teams',
];

export const AuditTool: React.FC<AuditToolProps> = ({ onApplyToBooking }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('field-services');
  const [selectedBottlenecks, setSelectedBottlenecks] = useState<string[]>(['lead-triage', 'cross-tool']);
  const [teamSize, setTeamSize] = useState<number>(6);
  const [hoursPerDay, setHoursPerDay] = useState<number>(3.5);
  const [hourlyWage, setHourlyWage] = useState<number>(35);
  const [selectedTools, setSelectedTools] = useState<string[]>(['Google Sheets / Excel', 'QuickBooks / Xero', 'Gmail / Outlook Shared Inboxes']);
  const [copied, setCopied] = useState<boolean>(false);

  const toggleBottleneck = (id: string) => {
    if (selectedBottlenecks.includes(id)) {
      if (selectedBottlenecks.length > 1) {
        setSelectedBottlenecks(selectedBottlenecks.filter((item) => item !== id));
      }
    } else {
      setSelectedBottlenecks([...selectedBottlenecks, id]);
    }
  };

  const toggleTool = (tool: string) => {
    if (selectedTools.includes(tool)) {
      setSelectedTools(selectedTools.filter((t) => t !== tool));
    } else {
      setSelectedTools([...selectedTools, tool]);
    }
  };

  // Generate dynamic custom recommendation
  const recommendation: AuditRecommendation = useMemo(() => {
    const weeklyHoursWasted = teamSize * hoursPerDay * 5;
    // Estimated automatable percentage between 60% and 75%
    const automatableRatio = 0.70;
    const weeklySaved = Math.round(weeklyHoursWasted * automatableRatio);
    const annualSavings = Math.round(weeklySaved * hourlyWage * 50);

    const indName = INDUSTRIES.find((i) => i.id === selectedIndustry)?.label.split('(')[0].trim() || 'SMB';

    const prioritySteps = [];
    const customAppsNeeded = [];

    if (selectedBottlenecks.includes('lead-triage')) {
      prioritySteps.push({
        title: 'Phase 1: Zero-Latency Lead Extraction & Smart Quotation Hook',
        description: 'Auto-ingest incoming customer requests via webhook/email, parse intent and technical specs with Gemini/Claude, draft dynamic line-item quotes ready for one-click owner approval.',
        timeframe: 'Weeks 1–2',
        impact: 'Transformative' as const,
      });
      customAppsNeeded.push({
        name: 'Lead Command Board & Auto-Quoter',
        purpose: 'Gives dispatchers a single-pane Kanban to review AI-parsed inquiries and send quotes in under 2 minutes.',
        replaces: 'Chaotic shared Gmail inbox & manual calculator spreadsheets',
      });
    }

    if (selectedBottlenecks.includes('invoice-ocr')) {
      prioritySteps.push({
        title: 'Phase 2: Intelligent Document Ingestion & Reconciliation Pipeline',
        description: 'Multi-modal document processor that automatically extracts vendor invoice line items, matches against purchase orders, and flags mismatches for human sign-off.',
        timeframe: 'Weeks 2–3',
        impact: 'High' as const,
      });
      customAppsNeeded.push({
        name: 'Vendor Invoice & Ledger Matcher',
        purpose: 'Validates line items and pushes verified receipts into accounting software without human data entry.',
        replaces: 'Manual PDF reading and dual-screen data entry into QuickBooks',
      });
    }

    if (selectedBottlenecks.includes('cross-tool')) {
      prioritySteps.push({
        title: 'Phase 3: Centralized Operations Syncer & Webhook Sentry',
        description: 'Bi-directional sync service connecting CRM, inventory, and accounting with custom exception logging so sync hiccups never go unnoticed.',
        timeframe: 'Weeks 3–4',
        impact: 'High' as const,
      });
      customAppsNeeded.push({
        name: 'Executive Process Health Console',
        purpose: 'Real-time overview of active automated data syncs, pending approvals, and instant triage alerts.',
        replaces: 'Multiple open browser tabs and end-of-week spreadsheet merges',
      });
    }

    // Default fallback priority if fewer selected
    if (prioritySteps.length === 0) {
      prioritySteps.push({
        title: 'Phase 1: Foundational Workflow Unification',
        description: 'Audit core bottlenecks, connect legacy databases via secure REST endpoints, and deploy first AI triage prototype.',
        timeframe: 'Weeks 1–2',
        impact: 'Quick Win' as const,
      });
    }

    return {
      score: Math.min(94, 68 + selectedBottlenecks.length * 6),
      readinessLabel: 'High Yield · Rapid Payback Profile',
      summary: `Your ${indName} operation has high potential for immediate labor reclamation. By eliminating manual re-entry across ${selectedTools.length} core tools and deploying purpose-built management screens, your team can redirect ~${weeklySaved} hours every week into client delivery and revenue growth.`,
      projectedHoursSavedWeekly: weeklySaved,
      annualValueEstimate: annualSavings,
      prioritySteps,
      customAppsNeeded,
    };
  }, [selectedIndustry, selectedBottlenecks, teamSize, hoursPerDay, hourlyWage, selectedTools]);

  const copyRoadmap = () => {
    const text = `=== OPERANT SMB AUTOMATION ROADMAP ===
Industry: ${INDUSTRIES.find((i) => i.id === selectedIndustry)?.label}
Team Size: ${teamSize} people
Estimated Weekly Time Reclaimable: ${recommendation.projectedHoursSavedWeekly} hrs/week
Projected Annual Value: $${recommendation.annualValueEstimate.toLocaleString()}

RECOMMENDED ACTION PLAN:
${recommendation.prioritySteps.map((s, idx) => `${idx + 1}. [${s.timeframe}] ${s.title}\n   ${s.description}`).join('\n')}

CUSTOM APPS TO BE DEPLOYED:
${recommendation.customAppsNeeded.map((a) => `- ${a.name}: ${a.purpose} (Replaces: ${a.replaces})`).join('\n')}
`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleApplyToBooking = () => {
    if (onApplyToBooking) {
      const summary = `${INDUSTRIES.find((i) => i.id === selectedIndustry)?.label} (${teamSize} staff). Bottlenecks: ${selectedBottlenecks.join(', ')}. Est ${recommendation.projectedHoursSavedWeekly} hrs/wk wasted.`;
      onApplyToBooking(summary);
    }
  };

  return (
    <section id="audit-tool" className="py-20 border-t border-[#EAE3D9] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#70665C] mb-3">
            <span>02. Interactive Diagnostic</span>
            <span aria-hidden="true">·</span>
            <span>Self-Service Evaluation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#171513] font-editorial leading-tight">
            Operational AI & Automation Diagnostic
          </h2>
          <p className="mt-3 text-[#5A5147] text-base leading-relaxed">
            Answer a few quick questions about your daily workflows. In 60 seconds, you’ll receive an actionable 
            deployment roadmap, projected labor savings, and the exact custom management tools we would build.
          </p>
        </div>

        {/* Step Indicator (Clean editorial style, no pills) */}
        <div className="flex items-center gap-6 border-b border-[#E3D9CD] pb-4 mb-8 text-xs font-semibold uppercase tracking-wider">
          <button
            onClick={() => setCurrentStep(1)}
            className={`transition-colors focus-visible:outline-none flex items-center gap-2 ${
              currentStep === 1 ? 'text-[#1A1613] border-b-2 border-[#1A1613] pb-4 -mb-[18px]' : 'text-[#82766A]'
            }`}
          >
            <span>01</span>
            <span>Industry & Profile</span>
          </button>
          <span className="text-[#C4B9AD]">/</span>
          <button
            onClick={() => setCurrentStep(2)}
            className={`transition-colors focus-visible:outline-none flex items-center gap-2 ${
              currentStep === 2 ? 'text-[#1A1613] border-b-2 border-[#1A1613] pb-4 -mb-[18px]' : 'text-[#82766A]'
            }`}
          >
            <span>02</span>
            <span>Bottlenecks & Stack</span>
          </button>
          <span className="text-[#C4B9AD]">/</span>
          <button
            onClick={() => setCurrentStep(3)}
            className={`transition-colors focus-visible:outline-none flex items-center gap-2 ${
              currentStep === 3 ? 'text-[#1A1613] border-b-2 border-[#1A1613] pb-4 -mb-[18px]' : 'text-[#82766A]'
            }`}
          >
            <span>03</span>
            <span>Strategic Blueprint</span>
          </button>
        </div>

        {/* STEP 1: Industry & Team Profile */}
        {currentStep === 1 && (
          <div className="bg-[#F6EFE6] border border-[#E3D8CC] p-6 sm:p-10 space-y-8 animate-fadeIn">
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-[#453E37] mb-3">
                Select Your Industry Sector
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {INDUSTRIES.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustry(ind.id)}
                    className={`text-left p-4 border transition-all text-xs font-medium focus-visible:outline-none ${
                      selectedIndustry === ind.id
                        ? 'bg-[#1D1917] text-[#FAF8F5] border-[#1D1917] shadow-sm'
                        : 'bg-[#FAF8F5] text-[#332D27] border-[#DDD3C7] hover:border-[#9B8F82]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{ind.label}</span>
                      {selectedIndustry === ind.id && <Check className="w-4 h-4 text-emerald-400" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#E3D8CC]">
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-[#453E37] mb-2">
                  Team Members in Ops / Admin
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="1"
                    max="35"
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full accent-[#1E1A17]"
                  />
                  <span className="text-sm font-bold text-[#1E1A17] w-12 text-right">
                    {teamSize} {teamSize === 1 ? 'person' : 'people'}
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-[#453E37] mb-2">
                  Avg Manual Hours Spent / Day
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="1"
                    max="7"
                    step="0.5"
                    value={hoursPerDay}
                    onChange={(e) => setHoursPerDay(Number(e.target.value))}
                    className="w-full accent-[#1E1A17]"
                  />
                  <span className="text-sm font-bold text-[#1E1A17] w-12 text-right">
                    {hoursPerDay} hrs
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-[#453E37] mb-2">
                  Blended Hourly Cost ($/hr)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="20"
                    max="100"
                    step="5"
                    value={hourlyWage}
                    onChange={(e) => setHourlyWage(Number(e.target.value))}
                    className="w-full accent-[#1E1A17]"
                  />
                  <span className="text-sm font-bold text-[#1E1A17] w-12 text-right">
                    ${hourlyWage}/hr
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                onClick={() => setCurrentStep(2)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1917] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold hover:bg-[#342F2A] transition-colors"
              >
                <span>Continue: Select Bottlenecks</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Bottlenecks & Software Stack */}
        {currentStep === 2 && (
          <div className="bg-[#F6EFE6] border border-[#E3D8CC] p-6 sm:p-10 space-y-8 animate-fadeIn">
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-xs uppercase tracking-wider font-bold text-[#453E37]">
                  Where Do Daily Operational Friction & Bottlenecks Occur?
                </label>
                <span className="text-xs text-[#736A60]">Select all that apply</span>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {BOTTLENECKS.map((b) => {
                  const isSelected = selectedBottlenecks.includes(b.id);
                  return (
                    <button
                      key={b.id}
                      onClick={() => toggleBottleneck(b.id)}
                      className={`text-left p-4 border transition-all text-xs focus-visible:outline-none ${
                        isSelected
                          ? 'bg-[#1D1917] text-[#FAF8F5] border-[#1D1917]'
                          : 'bg-[#FAF8F5] text-[#332D27] border-[#DDD3C7] hover:border-[#9B8F82]'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-sm">{b.title}</h4>
                          <p className={`mt-1 text-xs leading-relaxed ${isSelected ? 'text-[#D7CEC3]' : 'text-[#62594F]'}`}>
                            {b.desc}
                          </p>
                        </div>
                        <div className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          isSelected ? 'bg-emerald-600 border-emerald-500 text-white' : 'border-[#C5BCB1] bg-white'
                        }`}>
                          {isSelected && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Current Software Stack */}
            <div className="pt-4 border-t border-[#E3D8CC]">
              <label className="block text-xs uppercase tracking-wider font-bold text-[#453E37] mb-3">
                Current Software & Data Silos
              </label>
              <div className="flex flex-wrap gap-2">
                {TOOL_OPTIONS.map((tool) => {
                  const active = selectedTools.includes(tool);
                  return (
                    <button
                      key={tool}
                      onClick={() => toggleTool(tool)}
                      className={`text-xs px-3.5 py-2 border font-medium transition-colors ${
                        active
                          ? 'bg-[#3A332C] text-[#FAF8F5] border-[#3A332C]'
                          : 'bg-[#FAF8F5] text-[#4F463D] border-[#DDD3C7] hover:border-[#96897C]'
                      }`}
                    >
                      {tool}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4">
              <button
                onClick={() => setCurrentStep(1)}
                className="text-xs uppercase tracking-wider font-semibold text-[#665D53] hover:text-[#181512]"
              >
                ← Back
              </button>
              <button
                onClick={() => setCurrentStep(3)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1917] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold hover:bg-[#342F2A] transition-colors"
              >
                <span>Generate Strategy Roadmap</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: The Custom Strategic Roadmap & Architecture Result */}
        {currentStep === 3 && (
          <div className="space-y-8 animate-fadeIn">
            {/* Top Stat Summary Banner */}
            <div className="bg-[#1C1917] text-[#FAF8F5] p-6 sm:p-8 border border-[#1C1917] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 space-y-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-amber-300">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Audit Complete · {recommendation.readinessLabel}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-normal font-editorial text-[#FAF8F5]">
                  High Operational Yield Identified
                </h3>
                <p className="text-xs sm:text-sm text-[#D8CEBF] leading-relaxed">
                  {recommendation.summary}
                </p>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-4 border-t lg:border-t-0 lg:border-l border-[#3D3630] pt-4 lg:pt-0 lg:pl-6">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#A69A8E]">Weekly Reclaim</div>
                  <div className="text-2xl sm:text-3xl font-light font-editorial text-emerald-400 mt-0.5">
                    ~{recommendation.projectedHoursSavedWeekly} hrs
                  </div>
                  <div className="text-[11px] text-[#A69A8E] mt-0.5">per entire operations crew</div>
                </div>

                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#A69A8E]">Est. Annual Value</div>
                  <div className="text-2xl sm:text-3xl font-light font-editorial text-amber-300 mt-0.5">
                    ${recommendation.annualValueEstimate.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-[#A69A8E] mt-0.5">in reclaimed human capital</div>
                </div>
              </div>
            </div>

            {/* Structured 3-Phase Deployment Plan */}
            <div className="bg-[#F7F1E8] border border-[#E3D8CC] p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-[#E3D8CC] pb-4">
                <div>
                  <h4 className="text-lg font-semibold text-[#1F1B17]">
                    Recommended Phased Rollout Blueprint
                  </h4>
                  <p className="text-xs text-[#635A50] mt-0.5">
                    Designed to deliver live working software in 14-day milestones with continuous testing.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={copyRoadmap}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 border border-[#CFBFB0] bg-[#FAF8F5] text-[#3A332B] hover:bg-[#EFE7DC] transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy Roadmap'}</span>
                  </button>
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="text-xs text-[#71675D] hover:text-[#1F1B17] flex items-center gap-1"
                    title="Reset Audit"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Edit</span>
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {recommendation.prioritySteps.map((step, idx) => (
                  <div key={idx} className="p-4 bg-[#FAF8F5] border border-[#DDD3C7] space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wider font-bold text-[#807468]">
                        {step.timeframe} · {step.impact} Impact
                      </span>
                    </div>
                    <h5 className="text-sm font-semibold text-[#1E1A17]">{step.title}</h5>
                    <p className="text-xs text-[#5C5349] leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>

              {/* Custom Apps To Build */}
              <div className="pt-4 border-t border-[#E3D8CC]">
                <h5 className="text-xs uppercase tracking-wider font-bold text-[#4B433B] mb-3">
                  Custom Management Apps To Be Built For Your Team
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {recommendation.customAppsNeeded.map((app, idx) => (
                    <div key={idx} className="p-4 bg-[#FAF8F5] border border-[#DDD3C7] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#1E1A17]">{app.name}</span>
                        <span className="text-[10px] uppercase font-semibold text-[#73685C]">Internal Web App</span>
                      </div>
                      <p className="text-xs text-[#574F45]">{app.purpose}</p>
                      <div className="text-[11px] text-[#7A6E62] pt-1 border-t border-[#EFE8DF]">
                        Replaces: <span className="font-medium text-[#2F2924]">{app.replaces}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Bridge */}
              <div className="pt-6 border-t border-[#E3D8CC] flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-[#685F54]">
                  Want to review this architecture live with the builder?
                </div>
                <button
                  onClick={handleApplyToBooking}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1917] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold hover:bg-[#332E29] transition-colors"
                >
                  <span>Apply Roadmap To 25-Min Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

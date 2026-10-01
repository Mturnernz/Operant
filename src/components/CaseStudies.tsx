import React from 'react';
import { ArrowRight, CheckCircle2, Search, Cpu, Layers, ShieldCheck, HeartHandshake, Share2 } from 'lucide-react';

interface CaseStudiesProps {
  onNavigate?: (sectionId: string) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onNavigate }) => {
  const blueprints = [
    {
      domain: 'Specialty Retail & Multi-Channel Inventory',
      context: 'Distributors, Importers & Trade Merchants',
      problem: 'Suppliers send updated inventory lists in inconsistent Excel formats with weird abbreviations, leaving new products unlisted for weeks while social channels go quiet.',
      solutionEngine: 'AI cleanses messy spreadsheet columns, standardizes product descriptions and SEO tags, syncs inventory to the website/Shopify, and automatically creates Instagram & LinkedIn promotional drafts.',
      deliverable: 'New inventory goes live in minutes with marketing releases pre-drafted automatically.',
    },
    {
      domain: 'Trade Services & Mobile Contractors',
      context: '10–25 Vans (Electrical, HVAC, Plumbing, Roofing)',
      problem: 'Technicians text blurry photos of part labels, scribble on paper delivery dockets, and leave job cards incomplete until Sunday night.',
      solutionEngine: 'A 1-screen mobile web app where technicians take a photo. Cloud OCR reads serial/model tags, AI matches parts to your inventory, and auto-generates a clean work order for owner review.',
      deliverable: 'Eliminates the Sunday evening admin rush and stops lost billable parts.',
    },
    {
      domain: 'Wholesale Distribution & Trade Counters',
      context: 'High-Volume Order Desk (B2B Accounts)',
      problem: 'Trade customers email non-standard PDF purchase orders, Excel spreadsheets with arbitrary column headers, or photos of handwritten lists.',
      solutionEngine: 'An inbound email webhook pipeline. An LLM parses product codes against your active catalog, flags ambiguous items for instant 1-click staff confirmation, and auto-drafts the sales invoice.',
      deliverable: 'Zero manual re-typing and cuts order entry turnaround from hours to minutes.',
    },
  ];

  return (
    <div className="h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 max-w-6xl">
      
      {/* Top Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EFE8DD] border border-[#DDD3C2] rounded-full text-xs text-[#6F5F50] mb-2 font-medium">
          <span className="w-2 h-2 rounded-full bg-[#C25E38]" />
          <span>REALISTIC OPERATIONAL BLUEPRINTS</span>
          <span className="text-[#A79888]">•</span>
          <span className="text-[#241F1C] font-semibold">How We Tackle Real Problems</span>
        </div>

        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1F1B17] tracking-tight">
          How We Work Through Real Small Business Bottlenecks
        </h2>
        <p className="text-xs sm:text-sm text-[#736354] mt-1 font-sans max-w-3xl">
          Here is exactly how we approach common, high-friction operational workflows—from multi-destination inventory and marketing synchronization to smart mobile OCR and email order parsing.
        </p>
      </div>

      {/* 3 Practical Problem-Solving Blueprints */}
      <div className="my-auto py-3 grid grid-cols-1 md:grid-cols-3 gap-4">
        {blueprints.map((item, idx) => (
          <div
            key={idx}
            className="p-5 bg-white border border-[#E8DEC8] rounded-2xl flex flex-col justify-between space-y-3 shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-[#8A7969] font-mono">
                <span>BLUEPRINT 0{idx + 1}</span>
                <span className="text-[#C25E38] font-semibold font-mono text-[10px]">PRACTICAL ARCHITECTURE</span>
              </div>
              <div className="text-sm font-bold text-[#1F1B17] font-heading mt-1">
                {item.domain}
              </div>
              <div className="text-[11px] text-[#7A6C5E] font-medium mt-0.5">
                {item.context}
              </div>

              <div className="mt-3 space-y-2 text-xs">
                <div>
                  <span className="text-[#887768] font-bold text-[10px] uppercase font-mono block">The Bottleneck:</span>
                  <p className="text-[#594B3F] leading-relaxed text-[11px]">
                    {item.problem}
                  </p>
                </div>
                <div>
                  <span className="text-[#C25E38] font-bold text-[10px] uppercase font-mono block">The Engineering Solution:</span>
                  <p className="text-[#40352A] leading-relaxed text-[11px]">
                    {item.solutionEngine}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#FAF6F0] rounded-xl border border-[#EAE1D3] space-y-0.5">
              <div className="text-[10px] text-[#867667] uppercase font-mono font-medium">Business Impact</div>
              <div className="text-xs text-[#2A7B4C] font-semibold">
                {item.deliverable}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Controls */}
      <div className="pt-4 border-t border-[#E8DEC8] flex items-center justify-between text-xs text-[#807062] font-medium">
        <span>STEP 05 OF 08 • OPERATIONAL BLUEPRINTS</span>
        {onNavigate && (
          <button
            onClick={() => onNavigate('booking')}
            className="text-[#C25E38] hover:text-[#964724] transition-colors flex items-center gap-1 font-semibold"
          >
            <span>Next: Book a 25-Min Discovery Chat</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>

    </div>
  );
};

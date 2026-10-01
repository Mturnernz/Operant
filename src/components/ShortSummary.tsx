import React from 'react';
import { ArrowRight, Coffee, Heart, CheckCircle2, UserCheck } from 'lucide-react';

interface ShortSummaryProps {
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
}

export const ShortSummary: React.FC<ShortSummaryProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <div className="h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 max-w-5xl">
      
      {/* Top Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EFE8DD] border border-[#DDD3C2] rounded-full text-xs text-[#6F5F50] mb-3 font-medium">
          <span className="w-2 h-2 rounded-full bg-[#C25E38]" />
          <span>MEET THE BUILDER</span>
          <span className="text-[#A79888]">•</span>
          <span className="text-[#241F1C] font-semibold">Behind Operant</span>
        </div>

        <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#1F1B17] tracking-tight leading-tight">
          Hi, I’m Mike Turner.
        </h2>
        <div className="font-serif italic text-base text-[#C25E38] mt-1 font-medium">
          Investigator, former enterprise operations leader &amp; hands-on studio builder
        </div>
      </div>

      {/* The 4-Sentence Verified Summary (Exact Constraint) */}
      <div className="my-auto py-5 space-y-5">
        <div className="p-6 sm:p-8 bg-white border-l-4 border-[#C25E38] border-y border-r border-[#E8DEC8] rounded-2xl shadow-xs">
          <p className="font-sans text-base sm:text-lg text-[#3F342B] leading-relaxed font-normal">
            "I am an active government investigator handling serious volume crime and threat assessments, applying strict evidentiary standards and forensic file preparation. 
            Previously, I directed retail operations for a major national fuel supplier across 80 unmanned automated sites accountable for approximately 90% of P&amp;L. 
            I also led operations for a major energy gentailer's prepay division where I engineered robotic process automation to cut back-office headcount while improving service, and managed global sales operations for an international food and dairy exporter. 
            A University of Auckland Commerce graduate in Operations and Information Systems, I spent a decade as an Infantry Captain in the military reserves commanding 150-person units under pressure."
          </p>
        </div>

        {/* Friendly Studio Proof Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3.5 bg-white border border-[#E8DEC8] rounded-xl">
            <div className="text-[10px] text-[#867566] uppercase font-mono font-medium">Attention to Detail</div>
            <div className="text-[#1F1B17] font-semibold mt-0.5">Evidentiary Rigor</div>
          </div>
          <div className="p-3.5 bg-white border border-[#E8DEC8] rounded-xl">
            <div className="text-[10px] text-[#867566] uppercase font-mono font-medium">Real Reliability</div>
            <div className="text-[#1F1B17] font-semibold mt-0.5">80 Unmanned Sites</div>
          </div>
          <div className="p-3.5 bg-white border border-[#E8DEC8] rounded-xl">
            <div className="text-[10px] text-[#867566] uppercase font-mono font-medium">Practical Automation</div>
            <div className="text-[#1F1B17] font-semibold mt-0.5">7 to 5 FTE Headcount Win</div>
          </div>
          <div className="p-3.5 bg-white border border-[#E8DEC8] rounded-xl">
            <div className="text-[10px] text-[#867566] uppercase font-mono font-medium">Calm Leadership</div>
            <div className="text-[#1F1B17] font-semibold mt-0.5">10 Yrs Reserve Officer</div>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-[#E8DEC8] flex flex-wrap items-center justify-between gap-4 text-xs text-[#807062] font-medium">
        <span>Auckland, New Zealand · Direct partner on every engagement</span>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('solutions')}
            className="px-4 py-2 bg-[#C25E38] text-white rounded-xl uppercase tracking-wider font-semibold hover:bg-[#A94C29] transition-all shadow-xs"
          >
            What We Can Build →
          </button>
          <button
            onClick={onOpenContact}
            className="px-4 py-2 border border-[#DDD2C0] bg-white text-[#2B241E] rounded-xl uppercase tracking-wider hover:bg-[#FAF6F0] transition-colors"
          >
            Say Hello
          </button>
        </div>
      </div>

    </div>
  );
};

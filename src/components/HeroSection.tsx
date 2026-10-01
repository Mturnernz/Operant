import React from 'react';
import { ArrowRight, Clock, Coffee, Sparkles, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  onOpenContact?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <div className="h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 max-w-6xl">
      
      {/* Top Friendly Badge */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EFE8DD] border border-[#DDD3C2] rounded-full text-xs text-[#6F5F50] mb-4 font-medium">
          <span className="w-2 h-2 rounded-full bg-[#C25E38]" />
          <span>Bespoke Operations &amp; AI Studio</span>
          <span className="text-[#A79888]">•</span>
          <span className="text-[#241F1C] font-semibold">For Small Business Owners</span>
        </div>

        <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1F1B17] leading-[1.15]">
          Get Your Evenings &amp; Weekends Back.
          <span className="block font-serif font-normal italic text-[#C25E38] mt-2">
            Practical AI &amp; custom software made simple.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#615448] leading-relaxed max-w-3xl mt-4 font-sans">
          You started your business to do what you love—not to drown in manual invoices, retype messy job emails, or chase missing project specs after dinner. 
          We craft friendly custom tools, smart document scanners (OCR), and seamless API connections that take care of the boring admin quietly in the background.
        </p>
      </div>

      {/* Main Grid: Warm Studio Highlights */}
      <div className="my-auto py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Real Life Deliverables */}
        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-4 bg-white border border-[#E8DEC8] rounded-xl shadow-xs">
              <div className="text-[#C25E38] font-bold text-xs uppercase font-mono">10 to 15 Hours</div>
              <div className="text-[#201C18] font-semibold mt-1 text-sm font-heading">Reclaimed Weekly</div>
              <div className="text-[#7F7061] text-xs mt-1">Admin lifted from the owner's shoulders.</div>
            </div>

            <div className="p-4 bg-white border border-[#E8DEC8] rounded-xl shadow-xs">
              <div className="text-[#C25E38] font-bold text-xs uppercase font-mono">Zero Clunky Menus</div>
              <div className="text-[#201C18] font-semibold mt-1 text-sm font-heading">Tailored Just for You</div>
              <div className="text-[#7F7061] text-xs mt-1">No monthly per-seat software tax.</div>
            </div>

            <div className="p-4 bg-white border border-[#E8DEC8] rounded-xl shadow-xs">
              <div className="text-[#C25E38] font-bold text-xs uppercase font-mono">Real Human Help</div>
              <div className="text-[#201C18] font-semibold mt-1 text-sm font-heading">One Lead Builder</div>
              <div className="text-[#7F7061] text-xs mt-1">Direct partner on your phone &amp; Slack.</div>
            </div>
          </div>

          <div className="p-4 bg-[#F2ECE1] border border-[#DDD3C2] rounded-xl space-y-1 text-xs">
            <div className="text-[#964724] font-semibold flex items-center gap-1.5 font-heading">
              <Coffee className="w-3.5 h-3.5" />
              <span>How We Really Help</span>
            </div>
            <div className="text-[#594C40] leading-relaxed">
              We look at your messy inboxes, tilted supplier PDFs, and manual spreadsheets. Then we stitch together custom web apps, smart computer vision OCR, and reliable APIs so work flows automatically—giving you back clarity and freedom.
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('solutions')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C25E38] text-white rounded-xl text-xs uppercase tracking-wider font-semibold hover:bg-[#A94C29] transition-all shadow-sm"
            >
              <span>Explore What We Can Build</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('booking')}
              className="inline-flex items-center gap-2 px-5 py-3 border border-[#DDD3C2] bg-white text-[#2B2520] rounded-xl text-xs uppercase tracking-wider font-semibold hover:bg-[#F7F2EB] transition-colors"
            >
              <span>Book a Friendly 25-Min Chat</span>
            </button>
          </div>
        </div>

        {/* Right Column: Warm Snapshot Card */}
        <div className="lg:col-span-5 bg-white border border-[#E8DEC8] rounded-2xl p-6 space-y-4 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-[#F0E6D8]">
            <span className="text-[#847464] text-xs uppercase font-mono font-medium">STUDIO PROMISE</span>
            <span className="text-[#C25E38] font-serif italic text-xs font-semibold">Genuine Craftsmanship</span>
          </div>

          <ul className="space-y-3 text-xs text-[#52463B]">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#2A7B4C] flex-shrink-0 mt-0.5" />
              <span><strong>Practical AI, Not Hype:</strong> Summarizing invoices, parsing work orders, and routing jobs without guesswork.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#2A7B4C] flex-shrink-0 mt-0.5" />
              <span><strong>Custom Light Apps:</strong> Clean screens for your crew to click once on an iPad or phone and move on.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#2A7B4C] flex-shrink-0 mt-0.5" />
              <span><strong>You Own Every Line:</strong> No recurring vendor lock-in. The databases, code, and automations are 100% yours.</span>
            </li>
          </ul>

          <div className="pt-3 border-t border-[#F0E6D8] flex items-center justify-between text-xs text-[#807062]">
            <span>Next: What tools we build</span>
            <button
              onClick={() => onNavigate('solutions')}
              className="text-[#C25E38] font-semibold hover:underline"
            >
              Step Right →
            </button>
          </div>
        </div>

      </div>

      {/* Footer Navigation Hint */}
      <div className="pt-4 border-t border-[#E8DEC8] flex items-center justify-between text-xs text-[#887869] font-medium">
        <span>STEP 01 OF 08 • THE STUDIO OVERVIEW</span>
        <button
          onClick={() => onNavigate('solutions')}
          className="text-[#C25E38] hover:text-[#964724] transition-colors flex items-center gap-1 font-semibold"
        >
          <span>Next: Practical Tools &amp; AI</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};

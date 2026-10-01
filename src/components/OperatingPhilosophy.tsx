import React from 'react';
import { HeartHandshake, Eye, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

interface OperatingPhilosophyProps {
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
}

export const OperatingPhilosophy: React.FC<OperatingPhilosophyProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <div className="h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 max-w-5xl">
      
      {/* Top Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EFE8DD] border border-[#DDD3C2] rounded-full text-xs text-[#6F5F50] mb-3 font-medium">
          <span className="w-2 h-2 rounded-full bg-[#C25E38]" />
          <span>OUR PROMISE</span>
          <span className="text-[#A79888]">•</span>
          <span className="text-[#241F1C] font-semibold">Studio Philosophy</span>
        </div>

        <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#1F1B17] tracking-tight leading-tight">
          Software That Respects Your People &amp; Time
        </h2>
        <p className="text-sm sm:text-base text-[#685B4E] mt-1 max-w-2xl font-sans">
          Most tech consultancies build bloated systems with 80 tabs and expect you to change how you work. We build around your reality.
        </p>
      </div>

      {/* 3 Warm Principles */}
      <div className="my-auto py-5 grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
        
        <div className="p-5 bg-white border border-[#E8DEC8] rounded-2xl space-y-2.5 shadow-xs">
          <div className="text-[#C25E38] font-bold text-[10px] uppercase font-mono">PRINCIPLE 01</div>
          <h3 className="font-heading text-base font-bold text-[#1F1B17]">Listen Before Writing Code</h3>
          <p className="text-[#594B3F] text-xs leading-relaxed">
            We don’t guess. We watch how your crew actually handles an emergency repair call, a crooked invoice photo, or a missing job code. We solve the real pain.
          </p>
        </div>

        <div className="p-5 bg-white border border-[#E8DEC8] rounded-2xl space-y-2.5 shadow-xs">
          <div className="text-[#C25E38] font-bold text-[10px] uppercase font-mono">PRINCIPLE 02</div>
          <h3 className="font-heading text-base font-bold text-[#1F1B17]">Simple, 1-Click Interfaces</h3>
          <p className="text-[#594B3F] text-xs leading-relaxed">
            Nobody on your team wants to learn complex enterprise software. We design beautiful, distraction-free screens where one tap approves a job or syncs an invoice.
          </p>
        </div>

        <div className="p-5 bg-white border border-[#E8DEC8] rounded-2xl space-y-2.5 shadow-xs">
          <div className="text-[#C25E38] font-bold text-[10px] uppercase font-mono">PRINCIPLE 03</div>
          <h3 className="font-heading text-base font-bold text-[#1F1B17]">You Own It Forever</h3>
          <p className="text-[#594B3F] text-xs leading-relaxed">
            Every database schema, automated workflow, and custom web app belongs 100% to your company. Zero hidden software subscriptions or locked gates.
          </p>
        </div>

      </div>

      {/* Footer Controls */}
      <div className="pt-4 border-t border-[#E8DEC8] flex flex-wrap items-center justify-between gap-4 text-xs text-[#807062] font-medium">
        <span>Ready to win back your evenings?</span>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('booking')}
            className="px-5 py-2.5 bg-[#C25E38] text-white rounded-xl uppercase tracking-wider font-semibold hover:bg-[#A94C29] transition-all shadow-xs"
          >
            Book a 25-Min Discovery Chat →
          </button>
        </div>
      </div>

    </div>
  );
};

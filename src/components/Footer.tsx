import React from 'react';
import { ArrowUp, Shield, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1C202A] bg-[#0A0B0E] text-[#78849E] py-12 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#181B24]">
          {/* Col 1 */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 inline-block" />
              <div className="flex items-baseline gap-1.5">
                <span className="font-heading font-bold text-white tracking-wider text-sm">
                  OPERANT
                </span>
                <span className="font-mono text-xs text-[#8E99B0]">
                  BY MIKE
                </span>
              </div>
            </div>
            <p className="text-xs text-[#8B96AF] leading-relaxed max-w-sm font-sans">
              High-stakes operational systems engineering, tailored automation pipelines, and bespoke management CRMs built by Mike Turner — government investigator, former retail operations manager for a major national fuel supplier, and military reserve infantry commander.
            </p>
            <div className="text-[11px] text-[#5D6983]">
              Direct Inquiries: <a href="mailto:mturnernz@gmail.com" className="text-white hover:underline">mturnernz@gmail.com</a> · Auckland, New Zealand
            </div>
          </div>

          {/* Col 2 */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-white font-semibold text-[11px] uppercase tracking-wider">
              Directory
            </div>
            <ul className="space-y-1.5 text-xs text-[#7F8B9F]">
              <li><button onClick={() => onNavigate('dossier')} className="hover:text-white">01 // Career Dossier &amp; Doctrine</button></li>
              <li><button onClick={() => onNavigate('sandbox')} className="hover:text-white">02 // Live Triage CRM</button></li>
              <li><button onClick={() => onNavigate('calculator')} className="hover:text-white">03 // ROI Cost Modeler</button></li>
              <li><button onClick={() => onNavigate('cases')} className="hover:text-white">04 // Documented Blueprints</button></li>
              <li><button onClick={() => onNavigate('pricing')} className="hover:text-white">05 // Engagement Tiers</button></li>
              <li><button onClick={() => onNavigate('booking')} className="hover:text-white text-emerald-400">06 // Schedule Direct Call</button></li>
            </ul>
          </div>

          {/* Col 3: Guarantees */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-white font-semibold text-[11px] uppercase tracking-wider">
              IP &amp; Evidentiary Integrity
            </div>
            <p className="text-xs text-[#7F8B9F] leading-relaxed font-sans">
              <strong className="text-white font-mono">100% Client IP Ownership:</strong> Every code pipeline, relational PostgreSQL schema, and custom management dashboard belongs completely to you. Zero proprietary lock-in or recurring software licensing rent.
            </p>
            {onOpenContact && (
              <div className="pt-2">
                <button
                  onClick={onOpenContact}
                  className="text-white border-b border-white hover:text-emerald-400 hover:border-emerald-400 transition-colors"
                >
                  Direct Inquiry Form →
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-[11px] text-[#556179]">
          <div>
            © {new Date().getFullYear()} OPERANT BY MIKE. Auckland, New Zealand.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white hover:text-emerald-400 transition-colors"
          >
            <span>TOP</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};

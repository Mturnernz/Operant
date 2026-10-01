import React from 'react';
import { 
  Sparkles, 
  Layers, 
  Smartphone, 
  Calculator, 
  BookOpen, 
  Calendar,
  User, 
  Compass, 
  Mail, 
  ChevronRight,
  Clock,
  HeartHandshake
} from 'lucide-react';

interface SidebarNavProps {
  currentSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
}

export const SidebarNav: React.FC<SidebarNavProps> = ({
  currentSection,
  onNavigate,
  onOpenContact,
}) => {
  // Top Group: "What We Can Do"
  const capabilities = [
    { id: 'overview', label: 'The Studio', icon: Compass, sub: 'Giving you your time back' },
    { id: 'solutions', label: 'Practical AI & Custom Apps', icon: Sparkles, sub: 'Data sync, OCR, apps & APIs' },
    { id: 'sandbox', label: 'Interactive Studio Demo', icon: Smartphone, sub: 'Triage, cleansing & OCR' },
    { id: 'calculator', label: 'Time Reclaimed Modeler', icon: Calculator, sub: 'Hours & admin math' },
    { id: 'blueprints', label: 'How We Solve Problems', icon: BookOpen, sub: 'Realistic field architectures' },
    { id: 'booking', label: 'Friendly 25-Min Chat', icon: Calendar, sub: 'Direct discovery conversation' },
  ];

  // Bottom Group: "The Fluff"
  const backgroundGroup = [
    { id: 'profile', label: 'Meet Mike', icon: User, sub: 'Founder & lead engineer' },
    { id: 'philosophy', label: 'Studio Philosophy', icon: HeartHandshake, sub: 'Built to actually last' },
  ];

  return (
    <aside className="w-72 flex-shrink-0 h-screen bg-[#F5EFE6] border-r border-[#E8DEC8] flex flex-col justify-between font-sans select-none z-30">
      
      {/* Brand Header */}
      <div className="p-5 border-b border-[#E8DEC8] bg-[#F9F6F0]">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C25E38] inline-block shadow-[0_0_8px_rgba(194,94,56,0.3)]" />
          <div className="flex items-baseline gap-1.5">
            <span className="font-heading font-extrabold text-sm tracking-wider uppercase text-[#231F1C]">
              OPERANT
            </span>
            <span className="font-serif italic text-xs text-[#807062]">by Mike</span>
          </div>
        </div>
        <div className="text-[11px] text-[#786A5E] mt-2 flex items-center gap-1.5 font-medium">
          <Clock className="w-3.5 h-3.5 text-[#C25E38]" />
          <span>Giving business owners their time back</span>
        </div>
      </div>

      {/* Navigation Groups Container */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        
        {/* Top Section: WHAT WE CAN DO */}
        <div>
          <div className="px-3 pb-2 text-[10px] uppercase tracking-wider text-[#938474] font-bold flex items-center justify-between font-mono">
            <span>What We Can Do</span>
            <span className="text-[9px] bg-[#EFE8DC] text-[#716152] px-1.5 py-0.5 rounded border border-[#DFD5C4]">SERVICES</span>
          </div>

          <div className="space-y-1">
            {capabilities.map((item) => {
              const Icon = item.icon;
              const isActive = currentSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all flex items-center justify-between group ${
                    isActive
                      ? 'bg-[#EAE0D3] text-[#1E1A17] font-semibold shadow-sm'
                      : 'text-[#615448] hover:bg-[#EFE8DC] hover:text-[#1E1A17]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-[#C25E38]' : 'text-[#8E7E70] group-hover:text-[#C25E38]'}`} />
                    <div className="truncate">
                      <div className="text-xs truncate">{item.label}</div>
                      <div className="text-[10px] text-[#8C7C6D] truncate leading-tight">{item.sub}</div>
                    </div>
                  </div>
                  {isActive && <ChevronRight className="w-3.5 h-3.5 text-[#C25E38] flex-shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Section: THE FLUFF */}
        <div className="pt-2 border-t border-[#E8DEC8]">
          <div className="px-3 pb-2 text-[10px] uppercase tracking-wider text-[#938474] font-bold flex items-center justify-between font-mono">
            <span>The Fluff</span>
            <span className="text-[9px] text-[#938474]">ABOUT US</span>
          </div>

          <div className="space-y-1">
            {backgroundGroup.map((item) => {
              const Icon = item.icon;
              const isActive = currentSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all flex items-center justify-between group ${
                    isActive
                      ? 'bg-[#EAE0D3] text-[#1E1A17] font-semibold shadow-sm'
                      : 'text-[#615448] hover:bg-[#EFE8DC] hover:text-[#1E1A17]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-[#C25E38]' : 'text-[#8E7E70] group-hover:text-[#C25E38]'}`} />
                    <div className="truncate">
                      <div className="text-xs truncate">{item.label}</div>
                      <div className="text-[10px] text-[#8C7C6D] truncate leading-tight">{item.sub}</div>
                    </div>
                  </div>
                  {isActive && <ChevronRight className="w-3.5 h-3.5 text-[#C25E38] flex-shrink-0" />}
                </button>
              );
            })}

            {/* Direct Inquiry Form Trigger */}
            <button
              onClick={onOpenContact}
              className="w-full text-left px-3 py-2 rounded-lg transition-all flex items-center justify-between group text-[#615448] hover:bg-[#EFE8DC] hover:text-[#1E1A17]"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Mail className="w-4 h-4 text-[#8E7E70] group-hover:text-[#C25E38] flex-shrink-0" />
                <div className="truncate">
                  <div className="text-xs truncate">Say Hello</div>
                  <div className="text-[10px] text-[#8C7C6D] truncate leading-tight">Send a quick note</div>
                </div>
              </div>
            </button>
          </div>
        </div>

      </div>

      {/* Footer Info */}
      <div className="p-4 border-t border-[#E8DEC8] bg-[#F9F6F0] text-[11px] text-[#7A6C5E] space-y-1.5 font-medium">
        <div className="flex items-center justify-between">
          <span>Step-Through View</span>
          <span className="text-[#C25E38] font-mono text-[10px]">SCROLL RIGHT →</span>
        </div>
        <div className="text-[10px] text-[#938474]">
          mturnernz@gmail.com · Auckland, NZ
        </div>
      </div>

    </aside>
  );
};

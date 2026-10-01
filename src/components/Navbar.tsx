import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Shield, Terminal } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Profile', id: 'dossier' },
    { label: 'Architecture', id: 'architecture' },
    { label: 'Live Triage CRM', id: 'sandbox' },
    { label: 'ROI Modeler', id: 'calculator' },
    { label: 'Blueprints', id: 'cases' },
    { label: 'Engagements', id: 'pricing' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors border-b ${
        scrolled
          ? 'bg-[#0C0D10]/95 backdrop-blur border-[#1F222A]'
          : 'bg-[#0C0D10] border-[#181A20]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Brand Moniker */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('hero')}
              className="flex items-center gap-2 text-left focus-visible:outline-none group"
            >
              <span className="w-2.5 h-2.5 bg-emerald-400 inline-block" />
              <div className="flex items-baseline gap-1.5">
                <span className="font-heading font-bold text-sm tracking-wider uppercase text-white">
                  OPERANT
                </span>
                <span className="font-mono text-xs text-[#8E99B0]">
                  BY MIKE
                </span>
              </div>
              <span className="hidden xl:inline font-mono text-[10px] text-[#636E85] pl-2 border-l border-[#222735]">
                GOVT INVESTIGATIONS // EX-ENERGY GENTAILER // EX-FUEL RETAIL OPS
              </span>
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="font-mono text-xs uppercase tracking-wider text-[#8A94A8] hover:text-white transition-colors focus-visible:outline-none"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Direct Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenContact && (
              <button
                onClick={onOpenContact}
                className="font-mono text-xs uppercase tracking-wider px-3 py-1.5 border border-[#282D3B] text-[#CCD1DE] hover:border-[#4B5368] hover:text-white transition-colors"
              >
                Quick Inquiry
              </button>
            )}

            <button
              onClick={() => handleNavClick('booking')}
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider font-semibold bg-white text-[#0C0D10] hover:bg-[#D5D9E4] px-3.5 py-1.5 transition-colors"
            >
              <span>Schedule Review</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            {onOpenContact && (
              <button
                onClick={onOpenContact}
                className="font-mono text-xs border border-[#282D3B] text-white px-2.5 py-1"
              >
                Inquire
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#8A94A8] hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#1F222A] bg-[#0E1015] px-4 py-4 space-y-3 font-mono">
          <div className="text-[11px] text-[#69748C] pb-2 border-b border-[#1A1D24]">
            MIKE TURNER // GOVT INVESTIGATIONS · BCOM OPS &amp; INFO SYSTEMS
          </div>
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left text-xs uppercase tracking-wider text-[#A0AABA] hover:text-white py-1.5 border-b border-[#181B22]"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2">
            {onOpenContact && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full text-center text-xs uppercase py-2 border border-[#2B3142] text-white"
              >
                Direct Inquiry Form
              </button>
            )}
            <button
              onClick={() => handleNavClick('booking')}
              className="w-full text-center text-xs uppercase py-2 bg-white text-[#0C0D10] font-semibold"
            >
              Schedule Direct Review
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Eye, 
  Smartphone, 
  Share2, 
  Check, 
  ChevronRight, 
  Terminal, 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  X,
  Code2,
  Database,
  Globe,
  Inbox,
  Layers,
  Wand2
} from 'lucide-react';

export default function App() {
  const [quickNoteOpen, setQuickNoteOpen] = useState(false);
  const [shopName, setShopName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Active filter tab in the Examples modal / section
  const [activeTab, setActiveTab] = useState<'inventory' | 'ocr' | 'tools'>('inventory');

  // Standard generic build stack (Split: Tech Specs vs. ELI5)
  const genericStackItems = [
    {
      component: "Code & AI Engines",
      color: "from-blue-500 to-indigo-500",
      accentBg: "bg-blue-50 text-blue-700 border-blue-100",
      tech: "Claude & Google Gemini",
      techDetail: "High-performance multimodal models for semantic product normalization, schema enforcement, and instant natural language triage.",
      eli5Title: "The Super-Smart Assistant",
      eli5: "Acts like a tireless office manager who reads incoming customer emails and messy supplier lists in seconds, formatting every field before you wake up."
    },
    {
      component: "Web App Hosting",
      color: "from-emerald-500 to-teal-500",
      accentBg: "bg-emerald-50 text-emerald-700 border-emerald-100",
      tech: "Netlify (or Cloudflare / Vercel Edge)",
      techDetail: "Global distributed CDN, automated continuous deployment pipelines, sub-50ms DNS, and instant TLS certificate encryption.",
      eli5Title: "The Fast, Unbreakable Countertop",
      eli5: "Your tool loads instantly on your phone or counter iPad. No updates, no loading spinners, and zero downtime."
    },
    {
      component: "Database & Backend",
      color: "from-amber-500 to-orange-500",
      accentBg: "bg-amber-50 text-amber-700 border-amber-100",
      tech: "Supabase (Enterprise PostgreSQL)",
      techDetail: "Managed relational cloud PostgreSQL with Row-Level Security (RLS), real-time subscriptions, automated backups, and REST endpoints.",
      eli5Title: "The Private Ironclad Safe",
      eli5: "Where your customer records, stock numbers, and invoices live. You own the database 100%—never locked into someone else's walled garden."
    },
    {
      component: "Document Vision (OCR)",
      color: "from-purple-500 to-pink-500",
      accentBg: "bg-purple-50 text-purple-700 border-purple-100",
      tech: "Google Cloud Document Vision & Textract",
      techDetail: "Advanced optical character recognition with perspective deskewing, table detection, and key-value pair parsing.",
      eli5Title: "The Instant Paper Reader",
      eli5: "Takes a crooked, faded photo of a paper receipt from Bunnings or a freight slip and types the exact line items, GST, and totals into Xero for you."
    },
    {
      component: "Source Code & Versioning",
      color: "from-slate-700 to-gray-900",
      accentBg: "bg-slate-100 text-slate-800 border-slate-200",
      tech: "GitHub",
      techDetail: "Industry-standard Git repository hosting, automated version history, pull request reviews, and continuous CI/CD integration.",
      eli5Title: "The Master Blueprint Vault",
      eli5: "A secure digital vault where every single line of your software's code and history is saved in your own name. If you ever want another developer to add a feature in 5 years, you hand them the keys."
    },
    {
      component: "Email & Webhooks",
      color: "from-rose-500 to-red-500",
      accentBg: "bg-rose-50 text-rose-700 border-rose-100",
      tech: "Resend & Inbound Webhook Pipelines",
      techDetail: "Transactional email API with verified DKIM/SPF domain reputation, event-driven webhooks, and sub-second delivery tracking.",
      eli5Title: "The Direct Postman",
      eli5: "Dispatches customer order receipts, alerts van drivers, and pipes supplier shipments directly into your schedule without ending up in spam."
    }
  ];

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactInfo) return;
    setSubmitted(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1D1D1F] font-sans antialiased selection:bg-[#E8F0FE] selection:text-[#1967D2] flex flex-col justify-between">
      
      {/* Serene River Background Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-r from-blue-100/40 via-amber-50/40 to-emerald-100/40 blur-3xl rounded-full opacity-70 animate-river" />
      </div>

      {/* Clean Apple x Google Minimal Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-[#E5E5EA]/80 transition-all">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          
          {/* Logo / Brand Signature */}
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1A73E8] shadow-[0_0_10px_rgba(26,115,232,0.4)]" />
            <div className="flex items-baseline gap-1.5">
              <span className="font-heading font-extrabold text-sm sm:text-base tracking-tight text-[#1D1D1F]">
                OPERANT
              </span>
              <span className="font-serif italic text-xs text-[#86868B]">by Mike</span>
            </div>
            <span className="hidden sm:inline text-xs text-[#86868B] font-normal">
              &bull; Auckland, NZ
            </span>
          </div>

          {/* Clean Top Navigation Links */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => scrollToSection('examples')}
              className="text-xs sm:text-sm font-medium text-[#515154] hover:text-[#1D1D1F] transition-colors cursor-pointer hidden sm:block"
            >
              Examples
            </button>
            <button
              onClick={() => scrollToSection('technology')}
              className="text-xs sm:text-sm font-medium text-[#515154] hover:text-[#1D1D1F] transition-colors cursor-pointer hidden sm:block"
            >
              Technology &amp; Stack
            </button>
            <button
              onClick={() => setQuickNoteOpen(true)}
              className="px-4 py-2 bg-[#1D1D1F] text-white text-xs sm:text-sm font-semibold rounded-full hover:bg-[#333336] transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
            >
              <span>Say Hello</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </header>

      {/* Main Flow: Serene River Typography & Intentional Layout */}
      <main className="relative z-10 flex-1 max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-20 w-full space-y-20 sm:space-y-28">
        
        {/* HERO SECTION: The Exact Punchy Request */}
        <section className="space-y-8 animate-stream">
          
          {/* Subtle Google-Apple Accent Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E5EA] shadow-xs text-xs text-[#515154] font-medium">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span>Bespoke Tools &bull; Practical AI Automations</span>
          </div>

          {/* Exact Punchy Hero Line */}
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1D1D1F] leading-[1.12]">
            I build simple tools and practical AI automations that take care of the admin so you can focus on the stuff that matters.
          </h1>

          {/* The Follow-Up Text */}
          <p className="font-sans text-lg sm:text-2xl text-[#515154] font-normal leading-relaxed max-w-3xl">
            AI does not have to be complex or expensive, but can be effectively used to achieve things that feel like magic.
          </p>

          {/* Direct CTA Buttons: Exactly Requested */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={() => scrollToSection('examples')}
              className="px-6 py-3.5 bg-[#1A73E8] hover:bg-[#1557B0] text-white rounded-full text-sm font-semibold transition-all shadow-sm flex items-center gap-2 cursor-pointer group"
            >
              <span>Click here for examples</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('technology')}
              className="px-6 py-3.5 bg-white hover:bg-[#F2F2F7] text-[#1D1D1F] border border-[#E5E5EA] rounded-full text-sm font-semibold transition-all shadow-xs flex items-center gap-2 cursor-pointer"
            >
              <span>Learn more about the technology, and think what it can do for you</span>
              <ChevronRight className="w-4 h-4 text-[#86868B]" />
            </button>
          </div>

        </section>

        {/* SECTION 1: EXAMPLES ("Click here for examples") */}
        <section id="examples" className="space-y-6 pt-6 scroll-mt-24 animate-stream delay-100">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1A73E8]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real Examples &bull; What It Looks Like</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              Small Business Chores &mdash; Solved.
            </h2>
            <p className="text-sm sm:text-base text-[#6E6E73] font-normal max-w-2xl">
              Tap any scenario to see how a simple custom tool eliminates hours of manual double-handling.
            </p>
          </div>

          {/* Interactive Examples Switcher */}
          <div className="flex flex-wrap gap-2 p-1 bg-[#F2F2F7] rounded-2xl w-fit">
            <button
              onClick={() => setActiveTab('inventory')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'inventory' 
                  ? 'bg-white text-[#1D1D1F] shadow-xs' 
                  : 'text-[#6E6E73] hover:text-[#1D1D1F]'
              }`}
            >
              1. Supplier Inventory &rarr; Website &amp; Socials
            </button>
            <button
              onClick={() => setActiveTab('ocr')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'ocr' 
                  ? 'bg-white text-[#1D1D1F] shadow-xs' 
                  : 'text-[#6E6E73] hover:text-[#1D1D1F]'
              }`}
            >
              2. Receipts &amp; Dockets &rarr; Accounting
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'tools' 
                  ? 'bg-white text-[#1D1D1F] shadow-xs' 
                  : 'text-[#6E6E73] hover:text-[#1D1D1F]'
              }`}
            >
              3. Private 1-Screen Dispatch Board
            </button>
          </div>

          {/* Active Example Showcase Card */}
          <div className="bg-white border border-[#E5E5EA] rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            {activeTab === 'inventory' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#F2F2F7]">
                  <div>
                    <div className="text-xs font-mono text-[#34A853] uppercase font-bold">Automatic Multi-Channel Release</div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-[#1D1D1F] mt-0.5">
                      New stock uploaded to the website + corresponding social media releases
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6] w-fit">
                    Zero manual typing
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm">
                  {/* Before / Raw Input */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#F9F9FB] border border-[#E5E5EA] space-y-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#86868B] font-bold">
                      What the supplier emails you:
                    </div>
                    <div className="font-mono text-xs text-[#515154] bg-white p-3 rounded-xl border border-[#E5E5EA] break-all leading-relaxed">
                      SKU_9021--heavyduty-poly-tarp-12x16ft-GRN/SLV-mfr#49021--casediscnt--129.99nz
                    </div>
                    <p className="text-xs text-[#86868B] pt-1">
                      Typically, an owner spends hours renaming ugly part codes, calculating margins, typing descriptions into Shopify, and writing Facebook captions.
                    </p>
                  </div>

                  {/* After / Automated Result */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#34A853]/40 shadow-xs space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#137333] font-bold">
                      <span>What the AI automation does in 2 seconds:</span>
                      <span className="bg-[#E6F4EA] px-2 py-0.5 rounded-full">MAGIC APPLIED</span>
                    </div>

                    <div className="space-y-1">
                      <div className="font-bold text-[#1D1D1F] text-sm">
                        Heavy-Duty Waterproof Polyethylene Tarp (12ft &times; 16ft, Dual Green/Silver)
                      </div>
                      <div className="text-xs font-semibold text-[#1A73E8]">
                        $129.99 NZD &bull; Auto-synced to online catalog
                      </div>
                    </div>

                    <div className="p-3 bg-[#F9F9FB] rounded-xl text-xs text-[#3C4043] leading-relaxed border border-[#E5E5EA]">
                      <span className="font-semibold block mb-0.5 text-[#1D1D1F]">Draft Social Release (Instagram &amp; Facebook):</span>
                      "🌧️ Just landed in store: Heavy-duty 12x16ft commercial tarps with reinforced rust-proof eyelets. Perfect for keeping job sites dry ahead of rain. Now live on our online store + counter pick-up ready! #TradeSupplies #BuildingNZ"
                    </div>

                    <div className="text-xs text-[#137333] font-medium flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#34A853]" />
                      <span>Website is updated, inventory synced, and post is ready for 1-click publishing.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ocr' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#F2F2F7]">
                  <div>
                    <div className="text-xs font-mono text-[#1A73E8] uppercase font-bold">Computer Vision &amp; Accounting</div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-[#1D1D1F] mt-0.5">
                      Paper Dockets &amp; Receipts to Accounting in 4 Seconds
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#E8F0FE] text-[#1967D2] border border-[#D2E3FC] w-fit">
                    No more Sunday typing
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm">
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#F9F9FB] border border-[#E5E5EA] space-y-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#86868B] font-bold">
                      The Common Frustration:
                    </div>
                    <p className="text-xs sm:text-sm text-[#515154] leading-relaxed">
                      Technicians text crumpled photos of packing slips or drop paper dockets on your desk. By Sunday evening, you have a shoe box of receipts to manually key into Xero or MYOB.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#1A73E8]/40 shadow-xs space-y-2.5">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#1967D2] font-bold">
                      The Simple Solution:
                    </div>
                    <p className="text-xs sm:text-sm text-[#3C4043] leading-relaxed">
                      Your team opens a 1-screen webpage and taps "Snap Photo". Google Cloud OCR straightens the angle, pulls the GST, vendor name, and line items, then files a draft bill directly into Xero.
                    </p>
                    <div className="text-xs text-[#137333] font-medium flex items-center gap-1.5 pt-1">
                      <CheckCircle2 className="w-4 h-4 text-[#34A853]" />
                      <span>Zero data entry. You just tap "Approve".</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tools' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#F2F2F7]">
                  <div>
                    <div className="text-xs font-mono text-[#F2994A] uppercase font-bold">Custom Lightweight Web Tools</div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-[#1D1D1F] mt-0.5">
                      Private 1-Screen Tools Built for Your Crew
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#FEF7E0] text-[#B06000] border border-[#FEEFC3] w-fit">
                    Zero Monthly Per-User Fees
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm">
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#F9F9FB] border border-[#E5E5EA] space-y-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#86868B] font-bold">
                      The Enterprise Trap:
                    </div>
                    <p className="text-xs sm:text-sm text-[#515154] leading-relaxed">
                      Big software vendors want to charge you $50/user per month for bloated platforms with 80 confusing tabs that your team hates using and constantly gets wrong.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#F2994A]/40 shadow-xs space-y-2.5">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#B06000] font-bold">
                      The Bespoke Tool:
                    </div>
                    <p className="text-xs sm:text-sm text-[#3C4043] leading-relaxed">
                      We craft a private, lightning-fast 1-screen webpage with 3 big touch-friendly buttons tailored specifically to how your team works. No app store downloads, no passwords to forget.
                    </p>
                    <div className="text-xs text-[#137333] font-medium flex items-center gap-1.5 pt-1">
                      <CheckCircle2 className="w-4 h-4 text-[#34A853]" />
                      <span>You own the code forever with zero monthly user taxes.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </section>

        {/* SECTION 2: TECHNOLOGY & STACK ("Learn more about the technology, and think what it can do for you") */}
        <section id="technology" className="space-y-6 pt-6 scroll-mt-24 animate-stream delay-200">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1A73E8]">
              <Layers className="w-3.5 h-3.5" />
              <span>Standardised Suite &bull; Known Abilities</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              Learn more about the technology, and think what it can do for you.
            </h2>
            <p className="text-sm sm:text-base text-[#6E6E73] font-normal max-w-2xl">
              Every build is engineered on a proven, standardised suite of modern tools. Here is the exact stack split side-by-side: technical architecture on the left, and what it means for your business on the right.
            </p>
          </div>

          {/* Pivoted Two-Column Table: Strictly Side-by-Side (Tech Speak on Left vs ELI5 on Right) */}
          <div className="bg-white border border-[#E5E5EA] rounded-3xl shadow-xs overflow-hidden">
            
            {/* Horizontal Scroll wrapper for mobile screens to guarantee side-by-side display */}
            <div className="overflow-x-auto">
              <div className="min-w-[620px]">
                
                {/* Table Header: Two Distinct Columns */}
                <div className="grid grid-cols-2 border-b border-[#E5E5EA] bg-[#F9F9FB]">
                  <div className="px-5 sm:px-6 py-3.5 border-r border-[#E5E5EA] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-[#1A73E8]" />
                      <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#1D1D1F]">
                        Tech Term &amp; Architecture
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#86868B]">HOW IT'S CODED</span>
                  </div>

                  <div className="px-5 sm:px-6 py-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Wand2 className="w-4 h-4 text-[#34A853]" />
                      <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#1D1D1F]">
                        Explain Like I'm 5 (ELI5)
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#34A853] font-semibold">WHAT YOU GET</span>
                  </div>
                </div>

                {/* Table Body: Always 2 Columns Per Row Side-by-Side */}
                <div className="divide-y divide-[#E5E5EA]">
                  {genericStackItems.map((item, idx) => (
                    <div key={idx} className="grid grid-cols-2 group hover:bg-[#FAFAFC] transition-colors">
                      
                      {/* Left Column: Tech Speak */}
                      <div className="p-5 sm:p-6 border-r border-[#E5E5EA] flex flex-col justify-between space-y-2 bg-[#FCFCFD]">
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] sm:text-[11px] font-mono text-[#86868B] uppercase font-bold tracking-wider">
                              {item.component}
                            </span>
                            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${item.accentBg} font-semibold`}>
                              VERIFIED
                            </span>
                          </div>
                          
                          <div className="font-heading font-bold text-[#1D1D1F] text-sm sm:text-base">
                            {item.tech}
                          </div>

                          <p className="text-xs text-[#515154] leading-relaxed">
                            {item.techDetail}
                          </p>
                        </div>
                      </div>

                      {/* Right Column: Corresponding ELI5 (Directly Beside Left Column) */}
                      <div className="p-5 sm:p-6 bg-white group-hover:bg-[#FAFAFC] flex flex-col justify-between space-y-2 transition-colors">
                        <div className="space-y-1.5">
                          <div className="text-[10px] sm:text-[11px] font-mono text-[#137333] uppercase font-bold tracking-wider flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]"></span>
                            <span>NORMAL SPEAK</span>
                          </div>

                          <div className="font-heading font-bold text-[#1D1D1F] text-sm sm:text-base">
                            {item.eli5Title}
                          </div>

                          <p className="text-xs sm:text-sm text-[#3C4043] leading-relaxed font-sans">
                            {item.eli5}
                          </p>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Bottom Proof Reassurance */}
            <div className="p-4 sm:p-5 bg-[#F9F9FB] border-t border-[#E5E5EA] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#6E6E73]">
              <span className="font-medium text-[#1D1D1F]">
                &bull; Deployed directly to accounts in your name with 100% client code &amp; IP ownership.
              </span>
              <span className="text-[#1A73E8] font-semibold">
                No vendor lock-in &bull; Zero per-user platform tax
              </span>
            </div>

          </div>

        </section>

        {/* SECTION 3: OUR EXPERIENCE */}
        <section className="bg-white border border-[#E5E5EA] rounded-3xl p-6 sm:p-8 space-y-5 shadow-xs animate-stream delay-300">
          <div className="flex items-center justify-between pb-3 border-b border-[#F2F2F7]">
            <div className="flex items-center gap-2">
              <span className="font-heading text-lg font-bold text-[#1D1D1F]">
                Our Experience
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#86868B] uppercase">FOUNDERS &bull; OPERATIONS &amp; SYSTEMS</span>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[#3C4043] leading-relaxed font-sans">
            <p>
              Operant is founded by Mike, whose corporate career has been built in Sales Operations, Business Process Improvement and Operations Management across Fonterra and Mercury Energy. In addition to this, Mike spent over ten years in the Army Reserves and is qualifying as a Detective in the New Zealand Police.
            </p>
            <p>
              His interest in AI has spawned from building his own projects for personal use &mdash; and seeing the pace of change that AI is going through.
            </p>
            <p>
              Mike works closely with James, who is ex-AWS, Telecom/Spark and currently technology manager for one of New Zealand's largest volunteer organisations. James provides the deep seated information systems understanding &mdash; including providing the &ldquo;how can this break&rdquo; perspective.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-[#515154]">
            <span className="inline-flex items-center gap-1.5 bg-[#F2F2F7] px-3 py-1 rounded-full">
              <Check className="w-3.5 h-3.5 text-[#34A853]" /> 100% Client Ownership
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#F2F2F7] px-3 py-1 rounded-full">
              <Check className="w-3.5 h-3.5 text-[#34A853]" /> Rigorous Enterprise Reliability
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#F2F2F7] px-3 py-1 rounded-full">
              <Check className="w-3.5 h-3.5 text-[#34A853]" /> Direct Mobile Access
            </span>
          </div>
        </section>

        {/* SECTION 4: CALL TO ACTION BANNER */}
        <section className="bg-gradient-to-br from-[#1D1D1F] to-[#2D2D30] text-white rounded-3xl p-8 sm:p-10 space-y-6 shadow-md animate-stream delay-400">
          <div className="max-w-2xl space-y-2">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to take your evenings back?
            </h2>
            <p className="text-sm text-[#A1A1A6] font-normal leading-relaxed">
              If you have a manual spreadsheet or a paper docket process giving you headaches, drop me a note or give me a call. I’ll tell you honestly if it’s an easy fix.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => setQuickNoteOpen(true)}
              className="px-6 py-3.5 bg-[#1A73E8] hover:bg-[#1557B0] text-white rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Leave a Quick Note</span>
            </button>
            <a
              href="mailto:mturnernz@gmail.com?subject=Saw%20your%20card%20-%20quick%20question"
              className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>mturnernz@gmail.com</span>
            </a>
          </div>
        </section>

      </main>

      {/* Clean Apple-style Minimal Footer */}
      <footer className="border-t border-[#E5E5EA] bg-white py-6">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#86868B] gap-3">
          <div>
            &copy; {new Date().getFullYear()} Operant by Mike Turner &bull; Auckland, New Zealand
          </div>
          <div className="flex items-center gap-4 text-xs font-mono">
            <span>mturnernz@gmail.com</span>
          </div>
        </div>
      </footer>

      {/* Quick 10-Second Note Modal */}
      {quickNoteOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-stream"
          onClick={() => setQuickNoteOpen(false)}
        >
          <div 
            className="w-full max-w-md bg-white border border-[#E5E5EA] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {submitted ? (
              <div className="py-6 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#E6F4EA] text-[#137333] flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#1D1D1F]">
                  Note Received!
                </h3>
                <p className="text-xs text-[#515154]">
                  Mike will text or email you back within a few hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setQuickNoteOpen(false);
                  }}
                  className="px-6 py-2.5 bg-[#1D1D1F] text-white text-xs font-semibold rounded-full"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="space-y-3.5 text-xs">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono text-[#1A73E8] uppercase font-bold">DIRECT TO BUILDER</div>
                    <h3 className="font-heading text-lg font-bold text-[#1D1D1F]">
                      Leave a Quick Note
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setQuickNoteOpen(false)}
                    className="p-1 rounded-full hover:bg-[#F2F2F7] text-[#86868B]"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-xs text-[#6E6E73] leading-relaxed">
                  Drop your contact details and a sentence about what process is slowing you down.
                </p>

                <div>
                  <label className="block text-[#515154] text-[11px] font-medium mb-1">
                    Your Shop / Business Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Henderson Timber / Apex Plumbing"
                    value={shopName}
                    onChange={(e) => setShopName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#F9F9FB] border border-[#E5E5EA] rounded-xl text-xs focus:border-[#1A73E8] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#515154] text-[11px] font-medium mb-1">
                    Mobile Number or Email *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 021 123 4567 or mike@shop.co.nz"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#F9F9FB] border border-[#E5E5EA] rounded-xl text-xs focus:border-[#1A73E8] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#515154] text-[11px] font-medium mb-1">
                    What manual chore is driving you crazy?
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. New stock sheets take hours to type into our store, or receipt filing steals our entire weekend..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#F9F9FB] border border-[#E5E5EA] rounded-xl text-xs focus:border-[#1A73E8] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setQuickNoteOpen(false)}
                    className="px-4 py-2 text-[#86868B] hover:text-[#1D1D1F] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#1A73E8] hover:bg-[#1557B0] text-white font-semibold rounded-full shadow-xs transition-colors cursor-pointer"
                  >
                    Send to Mike &rarr;
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

import React, { useState } from 'react';
import { 
  ArrowRight, 
  Smartphone, 
  Eye, 
  Sparkles, 
  RefreshCw, 
  HelpCircle, 
  X, 
  DollarSign, 
  Cpu, 
  Building2, 
  CheckCircle2,
  Wand2,
  Share2,
  Database
} from 'lucide-react';

interface SolutionsOverviewProps {
  onNavigate: (sectionId: string) => void;
}

interface TermDetail {
  id: string;
  term: string;
  subtitle: string;
  icon: any;
  eli5: string;
  howAchieved: string;
  toolsAndProviders: string;
  typicalCost: string;
}

export const SolutionsOverview: React.FC<SolutionsOverviewProps> = ({ onNavigate }) => {
  const [isNormalSpeakModalOpen, setIsNormalSpeakModalOpen] = useState(false);
  const [selectedTermId, setSelectedTermId] = useState<string>('cleansing');

  const terms: TermDetail[] = [
    {
      id: 'cleansing',
      term: 'AI Data Cleansing & Multi-Channel Sync',
      subtitle: '"Turn messy supplier spreadsheets into polished web listings & social posts automatically"',
      icon: Share2,
      eli5: 'When suppliers email you messy spreadsheets with broken product codes, missing punctuation, and zero descriptions, AI cleans it up in seconds: it generates customer-friendly titles, formats prices, tags categories, uploads the items to your website/Shopify, and creates ready-to-publish social media announcements with photos.',
      howAchieved: 'The raw catalog or CSV is ingested via cloud webhook. An LLM standardizes attributes (SKU, brand, specs, dimensions), generates engaging marketing copy and SEO tags, uploads product data to your database/e-commerce store via API, and schedules matching social media posts (Instagram, Facebook, LinkedIn) for 1-click owner approval.',
      toolsAndProviders: 'Google Gemini 2.5 Flash / Claude 3.5 Sonnet (for normalization & copywriting), Shopify / WooCommerce APIs, Supabase / PostgreSQL, Meta Graph API (Instagram/Facebook), and Buffer/Hootsuite APIs.',
      typicalCost: 'AI processing costs fractions of a cent per product (around $1 to $5 for an entire 500-item supplier catalog). Store and social API connections use your existing business accounts with zero extra monthly software fees.'
    },
    {
      id: 'ocr',
      term: 'OCR (Optical Character Recognition)',
      subtitle: '"Teaching the computer to read photos & paper like a human"',
      icon: Eye,
      eli5: 'Imagine your assistant taking a photo of a crumpled paper receipt or a tilted PDF invoice and having the text magically typed out into Excel without typing a single letter by hand.',
      howAchieved: 'When someone uploads a photo from their phone, the system first automatically straightens the image, enhances faded ink, locates tables, and extracts dates, dollar amounts, vendor names, and GST numbers into organized fields.',
      toolsAndProviders: 'Google Cloud Vision, AWS Textract, Microsoft Azure Document Intelligence, or open-source Tesseract engine.',
      typicalCost: 'Dirt cheap for small business volumes. Google/AWS charge around $0.0015 to $0.002 per page (literally fractions of a penny, usually under $3 to $8/month total for hundreds of invoices).'
    },
    {
      id: 'apps',
      term: 'Custom Apps (Web & Mobile)',
      subtitle: '"A private 1-screen website made specifically for your team"',
      icon: Smartphone,
      eli5: 'Instead of paying monthly rent for a giant software system with 80 confusing tabs your team hates, we build a clean private web page with 3 big buttons: "New Order", "Assign Van", and "Send Invoice".',
      howAchieved: 'Built using modern lightweight web technologies (React/Vite & Tailwind CSS) hosted on secure cloud servers. It looks and works like a native mobile app on an iPhone, Android, iPad, or office desktop with zero App Store download headaches.',
      toolsAndProviders: 'Hosted on Google Cloud Run, Vercel, or AWS. Data stored in an enterprise PostgreSQL database (e.g. Supabase or Neon).',
      typicalCost: 'Hosting costs for a small business are usually free to $15–$25/month. You own the code forever—zero per-seat monthly license fees ($50/user/mo fees are eliminated).'
    },
    {
      id: 'ai',
      term: 'AI & Language Models (LLMs)',
      subtitle: '"A very smart intern who reads emails instantly without sleeping"',
      icon: Sparkles,
      eli5: 'AI isn’t just sci-fi robots. In your business, it acts like a super-fast office manager who reads an incoming customer email ("Hey mate our chiller is making a grinding noise and leaking"), recognizes it\'s an urgent emergency for Job #402, and pre-drafts the work order before you wake up.',
      howAchieved: 'The incoming email or form payload is sent through an encrypted, private API query that extracts key parameters (urgency level, equipment model, customer intent) and returns clean structured data without storing your private company info.',
      toolsAndProviders: 'Google Gemini 2.5 Flash, Anthropic Claude 3.5 Sonnet, or OpenAI GPT-4o Mini.',
      typicalCost: 'Extremely affordable. Modern high-speed models like Gemini Flash or GPT-4o Mini cost pennies per thousand requests—typically $2 to $10/month for an active small business.'
    },
    {
      id: 'apis',
      term: 'APIs, SDKs & Webhooks',
      subtitle: '"The invisible cables connecting your software tools together"',
      icon: RefreshCw,
      eli5: 'An API is like a digital waiter. When your customer pays an invoice on Stripe, the API waiter runs over to Xero to mark the invoice as "PAID", sends a text to your technician\'s phone, and tells Google Drive to file the job photos in the right client folder.',
      howAchieved: 'We write clean, reliable code scripts using official software developer kits (SDKs) provided by the services you already pay for. When an event happens (a "Webhook"), our script triggers immediate synchronized actions across your tools.',
      toolsAndProviders: 'Official developer SDKs from Xero, Stripe, Gmail, Google Workspace, Twilio (SMS), QuickBooks, and Shopify.',
      typicalCost: 'The software companies you already subscribe to provide API access for free with your account. Direct webhook plumbing runs on low-cost serverless functions costing under $5/month.'
    }
  ];

  const currentTerm = terms.find((t) => t.id === selectedTermId) || terms[0];

  return (
    <div className="h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 max-w-6xl">
      
      {/* Top Header with Translate to Normal Speak Button */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EFE8DD] border border-[#DDD3C2] rounded-full text-xs text-[#6F5F50] font-medium">
            <span className="w-2 h-2 rounded-full bg-[#C25E38]" />
            <span>TOOLBOX &amp; ARCHITECTURE</span>
            <span className="text-[#A79888]">•</span>
            <span className="text-[#241F1C] font-semibold">Practical Applications</span>
          </div>

          {/* Normal Speak Toggle Button */}
          <button
            onClick={() => setIsNormalSpeakModalOpen(true)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FAF3EC] border-2 border-[#C25E38] text-[#A34320] rounded-full text-xs font-bold hover:bg-[#C25E38] hover:text-white transition-all shadow-xs cursor-pointer group"
          >
            <Wand2 className="w-3.5 h-3.5 text-[#C25E38] group-hover:text-white transition-colors" />
            <span>Translate this to normal speak</span>
            <span className="text-[10px] bg-[#C25E38]/15 group-hover:bg-white/20 text-[#A34320] group-hover:text-white px-1.5 py-0.5 rounded-full font-mono">ELI5</span>
          </button>
        </div>

        <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#1F1B17] tracking-tight leading-tight">
          How We Use AI, Custom Apps, OCR, SDKs &amp; APIs
        </h2>
        <p className="text-sm sm:text-base text-[#685B4E] mt-2 max-w-3xl font-sans">
          We combine modern developer tools to eliminate repetitive manual work—from extracting invoices to cleansing supplier catalogs, updating multiple websites, and automating social marketing releases.
        </p>
      </div>

      {/* 4 Concrete Practical Blocks */}
      <div className="my-auto py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Capability 1: AI Data Cleansing & Multi-Destination Sync */}
        <div className="p-5 bg-white border border-[#E8DEC8] rounded-2xl flex flex-col justify-between space-y-3 shadow-xs hover:border-[#C25E38]/50 transition-all">
          <div className="space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#F8EFEA] flex items-center justify-center text-[#C25E38]">
              <Share2 className="w-4 h-4" />
            </div>
            <h3 className="font-heading text-base font-bold text-[#1F1B17]">Data Cleansing &amp; Multi-Sync</h3>
            <div className="text-[11px] font-mono text-[#8C7B6D] uppercase">Catalog &amp; Social Release</div>
            <p className="text-xs text-[#615346] leading-relaxed">
              AI cleans messy supplier spreadsheets, standardizes product specs, writes compelling customer descriptions, and uploads inventory to your website while drafting social media announcements.
            </p>
          </div>
          <div className="p-2.5 bg-[#FAF6F0] rounded-xl text-[11px] text-[#716051] border border-[#EFE5D6]">
            <strong>In Practice:</strong> Upload raw supplier CSV &rarr; new stock appears on your website with matching Instagram/LinkedIn drafts ready for 1-click posting.
          </div>
        </div>

        {/* Capability 2: OCR & Document Vision */}
        <div className="p-5 bg-white border border-[#E8DEC8] rounded-2xl flex flex-col justify-between space-y-3 shadow-xs hover:border-[#C25E38]/50 transition-all">
          <div className="space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#F8EFEA] flex items-center justify-center text-[#C25E38]">
              <Eye className="w-4 h-4" />
            </div>
            <h3 className="font-heading text-base font-bold text-[#1F1B17]">Smart OCR &amp; Vision</h3>
            <div className="text-[11px] font-mono text-[#8C7B6D] uppercase">Document Intelligence</div>
            <p className="text-xs text-[#615346] leading-relaxed">
              Tilted smartphone photos of receipts, handwritten invoices, and messy supplier packing slips. OCR extracts line items, tax numbers, and dates automatically.
            </p>
          </div>
          <div className="p-2.5 bg-[#FAF6F0] rounded-xl text-[11px] text-[#716051] border border-[#EFE5D6]">
            <strong>In Practice:</strong> Subcontractor snaps a photo on site; Xero/QuickBooks invoice is prefilled in 4 seconds.
          </div>
        </div>

        {/* Capability 3: Bespoke Web & Mobile Apps */}
        <div className="p-5 bg-white border border-[#E8DEC8] rounded-2xl flex flex-col justify-between space-y-3 shadow-xs hover:border-[#C25E38]/50 transition-all">
          <div className="space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#F8EFEA] flex items-center justify-center text-[#C25E38]">
              <Smartphone className="w-4 h-4" />
            </div>
            <h3 className="font-heading text-base font-bold text-[#1F1B17]">Bespoke Web &amp; Mobile Apps</h3>
            <div className="text-[11px] font-mono text-[#8C7B6D] uppercase">Lightweight Tools</div>
            <p className="text-xs text-[#615346] leading-relaxed">
              Instead of forcing staff into confusing 50-tab CRM monoliths, we build ultra-clean internal apps. Simple buttons, big touch targets, and zero fluff.
            </p>
          </div>
          <div className="p-2.5 bg-[#FAF6F0] rounded-xl text-[11px] text-[#716051] border border-[#EFE5D6]">
            <strong>In Practice:</strong> A 1-screen dispatch board for your desk team to tap and assign emergency jobs to van drivers.
          </div>
        </div>

        {/* Capability 4: SDKs, APIs & Webhooks */}
        <div className="p-5 bg-white border border-[#E8DEC8] rounded-2xl flex flex-col justify-between space-y-3 shadow-xs hover:border-[#C25E38]/50 transition-all">
          <div className="space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#F8EFEA] flex items-center justify-center text-[#C25E38]">
              <RefreshCw className="w-4 h-4" />
            </div>
            <h3 className="font-heading text-base font-bold text-[#1F1B17]">SDKs, APIs &amp; Webhooks</h3>
            <div className="text-[11px] font-mono text-[#8C7B6D] uppercase">Reliable Plumbing</div>
            <p className="text-xs text-[#615346] leading-relaxed">
              We connect Xero, Stripe, Shopify, Meta/Instagram, Gmail, or custom databases with real code rather than brittle no-code tools that break on edge cases.
            </p>
          </div>
          <div className="p-2.5 bg-[#FAF6F0] rounded-xl text-[11px] text-[#716051] border border-[#EFE5D6]">
            <strong>In Practice:</strong> New inventory syncs to your web shop, triggers customer emails, and updates inventory records simultaneously.
          </div>
        </div>

      </div>

      {/* Footer Controls */}
      <div className="pt-4 border-t border-[#E8DEC8] flex flex-wrap items-center justify-between gap-4 text-xs text-[#807062] font-medium">
        <div className="flex items-center gap-2">
          <span>Confused by tech jargon?</span>
          <button
            onClick={() => setIsNormalSpeakModalOpen(true)}
            className="text-[#C25E38] font-bold hover:underline inline-flex items-center gap-1"
          >
            <Wand2 className="w-3.5 h-3.5" />
            <span>Open plain-English breakdown</span>
          </button>
        </div>

        <button
          onClick={() => onNavigate('sandbox')}
          className="px-5 py-2.5 bg-[#C25E38] text-white rounded-xl uppercase tracking-wider font-semibold hover:bg-[#A94C29] transition-all shadow-xs flex items-center gap-1.5"
        >
          <span>Try Our Interactive Order Demo</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* ELI5 Normal Speak Modal */}
      {isNormalSpeakModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 overflow-y-auto bg-black/60 backdrop-blur-xs animate-fade-in font-sans">
          <div 
            className="relative w-full max-w-4xl bg-[#FAF7F2] border border-[#DDD3C2] rounded-3xl shadow-2xl p-6 sm:p-8 text-[#26201A] max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E8DEC8]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#F4EBE1] flex items-center justify-center text-[#C25E38]">
                  <Wand2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-extrabold text-[#1F1B17]">
                    "Translate This To Normal Speak" (ELI5 Guide)
                  </h3>
                  <p className="text-xs text-[#7A6B5C] font-sans">
                    Plain-English explanations of the tech terms, how they work, who provides them, and what they actually cost.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsNormalSpeakModalOpen(false)}
                className="p-1.5 text-[#887869] hover:text-[#1F1B17] rounded-full hover:bg-[#EAE0D3] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Two-column Tabs & Content */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-5 py-4 overflow-y-auto min-h-0">
              
              {/* Left Column: Term Selection Buttons */}
              <div className="md:col-span-4 space-y-2 pr-1">
                <div className="text-[10px] uppercase tracking-wider font-mono font-bold text-[#8A7969] px-2 mb-1">
                  Select a Term:
                </div>
                {terms.map((t) => {
                  const Icon = t.icon;
                  const isSelected = t.id === selectedTermId;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTermId(t.id)}
                      className={`w-full text-left p-3 rounded-xl border transition-all flex items-start gap-2.5 cursor-pointer ${
                        isSelected
                          ? 'bg-white border-[#C25E38] shadow-xs'
                          : 'bg-[#F4ECE1] border-[#E8DEC8] hover:border-[#D5C6B3] text-[#55473A]'
                      }`}
                    >
                      <Icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isSelected ? 'text-[#C25E38]' : 'text-[#887768]'}`} />
                      <div className="min-w-0">
                        <div className={`text-xs font-bold truncate ${isSelected ? 'text-[#1F1B17]' : 'text-[#44382C]'}`}>
                          {t.term}
                        </div>
                        <div className="text-[10px] text-[#867667] truncate mt-0.5">
                          {t.subtitle}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Deep-dive Plain English Explanation */}
              <div className="md:col-span-8 bg-white border border-[#E8DEC8] rounded-2xl p-5 sm:p-6 overflow-y-auto space-y-4 shadow-xs">
                
                {/* Term Title & Metaphor */}
                <div className="pb-3 border-b border-[#F0E6D8]">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#C25E38] font-bold uppercase">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Plain English Translation</span>
                  </div>
                  <h4 className="font-heading text-lg font-bold text-[#1F1B17] mt-1">
                    {currentTerm.term}
                  </h4>
                  <div className="font-serif italic text-xs text-[#7A6B5C] mt-0.5">
                    {currentTerm.subtitle}
                  </div>
                </div>

                {/* 1. Explain Like I'm 5 */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#964724] font-bold flex items-center gap-1.5">
                    <span>1. The 5-Year-Old Explanation</span>
                  </div>
                  <div className="p-3.5 bg-[#FAF6F0] rounded-xl border border-[#EFE5D6] text-xs text-[#3E342B] leading-relaxed">
                    {currentTerm.eli5}
                  </div>
                </div>

                {/* 2. How It's Actually Done */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#695A4C] font-bold">
                    2. How We Actually Build It
                  </div>
                  <p className="text-xs text-[#524436] leading-relaxed">
                    {currentTerm.howAchieved}
                  </p>
                </div>

                {/* 3. Who Provides The Tools & Cost */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-[#FAF6F0] rounded-xl border border-[#EFE5D6] space-y-1">
                    <div className="text-[10px] font-mono uppercase font-bold text-[#716152] flex items-center gap-1">
                      <Building2 className="w-3 h-3 text-[#C25E38]" />
                      <span>Who Provides The Tech?</span>
                    </div>
                    <div className="text-xs text-[#2A231C] leading-snug">
                      {currentTerm.toolsAndProviders}
                    </div>
                  </div>

                  <div className="p-3 bg-[#FAF6F0] rounded-xl border border-[#EFE5D6] space-y-1">
                    <div className="text-[10px] font-mono uppercase font-bold text-[#716152] flex items-center gap-1">
                      <DollarSign className="w-3 h-3 text-[#2A7B4C]" />
                      <span>What Does It Cost?</span>
                    </div>
                    <div className="text-xs text-[#2A231C] leading-snug font-medium">
                      {currentTerm.typicalCost}
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-[#E8DEC8] flex items-center justify-between text-xs">
              <span className="text-[#847464]">
                Everything is configured in your name with 100% client ownership.
              </span>
              <button
                onClick={() => setIsNormalSpeakModalOpen(false)}
                className="px-5 py-2 bg-[#C25E38] text-white rounded-xl text-xs font-semibold uppercase hover:bg-[#A94C29] transition-all"
              >
                Got it, thanks!
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

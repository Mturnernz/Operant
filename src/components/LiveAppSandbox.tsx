import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  Smartphone, 
  Sparkles, 
  FileText, 
  ShieldCheck, 
  RefreshCw,
  Clock,
  Eye,
  Send,
  Share2,
  UploadCloud,
  CheckCircle2
} from 'lucide-react';

interface MockLead {
  id: string;
  sender: string;
  company: string;
  source: string;
  rawText: string;
  extractedEquipment: string;
  urgency: 'HIGH' | 'MEDIUM' | 'LOW';
  status: 'PENDING' | 'APPROVED' | 'FIXED';
  confidence: number;
}

interface LiveAppSandboxProps {
  onNavigate?: (sectionId: string) => void;
}

export const LiveAppSandbox: React.FC<LiveAppSandboxProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'app' | 'sync' | 'ocr'>('app');

  const [leads, setLeads] = useState<MockLead[]>([
    {
      id: 'JOB-308',
      sender: 'sarah@auckland-bakery.co.nz',
      company: 'Auckland Artisan Bakery (Kumeu)',
      source: 'Client Email Inbound',
      rawText: 'Hi team, our deck oven fan bearing is screeching terribly and smoke smelled around 6am. Need urgent tech visit before our afternoon bake run.',
      extractedEquipment: 'Deck Oven 02 (Bearing Assembly)',
      urgency: 'HIGH',
      status: 'PENDING',
      confidence: 98,
    },
    {
      id: 'JOB-309',
      sender: 'accounts@matakana-timber.co.nz',
      company: 'Matakana Timber Supply',
      source: 'Scanned Mobile Photo PDF',
      rawText: 'Attached quote for 40x treated framing timber batches. Please invoice directly to Job #8812 and confirm delivery Friday 08:30.',
      extractedEquipment: 'Job #8812 Framing Timber (Batch 40x)',
      urgency: 'MEDIUM',
      status: 'PENDING',
      confidence: 95,
    },
  ]);

  const [selectedLeadId, setSelectedLeadId] = useState<string>('JOB-308');
  const [isProcessing, setIsProcessing] = useState(false);

  // Sync / Cleansing Simulator State
  const [syncStatus, setSyncStatus] = useState<string>('READY');
  const [syncResults, setSyncResults] = useState<{
    originalRaw: string;
    cleanedTitle: string;
    cleanedPrice: string;
    seoTags: string[];
    socialReleaseDraft: string;
  } | null>(null);

  // OCR Simulator
  const [ocrSample, setOcrSample] = useState<'receipt' | 'invoice'>('receipt');
  const [ocrStatus, setOcrStatus] = useState<string>('Ready to test. Click below to simulate OCR extraction.');

  const handleApprove = (id: string) => {
    setIsProcessing(true);
    setTimeout(() => {
      setLeads((prev) =>
        prev.map((l) => (l.id === id ? { ...l, status: 'APPROVED' } : l))
      );
      setIsProcessing(false);
    }, 450);
  };

  const handleRunCleansingDemo = () => {
    setSyncStatus('CLEANSING');
    setTimeout(() => {
      setSyncStatus('SYNCED');
      setSyncResults({
        originalRaw: 'SKU_9021--heavyduty-poly-tarp-12x16ft-GRN/SLV-mfr#49021--casediscnt--129.99nz',
        cleanedTitle: 'Heavy-Duty Waterproof Polyethylene Tarp (12ft × 16ft, Dual Green/Silver)',
        cleanedPrice: '$129.99 NZD (Case Discount Applied)',
        seoTags: ['trade-weatherproofing', 'industrial-tarps', 'heavy-duty', 'site-protection'],
        socialReleaseDraft: '🌧️ Just landed in store: Heavy-duty 12x16ft commercial tarps with reinforced rust-proof brass eyelets. Perfect for keeping active job sites dry ahead of rain. Now live on our online store + counter pick-up ready! #TradeSupplies #SitePrep #BuildingNZ'
      });
    }, 700);
  };

  const handleSimulateOCR = (type: 'receipt' | 'invoice') => {
    setOcrSample(type);
    if (type === 'receipt') {
      setOcrStatus('Parsing crumpled receipt image... OCR rotated 90° -> Extracted: Total $184.20 incl GST, Vendor: Bunnings Warehouse, Category: Job Consumables. Synced to Xero draft.');
    } else {
      setOcrStatus('Parsing non-standard supplier PDF... 14 line items extracted, SKU numbers mapped to internal database, tax calculated. Ready for 1-click accounting push.');
    }
  };

  const currentLead = leads.find((l) => l.id === selectedLeadId) || leads[0];

  return (
    <div className="h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 max-w-6xl">
      
      {/* Top Header */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EFE8DD] border border-[#DDD3C2] rounded-full text-xs text-[#6F5F50] mb-2 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#C25E38]" />
              <span>HANDS-ON STUDIO DEMO</span>
              <span className="text-[#A79888]">•</span>
              <span className="text-[#241F1C] font-semibold">Try the Practical Magic</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1F1B17] tracking-tight">
              Interactive Demos: Custom Apps, Data Sync &amp; OCR
            </h2>
          </div>

          {/* Module Switcher: 3 Interactive Demos */}
          <div className="flex bg-[#EFE8DC] p-1 rounded-xl border border-[#DDD3C2] text-xs font-medium">
            <button
              onClick={() => setActiveTab('app')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'app' ? 'bg-white text-[#201C18] shadow-xs font-semibold' : 'text-[#7A6A5C] hover:text-[#201C18]'
              }`}
            >
              1. Job Triage App
            </button>
            <button
              onClick={() => setActiveTab('sync')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'sync' ? 'bg-white text-[#201C18] shadow-xs font-semibold' : 'text-[#7A6A5C] hover:text-[#201C18]'
              }`}
            >
              2. Data Cleansing &amp; Social Release
            </button>
            <button
              onClick={() => setActiveTab('ocr')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'ocr' ? 'bg-white text-[#201C18] shadow-xs font-semibold' : 'text-[#7A6A5C] hover:text-[#201C18]'
              }`}
            >
              3. Smart OCR
            </button>
          </div>
        </div>
      </div>

      {/* Main Interactive Workspace */}
      <div className="my-auto py-3">
        {activeTab === 'app' ? (
          <div className="bg-white border border-[#E8DEC8] rounded-2xl shadow-xs overflow-hidden">
            {/* Top Toolbar */}
            <div className="px-5 py-3 bg-[#FAF6F0] border-b border-[#E8DEC8] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2A7B4C]" />
                <span className="font-bold text-[#231E1A] font-heading">
                  Your Bespoke Dispatch App (Zero Clutter)
                </span>
              </div>
              <span className="text-[#847464] hidden sm:inline text-[11px]">
                AI reads emails/PDFs &rarr; Extracts key facts &rarr; You click once to confirm
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: Simple Job List */}
              <div className="lg:col-span-5 border-r border-[#E8DEC8] p-4 space-y-2.5 bg-[#FDFBF7]">
                <div className="text-[11px] text-[#867667] font-semibold uppercase tracking-wider flex justify-between">
                  <span>Inbound Jobs Awaiting You</span>
                  <span>Auto-Parsed</span>
                </div>

                <div className="space-y-2">
                  {leads.map((lead) => (
                    <div
                      key={lead.id}
                      onClick={() => setSelectedLeadId(lead.id)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        selectedLeadId === lead.id
                          ? 'bg-[#F4ECE1] border-[#C25E38]/50 shadow-xs'
                          : 'bg-white border-[#EAE1D3] hover:border-[#D6C7B5]'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono font-bold text-[#2E2822]">{lead.id}</span>
                        <span
                          className={`px-2 py-0.5 text-[10px] font-semibold rounded-full ${
                            lead.status === 'APPROVED'
                              ? 'bg-[#E3F2E9] text-[#1D6C3D]'
                              : 'bg-[#FEF3D6] text-[#8A5B0B]'
                          }`}
                        >
                          {lead.status}
                        </span>
                      </div>

                      <div className="text-xs text-[#201C18] font-semibold mt-1 truncate">
                        {lead.company}
                      </div>

                      <div className="text-[11px] text-[#7A6C5E] mt-0.5 truncate">
                        {lead.extractedEquipment}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Extracted Card & Action */}
              <div className="lg:col-span-7 p-5 space-y-4 bg-white">
                <div className="flex items-center justify-between pb-2 border-b border-[#F0E6D8]">
                  <div>
                    <span className="text-xs text-[#807062]">SELECTED INQUIRY: </span>
                    <span className="text-xs text-[#201C18] font-bold font-mono">{currentLead.id}</span>
                  </div>
                  <div className="text-xs text-[#2A7B4C] font-medium flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>AI Confidence {currentLead.confidence}%</span>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="text-[11px] text-[#867667] font-semibold uppercase">
                      What the Customer Sent (Email / Text):
                    </label>
                    <div className="mt-1 p-3 bg-[#FAF6F0] border border-[#EAE1D3] rounded-xl text-xs text-[#4F4439] leading-relaxed italic">
                      "{currentLead.rawText}"
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-[#FAF6F0] border border-[#EAE1D3] rounded-xl">
                      <div className="text-[#867667] text-[10px] uppercase font-mono">Parsed Job Spec</div>
                      <div className="text-[#201C18] font-semibold mt-0.5 truncate">{currentLead.extractedEquipment}</div>
                    </div>
                    <div className="p-3 bg-[#FAF6F0] border border-[#EAE1D3] rounded-xl">
                      <div className="text-[#867667] text-[10px] uppercase font-mono">Detected Priority</div>
                      <div className="text-[#C25E38] font-bold mt-0.5">{currentLead.urgency} URGENCY</div>
                    </div>
                  </div>
                </div>

                {/* Approve Button */}
                <div className="pt-2 border-t border-[#F0E6D8] flex items-center justify-between">
                  <span className="text-xs text-[#7A6C5E]">
                    {currentLead.status === 'APPROVED' ? '✓ Synced to Van Driver & Xero' : 'Ready for 1-click dispatch'}
                  </span>

                  <button
                    onClick={() => handleApprove(currentLead.id)}
                    disabled={currentLead.status === 'APPROVED' || isProcessing}
                    className="px-5 py-2.5 bg-[#C25E38] text-white text-xs font-semibold rounded-xl hover:bg-[#A94C29] transition-all shadow-xs disabled:opacity-40 cursor-pointer"
                  >
                    {isProcessing
                      ? 'Saving...'
                      : currentLead.status === 'APPROVED'
                      ? 'Job Dispatched'
                      : 'Approve & Route Job (1-Click) →'}
                  </button>
                </div>
              </div>

            </div>
          </div>
        ) : activeTab === 'sync' ? (
          /* TAB 2: AI Data Cleansing & Multi-Destination Marketing Sync */
          <div className="bg-white border border-[#E8DEC8] rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#F0E6D8]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C25E38]" />
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[#1F1B17]">
                    Live Scenario: Ingesting Raw Supplier Inventory &rarr; Web Store &amp; Social Release
                  </h3>
                </div>
                <p className="text-xs text-[#6F6052] mt-0.5">
                  Suppliers send messy code strings. Watch AI normalize the data, publish it to your store, and pre-draft marketing posts.
                </p>
              </div>

              <button
                onClick={handleRunCleansingDemo}
                disabled={syncStatus === 'CLEANSING'}
                className="px-4 py-2 bg-[#C25E38] text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#A94C29] transition-all shadow-xs cursor-pointer disabled:opacity-50 flex items-center gap-1.5 flex-shrink-0"
              >
                <UploadCloud className="w-4 h-4" />
                <span>{syncStatus === 'CLEANSING' ? 'Cleansing & Syncing...' : 'Simulate 1-Click Cleanse & Publish'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 text-xs">
              
              {/* Left Column: Raw Input vs Cleaned Web Product */}
              <div className="lg:col-span-6 space-y-3">
                <div className="p-3 bg-[#FAF6F0] border border-[#EAE1D3] rounded-xl space-y-1">
                  <div className="text-[10px] font-mono text-[#8C7B6D] uppercase font-bold">
                    Incoming Raw Supplier String (CSV/Feed):
                  </div>
                  <div className="font-mono text-[11px] text-[#4F4439] bg-white p-2 rounded border border-[#E8DEC8] break-all">
                    SKU_9021--heavyduty-poly-tarp-12x16ft-GRN/SLV-mfr#49021--casediscnt--129.99nz
                  </div>
                </div>

                <div className="p-3.5 bg-white border border-[#2A7B4C]/40 rounded-xl space-y-2 shadow-xs">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase font-bold text-[#2A7B4C]">
                    <span>1. Cleaned Web Store Listing (Shopify / Web)</span>
                    <span className="bg-[#E3F2E9] px-1.5 py-0.5 rounded text-[#1D6C3D]">AUTO-SYNCED</span>
                  </div>

                  <div>
                    <div className="text-xs font-bold text-[#1F1B17]">
                      {syncResults ? syncResults.cleanedTitle : 'Heavy-Duty Waterproof Polyethylene Tarp (12ft × 16ft, Dual Green/Silver)'}
                    </div>
                    <div className="text-xs font-semibold text-[#C25E38] mt-0.5">
                      {syncResults ? syncResults.cleanedPrice : '$129.99 NZD'}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {(syncResults?.seoTags || ['trade-weatherproofing', 'industrial-tarps', 'heavy-duty']).map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-mono bg-[#FAF6F0] text-[#716051] px-2 py-0.5 rounded border border-[#EAE1D3]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Automated Social Media Announcement */}
              <div className="lg:col-span-6 space-y-2">
                <div className="p-3.5 bg-white border border-[#C25E38]/40 rounded-xl space-y-2.5 shadow-xs">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase font-bold text-[#C25E38]">
                    <span>2. Automated Social Media Release (Instagram / LinkedIn / Facebook)</span>
                    <span className="bg-[#F8EFEA] px-1.5 py-0.5 rounded text-[#A34320]">DRAFT READY</span>
                  </div>

                  <div className="p-3 bg-[#FAF6F0] rounded-xl border border-[#EAE1D3] text-xs text-[#3E342B] leading-relaxed font-sans">
                    {syncResults ? syncResults.socialReleaseDraft : '🌧️ Just landed in store: Heavy-duty 12x16ft commercial tarps with reinforced rust-proof brass eyelets. Perfect for keeping active job sites dry ahead of rain. Now live on our online store + counter pick-up ready! #TradeSupplies #SitePrep #BuildingNZ'}
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-[#786A5E] pt-1">
                    <span>Target Channels: Instagram, Facebook &amp; LinkedIn</span>
                    <span className="text-[#2A7B4C] font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Ready for 1-Click Publishing</span>
                    </span>
                  </div>
                </div>

                <div className="p-2.5 bg-[#FAF6F0] rounded-xl text-[11px] text-[#695A4C] border border-[#EAE1D3]">
                  <strong>What this means:</strong> The owner doesn't spend 2 hours downloading CSVs, fixing broken product names, uploading photos to Shopify, and writing Facebook captions. One supplier upload updates the catalog and marketing simultaneously.
                </div>
              </div>

            </div>
          </div>
        ) : (
          /* TAB 3: Smart OCR Vision */
          <div className="bg-white border border-[#E8DEC8] rounded-2xl p-6 shadow-xs space-y-4">
            <div>
              <h3 className="font-heading text-lg font-bold text-[#1F1B17]">
                Smart Document &amp; Receipt Vision (OCR)
              </h3>
              <p className="text-xs text-[#6F6052] mt-1">
                Stop typing receipt amounts and vendor codes by hand. Tap a test scenario to see how computer vision and LLMs clean up messy paperwork:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <button
                onClick={() => handleSimulateOCR('receipt')}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  ocrSample === 'receipt'
                    ? 'bg-[#F4ECE1] border-[#C25E38] shadow-xs'
                    : 'bg-[#FAF6F0] border-[#E8DEC8] hover:border-[#D5C6B3]'
                }`}
              >
                <div className="font-bold text-[#201C18] flex items-center gap-2">
                  <Eye className="w-4 h-4 text-[#C25E38]" />
                  <span>Test 01: Crumpled Receipt Photo</span>
                </div>
                <div className="text-[11px] text-[#78695C] mt-1">
                  Technician snaps a crooked photo at trade supply counter.
                </div>
              </button>

              <button
                onClick={() => handleSimulateOCR('invoice')}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  ocrSample === 'invoice'
                    ? 'bg-[#F4ECE1] border-[#C25E38] shadow-xs'
                    : 'bg-[#FAF6F0] border-[#E8DEC8] hover:border-[#D5C6B3]'
                }`}
              >
                <div className="font-bold text-[#201C18] flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#C25E38]" />
                  <span>Test 02: Complex Supplier Invoice PDF</span>
                </div>
                <div className="text-[11px] text-[#78695C] mt-1">
                  14 line items with weird SKU numbers and non-standard layouts.
                </div>
              </button>
            </div>

            <div className="p-4 bg-[#FAF6F0] border border-[#E8DEC8] rounded-xl text-xs text-[#4F4439] leading-relaxed">
              <span className="font-mono text-[10px] text-[#C25E38] uppercase font-bold block mb-1">
                Extraction &amp; System Integration Result:
              </span>
              {ocrStatus}
            </div>
          </div>
        )}
      </div>

      {/* Footer Controls */}
      <div className="pt-4 border-t border-[#E8DEC8] flex items-center justify-between text-xs text-[#807062] font-medium">
        <span>STEP 03 OF 08 • INTERACTIVE EXPERIENCE</span>
        {onNavigate && (
          <button
            onClick={() => onNavigate('calculator')}
            className="text-[#C25E38] hover:text-[#964724] transition-colors flex items-center gap-1 font-semibold"
          >
            <span>Next: Time &amp; Cost Modeler</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>

    </div>
  );
};

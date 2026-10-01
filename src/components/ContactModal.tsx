import React, { useState } from 'react';
import { X, Send, CheckCircle2, HeartHandshake, Coffee } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledNotes?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  prefilledNotes = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [businessType, setBusinessType] = useState('Trade Services (Electrical, HVAC, Plumbing)');
  const [message, setMessage] = useState(prefilledNotes);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !companyName) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 450);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setEmail('');
    setCompanyName('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto bg-black/50 backdrop-blur-xs animate-fade-in font-sans">
      <div 
        className="relative w-full max-w-lg bg-[#FAF7F2] border border-[#DDD3C2] rounded-3xl shadow-2xl p-6 sm:p-8 text-[#26201A]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-[#887869] hover:text-[#1F1B17] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#E5F3EB] border border-[#A5D7B7] flex items-center justify-center text-[#2A7B4C]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-extrabold text-[#1F1B17]">Thanks for Reaching Out!</h3>
              <p className="text-xs text-[#706051] mt-1 font-sans">
                Note received from {fullName} ({companyName}).
              </p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-[#E8DEC8] text-left text-xs text-[#524436]">
              Mike personally reads every message. He’ll get back to you within 24 hours with some simple, honest ideas on how to take the manual admin off your plate.
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-[#C25E38] text-white text-xs font-semibold rounded-xl uppercase hover:bg-[#A94C29] transition-all shadow-xs"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <div className="text-[11px] uppercase tracking-wider font-mono text-[#C25E38] font-bold mb-1">
                OPERANT STUDIO • SAY HELLO
              </div>
              <h2 className="font-heading text-2xl font-extrabold text-[#1F1B17]">
                Let's Make Life a Bit Easier
              </h2>
              <p className="text-xs text-[#736354] mt-1">
                Send a quick note directly to Mike Turner. Zero agency sales pitch.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#6D5D4E] font-medium text-[11px] mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jack Henderson"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#DDD2C0] rounded-xl text-[#1F1B17] focus:border-[#C25E38] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#6D5D4E] font-medium text-[11px] mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="jack@company.co.nz"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#DDD2C0] rounded-xl text-[#1F1B17] focus:border-[#C25E38] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#6D5D4E] font-medium text-[11px] mb-1">Company / Business *</label>
                  <input
                    type="text"
                    required
                    placeholder="Henderson & Co"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#DDD2C0] rounded-xl text-[#1F1B17] focus:border-[#C25E38] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#6D5D4E] font-medium text-[11px] mb-1">Industry</label>
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#DDD2C0] rounded-xl text-[#1F1B17] focus:border-[#C25E38] focus:outline-none"
                  >
                    <option>Trade Services (Electrical, HVAC, Plumbing)</option>
                    <option>Wholesale & Distribution</option>
                    <option>Specialty Manufacturing</option>
                    <option>Surveying, Engineering & Professional</option>
                    <option>Transport & Fleet</option>
                    <option>Other Small Business</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#6D5D4E] font-medium text-[11px] mb-1">
                  What manual chore is driving you crazy? *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell us what you or your team spend hours re-typing or copy-pasting every week..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#DDD2C0] rounded-xl text-[#1F1B17] focus:border-[#C25E38] focus:outline-none leading-relaxed font-sans"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-[#7A6B5C] hover:text-[#1F1B17] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-[#C25E38] text-white font-semibold rounded-xl uppercase hover:bg-[#A94C29] transition-all shadow-xs disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send to Mike →'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

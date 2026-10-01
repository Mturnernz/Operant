import React, { useState, useEffect } from 'react';
import { Download, CheckCircle2, ArrowRight, HeartHandshake, Coffee, Calendar } from 'lucide-react';

interface ConsultationBookingProps {
  prefilledScope?: string;
  onNavigate?: (sectionId: string) => void;
}

export const ConsultationBooking: React.FC<ConsultationBookingProps> = ({ prefilledScope, onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [industry, setIndustry] = useState('Trade Services (Electrical, HVAC, Plumbing)');
  const [bottleneck, setBottleneck] = useState('');
  const [selectedDate, setSelectedDate] = useState('2026-10-06');
  const [selectedTime, setSelectedTime] = useState('1:30 PM EST');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (prefilledScope) {
      setBottleneck((prev) => (prev ? `${prev}\n\n[Transferred Context]: ${prefilledScope}` : `[Transferred Context]: ${prefilledScope}`));
    }
  }, [prefilledScope]);

  const datesAvailable = [
    { date: '2026-10-06', label: 'Tue, Oct 6' },
    { date: '2026-10-07', label: 'Wed, Oct 7' },
    { date: '2026-10-08', label: 'Thu, Oct 8' },
    { date: '2026-10-09', label: 'Fri, Oct 9' },
  ];

  const timeSlots = ['10:00 AM EST', '11:30 AM EST', '1:30 PM EST', '3:00 PM EST'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !company) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setConfirmed(true);
    }, 500);
  };

  const downloadCalendarInvite = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Operant by Mike//Studio Chat//EN
BEGIN:VEVENT
SUMMARY:Operant by Mike — Friendly 25-Min Operations Chat with ${name} (${company})
DESCRIPTION:Friendly discovery chat with Mike Turner. Focus: ${bottleneck || 'Winning back business owner time via custom apps & AI'}
DTSTART:20261006T173000Z
DTEND:20261006T180000Z
LOCATION:Google Meet
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `operant-studio-chat-${company.toLowerCase().replace(/\s+/g, '-')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 max-w-5xl">
      
      {/* Top Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EFE8DD] border border-[#DDD3C2] rounded-full text-xs text-[#6F5F50] mb-2 font-medium">
          <span className="w-2 h-2 rounded-full bg-[#C25E38]" />
          <span>ZERO PRESSURE</span>
          <span className="text-[#A79888]">•</span>
          <span className="text-[#241F1C] font-semibold">25-Minute Discovery Chat</span>
        </div>

        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1F1B17] tracking-tight">
          Let’s Talk About Where Your Time Is Going
        </h2>
        <p className="text-xs sm:text-sm text-[#736354] mt-1 font-sans">
          A friendly conversation with Mike Turner. No sales slides, no pitch decks—just an honest look at your current admin friction and how custom tools can help.
        </p>
      </div>

      {/* Main Form or Confirmation */}
      <div className="my-auto py-2">
        {confirmed ? (
          <div className="bg-white border border-[#E8DEC8] rounded-2xl p-6 max-w-2xl mx-auto space-y-4 shadow-sm text-xs">
            <div className="flex items-center gap-3 text-[#2A7B4C]">
              <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
              <div>
                <h3 className="text-base font-bold text-[#1F1B17] font-heading">
                  You're Booked In! Look Forward to Chatting.
                </h3>
                <p className="text-xs text-[#716152]">
                  Calendar hold confirmed for {datesAvailable.find((d) => d.date === selectedDate)?.label} at {selectedTime}
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#FAF6F0] rounded-xl border border-[#EAE1D3] space-y-2 text-[#4A3E33]">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[#847565] text-[10px] uppercase font-mono font-semibold">Guest:</span>
                  <div className="text-[#1F1B17] font-semibold">{name} · {company}</div>
                </div>
                <div>
                  <span className="text-[#847565] text-[10px] uppercase font-mono font-semibold">Meeting Link Sent To:</span>
                  <div className="text-[#1F1B17] font-semibold">{email}</div>
                </div>
              </div>
              <div className="text-[11px] text-[#716152] pt-1">
                Zero prep needed. If you have an example of a messy receipt or invoice that usually wastes your afternoon, feel free to have it on hand!
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <button
                onClick={downloadCalendarInvite}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#C25E38] text-white text-xs font-semibold rounded-xl hover:bg-[#A94C29] transition-all shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save to Calendar (.ICS)</span>
              </button>

              <button
                onClick={() => setConfirmed(false)}
                className="text-xs text-[#7A6B5C] hover:text-[#1F1B17] underline"
              >
                Change details or reschedule
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white border border-[#E8DEC8] rounded-2xl p-5 max-w-3xl mx-auto shadow-xs">
            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[#6D5D4E] font-medium text-[11px] mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jack Henderson"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-1.5 bg-[#FAF6F0] border border-[#DDD2C0] rounded-lg text-[#1F1B17] text-xs focus:border-[#C25E38] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#6D5D4E] font-medium text-[11px] mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="jack@apexmechanical.co.nz"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-1.5 bg-[#FAF6F0] border border-[#DDD2C0] rounded-lg text-[#1F1B17] text-xs focus:border-[#C25E38] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#6D5D4E] font-medium text-[11px] mb-1">Company / Business *</label>
                  <input
                    type="text"
                    required
                    placeholder="Apex Plumbing & Gas"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-3 py-1.5 bg-[#FAF6F0] border border-[#DDD2C0] rounded-lg text-[#1F1B17] text-xs focus:border-[#C25E38] focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#6D5D4E] font-medium text-[11px] mb-1">
                  What's eating up the most time right now?
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="e.g. Invoicing takes us 10 hours every Sunday because technicians send unorganized photos of receipts and paper job cards..."
                  value={bottleneck}
                  onChange={(e) => setBottleneck(e.target.value)}
                  className="w-full px-3 py-1.5 bg-[#FAF6F0] border border-[#DDD2C0] rounded-lg text-[#1F1B17] text-xs focus:border-[#C25E38] focus:bg-white focus:outline-none font-sans"
                />
              </div>

              {/* Day & Time Selector */}
              <div className="pt-2 border-t border-[#F0E6D8] grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#6D5D4E] font-medium text-[11px] mb-1">Pick a Day</label>
                  <div className="grid grid-cols-2 gap-1.5">
                    {datesAvailable.map((d) => (
                      <button
                        type="button"
                        key={d.date}
                        onClick={() => setSelectedDate(d.date)}
                        className={`p-1.5 text-xs text-center rounded-lg border transition-all ${
                          selectedDate === d.date
                            ? 'bg-[#C25E38] text-white border-[#C25E38] font-bold shadow-xs'
                            : 'bg-[#FAF6F0] text-[#695A4B] border-[#DDD2C0] hover:border-[#C5B7A3]'
                        }`}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[#6D5D4E] font-medium text-[11px] mb-1">Pick a Time</label>
                  <div className="grid grid-cols-2 gap-1.5">
                    {timeSlots.map((time) => (
                      <button
                        type="button"
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-1.5 text-xs text-center rounded-lg border transition-all ${
                          selectedTime === time
                            ? 'bg-[#2E2721] text-white border-[#2E2721] font-medium shadow-xs'
                            : 'bg-[#FAF6F0] text-[#695A4B] border-[#DDD2C0] hover:border-[#C5B7A3]'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-[#78695A]">Friendly, casual video call directly with Mike.</span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-[#C25E38] text-white font-heading text-xs uppercase font-bold rounded-xl hover:bg-[#A94C29] transition-all shadow-xs disabled:opacity-50"
                >
                  {isSubmitting ? 'Reserving...' : 'Confirm 25-Min Chat →'}
                </button>
              </div>

            </form>
          </div>
        )}
      </div>

      {/* Footer Controls */}
      <div className="pt-4 border-t border-[#E8DEC8] flex items-center justify-between text-xs text-[#807062] font-medium">
        <span>STEP 06 OF 08 • DISCOVERY CHAT</span>
        {onNavigate && (
          <button
            onClick={() => onNavigate('profile')}
            className="text-[#C25E38] hover:text-[#964724] transition-colors flex items-center gap-1 font-semibold"
          >
            <span>Next: Meet Mike (The Fluff)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>

    </div>
  );
};

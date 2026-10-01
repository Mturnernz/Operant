import React, { useState } from 'react';
import { Calculator, ArrowRight, Clock, Coffee, Heart } from 'lucide-react';

interface RoiCalculatorProps {
  onApplyToBooking?: (context: string) => void;
  onNavigate?: (sectionId: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onApplyToBooking, onNavigate }) => {
  const [teamMembers, setTeamMembers] = useState(3);
  const [hoursPerDayManual, setHoursPerDayManual] = useState(2.0);
  const [hourlyWage, setHourlyWage] = useState(42);
  const [automationEfficiency, setAutomationEfficiency] = useState(70);

  // Honest, simple small business math
  const workingDaysPerYear = 240;
  const currentAnnualHours = teamMembers * hoursPerDayManual * workingDaysPerYear;
  const hoursSavedPerYear = Math.round(currentAnnualHours * (automationEfficiency / 100));
  const annualDollarsSaved = Math.round(hoursSavedPerYear * hourlyWage);

  const hoursPerWeekBack = Math.round((hoursSavedPerYear / 48) * 10) / 10;

  const handleApply = () => {
    const summary = `Time Reclaimed: ${teamMembers} team members spending ${hoursPerDayManual} hrs/day on admin. Target: ${hoursPerWeekBack} hrs/week back total (~${hoursSavedPerYear.toLocaleString()} hrs/year).`;
    if (onApplyToBooking) {
      onApplyToBooking(summary);
    }
  };

  return (
    <div className="h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 max-w-6xl">
      
      {/* Top Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EFE8DD] border border-[#DDD3C2] rounded-full text-xs text-[#6F5F50] mb-2 font-medium">
          <span className="w-2 h-2 rounded-full bg-[#C25E38]" />
          <span>ESTIMATING THE IMPACT</span>
          <span className="text-[#A79888]">•</span>
          <span className="text-[#241F1C] font-semibold">Honest Time Calculator</span>
        </div>

        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1F1B17] tracking-tight">
          How Much Time Is Manual Admin Costing You?
        </h2>
        <p className="text-xs sm:text-sm text-[#736354] mt-1 font-sans">
          Adjust the sliders below to see an estimate of the hours your team spends on repetitive paperwork and data re-entry.
        </p>
      </div>

      {/* Main 2-Column Board */}
      <div className="my-auto py-3 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Sliders Box */}
        <div className="lg:col-span-6 bg-white border border-[#E8DEC8] rounded-2xl p-5 space-y-4 shadow-xs">
          <div className="text-xs text-[#827161] font-semibold uppercase tracking-wider pb-1.5 border-b border-[#F0E6D8] font-mono">
            Your Typical Weekday
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-[#645648]">People doing repetitive admin or data entry:</span>
              <span className="text-[#201C18] font-bold font-mono">{teamMembers} People</span>
            </div>
            <input
              type="range"
              min="1"
              max="15"
              step="1"
              value={teamMembers}
              onChange={(e) => setTeamMembers(parseInt(e.target.value))}
              className="w-full h-1.5 bg-[#EAE0D3] rounded appearance-none cursor-pointer accent-[#C25E38]"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-[#645648]">Hours spent on copy-pasting, emails &amp; filing:</span>
              <span className="text-[#201C18] font-bold font-mono">{hoursPerDayManual} hrs / person</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="5"
              step="0.5"
              value={hoursPerDayManual}
              onChange={(e) => setHoursPerDayManual(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-[#EAE0D3] rounded appearance-none cursor-pointer accent-[#C25E38]"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-[#645648]">Approximate hourly wage / value of time:</span>
              <span className="text-[#201C18] font-bold font-mono">${hourlyWage} / hr</span>
            </div>
            <input
              type="range"
              min="25"
              max="95"
              step="5"
              value={hourlyWage}
              onChange={(e) => setHourlyWage(parseInt(e.target.value))}
              className="w-full h-1.5 bg-[#EAE0D3] rounded appearance-none cursor-pointer accent-[#C25E38]"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-[#645648]">Target work automated by custom tools:</span>
              <span className="text-[#C25E38] font-bold font-mono">{automationEfficiency}%</span>
            </div>
            <input
              type="range"
              min="40"
              max="85"
              step="5"
              value={automationEfficiency}
              onChange={(e) => setAutomationEfficiency(parseInt(e.target.value))}
              className="w-full h-1.5 bg-[#EAE0D3] rounded appearance-none cursor-pointer accent-[#C25E38]"
            />
          </div>
        </div>

        {/* Output Metrics Box */}
        <div className="lg:col-span-6 bg-white border border-[#E8DEC8] rounded-2xl p-5 space-y-4 shadow-xs">
          <div className="text-xs text-[#827161] font-semibold uppercase tracking-wider pb-1.5 border-b border-[#F0E6D8] font-mono flex justify-between">
            <span>Potential Capacity Reclaimed</span>
            <span className="text-[#C25E38]">ESTIMATED IMPACT</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 bg-[#FAF6F0] rounded-xl border border-[#EAE1D3]">
              <div className="text-[11px] text-[#7A6C5E] uppercase font-mono font-medium">Estimated Time Back</div>
              <div className="font-heading text-2xl font-extrabold text-[#C25E38] mt-0.5">
                {hoursPerWeekBack} hrs
              </div>
              <div className="text-[11px] text-[#78695C] mt-0.5">per business week</div>
            </div>

            <div className="p-4 bg-[#FAF6F0] rounded-xl border border-[#EAE1D3]">
              <div className="text-[11px] text-[#7A6C5E] uppercase font-mono font-medium">Annual Equivalent</div>
              <div className="font-heading text-2xl font-extrabold text-[#2A7B4C] mt-0.5">
                ${annualDollarsSaved.toLocaleString()}
              </div>
              <div className="text-[11px] text-[#78695C] mt-0.5">productive focus unlocked</div>
            </div>
          </div>

          <div className="p-3 bg-[#FAF6F0] rounded-xl text-xs text-[#5C4F42] leading-relaxed">
            <p>
              When admin is streamlined, owners and key staff can focus on winning work, servicing customers, and getting home at a reasonable hour.
            </p>
          </div>

          <button
            onClick={handleApply}
            className="w-full py-2.5 bg-[#C25E38] text-white rounded-xl text-xs uppercase tracking-wider font-semibold hover:bg-[#A94C29] transition-all shadow-xs flex items-center justify-center gap-2"
          >
            <span>Discuss This in Our Discovery Chat</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Footer Controls */}
      <div className="pt-4 border-t border-[#E8DEC8] flex items-center justify-between text-xs text-[#807062] font-medium">
        <span>STEP 04 OF 08 • ESTIMATING CAPACITY</span>
        {onNavigate && (
          <button
            onClick={() => onNavigate('blueprints')}
            className="text-[#C25E38] hover:text-[#964724] transition-colors flex items-center gap-1 font-semibold"
          >
            <span>Next: How We Solve Real Problems</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

    </div>
  );
};

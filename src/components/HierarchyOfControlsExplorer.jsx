import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Trash2, 
  Repeat, 
  Cpu, 
  FileText, 
  HardHat, 
  CheckCircle2, 
  ArrowRight,
  TrendingDown,
  Info
} from 'lucide-react';

const CONTROLS = [
  {
    id: 'elimination',
    level: '1. ELIMINATION',
    name: 'Physically Remove The Hazard',
    effectiveness: '100% Maximum Efficacy',
    color: 'bg-emerald-600 border-emerald-500 text-white',
    textColor: 'text-emerald-700',
    barWidth: 'w-full',
    icon: Trash2,
    badge: 'MOST EFFECTIVE',
    summary: 'Completely redesign the workflow, process, or machinery so the hazard no longer physically exists.',
    example: 'Eliminating manual entry into hazardous storage tanks by installing automated clean-in-place (CIP) spray heads.',
    santoshFocus: 'SANTOSH trains engineers to conduct intrinsic hazard reviews before constructing or procuring plant equipment.'
  },
  {
    id: 'substitution',
    level: '2. SUBSTITUTION',
    name: 'Replace With Less Hazardous Material',
    effectiveness: '75% High Efficacy',
    color: 'bg-teal-600 border-teal-500 text-white',
    textColor: 'text-teal-700',
    barWidth: 'w-full sm:w-[88%]',
    icon: Repeat,
    badge: 'HIGH PROTECTION',
    summary: 'Replace hazardous chemicals, extreme operating pressures, or dangerous procedures with inherently safer alternatives.',
    example: 'Replacing toxic solvent-based degreasers with water-based biodegradable citrus cleansers.',
    santoshFocus: 'Curriculum covers chemical SDS analysis and substitution feasibility assessments across operational pipelines.'
  },
  {
    id: 'engineering',
    level: '3. ENGINEERING CONTROLS',
    name: 'Isolate People From The Hazard',
    effectiveness: '50% Moderate Efficacy',
    color: 'bg-sky-600 border-sky-500 text-white',
    textColor: 'text-sky-700',
    barWidth: 'w-full sm:w-[76%]',
    icon: Cpu,
    badge: 'ENGINEERED BARRIERS',
    summary: 'Install physical barriers, acoustic enclosures, interlocked safety guards, and local exhaust ventilation (LEV).',
    example: 'Installing interlocked acoustic barriers around high-decibel stamping presses and automated machine guards.',
    santoshFocus: 'Hands-on training in machine guarding standards, ventilation capture velocities, and safety interlock verification.'
  },
  {
    id: 'administrative',
    level: '4. ADMINISTRATIVE CONTROLS',
    name: 'Change How People Work',
    effectiveness: '25% Low Efficacy',
    color: 'bg-amber-600 border-amber-500 text-white',
    textColor: 'text-amber-700',
    barWidth: 'w-full sm:w-[64%]',
    icon: FileText,
    badge: 'PROCEDURAL',
    summary: 'Establish operating procedures, shift rotation limits, Permit-to-Work (PTW) protocols, and warning signs.',
    example: 'Rotating workers in high-heat furnace environments every 30 minutes and enforcing strict PTW signoffs.',
    santoshFocus: 'Teaching the architecture of robust PTW programs, Job Safety Analysis (JSA), and frontline behavioral safety.'
  },
  {
    id: 'ppe',
    level: '5. PERSONAL PROTECTIVE EQUIPMENT (PPE)',
    name: 'Protect Worker With Equipment',
    effectiveness: '10% Baseline Last Defense',
    color: 'bg-rose-600 border-rose-500 text-white',
    textColor: 'text-rose-700',
    barWidth: 'w-full sm:w-[52%]',
    icon: HardHat,
    badge: 'LAST LINE OF DEFENSE',
    summary: 'Deploy certified protective equipment (SCBA, fall arrest harnesses, arc flash suits, respirators).',
    example: 'Issuing EN 397 safety helmets, cut-level 5 gloves, and particulate respirators as secondary barrier protection.',
    santoshFocus: 'SANTOSH emphasizes that PPE is strictly the final barrier; true hazard mitigation happens upstream at controls 1–3.'
  }
];

export default function HierarchyOfControlsExplorer({ onOpenEnquireModal }) {
  const [selectedId, setSelectedId] = useState('elimination');
  const activeControl = CONTROLS.find(c => c.id === selectedId) || CONTROLS[0];
  const Icon = activeControl.icon;

  return (
    <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden nebosh-card">
      
      {/* Header */}
      <div className="bg-[#002b7f] text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#001f5c]">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#53bbdf]/20 text-[#81ccdd] border border-[#53bbdf]/30 text-[11px] font-mono font-bold uppercase tracking-wider">
              Systematic Safety Principles
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Hierarchy of Risk Controls Explorer
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 max-w-2xl font-normal leading-relaxed">
            International OHS frameworks mandate that safety begins with hazard elimination, not just handing out personal protective gear. Click any level to inspect our methodology.
          </p>
        </div>

        <div className="text-left md:text-right">
          <span className="text-[10px] font-mono text-slate-300 block uppercase">Pedagogical Standard</span>
          <span className="text-sm font-bold text-white">ISO 45001 / OSHA 1910</span>
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left: The Interactive Inverted Pyramid (6 cols) */}
        <div className="lg:col-span-6 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-500 mb-1">
            <span>MOST EFFECTIVE (ELIMINATION)</span>
            <TrendingDown className="w-4 h-4 text-[#0083A9]" />
            <span>LEAST EFFECTIVE (PPE)</span>
          </div>

          <div className="space-y-2.5">
            {CONTROLS.map((control) => {
              const isSelected = control.id === selectedId;
              const CtrlIcon = control.icon;

              return (
                <div key={control.id} className="flex justify-center">
                  <button
                    onClick={() => setSelectedId(control.id)}
                    className={`h-14 ${control.barWidth} rounded-xl px-4 flex items-center justify-between transition-all cursor-pointer border shadow-sm ${
                      isSelected
                        ? `${control.color} ring-4 ring-[#002b7f]/20 scale-102 shadow-lg z-10`
                        : 'bg-slate-100 hover:bg-slate-200/90 text-slate-800 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <CtrlIcon className={`w-5 h-5 flex-shrink-0 ${isSelected ? 'text-white' : 'text-slate-600'}`} />
                      <div className="text-left">
                        <span className={`text-[10px] font-mono uppercase block ${isSelected ? 'text-white/80' : 'text-slate-500'}`}>
                          {control.level}
                        </span>
                        <span className={`text-xs font-bold truncate block ${isSelected ? 'text-white' : 'text-slate-800'}`}>
                          {control.name}
                        </span>
                      </div>
                    </div>

                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded hidden sm:inline-block flex-shrink-0 ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-white text-slate-600 border border-slate-200'
                    }`}>
                      {control.badge}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          <p className="text-[11px] text-slate-500 text-center font-mono pt-2">
            Click any bar in the hierarchy to view engineering application details.
          </p>
        </div>

        {/* Right: Dynamic Depth Inspector (6 cols) */}
        <div className="lg:col-span-6 space-y-4 p-6 sm:p-7 rounded-2xl bg-[#f8fafc] border border-slate-200">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#e8f2f8] text-[#002b7f] flex items-center justify-center border border-[#cfe5ee] shadow-sm">
                <Icon className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#0083A9] uppercase">
                  {activeControl.level}
                </span>
                <h4 className="text-lg font-bold text-[#002b7f]">
                  {activeControl.name}
                </h4>
              </div>
            </div>
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 shadow-sm">
              {activeControl.effectiveness}
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="space-y-1">
              <span className="font-mono text-slate-500 font-bold uppercase text-[10px] block">
                Control Description:
              </span>
              <p className="text-slate-700 leading-relaxed font-normal p-3 rounded-xl bg-white border border-slate-200">
                {activeControl.summary}
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-slate-500 font-bold uppercase text-[10px] block">
                Workplace Implementation Example:
              </span>
              <p className="text-slate-700 leading-relaxed font-normal p-3 rounded-xl bg-white border border-slate-200">
                {activeControl.example}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#eef6fa] border border-[#cfe5ee] space-y-1">
              <span className="font-mono text-[#002b7f] font-bold uppercase text-[10px] block flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0083A9]" />
                How SANTOSH Trains This:
              </span>
              <p className="text-[#002b7f] font-medium leading-relaxed">
                {activeControl.santoshFocus}
              </p>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => onOpenEnquireModal('Risk Assessment')}
              className="btn-primary w-full py-3 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Enquire About Applied Risk Controls</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

import React, { useState } from 'react';
import { 
  AlertTriangle, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  ArrowRight, 
  Sparkles, 
  RefreshCw,
  Sliders,
  Activity,
  Flame,
  Wrench,
  Info
} from 'lucide-react';

const LIKELIHOOD_LEVELS = [
  { val: 1, label: '1 - Rare', desc: 'Conceivable only in extreme conditions' },
  { val: 2, label: '2 - Unlikely', desc: 'Could occur occasionally in abnormal shifts' },
  { val: 3, label: '3 - Possible', desc: 'Might occur at some point during normal operations' },
  { val: 4, label: '4 - Likely', desc: 'Easily arises in regular field execution' },
  { val: 5, label: '5 - Almost Certain', desc: 'Expected to occur frequently or continuously' },
];

const SEVERITY_LEVELS = [
  { val: 1, label: '1 - Minor', desc: 'First aid only, zero lost time or disruption' },
  { val: 2, label: '2 - Moderate', desc: 'Medical treatment, reversible injury, short downtime' },
  { val: 3, label: '3 - Serious', desc: 'Lost time injury, specialized medical care required' },
  { val: 4, label: '4 - Major', desc: 'Irreversible injury, partial impairment, extensive damage' },
  { val: 5, label: '5 - Catastrophic', desc: 'Fatalities, permanent total disability, plant shutdown' },
];

const PRESETS = [
  {
    name: 'Hot Work Near Flammable Storage',
    l: 4,
    s: 5,
    sector: 'Process & Refinery',
    course: 'Fire & Safety Training',
    mitigation: 'Implement hot work permit (PTW), gas testing, spark containment barriers, and continuous fire watch.'
  },
  {
    name: 'Confined Space Sump Maintenance',
    l: 4,
    s: 4,
    sector: 'Manufacturing',
    course: 'Incident Investigation',
    mitigation: 'Continuous atmospheric 4-gas monitoring, forced positive ventilation, mechanical retrieval harness, trained standby attendant.'
  },
  {
    name: 'High-Voltage Transformer Maintenance',
    l: 2,
    s: 5,
    sector: 'Power & Utilities',
    course: 'Risk Assessment',
    mitigation: 'Lockout/Tagout (LOTO), electrical boundary zero-energy verification, arc flash category 4 suit.'
  },
  {
    name: 'Forklift & Pedestrian Crossing',
    l: 3,
    s: 3,
    sector: 'Logistics',
    course: 'HSE Training',
    mitigation: 'Physical crash guardrails, optical blue spotlight projection, designated speed throttles and floor line marking.'
  },
  {
    name: 'Office Ergonomics & Display Work',
    l: 2,
    s: 1,
    sector: 'Corporate',
    course: 'Safety Management',
    mitigation: 'Ergonomic task chair setup, display height alignment, structured micro-break schedules.'
  }
];

function getRiskCategory(score) {
  if (score >= 15) {
    return {
      level: 'CRITICAL / EXTREME',
      color: 'bg-rose-600 text-white',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
      cellBg: 'bg-rose-500 text-white hover:bg-rose-600',
      action: 'STOP WORK IMMEDIATELY. Task must not commence. Executive safety clearance and redundant engineering controls required before resumption.',
      hierarchy: 'Elimination or Full Engineering Redesign Required',
      urgency: 'Immediate Priority 1 Escalation'
    };
  }
  if (score >= 10) {
    return {
      level: 'HIGH RISK',
      color: 'bg-amber-600 text-white',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
      cellBg: 'bg-amber-500 text-white hover:bg-amber-600',
      action: 'Urgent risk control plan required. Implement engineering barriers and specific Permit-To-Work (PTW) signed by Area Authority.',
      hierarchy: 'Engineering Controls & Strict Administrative Safeguards',
      urgency: 'Action within 24 Hours'
    };
  }
  if (score >= 5) {
    return {
      level: 'MODERATE RISK',
      color: 'bg-yellow-500 text-slate-900',
      badgeColor: 'bg-yellow-100 text-yellow-800 border-yellow-300',
      cellBg: 'bg-yellow-400 text-slate-900 hover:bg-yellow-500',
      action: 'Manageable with documented standard operating procedures (SOP), toolbox talks, and certified frontline PPE.',
      hierarchy: 'Administrative Controls & Certified PPE',
      urgency: 'Scheduled Routine Management'
    };
  }
  return {
    level: 'LOW RISK',
    color: 'bg-emerald-600 text-white',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    cellBg: 'bg-emerald-500 text-white hover:bg-emerald-600',
    action: 'Acceptable risk level. Continue periodic safety walkthroughs and maintain baseline house-keeping guidelines.',
    hierarchy: 'Baseline Monitoring & Periodic Audits',
    urgency: 'Continuous Baseline Review'
  };
}

export default function RiskMatrixSimulator({ onOpenEnquireModal }) {
  const [likelihood, setLikelihood] = useState(4);
  const [severity, setSeverity] = useState(4);
  const [activePreset, setActivePreset] = useState(PRESETS[1].name);

  const score = likelihood * severity;
  const category = getRiskCategory(score);

  const handleCellClick = (l, s) => {
    setLikelihood(l);
    setSeverity(s);
    setActivePreset(null);
  };

  const handleApplyPreset = (preset) => {
    setLikelihood(preset.l);
    setSeverity(preset.s);
    setActivePreset(preset.name);
  };

  return (
    <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden nebosh-card">
      
      {/* Top Header Bar */}
      <div className="bg-[#002b7f] text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#001f5c]">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#53bbdf]/20 text-[#81ccdd] border border-[#53bbdf]/30 text-[11px] font-mono font-bold uppercase tracking-wider">
              Interactive OHS Tool
            </span>
            <span className="text-xs text-slate-300 font-mono hidden sm:inline">
              ISO 45001 / British HSE Standard Matrix
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            5×5 Workplace Risk Assessment Simulator
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 max-w-2xl font-normal leading-relaxed">
            Click any cell in the 5×5 matrix or select a real industrial hazard preset below to test risk scores, hierarchy of controls, and mitigation strategies.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-right">
            <span className="text-[10px] text-slate-300 font-mono uppercase block">Calculated Rating</span>
            <span className="text-2xl font-extrabold text-white font-mono leading-none">
              {score} <span className="text-xs text-slate-300 font-normal">/ 25</span>
            </span>
          </div>
        </div>
      </div>

      {/* Preset Scenario Selector Buttons */}
      <div className="bg-[#f0f7fb] border-b border-[#cfe5ee] px-6 py-3.5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2.5">
          <span className="text-xs font-bold text-[#002b7f] font-mono uppercase flex items-center gap-1.5 flex-shrink-0">
            <Sliders className="w-3.5 h-3.5 text-[#0083A9]" />
            Test Scenarios:
          </span>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-thin">
            {PRESETS.map((preset) => {
              const isSelected = activePreset === preset.name;
              return (
                <button
                  key={preset.name}
                  onClick={() => handleApplyPreset(preset)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#002b7f] text-white shadow-sm'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  <span>{preset.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Simulator Grid & Output Panel */}
      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: 5x5 Interactive Matrix Grid (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 font-mono">
              Matrix: Likelihood × Severity
            </span>
            <span className="text-[11px] text-[#0083A9] font-mono sm:hidden">
              ⟷ Swipe or Tap
            </span>
            <span className="text-[11px] text-slate-500 font-mono hidden sm:inline">
              Click cell to evaluate
            </span>
          </div>

          {/* Mobile Quick Tap Controls */}
          <div className="sm:hidden p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[#002b7f] font-mono">Likelihood (L):</span>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLikelihood(l); setActivePreset(null); }}
                    className={`w-7 h-7 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      likelihood === l ? 'bg-[#002b7f] text-white shadow-sm' : 'bg-white text-slate-700 border border-slate-200'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[#002b7f] font-mono">Severity (S):</span>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button
                    key={s}
                    onClick={() => { setSeverity(s); setActivePreset(null); }}
                    className={`w-7 h-7 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      severity === s ? 'bg-[#002b7f] text-white shadow-sm' : 'bg-white text-slate-700 border border-slate-200'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-x-auto pb-2">
            <div className="min-w-[480px]">
              
              {/* Matrix Column Headers (Severity) */}
              <div className="grid grid-cols-6 gap-2 mb-2">
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase text-center flex items-center justify-center">
                  L \ S
                </div>
                {SEVERITY_LEVELS.map((s) => (
                  <div 
                    key={s.val} 
                    className={`p-2 rounded-lg text-center transition-all ${
                      severity === s.val ? 'bg-[#002b7f] text-white font-bold' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    <span className="text-xs font-mono font-bold block">S{s.val}</span>
                    <span className="text-[10px] truncate block opacity-90">{s.label.split(' - ')[1]}</span>
                  </div>
                ))}
              </div>

              {/* Matrix Rows (Likelihood from 5 down to 1) */}
              {[5, 4, 3, 2, 1].map((lVal) => {
                const lObj = LIKELIHOOD_LEVELS.find(l => l.val === lVal);
                return (
                  <div key={lVal} className="grid grid-cols-6 gap-2 mb-2 items-center">
                    
                    {/* Row Label (Likelihood) */}
                    <div 
                      className={`p-2 rounded-lg text-center transition-all ${
                        likelihood === lVal ? 'bg-[#002b7f] text-white font-bold' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      <span className="text-xs font-mono font-bold block">L{lVal}</span>
                      <span className="text-[10px] truncate block opacity-90">{lObj.label.split(' - ')[1]}</span>
                    </div>

                    {/* 5 Severity Cells for this Likelihood */}
                    {[1, 2, 3, 4, 5].map((sVal) => {
                      const cellScore = lVal * sVal;
                      const cellCat = getRiskCategory(cellScore);
                      const isSelected = likelihood === lVal && severity === sVal;

                      return (
                        <button
                          key={sVal}
                          onClick={() => handleCellClick(lVal, sVal)}
                          className={`h-14 rounded-xl flex flex-col items-center justify-center transition-all cursor-pointer relative ${cellCat.cellBg} ${
                            isSelected 
                              ? 'ring-4 ring-[#002b7f] scale-105 shadow-xl z-10 font-extrabold' 
                              : 'opacity-90 hover:opacity-100 hover:scale-102 shadow-sm'
                          }`}
                        >
                          <span className="text-base font-extrabold font-mono leading-none">
                            {cellScore}
                          </span>
                          <span className="text-[9px] uppercase tracking-tighter opacity-80 mt-1">
                            {cellCat.level.split(' ')[0]}
                          </span>
                          {isSelected && (
                            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-white text-[#002b7f] flex items-center justify-center text-[10px] font-bold shadow-md">
                              ✓
                            </span>
                          )}
                        </button>
                      );
                    })}

                  </div>
                );
              })}

            </div>
          </div>

          {/* Matrix Legend */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-[11px] font-mono">
            <div className="flex items-center gap-2 p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800">
              <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
              <span>1-4: Low Risk</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-yellow-50 border border-yellow-200 text-yellow-800">
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span>5-9: Moderate</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-800">
              <span className="w-3 h-3 rounded-full bg-amber-500"></span>
              <span>10-14: High Risk</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-rose-50 border border-rose-200 text-rose-800">
              <span className="w-3 h-3 rounded-full bg-rose-500"></span>
              <span>15-25: Extreme</span>
            </div>
          </div>

        </div>

        {/* Right Side: Dynamic Evaluation & Action Protocol (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          <div className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200/90 space-y-4">
            
            {/* Risk Rating Header */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <span className="text-[11px] font-mono font-bold text-slate-500 uppercase">
                  Assessment Outcome
                </span>
                <h4 className="text-xl font-bold text-[#002b7f]">
                  Risk Score: {score} / 25
                </h4>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold font-mono border ${category.badgeColor}`}>
                {category.level}
              </span>
            </div>

            {/* Severity & Likelihood Summary */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <span className="text-slate-400 font-mono text-[10px] block uppercase">Likelihood</span>
                <span className="font-bold text-slate-800">{LIKELIHOOD_LEVELS[likelihood - 1].label}</span>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{LIKELIHOOD_LEVELS[likelihood - 1].desc}</p>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <span className="text-slate-400 font-mono text-[10px] block uppercase">Severity</span>
                <span className="font-bold text-slate-800">{SEVERITY_LEVELS[severity - 1].label}</span>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{SEVERITY_LEVELS[severity - 1].desc}</p>
              </div>
            </div>

            {/* Mandatory Protocol Directive */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-slate-700 font-mono uppercase block flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0083A9]" />
                Operational Action Protocol:
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed p-3.5 rounded-xl bg-white border border-slate-200 font-normal">
                {category.action}
              </p>
            </div>

            {/* Hierarchy of Controls Directive */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-slate-700 font-mono uppercase block">
                Hierarchy of Control Focus:
              </span>
              <div className="p-3 rounded-xl bg-[#eef6fa] border border-[#cfe5ee] text-xs text-[#002b7f] font-semibold flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#0083A9] flex-shrink-0" />
                <span>{category.hierarchy}</span>
              </div>
            </div>

            {/* Active Preset Scenario Context if selected */}
            {activePreset && (
              <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs space-y-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase font-bold block">
                  Preset Application Context:
                </span>
                <p className="text-slate-700 font-normal">
                  {PRESETS.find(p => p.name === activePreset)?.mitigation}
                </p>
              </div>
            )}

            {/* Relevant Academy Training CTA */}
            <div className="pt-2 border-t border-slate-200">
              <button
                onClick={() => onOpenEnquireModal('Risk Assessment')}
                className="btn-primary w-full py-3 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Learn Risk Mitigation at SANTOSH</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Flame, 
  AlertTriangle, 
  SearchCheck, 
  Briefcase, 
  BellRing, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  HardHat, 
  Layers, 
  Sliders,
  ChevronRight,
  Sparkles,
  Target,
  FileCheck
} from 'lucide-react';
import { CORE_PROGRAMS } from '../data/academyData';

const iconMap = {
  ShieldCheck,
  Flame,
  AlertTriangle,
  SearchCheck,
  Briefcase,
  BellRing,
};

const SCENARIOS = {
  'hse-training': {
    title: 'Offshore Rig Drill Floor Safety Audit',
    setting: 'Offshore Drilling Platform / Marine Deck',
    challenge: 'High pressure mud lines, rotating machinery, and simultaneous crane lifting operations in adverse sea state.',
    intervention: 'Implementation of Permit-To-Work (PTW) barrier isolation, daily Task Risk Assessment (TRA), and mandatory stop-work authorization protocol.',
    tools: ['Job Safety Analysis (JSA)', 'Permit-to-Work (PTW)', 'Dynamic Risk Assessment Log']
  },
  'fire-safety': {
    title: 'Solvent Storage Fire Suppression Deployment',
    setting: 'Chemical Processing & Paint Formulation Facility',
    challenge: 'Static electricity discharge risk during solvent decanting with flammable vapor accumulation above lower explosive limit (LEL).',
    intervention: 'Earthing and bonding verification, deluge sprinkler trip inspection, and CO2 clean-agent total flooding system testing.',
    tools: ['Flammable Gas Meter', 'Dry Chemical Powder & CO2 Units', 'Class B Foam Proposer']
  },
  'risk-assessment': {
    title: 'Automated Robotic Assembly Cell Hazards',
    setting: 'Heavy Automotive Manufacturing Facility',
    challenge: 'Human-robot collaborative zone hazard where light curtains and interlocks require periodic reliability verification.',
    intervention: 'Systematic 5x5 risk scoring, SIL/PL safety circuit validation, and physical barrier interlock testing.',
    tools: ['5x5 Risk Matrix', 'Bowtie Analysis Diagram', 'Hierarchy of Controls Ledger']
  },
  'incident-investigation': {
    title: 'Overhead Gantry Crane Near-Miss Inquest',
    setting: 'Logistics Intermodal Rail Terminal',
    challenge: 'Hoist wire rope strand displacement discovered during loaded container transfer without catastrophic drop.',
    intervention: 'Photographic evidence preservation, non-destructive wire rope inspection, and 5-Why / Ishikawa root cause causal factor tree analysis.',
    tools: ['5-Why Causal Tree', 'Ishikawa Fishbone Chart', 'Photogrammetry Evidence Kit']
  },
  'safety-management': {
    title: 'ISO 45001 Safety Management Transition',
    setting: 'Multinational Manufacturing Group (4,000 Workers)',
    challenge: 'Fragmented local safety policies resulting in under-reporting of high-potential near misses across 6 plant sites.',
    intervention: 'Unified occupational safety KPI dashboard, proactive lagging/leading indicator tracking, and executive governance review.',
    tools: ['Executive HSE Scorecard', 'Legal Compliance Register', 'Management Review Matrix']
  },
  'emergency-response': {
    title: 'Toxic Ammonia Refrigeration Leak Containment',
    setting: 'Cold Storage Logistics Distribution Center',
    challenge: 'Anhydrous ammonia valve seal failure producing rapid 300 PPM atmospheric concentration in enclosed compressor bay.',
    intervention: 'Immediate Level 3 SCBA deployment, vapor curtain fog nozzle water curtain activation, and perimeter evacuation muster.',
    tools: ['Level A Hazmat Suit', 'Self-Contained Breathing Apparatus (SCBA)', 'Ammonia Gas Detection Tube']
  }
};

export default function DisciplineCommandCenter({ setCurrentPage, onOpenEnquireModal }) {
  const [selectedId, setSelectedId] = useState(CORE_PROGRAMS[0].id);
  const [activeSubTab, setActiveSubTab] = useState('curriculum'); // 'curriculum' | 'scenario' | 'tools'

  const activeProgram = CORE_PROGRAMS.find(p => p.id === selectedId) || CORE_PROGRAMS[0];
  const ActiveIcon = iconMap[activeProgram.iconName] || ShieldCheck;
  const scenario = SCENARIOS[activeProgram.id] || SCENARIOS['hse-training'];

  return (
    <div className="rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-2xl overflow-hidden w-full max-w-full">
      
      {/* Top Discipline Navigation Bar */}
      <div className="p-5 sm:p-8 bg-slate-950/80 border-b border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4 w-full max-w-full">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#53bbdf] font-mono uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Academy Command Deck</span>
          </div>
          <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
            Specialised Training Disciplines
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Switch between core disciplines to inspect applied worksite scenarios, inspection toolkits, and syllabus competencies.
          </p>
        </div>

        <button
          onClick={() => {
            setCurrentPage('courses');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#53bbdf] hover:text-white transition-colors cursor-pointer self-start md:self-auto py-2 px-3.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 shrink-0"
        >
          <span>Full Course Directory</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Program Selector Pills */}
      <div className="px-4 sm:px-6 py-3 sm:py-4 bg-slate-900/90 border-b border-slate-800 overflow-x-auto scrollbar-thin w-full max-w-full">
        <div className="flex items-center gap-2 min-w-max">
          {CORE_PROGRAMS.map((prog) => {
            const Icon = iconMap[prog.iconName] || ShieldCheck;
            const isSelected = prog.id === selectedId;
            return (
              <button
                key={prog.id}
                onClick={() => setSelectedId(prog.id)}
                className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shrink-0 ${
                  isSelected
                    ? 'bg-[#002b7f] text-white shadow-lg border border-[#53bbdf]/50 scale-102'
                    : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-[#81ccdd]' : 'text-slate-400'}`} />
                <span>{prog.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Command Deck Showcase Area */}
      <div className="p-4 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full max-w-full min-w-0">
        
        {/* Left Column: Visual 3D Frame & Operational Badges (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4 w-full min-w-0">
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-xl group h-[280px] sm:h-[380px] w-full">
            <img 
              src={activeProgram.image} 
              alt={activeProgram.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                if (activeProgram.fallbackImage) {
                  e.currentTarget.src = activeProgram.fallbackImage;
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
            
            {/* Top Left Discipline Badge */}
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-700 text-xs font-bold text-white shadow-md">
              <ActiveIcon className="w-4 h-4 text-[#53bbdf]" />
              <span>{activeProgram.badge}</span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-5 left-5 right-5 space-y-1.5">
              <span className="text-[10px] font-mono text-[#53bbdf] uppercase tracking-wider font-bold">
                APPLIED FIELD DISCIPLINE
              </span>
              <h4 className="text-xl font-extrabold text-white leading-tight">
                {activeProgram.title}
              </h4>
              <p className="text-xs text-slate-300 font-normal line-clamp-2">
                {activeProgram.shortDescription}
              </p>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-2.5 text-center">
            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
              <span className="text-[10px] font-mono text-slate-400 block uppercase">Format</span>
              <span className="text-xs font-bold text-white mt-0.5 block truncate">
                {activeProgram.trainingFormat.split(' ')[0]} Delivery
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
              <span className="text-[10px] font-mono text-slate-400 block uppercase">Assessment</span>
              <span className="text-xs font-bold text-[#53bbdf] mt-0.5 block truncate">
                Practical / Case
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
              <span className="text-[10px] font-mono text-slate-400 block uppercase">Access</span>
              <span className="text-xs font-bold text-emerald-400 mt-0.5 block truncate">
                24/7 Worldwide
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Deep Inspection Details with Tabs (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6 bg-slate-800/40 p-4 sm:p-8 rounded-2xl border border-slate-700/60 w-full min-w-0">
          
          <div className="space-y-5">
            {/* Sub-Tabs: Curriculum vs Real Scenario vs Toolkits */}
            <div className="flex items-center gap-2 border-b border-slate-700/80 pb-3 overflow-x-auto scrollbar-none">
              <button
                onClick={() => setActiveSubTab('curriculum')}
                className={`px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeSubTab === 'curriculum'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Curriculum Modules
              </button>
              <button
                onClick={() => setActiveSubTab('scenario')}
                className={`px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeSubTab === 'scenario'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Field Scenario Simulation
              </button>
              <button
                onClick={() => setActiveSubTab('tools')}
                className={`px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeSubTab === 'tools'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Operational Toolkits
              </button>
            </div>

            {/* TAB 1: CURRICULUM */}
            {activeSubTab === 'curriculum' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <ActiveIcon className="w-5 h-5 text-[#53bbdf]" />
                    <span>Key Learning Objectives &amp; Competencies</span>
                  </h4>
                  <p className="text-xs text-slate-300 font-normal">
                    Targeted modules aligned with international occupational health and safety standards.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {activeProgram.learningAreas.map((area, idx) => (
                    <div 
                      key={idx} 
                      className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/70 text-xs text-slate-200 flex items-start gap-2.5 hover:border-[#53bbdf]/50 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#53bbdf] flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: FIELD SCENARIO */}
            {activeSubTab === 'scenario' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#53bbdf] uppercase font-bold">
                      Worksite Scenario Study
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {scenario.setting}
                    </span>
                  </div>
                  <h5 className="text-base font-bold text-white">
                    {scenario.title}
                  </h5>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-rose-900/40 space-y-1">
                    <span className="text-[10px] font-mono text-rose-400 uppercase font-bold block">
                      Hazard Profile &amp; High-Potential Risk:
                    </span>
                    <p className="text-slate-300 font-normal leading-relaxed">
                      {scenario.challenge}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-emerald-900/40 space-y-1">
                    <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block">
                      SANTOSH Applied Control Intervention:
                    </span>
                    <p className="text-slate-300 font-normal leading-relaxed">
                      {scenario.intervention}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: OPERATIONAL TOOLKITS */}
            {activeSubTab === 'tools' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white">
                    Audit-Ready Artifacts &amp; Field Tools
                  </h4>
                  <p className="text-xs text-slate-300 font-normal">
                    Tools that participants learn to generate, inspect, and deploy on the job.
                  </p>
                </div>

                <div className="space-y-2.5 pt-1">
                  {scenario.tools.map((tool, idx) => (
                    <div 
                      key={idx} 
                      className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700 flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <FileCheck className="w-4 h-4 text-[#53bbdf]" />
                        <span className="font-semibold text-white">{tool}</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                        STANDARD TEMPLATE
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Enrollment Desk: 24/7 Worldwide Ingestion</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => onOpenEnquireModal(activeProgram.title)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0083A9] hover:bg-[#53bbdf] text-white hover:text-slate-900 font-bold text-xs transition-all shadow-md active:scale-95 cursor-pointer"
              >
                Enquire for {activeProgram.title}
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

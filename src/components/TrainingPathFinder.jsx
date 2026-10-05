import React, { useState } from 'react';
import { 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  HardHat, 
  ShieldCheck, 
  Award, 
  Sparkles,
  Layers,
  Clock,
  Briefcase
} from 'lucide-react';
import { CORE_PROGRAMS } from '../data/academyData';

const ROLES = [
  { id: 'frontline', label: 'Frontline Worker / Technician', icon: HardHat, desc: 'Direct worksite execution & hazard awareness' },
  { id: 'supervisor', label: 'Safety Officer / Site Supervisor', icon: ShieldCheck, desc: 'Inspection, Permit-to-Work, and compliance oversight' },
  { id: 'manager', label: 'HSE Manager / Lead Auditor', icon: Briefcase, desc: 'Risk registers, root cause inquests, and audit readiness' },
  { id: 'director', label: 'Operations Director / Plant Head', icon: Award, desc: 'Corporate governance, safety KPIs, and liability protection' }
];

const GOALS = [
  { id: 'fire', label: 'Fire & Chemical Hazard Containment', category: 'Emergency & Fire' },
  { id: 'risk', label: 'Quantitative Risk Assessment & JSA', category: 'Hazard Control' },
  { id: 'incident', label: 'Root Cause Investigation & Inquests', category: 'Investigation' },
  { id: 'governance', label: 'ISO 45001 & Management Systems', category: 'Leadership & Systems' }
];

const PATHWAYS = {
  'frontline-fire': {
    title: 'Frontline Fire Prevention & Life Safety Certification',
    primaryCourse: 'Fire & Safety Training',
    secondaryCourse: 'Emergency Response',
    timeline: 'Modular 24/7 Access',
    skills: ['Extinguisher deployment', 'Flammable vapor checks', 'Emergency muster procedures'],
    overview: 'Ideal for site operators handling fuels, chemicals, or hot work requiring active suppression reflexes.'
  },
  'frontline-risk': {
    title: 'Frontline Hazard Identification & JSA Fundamentals',
    primaryCourse: 'HSE Training',
    secondaryCourse: 'Risk Assessment',
    timeline: 'Modular 24/7 Access',
    skills: ['Dynamic worksite risk spotting', 'Toolbox talk execution', 'Hierarchy of control basics'],
    overview: 'Empowers field teams to recognize mechanical, electrical, and fall hazards before task initiation.'
  },
  'frontline-incident': {
    title: 'Initial Incident Scene Preservation & Near-Miss Reporting',
    primaryCourse: 'Incident Investigation',
    secondaryCourse: 'HSE Training',
    timeline: 'Modular 24/7 Access',
    skills: ['Near-miss logging', 'Scene freeze protocols', 'Witness statement basics'],
    overview: 'Cultivates a zero-blame reporting culture that captures early warning signs across plant shifts.'
  },
  'frontline-governance': {
    title: 'Operational Safety Standards & Workplace Compliance',
    primaryCourse: 'HSE Training',
    secondaryCourse: 'Safety Management',
    timeline: 'Modular 24/7 Access',
    skills: ['SOP adherence', 'PPE compliance checks', 'Stop-work authority'],
    overview: 'Bridges statutory safety requirements with daily manufacturing and construction routines.'
  },
  'supervisor-fire': {
    title: 'Industrial Fire Warden & Emergency Team Leader',
    primaryCourse: 'Fire & Safety Training',
    secondaryCourse: 'Emergency Response',
    timeline: 'Executive Cohort Track',
    skills: ['Hot work permit issuance', 'Fire risk zoning', 'Emergency team coordination'],
    overview: 'Prepares safety leads to supervise hazardous operations and lead rapid tactical response.'
  },
  'supervisor-risk': {
    title: 'Certified Risk Assessment & Job Safety Analysis (JSA) Specialist',
    primaryCourse: 'Risk Assessment',
    secondaryCourse: 'HSE Training',
    timeline: 'Executive Cohort Track',
    skills: ['5x5 Matrix quantitative scoring', 'PTW verification', 'Bowtie hazard barrier design'],
    overview: 'Comprehensive risk qualification for safety engineers overseeing high-risk operational permits.'
  },
  'supervisor-incident': {
    title: 'Field Incident Investigator & Evidence Analyst',
    primaryCourse: 'Incident Investigation',
    secondaryCourse: 'Risk Assessment',
    timeline: 'Executive Cohort Track',
    skills: ['5-Why analysis', 'Sequence of events mapping', 'Corrective action tracking'],
    overview: 'Equips supervisors to lead forensic examinations of worksite near-misses and equipment failures.'
  },
  'supervisor-governance': {
    title: 'Site HSE Leadership & Compliance Supervision',
    primaryCourse: 'Safety Management',
    secondaryCourse: 'HSE Training',
    timeline: 'Executive Cohort Track',
    skills: ['Site audit checklists', 'Subcontractor safety vetting', 'Safety performance KPI logging'],
    overview: 'Designed for safety officers managing multi-crew worksites with continuous compliance audits.'
  },
  'manager-fire': {
    title: 'Enterprise Fire Safety Strategy & Facility Life Protection',
    primaryCourse: 'Fire & Safety Training',
    secondaryCourse: 'Emergency Response',
    timeline: 'Mastery Curriculum',
    skills: ['Fixed deluge system audits', 'Toxic plume dispersion modeling', 'Regulatory compliance registers'],
    overview: 'Strategic training for HSE managers governing high-hazard chemical and energy complexes.'
  },
  'manager-risk': {
    title: 'Enterprise Risk Governance & ALARP Protocol Specialist',
    primaryCourse: 'Risk Assessment',
    secondaryCourse: 'Safety Management',
    timeline: 'Mastery Curriculum',
    skills: ['As Low As Reasonably Practicable (ALARP)', 'Major Accident Hazard (MAH) reviews', 'Safety case compilation'],
    overview: 'Empowers safety directors to present quantifiable risk reductions to regulatory authorities.'
  },
  'manager-incident': {
    title: 'Lead Forensic Incident Investigator & RCA Specialist',
    primaryCourse: 'Incident Investigation',
    secondaryCourse: 'Safety Management',
    timeline: 'Mastery Curriculum',
    skills: ['Tripod Beta / Ishikawa analysis', 'Human factor analysis', 'Legal inquest defense documentation'],
    overview: 'The gold standard for safety professionals conducting formal root cause inquests.'
  },
  'manager-governance': {
    title: 'ISO 45001 Lead HSE Management Systems Architect',
    primaryCourse: 'Safety Management',
    secondaryCourse: 'Risk Assessment',
    timeline: 'Mastery Curriculum',
    skills: ['ISO 45001 gap analysis', 'Leading/lagging KPI dashboards', 'Executive safety reporting'],
    overview: 'Prepares organizational safety managers to build, certify, and sustain world-class safety cultures.'
  },
  'director-fire': {
    title: 'Major Hazard Asset Protection & Life Safety Governance',
    primaryCourse: 'Fire & Safety Training',
    secondaryCourse: 'Safety Management',
    timeline: 'Executive Advisory Track',
    skills: ['Asset risk mitigation', 'Business continuity planning', 'Statutory dutyholder assurance'],
    overview: 'Executive-level safety governance minimizing catastrophic operational disruption.'
  },
  'director-risk': {
    title: 'Executive Risk Tolerance & Dutyholder Compliance Leadership',
    primaryCourse: 'Safety Management',
    secondaryCourse: 'Risk Assessment',
    timeline: 'Executive Advisory Track',
    skills: ['Corporate risk appetite framing', 'Boardroom HSE reporting', 'Statutory liability shielding'],
    overview: 'Strategic alignment for directors managing industrial capital expenditure and safety assurance.'
  },
  'director-incident': {
    title: 'Corporate Crisis Management & Incident Oversight',
    primaryCourse: 'Incident Investigation',
    secondaryCourse: 'Emergency Response',
    timeline: 'Executive Advisory Track',
    skills: ['Crisis communications protocol', 'Regulatory agency liaison', 'Executive systemic reviews'],
    overview: 'Equips plant heads to navigate high-severity industrial emergencies with decisive governance.'
  },
  'director-governance': {
    title: 'Strategic HSE Leadership & Organizational Safety Culture',
    primaryCourse: 'Safety Management',
    secondaryCourse: 'HSE Training',
    timeline: 'Executive Advisory Track',
    skills: ['World-class safety culture', 'ESG safety transparency', 'Executive OHS liability governance'],
    overview: 'The definitive blueprint for executive leaders building a zero-harm corporate reputation.'
  }
};

export default function TrainingPathFinder({ onOpenEnquireModal }) {
  const [selectedRole, setSelectedRole] = useState('supervisor');
  const [selectedGoal, setSelectedGoal] = useState('risk');

  const pathwayKey = `${selectedRole}-${selectedGoal}`;
  const pathway = PATHWAYS[pathwayKey] || PATHWAYS['supervisor-risk'];

  return (
    <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden nebosh-card w-full max-w-full">
      
      {/* Header */}
      <div className="bg-[#002b7f] text-white p-5 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#001f5c] w-full max-w-full">
        <div className="space-y-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#53bbdf]/20 text-[#81ccdd] border border-[#53bbdf]/30 text-[11px] font-mono font-bold uppercase tracking-wider">
              Career &amp; Organization Navigator
            </span>
          </div>
          <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
            Personalized Safety Training Path Finder
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 max-w-2xl font-normal leading-relaxed">
            Select your operational role and current safety focus to receive an tailored training curriculum recommendation from SANTOSH Academy.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-300 shrink-0">
          <Compass className="w-5 h-5 text-[#53bbdf]" />
          <span>Interactive Pathway Engine</span>
        </div>
      </div>

      {/* Main Body */}
      <div className="p-4 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full max-w-full min-w-0">
        
        {/* Left Column: Selectors (7 cols) */}
        <div className="lg:col-span-7 space-y-6 w-full min-w-0">
          
          {/* Step 1: Select Your Operational Role */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0083A9] font-mono block">
              Step 01: Select Your Professional Role
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ROLES.map((r) => {
                const Icon = r.icon;
                const isSelected = selectedRole === r.id;
                return (
                  <button
                    key={r.id}
                    onClick={() => setSelectedRole(r.id)}
                    className={`p-4 rounded-xl text-left transition-all border cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#002b7f] text-white border-[#002b7f] shadow-md ring-2 ring-[#002b7f]/20 scale-102'
                        : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <Icon className={`w-5 h-5 ${isSelected ? 'text-[#81ccdd]' : 'text-[#0083A9]'}`} />
                      <span className="text-xs font-bold leading-tight">{r.label}</span>
                    </div>
                    <p className={`text-[11px] leading-snug ${isSelected ? 'text-slate-200' : 'text-slate-500'}`}>
                      {r.desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Select Your Safety Risk Priority */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0083A9] font-mono block">
              Step 02: Select Your Workplace Risk Priority
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {GOALS.map((g) => {
                const isSelected = selectedGoal === g.id;
                return (
                  <button
                    key={g.id}
                    onClick={() => setSelectedGoal(g.id)}
                    className={`p-3.5 rounded-xl text-left transition-all border cursor-pointer ${
                      isSelected
                        ? 'bg-[#002b7f] text-white border-[#002b7f] shadow-md ring-2 ring-[#002b7f]/20'
                        : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold block">{g.label}</span>
                      <span className={`text-[10px] font-mono ${isSelected ? 'text-[#81ccdd]' : 'text-slate-400'}`}>
                        {g.category}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Column: Tailored Recommendation Box (5 cols) */}
        <div className="lg:col-span-5 space-y-4 w-full min-w-0">
          <div className="p-4 sm:p-7 rounded-2xl bg-[#f0f7fb] border-2 border-[#002b7f] space-y-4 shadow-lg animate-in fade-in duration-300 w-full min-w-0">
            
            <div className="flex items-center justify-between border-b border-[#cfe5ee] pb-3">
              <span className="text-[11px] font-mono font-bold text-[#0083A9] uppercase">
                Recommended Curriculum Track
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-[#002b7f] border border-[#cfe5ee] font-bold">
                {pathway.timeline}
              </span>
            </div>

            <div className="space-y-1">
              <h4 className="text-lg font-extrabold text-[#002b7f] leading-snug">
                {pathway.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {pathway.overview}
              </p>
            </div>

            {/* Core Modules Included */}
            <div className="p-3.5 rounded-xl bg-white border border-[#cfe5ee] space-y-2">
              <span className="text-[10px] font-mono uppercase font-bold text-slate-500 block">
                Prescribed Modules:
              </span>
              <div className="flex flex-col gap-1.5 text-xs font-semibold text-[#002b7f]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0083A9] flex-shrink-0" />
                  <span>Primary: {pathway.primaryCourse}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0083A9] flex-shrink-0" />
                  <span>Complementary: {pathway.secondaryCourse}</span>
                </div>
              </div>
            </div>

            {/* Key Outcomes */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase font-bold text-slate-500 block">
                Key Competencies Mastered:
              </span>
              <ul className="space-y-1 text-xs text-slate-700">
                {pathway.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0083A9]"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={() => onOpenEnquireModal(pathway.primaryCourse)}
                className="btn-primary w-full py-3.5 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Enquire About This Training Path</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}

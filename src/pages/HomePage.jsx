import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Flame, 
  AlertTriangle, 
  SearchCheck, 
  Briefcase, 
  BellRing, 
  Globe2, 
  Clock, 
  CheckCircle2, 
  ArrowUpRight, 
  HardHat, 
  Check, 
  BookOpen,
  Award,
  Layers,
  ChevronRight
} from 'lucide-react';
import { ACADEMY_INFO, CORE_PROGRAMS, TARGET_SECTORS } from '../data/academyData';
import { RevealOnScroll, CountUpNumber } from '../components/ScrollEffects';
import DisciplineCommandCenter from '../components/DisciplineCommandCenter';
import RiskMatrixSimulator from '../components/RiskMatrixSimulator';

const iconMap = {
  ShieldCheck,
  Flame,
  AlertTriangle,
  SearchCheck,
  Briefcase,
  BellRing,
};

export default function HomePage({ setCurrentPage, onOpenEnquireModal }) {
  const [activeTabDiscipline, setActiveTabDiscipline] = useState(CORE_PROGRAMS[0].id);
  const activeDiscipline = CORE_PROGRAMS.find(p => p.id === activeTabDiscipline) || CORE_PROGRAMS[0];
  const ActiveIcon = iconMap[activeDiscipline.iconName] || ShieldCheck;

  return (
    <div className="space-y-14 sm:space-y-24 pb-16 sm:pb-24 bg-white overflow-hidden w-full max-w-full">
      
      {/* 1. HERO SECTION (Authoritative, Prestigious Institutional Aesthetic) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#eef6fa]/80 via-[#f8fafc] to-white nebosh-grid-bg pt-6 sm:pt-10 pb-12 sm:pb-20 border-b border-slate-200 w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Hero Content (7 cols) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left min-w-0">
              
              {/* Institutional Accreditation Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#cfe5ee] text-xs font-semibold text-[#002b7f] shadow-sm max-w-full overflow-hidden">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-bold text-[#002b7f] truncate">24/7 Operations Desk</span>
                <span className="text-slate-300">•</span>
                <span className="text-[#0083A9] font-bold truncate">Worldwide Access</span>
              </div>

              {/* Exact Requested Headline */}
              <h1 className="text-2xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#002b7f] leading-[1.2] sm:leading-[1.14]">
                Building Safer Workplaces Through{' '}
                <span className="text-[#0083A9]">
                  Professional HSE Training
                </span>
              </h1>

              {/* Exact Requested Supporting Text */}
              <p className="text-sm sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
                Practical, professional and accessible occupational health and safety training designed for professionals and organisations worldwide.
              </p>

              {/* Refined Institutional Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => {
                    setCurrentPage('courses');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="btn-primary group w-full sm:w-auto"
                >
                  <span>Explore Training</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => {
                    setCurrentPage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="btn-secondary w-full sm:w-auto"
                >
                  <span>Contact Us</span>
                </button>
              </div>

              {/* Key Trust Signals Bar */}
              <div className="pt-5 border-t border-slate-200/90 grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3.5">
                <div className="p-2.5 sm:p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-center gap-2.5 sm:gap-3 shadow-sm hover:border-[#002b7f]/40 transition-colors min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#e8f2f8] flex items-center justify-center text-[#002b7f] shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                  </div>
                  <div className="min-w-0 truncate">
                    <span className="font-bold text-[#002b7f] block text-xs sm:text-sm truncate">
                      <CountUpNumber end={24} suffix="/7" /> Hours
                    </span>
                    <span className="text-slate-500 text-[10px] sm:text-xs truncate block">Continuous Support</span>
                  </div>
                </div>

                <div className="p-2.5 sm:p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-center gap-2.5 sm:gap-3 shadow-sm hover:border-[#002b7f]/40 transition-colors min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#e8f2f8] flex items-center justify-center text-[#002b7f] shrink-0">
                    <Globe2 className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                  </div>
                  <div className="min-w-0 truncate">
                    <span className="font-bold text-[#002b7f] block text-xs sm:text-sm truncate">Worldwide</span>
                    <span className="text-slate-500 text-[10px] sm:text-xs truncate block">Global Delivery</span>
                  </div>
                </div>

                <div className="p-2.5 sm:p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-center gap-2.5 sm:gap-3 shadow-sm col-span-2 sm:col-span-1 hover:border-[#002b7f]/40 transition-colors min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#e8f2f8] flex items-center justify-center text-[#002b7f] shrink-0">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                  </div>
                  <div className="min-w-0 truncate">
                    <span className="font-bold text-[#002b7f] block text-xs sm:text-sm truncate">
                      <CountUpNumber end={6} suffix=" Disciplines" />
                    </span>
                    <span className="text-slate-500 text-[10px] sm:text-xs truncate block">Core OHS Modules</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual Frame (5 cols) */}
            <div className="lg:col-span-5 relative w-full min-w-0">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-xl nebosh-card group w-full">
                
                {/* Visual Image with High-End Overlay */}
                <div className="relative h-60 sm:h-[400px] overflow-hidden bg-[#001f5c] w-full">
                  <img
                    src="/images/santosh_hero_3d.jpg"
                    alt="SANTOSH Professional Occupational Safety Academy Training Center"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001f5c]/95 via-[#001f5c]/30 to-transparent"></div>
                  
                  {/* Subtle Institutional Badge */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 inline-flex items-center gap-1.5 sm:gap-2 bg-white/95 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-slate-200/90 text-[11px] sm:text-xs font-bold text-[#002b7f] shadow-md">
                    <HardHat className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0083A9]" />
                    <span>Specialised OHS Academy</span>
                  </div>

                  {/* Bottom Information Annotation */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 text-white space-y-1">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#81ccdd] font-mono">
                      ACCREDITED CURRICULUM
                    </span>
                    <h3 className="text-sm sm:text-lg font-bold leading-snug text-white">
                      NextGen Trainings in OHS
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-200 line-clamp-2 font-normal leading-relaxed hidden sm:block">
                      Structured learning across occupational risk assessment, fire prevention, life safety, and management governance.
                    </p>
                  </div>
                </div>

                {/* Overlaid Card Information Footer */}
                <div className="p-3.5 sm:p-4 bg-white flex items-center justify-between border-t border-slate-100">
                  <button
                    onClick={() => onOpenEnquireModal('HSE Training')}
                    className="text-xs font-bold text-[#002b7f] hover:text-[#0083A9] flex items-center gap-1.5 cursor-pointer group/link"
                  >
                    <span>Enquire for Your Workforce</span>
                    <ArrowUpRight className="w-4 h-4 group-link:translate-x-0.5 group-link:-translate-y-0.5 transition-transform" />
                  </button>
                  <span className="text-slate-400 font-mono text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 border border-slate-200/60">
                    SAN-OHS
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SHORT SANTOSH INTRODUCTION */}
      <RevealOnScroll animation="fade-up">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full">
          <div className="rounded-2xl bg-[#f0f7fb] border border-[#cfe5ee] p-5 sm:p-8 lg:p-12 relative overflow-hidden shadow-sm hover:border-[#002b7f]/30 transition-all w-full max-w-full">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0083A9] tracking-wider uppercase font-mono">
                <ShieldCheck className="w-4 h-4 text-[#002b7f]" />
                <span>About SANTOSH</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002b7f] leading-tight">
                Specialised Academy for NextGen Trainings in Occupational Health and Safety
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                SANTOSH is a dedicated professional training academy established to equip individuals, supervisors, and organizational teams with actionable, rigorous occupational health and safety capabilities. We bridge the critical gap between conceptual safety regulations and real-world industrial execution.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs text-slate-700">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#cfe5ee] shadow-sm hover:border-[#002b7f]/50 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#0083A9] flex-shrink-0" />
                  <span>Applicable HSE skills &amp; control measures</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#cfe5ee] shadow-sm hover:border-[#002b7f]/50 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#0083A9] flex-shrink-0" />
                  <span>Workplace safety awareness for modern hazards</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#cfe5ee] shadow-sm hover:border-[#002b7f]/50 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#0083A9] flex-shrink-0" />
                  <span>Accessible to learners and enterprises globally</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* 3. KEY TRAINING AREAS (6 Clean, High-Calibre Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <RevealOnScroll animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-5">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0083A9] border-l-2 border-[#002b7f] pl-2.5 font-mono">
                Core Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b7f]">
                Key Training Areas
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Explore our six foundational training programs designed to cover critical dimensions of workplace safety, risk management, and regulatory awareness.
              </p>
            </div>

            <button
              onClick={() => {
                setCurrentPage('courses');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#002b7f] hover:text-[#0083A9] self-start md:self-auto group cursor-pointer"
            >
              <span>View All Programs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </RevealOnScroll>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {CORE_PROGRAMS.map((program, index) => {
            const IconComponent = iconMap[program.iconName] || ShieldCheck;
            return (
              <RevealOnScroll key={program.id} animation="fade-up" delay={index * 60}>
                <div
                  className="rounded-2xl bg-white border border-slate-200/90 hover:border-[#002b7f]/50 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden nebosh-card cursor-pointer h-full group"
                  onClick={() => onOpenEnquireModal(program.title)}
                >
                  <div>
                    {/* Visual Banner */}
                    <div className="relative h-52 overflow-hidden bg-[#001f5c]">
                      <img 
                        src={program.image} 
                        alt={program.title}
                        className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500" 
                        onError={(e) => {
                          if (program.fallbackImage) {
                            e.currentTarget.src = program.fallbackImage;
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#001f5c]/85 via-transparent to-transparent"></div>
                      
                      {/* Category Badge */}
                      <span className="absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-md bg-white text-[#002b7f] shadow-md border border-slate-200/80">
                        {program.badge}
                      </span>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#e8f2f8] text-[#002b7f] flex items-center justify-center flex-shrink-0 border border-[#cfe5ee] shadow-sm">
                          <IconComponent className="w-5 h-5 stroke-[2.2]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#002b7f] group-hover:text-[#0083A9] transition-colors leading-snug">
                          {program.title}
                        </h3>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        {program.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 pb-6 pt-2">
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-500 font-medium font-mono">
                        {program.trainingFormat}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenEnquireModal(program.title);
                        }}
                        className="text-xs font-bold text-[#002b7f] hover:text-[#0083A9] flex items-center gap-1 group/btn cursor-pointer px-3.5 py-1.5 rounded-lg bg-[#f0f7fb] hover:bg-[#e1eef6] transition-colors"
                      >
                        <span>Enquire</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </section>

      {/* 4. INTERACTIVE DISCIPLINE COMMAND CENTER (WOW Factor 1) */}
      <RevealOnScroll animation="fade-up">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DisciplineCommandCenter 
            setCurrentPage={setCurrentPage} 
            onOpenEnquireModal={onOpenEnquireModal} 
          />
        </section>
      </RevealOnScroll>

      {/* 5. WHY SAFETY TRAINING MATTERS */}
      <RevealOnScroll animation="fade-up">
        <section className="bg-[#f0f7fb] py-20 border-y border-[#cfe5ee]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl nebosh-card bg-[#001f5c]">
                  <img
                    src="/images/risk_assessment_3d.jpg"
                    alt="HSE engineers conducting safety inspection with risk matrix"
                    className="w-full h-[400px] object-cover transition-transform duration-700 hover:scale-103"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001f5c]/95 via-[#001f5c]/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 border border-slate-200 backdrop-blur-md shadow-lg">
                    <p className="text-xs font-bold text-[#0083A9] uppercase tracking-wider mb-1 font-mono">
                      Prevention Over Reaction
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      Effective safety training transforms organizational culture from reactive liability into proactive hazard control.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0083A9] border-l-2 border-[#002b7f] pl-2.5 font-mono">
                  Organizational Value
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b7f]">
                  Why Safety Training Matters
                </h2>
                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  Workplace safety is not merely a statutory obligation—it is the foundational pillar of operational stability, worker protection, and business continuity.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {[
                    {
                      title: "Hazard Identification",
                      desc: "Equips teams to spot physical, chemical, and procedural hazards before incidents occur."
                    },
                    {
                      title: "Incident Reduction",
                      desc: "Reduces downtime, workplace injuries, and costly asset damages through proven controls."
                    },
                    {
                      title: "Statutory Alignment",
                      desc: "Assists organizations in understanding and aligning with recognized safety codes and guidelines."
                    },
                    {
                      title: "Workforce Confidence",
                      desc: "Builds psychological safety and morale when workers know comprehensive safety measures exist."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-sm hover:border-[#002b7f]/50 transition-all">
                      <h4 className="text-sm font-bold text-[#002b7f] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0083A9]"></span>
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* 5B. INTERACTIVE 5x5 RISK ASSESSMENT SIMULATOR (WOW Factor 2) */}
      <RevealOnScroll animation="fade-up">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0083A9] font-mono">
              Applied Interactive Lab
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b7f]">
              Hands-On Risk Assessment Simulator
            </h2>
            <p className="text-sm text-slate-600 font-normal">
              Experience the quantitative methodology taught in our occupational hazard programs. Test industrial scenarios or compute your worksite risk levels live.
            </p>
          </div>

          <RiskMatrixSimulator onOpenEnquireModal={onOpenEnquireModal} />
        </section>
      </RevealOnScroll>

      {/* 6. PROFESSIONAL TRAINING APPROACH (Structured 3-Step Methodology) */}
      <RevealOnScroll animation="fade-up">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0083A9] font-mono">
              Educational Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b7f]">
              Our Professional Training Approach
            </h2>
            <p className="text-sm text-slate-600 font-normal">
              SANTOSH integrates structured pedagogical models designed specifically for working adults and enterprise operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-white border border-slate-200/90 space-y-3 nebosh-card hover:shadow-lg transition-all">
              <div className="w-11 h-11 rounded-lg bg-[#e8f2f8] text-[#002b7f] flex items-center justify-center font-extrabold text-base border border-[#cfe5ee]">
                01
              </div>
              <h3 className="text-lg font-bold text-[#002b7f]">
                Realistic Workplace Scenarios
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                We anchor concepts in authentic workplace cases, inspection challenges, and hazardous conditions drawn from actual operational environments.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200/90 space-y-3 nebosh-card hover:shadow-lg transition-all">
              <div className="w-11 h-11 rounded-lg bg-[#e8f2f8] text-[#002b7f] flex items-center justify-center font-extrabold text-base border border-[#cfe5ee]">
                02
              </div>
              <h3 className="text-lg font-bold text-[#002b7f]">
                Hierarchy of Risk Controls
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Learners master systematic risk mitigation strategies, prioritizing elimination and engineering controls over mere reliance on PPE.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200/90 space-y-3 nebosh-card hover:shadow-lg transition-all">
              <div className="w-11 h-11 rounded-lg bg-[#e8f2f8] text-[#002b7f] flex items-center justify-center font-extrabold text-base border border-[#cfe5ee]">
                03
              </div>
              <h3 className="text-lg font-bold text-[#002b7f]">
                Actionable Implementation
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Every training session yields immediate takeaways—checklists, risk matrices, and inspection protocols ready for immediate workplace rollout.
              </p>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* 7. WORLDWIDE ACCESSIBILITY & 24/7 AVAILABILITY */}
      <RevealOnScroll animation="fade-up">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-8 rounded-2xl bg-white border border-slate-200/90 flex flex-col justify-between space-y-4 nebosh-card hover:shadow-lg transition-all">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#e8f2f8] text-[#002b7f] flex items-center justify-center border border-[#cfe5ee]">
                  <Globe2 className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-2xl font-bold text-[#002b7f]">
                  Worldwide Accessibility
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Whether you are an individual professional in the Middle East, Southeast Asia, Europe, North America, or anywhere across the globe, our training solutions are designed to support cross-border learners seamlessly.
                </p>
              </div>
              <div className="pt-2 text-xs text-slate-400 font-mono">
                STATUS: Active Globally Across All Time Zones
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200/90 flex flex-col justify-between space-y-4 nebosh-card hover:shadow-lg transition-all">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#e8f2f8] text-[#002b7f] flex items-center justify-center border border-[#cfe5ee]">
                  <Clock className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="text-2xl font-bold text-[#002b7f]">
                  24/7 Operations Desk
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Workplace safety requirements and corporate shift schedules do not pause for business hours. Our dedicated enquiry desk is accessible 24 hours a day, 7 days a week for curriculum consultations and enrollment guidance.
                </p>
              </div>
              <div className="pt-2 text-xs text-slate-400 font-mono">
                RESPONSE: Rapid 24/7 Dedicated Assistance
              </div>
            </div>

          </div>
        </section>
      </RevealOnScroll>

      {/* 8. STRONG FINAL CTA SECTION */}
      <RevealOnScroll animation="fade-up">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-[#002b7f] text-white p-8 sm:p-12 lg:p-16 text-center overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#81ccdd] border border-[#53bbdf]/30 text-xs font-bold font-mono">
                <ShieldCheck className="w-4 h-4" />
                Empower Your Workforce
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Ready to Strengthen Your Safety Knowledge?
              </h2>

              <p className="text-base text-slate-200 max-w-xl mx-auto leading-relaxed font-normal">
                Connect with SANTOSH to explore professional training tailored to your organizational safety goals and career development.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => {
                    setCurrentPage('courses');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#002b7f] font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  <span>Explore Our Training Programs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onOpenEnquireModal()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#001f5c] hover:bg-[#001744] text-white font-bold text-sm border border-[#53bbdf]/40 transition-all cursor-pointer shadow-md"
                >
                  <span>Enquire Now (24/7)</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

    </div>
  );
}

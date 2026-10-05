import React from 'react';
import { 
  GraduationCap, 
  Wrench, 
  Globe2, 
  Clock, 
  Layers, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  Check, 
  ArrowRight,
  Sparkles,
  Award,
  BookOpen
} from 'lucide-react';
import { WHY_CHOOSE_US_PILLARS, ACADEMY_INFO } from '../data/academyData';
import { RevealOnScroll, CountUpNumber } from '../components/ScrollEffects';
import HierarchyOfControlsExplorer from '../components/HierarchyOfControlsExplorer';

const iconMap = {
  GraduationCap,
  Wrench,
  Globe2,
  Clock,
  Layers,
  TrendingUp,
};

export default function WhyChooseUsPage({ setCurrentPage, onOpenEnquireModal }) {
  return (
    <div className="space-y-24 pb-24 pt-6 bg-white overflow-hidden">
      
      {/* 1. PAGE HEADER */}
      <section className="relative py-16 bg-gradient-to-b from-[#eef6fa] to-[#ffffff] border-b border-slate-200 nebosh-grid-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0083A9] border-l-2 border-[#002b7f] pl-2.5 font-mono">
              Value &amp; Credibility
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#002b7f] leading-tight">
              Why Choose SANTOSH
            </h1>
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
              Grounding occupational health and safety education in real-world practicality, institutional discipline, and worldwide accessibility.
            </p>
          </div>

          {/* Institutional Highlights Bar with Animated Numbers */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl font-extrabold text-[#002b7f] block">
                <CountUpNumber end={6} suffix="" />
              </span>
              <span className="text-xs font-bold text-slate-800">Quality Pillars</span>
              <p className="text-[11px] text-slate-500 mt-0.5">Foundational standards</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl font-extrabold text-[#002b7f] block">Practical</span>
              <span className="text-xs font-bold text-slate-800">Job-Ready Skills</span>
              <p className="text-[11px] text-slate-500 mt-0.5">Scenario-based practice</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl font-extrabold text-[#0083A9] block">
                <CountUpNumber end={24} suffix="/7" />
              </span>
              <span className="text-xs font-bold text-slate-800">Round-the-Clock</span>
              <p className="text-[11px] text-slate-500 mt-0.5">Continuous support</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl font-extrabold text-[#002b7f] block">Worldwide</span>
              <span className="text-xs font-bold text-slate-800">Global Trainees</span>
              <p className="text-[11px] text-slate-500 mt-0.5">Cross-border delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE SIX CORE PILLARS (Clean Refined Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <RevealOnScroll animation="fade-up">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0083A9] font-mono">
              Institutional Commitments
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b7f]">
              Our Core Value Pillars
            </h2>
            <p className="text-sm text-slate-600">
              A transparent overview of how SANTOSH delivers tangible value to practicing safety professionals and corporate organizations worldwide.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US_PILLARS.map((pillar, index) => {
            const IconComp = iconMap[pillar.iconName] || ShieldCheck;
            return (
              <RevealOnScroll key={pillar.id} animation="fade-up" delay={index * 80}>
                <div
                  className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#002b7f] transition-all duration-300 space-y-5 flex flex-col justify-between nebosh-card shadow-sm hover:shadow-xl hover:-translate-y-1 h-full group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#e8f2f8] text-[#002b7f] flex items-center justify-center border border-[#cfe5ee] group-hover:scale-105 group-hover:bg-[#002b7f] group-hover:text-white transition-all flex-shrink-0 shadow-sm">
                        <IconComp className="w-6 h-6 stroke-[2.2]" />
                      </div>
                      <span className="text-xs font-mono text-slate-500 font-bold px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200">
                        PILLAR 0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#002b7f] group-hover:text-[#0083A9] transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {pillar.description}
                    </p>

                    <p className="text-xs text-slate-500 leading-relaxed pt-3 border-t border-slate-100 font-normal">
                      {pillar.details}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center gap-2 text-xs font-bold text-[#0083A9] font-mono">
                    <CheckCircle2 className="w-4 h-4 text-[#0083A9]" />
                    <span>Integrated Institutional Standard</span>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </section>

      {/* 2B. INTERACTIVE HIERARCHY OF CONTROLS (WOW Factor 3) */}
      <RevealOnScroll animation="fade-up">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0083A9] font-mono">
              Systematic Risk Governance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b7f]">
              Applied Hierarchy of Controls
            </h2>
            <p className="text-sm text-slate-600 font-normal">
              How our academy embeds the international 5-tier mitigation framework into daily worksite execution.
            </p>
          </div>

          <HierarchyOfControlsExplorer onOpenEnquireModal={onOpenEnquireModal} />
        </section>
      </RevealOnScroll>

      {/* 3. PRACTICAL APPROACH VS. ABSTRACT THEORY */}
      <RevealOnScroll animation="fade-up">
        <section className="bg-[#f0f7fb] py-20 border-y border-[#cfe5ee]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0083A9] border-l-2 border-[#002b7f] pl-2.5 font-mono">
                Methodological Comparison
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b7f]">
                The SANTOSH Training Standard
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                How our applied learning model differs from passive textbook memorization to ensure actual workplace safety enhancement.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Conventional Training */}
              <div className="p-8 rounded-2xl bg-white border border-slate-200 space-y-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center font-bold">
                    ✕
                  </div>
                  <h3 className="text-xl font-bold text-slate-700">
                    Conventional Theory-Heavy Training
                  </h3>
                </div>
                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600 font-normal">
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Primarily lectures focused on memorizing regulatory clauses without context.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Generic examples disconnected from specific industrial workplace realities.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Rigid schedules with no support for cross-timezone operational shifts.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Limited follow-up on practical risk registers or incident response toolkits.</span>
                  </li>
                </ul>
              </div>

              {/* SANTOSH Approach */}
              <div className="p-8 rounded-2xl bg-white border-2 border-[#002b7f] space-y-5 relative shadow-xl nebosh-card hover:shadow-2xl hover:-translate-y-1 transition-all">
                <div className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#e8f2f8] text-[#002b7f] border border-[#cfe5ee] font-mono">
                  SANTOSH Standard
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#002b7f] text-white flex items-center justify-center font-bold shadow-sm">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-[#002b7f]">
                    Applied NextGen Safety Training
                  </h3>
                </div>
                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 font-normal">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#0083A9] mt-1 flex-shrink-0" />
                    <span>Hands-on analysis of realistic worksite hazards and risk control hierarchy.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#0083A9] mt-1 flex-shrink-0" />
                    <span>Direct application to construction, manufacturing, energy, and logistics.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#0083A9] mt-1 flex-shrink-0" />
                    <span>Accessible worldwide with 24/7 round-the-clock enquiry support.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#0083A9] mt-1 flex-shrink-0" />
                    <span>Actionable toolkits: inspection checklists, root cause templates, and JSA guides.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* 4. VISUAL CAPABILITY SHOWCASE */}
      <RevealOnScroll animation="fade-up">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 border border-slate-800 text-white overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#53bbdf] font-mono border-l-2 border-[#53bbdf] pl-2.5">
                Frontline Competency
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Trained for High-Risk Industrial Environments
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Every SANTOSH participant trains with industry-standard hazard registers, Bowtie methodologies, and emergency action plans verified against frontline workplace challenges.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xs font-bold text-white block">Audit-Ready Toolkits</span>
                  <p className="text-[11px] text-slate-400 mt-0.5">JSA, PTW, and inspection logs</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xs font-bold text-white block">Root Cause Precision</span>
                  <p className="text-[11px] text-slate-400 mt-0.5">5-Why, Ishikawa, and Tripod Beta</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 h-full min-h-[300px] relative">
              <img 
                src="/images/safety_management_3d.jpg" 
                alt="SANTOSH Applied Safety Training In Action"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent lg:block hidden"></div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* 5. CALL TO ACTION */}
      <RevealOnScroll animation="fade-up">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#002b7f] text-white p-8 lg:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none"></div>
            <div className="max-w-2xl mx-auto space-y-3 relative z-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Experience the SANTOSH Difference
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed font-normal">
                Connect with our training advisory team to discuss how our programs can be aligned with your career goals or workforce safety objectives.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <button
                onClick={() => {
                  setCurrentPage('courses');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#002b7f] font-bold text-sm shadow-md transition-all cursor-pointer hover:scale-102 active:scale-98"
              >
                Explore Training Programs
              </button>
              <button
                onClick={() => onOpenEnquireModal()}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#001f5c] hover:bg-[#001744] text-white font-bold text-sm border border-[#53bbdf]/40 transition-all cursor-pointer shadow-md hover:scale-102 active:scale-98"
              >
                Enquire Directly (24/7)
              </button>
            </div>
          </div>
        </section>
      </RevealOnScroll>

    </div>
  );
}

import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  CheckCircle2, 
  HardHat, 
  Globe2, 
  Clock, 
  ArrowRight,
  Sparkles,
  Award,
  BookOpen
} from 'lucide-react';
import { ACADEMY_INFO, WHO_WE_TRAIN_ROLES } from '../data/academyData';
import { RevealOnScroll, CountUpNumber } from '../components/ScrollEffects';

export default function AboutPage({ setCurrentPage, onOpenEnquireModal }) {
  return (
    <div className="space-y-24 pb-24 pt-6 bg-white overflow-hidden">
      
      {/* 1. PAGE HEADER */}
      <section className="relative py-16 bg-gradient-to-b from-[#eef6fa] to-[#ffffff] border-b border-slate-200 nebosh-grid-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0083A9] border-l-2 border-[#002b7f] pl-2.5 font-mono">
              About The Academy
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#002b7f] leading-tight">
              About SANTOSH
            </h1>
            <p className="text-lg text-slate-700 font-medium leading-relaxed">
              Specialised Academy for NextGen Trainings in Occupational Health and Safety.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Committed to advancing workplace safety standards globally through practical, modern, and disciplined occupational health and safety training.
            </p>
          </div>

          {/* Key Institutional Stat Strip with Animated Numbers */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl font-extrabold text-[#002b7f] block">
                <CountUpNumber end={6} suffix="" />
              </span>
              <span className="text-xs font-bold text-slate-800">Core Disciplines</span>
              <p className="text-[11px] text-slate-500 mt-0.5">Specialised safety domains</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl font-extrabold text-[#002b7f] block">
                <CountUpNumber end={24} suffix="/7" />
              </span>
              <span className="text-xs font-bold text-slate-800">Operations Desk</span>
              <p className="text-[11px] text-slate-500 mt-0.5">Continuous round-the-clock</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl font-extrabold text-[#0083A9] block">Global</span>
              <span className="text-xs font-bold text-slate-800">Accessibility</span>
              <p className="text-[11px] text-slate-500 mt-0.5">Worldwide cohort support</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl font-extrabold text-[#002b7f] block">Applied</span>
              <span className="text-xs font-bold text-slate-800">Scenario Pedagogy</span>
              <p className="text-[11px] text-slate-500 mt-0.5">Real workplace simulation</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <RevealOnScroll animation="fade-up">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0083A9] font-mono">
                Institutional Profile
              </span>
              <h2 className="text-3xl font-extrabold text-[#002b7f]">
                Who We Are
              </h2>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                <strong>SANTOSH</strong> (Specialised Academy for NextGen Trainings in Occupational Health and Safety) is an international training academy focused solely on occupational health, industrial safety, and workplace risk reduction.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                The academy was conceived to deliver high-calibre training that moves beyond rote memorization. We emphasize practical knowledge, professional development, proactive workplace safety awareness, and directly applicable HSE skills that participants can bring to construction sites, manufacturing plants, process facilities, and corporate headquarters.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex items-center gap-2.5 shadow-sm hover:border-[#002b7f] transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#0083A9] flex-shrink-0" />
                  <span>Specialised Focus on OHS Disciplines</span>
                </div>
                <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex items-center gap-2.5 shadow-sm hover:border-[#002b7f] transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#0083A9] flex-shrink-0" />
                  <span>Modern Scenario-Based Pedagogy</span>
                </div>
                <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex items-center gap-2.5 shadow-sm hover:border-[#002b7f] transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#0083A9] flex-shrink-0" />
                  <span>Accessible to Global Workforces</span>
                </div>
                <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex items-center gap-2.5 shadow-sm hover:border-[#002b7f] transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#0083A9] flex-shrink-0" />
                  <span>Continuous 24/7 Information Access</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-[#001f5c] nebosh-card hover:shadow-2xl transition-all">
                <img
                  src="/images/incident_investigation_3d.jpg"
                  alt="SANTOSH Professional 3D Safety Command and Inspection Center"
                  className="w-full h-[420px] object-cover transition-transform duration-700 hover:scale-103"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001f5c]/95 via-[#001f5c]/25 to-transparent"></div>
                
                {/* Top Accreditation/Standard Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/95 text-[#002b7f] font-bold text-xs border border-slate-200 shadow-md">
                  <ShieldCheck className="w-4 h-4 text-[#0083A9]" />
                  <span>Specialised OHS Academy</span>
                </div>

                {/* Bottom Card Annotation */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 border border-slate-200 backdrop-blur-md shadow-md">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs font-bold text-[#0083A9] uppercase tracking-wider font-mono">
                      Institutional Standard
                    </p>
                    <span className="text-[10px] font-bold font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Active Curriculum
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 font-medium">
                    Dedicated strictly to hazard mitigation, systematic incident analysis, and workplace life safety.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </RevealOnScroll>

      {/* 3. MISSION & VISION */}
      <RevealOnScroll animation="fade-up">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 space-y-4 relative overflow-hidden group hover:border-[#002b7f] transition-all shadow-sm nebosh-card hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#e8f2f8] text-[#002b7f] flex items-center justify-center border border-[#cfe5ee] shadow-sm group-hover:bg-[#002b7f] group-hover:text-white transition-all">
                <Target className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h3 className="text-2xl font-bold text-[#002b7f]">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                To build safer workplaces worldwide by providing comprehensive, practical, and accessible occupational health and safety training that translates regulatory concepts into tangible, daily frontline practices.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-600 pt-2 font-normal">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0083A9] flex-shrink-0"></span>
                  <span>Cultivate proactive hazard awareness across diverse workforces.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0083A9] flex-shrink-0"></span>
                  <span>Deliver structured knowledge in key safety disciplines.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0083A9] flex-shrink-0"></span>
                  <span>Support professionals and organizations across all operational sectors.</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 space-y-4 relative overflow-hidden group hover:border-[#002b7f] transition-all shadow-sm nebosh-card hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#e8f2f8] text-[#002b7f] flex items-center justify-center border border-[#cfe5ee] shadow-sm group-hover:bg-[#002b7f] group-hover:text-white transition-all">
                <Eye className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h3 className="text-2xl font-bold text-[#002b7f]">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                To be recognized as a premier destination for occupational health and safety training, setting a standard for practical relevance, modern training methodologies, and worldwide accessibility.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-600 pt-2 font-normal">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0083A9] flex-shrink-0"></span>
                  <span>Eliminate preventable workplace incidents through structured education.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0083A9] flex-shrink-0"></span>
                  <span>Foster safety leadership at all tiers of organizational hierarchy.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0083A9] flex-shrink-0"></span>
                  <span>Ensure quality safety education is accessible regardless of geographic boundary.</span>
                </li>
              </ul>
            </div>

          </div>
        </section>
      </RevealOnScroll>

      {/* 4. OUR TRAINING PHILOSOPHY */}
      <RevealOnScroll animation="fade-up">
        <section className="bg-[#f0f7fb] py-20 border-y border-[#cfe5ee]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0083A9] border-l-2 border-[#002b7f] pl-2.5 font-mono">
                Foundational Principles
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b7f]">
                Our Training Philosophy
              </h2>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                We believe safety training is most impactful when it is actionable, participatory, and context-aware. Our philosophy is anchored in four core tenets:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  num: "01",
                  title: "Practical Over Theoretical",
                  desc: "Every concept is paired with real workplace tools, risk matrices, and inspection checklists."
                },
                {
                  num: "02",
                  title: "Root Cause Mentality",
                  desc: "Training participants to investigate systemic factors rather than attributing blame to individuals."
                },
                {
                  num: "03",
                  title: "Proactive Risk Control",
                  desc: "Emphasizing elimination and substitution rather than relying exclusively on personal protective equipment."
                },
                {
                  num: "04",
                  title: "Universal Applicability",
                  desc: "Crafted to be adaptable whether deployed on a remote industrial site or in a commercial office complex."
                },
              ].map((phil, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-white border border-slate-200/90 space-y-3 shadow-sm hover:border-[#002b7f] hover:shadow-md hover:-translate-y-1 transition-all">
                  <span className="text-[#0083A9] font-mono text-sm font-bold block">{phil.num}</span>
                  <h3 className="text-lg font-bold text-[#002b7f]">{phil.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{phil.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* 5. WHO WE TRAIN */}
      <RevealOnScroll animation="fade-up">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0083A9] border-l-2 border-[#002b7f] pl-2.5 font-mono">
              Target Audience
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b7f]">
              Who We Train
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Our programs are structured to benefit diverse roles across corporate hierarchy and frontline operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHO_WE_TRAIN_ROLES.map((roleItem, index) => (
              <div 
                key={index} 
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#002b7f] transition-all space-y-3 shadow-sm nebosh-card hover:shadow-xl hover:-translate-y-1 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#e8f2f8] text-[#002b7f] group-hover:bg-[#002b7f] group-hover:text-white transition-colors flex items-center justify-center text-xs font-bold shadow-sm">
                  <HardHat className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#002b7f]">
                  {roleItem.role}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {roleItem.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#eef6fa] to-[#ffffff] border border-[#cfe5ee] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="space-y-1.5">
              <h4 className="text-base font-bold text-[#002b7f]">Need Customized Training for Your Organization?</h4>
              <p className="text-xs sm:text-sm text-slate-600 font-normal">We work directly with corporate HSE managers to tailor training content to specific workplace hazards.</p>
            </div>
            <button
              onClick={() => onOpenEnquireModal('Safety Management')}
              className="btn-primary text-xs px-6 py-3.5 whitespace-nowrap cursor-pointer flex-shrink-0"
            >
              Enquire for Corporate Teams
            </button>
          </div>
        </section>
      </RevealOnScroll>

    </div>
  );
}

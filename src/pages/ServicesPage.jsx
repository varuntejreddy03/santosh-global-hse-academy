import React from 'react';
import { 
  ShieldCheck, 
  Flame, 
  AlertTriangle, 
  SearchCheck, 
  Briefcase, 
  BellRing, 
  ArrowRight, 
  CheckCircle2, 
  Check
} from 'lucide-react';
import { CORE_PROGRAMS, TARGET_SECTORS } from '../data/academyData';
import { RevealOnScroll, CountUpNumber } from '../components/ScrollEffects';

const iconMap = {
  ShieldCheck,
  Flame,
  AlertTriangle,
  SearchCheck,
  Briefcase,
  BellRing,
};

export default function ServicesPage({ setCurrentPage, onOpenEnquireModal }) {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16 sm:pb-24 pt-4 sm:pt-6 bg-white overflow-hidden w-full max-w-full">
      
      {/* 1. PAGE HEADER */}
      <section className="relative py-16 bg-gradient-to-b from-[#eef6fa]/80 to-[#ffffff] border-b border-slate-200 nebosh-grid-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0083A9] border-l-2 border-[#002b7f] pl-2.5 font-mono">
              Our Professional Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#002b7f] leading-tight">
              Training &amp; Advisory Services
            </h1>
            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
              Targeted occupational health and safety training services structured for frontline safety, regulatory compliance, and risk containment.
            </p>
          </div>

          {/* Quick Metrics Bar with Animated Counters */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-[#002b7f]/40 transition-colors">
              <span className="text-2xl font-extrabold text-[#002b7f] block">
                <CountUpNumber end={6} suffix="" />
              </span>
              <span className="text-xs font-bold text-slate-800">Core Services</span>
              <p className="text-[11px] text-slate-500 mt-0.5 font-normal">Specialised safety domains</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-[#002b7f]/40 transition-colors">
              <span className="text-2xl font-extrabold text-[#002b7f] block">
                <CountUpNumber end={24} suffix="/7" />
              </span>
              <span className="text-xs font-bold text-slate-800">Support Desk</span>
              <p className="text-[11px] text-slate-500 mt-0.5 font-normal">Round-the-clock advisory</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-[#002b7f]/40 transition-colors">
              <span className="text-2xl font-extrabold text-[#0083A9] block">Global</span>
              <span className="text-xs font-bold text-slate-800">Delivery Reach</span>
              <p className="text-[11px] text-slate-500 mt-0.5 font-normal">Worldwide accessibility</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-[#002b7f]/40 transition-colors">
              <span className="text-2xl font-extrabold text-[#002b7f] block">Applied</span>
              <span className="text-xs font-bold text-slate-800">Case Work</span>
              <p className="text-[11px] text-slate-500 mt-0.5 font-normal">Real hazard assessments</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE SIX CORE SERVICES (Bespoke Institutional Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <RevealOnScroll animation="fade-up">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0083A9] font-mono">
              Comprehensive Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b7f]">
              Core Service Offerings
            </h2>
            <p className="text-sm text-slate-600 font-normal">
              Each service delivers hands-on instruction and practical guidance focused on specific workplace safety dimensions.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {CORE_PROGRAMS.map((service, index) => {
            const IconComp = iconMap[service.iconName] || ShieldCheck;
            return (
              <RevealOnScroll key={service.id} animation="fade-up" delay={index * 70}>
                <div
                  className="rounded-2xl bg-white border border-slate-200/90 hover:border-[#002b7f]/50 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 nebosh-card cursor-pointer h-full group"
                  onClick={() => onOpenEnquireModal(service.title)}
                >
                  {/* Service Image with category badge */}
                  <div className="relative h-52 overflow-hidden bg-[#001f5c]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                      onError={(e) => {
                        if (service.fallbackImage) {
                          e.currentTarget.src = service.fallbackImage;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001f5c]/85 via-transparent to-transparent"></div>
                    <span className="absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-md bg-white text-[#002b7f] border border-slate-200/80 shadow-md">
                      {service.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-lg bg-[#e8f2f8] text-[#002b7f] flex items-center justify-center flex-shrink-0 border border-[#cfe5ee] shadow-sm">
                          <IconComp className="w-5 h-5 stroke-[2.2]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#002b7f] group-hover:text-[#0083A9] transition-colors leading-snug">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        {service.shortDescription}
                      </p>

                      {/* Competency Highlights */}
                      <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                        <div className="font-bold text-[#002b7f] text-[11px] uppercase tracking-wider font-mono">
                          Key Competencies:
                        </div>
                        {service.learningAreas.slice(0, 3).map((area, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 bg-[#f8fafc] p-2 rounded-lg border border-slate-200/80 hover:border-[#0083A9]/60 transition-colors">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0083A9] mt-0.5 flex-shrink-0" />
                            <span className="line-clamp-1 text-slate-700 font-normal">{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Service Card Actions */}
                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentPage('courses');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-xs text-slate-500 hover:text-[#002b7f] font-semibold cursor-pointer"
                      >
                        View Syllabus
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenEnquireModal(service.title);
                        }}
                        className="btn-primary text-xs py-2 px-4 shadow-sm"
                      >
                        <span>Enquire Now</span>
                        <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                      </button>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </section>

      {/* 3. INDUSTRIAL SECTORS SERVED */}
      <RevealOnScroll animation="fade-up">
        <section className="bg-[#f0f7fb] py-20 border-y border-[#cfe5ee]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0083A9] border-l-2 border-[#002b7f] pl-2.5 font-mono">
                Industry Relevance
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b7f]">
                Sectors We Serve
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Our safety training modules are designed to integrate seamlessly into diverse industrial workflows, high-hazard settings, and operational environments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TARGET_SECTORS.map((sec, idx) => (
                <div 
                  key={idx} 
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#002b7f]/50 transition-all space-y-3 shadow-sm hover:shadow-lg nebosh-card"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0083A9]"></span>
                    <span className="text-[10px] uppercase font-mono font-bold text-slate-400">SECTOR-0{idx + 1}</span>
                  </div>
                  <h4 className="text-base font-bold text-[#002b7f]">
                    {sec.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {sec.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* 4. SERVICE CONSULTATION BANNER */}
      <RevealOnScroll animation="fade-up">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#002b7f] text-white p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Require a Custom Training Arrangement?
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                We coordinate tailored cohort training, corporate batches, and targeted hazard modules tailored to your facility's operational risk profile.
              </p>
            </div>

            <button
              onClick={() => onOpenEnquireModal('General Training Enquiry')}
              className="px-7 py-3 rounded-xl bg-white hover:bg-slate-100 text-[#002b7f] font-bold text-sm shadow-md transition-all flex-shrink-0 cursor-pointer"
            >
              Discuss Custom Training
            </button>
          </div>
        </section>
      </RevealOnScroll>

    </div>
  );
}

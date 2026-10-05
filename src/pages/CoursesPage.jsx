import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Search, 
  CheckCircle2, 
  Globe2, 
  Clock, 
  ArrowRight, 
  Flame, 
  AlertTriangle, 
  SearchCheck, 
  Briefcase, 
  BellRing,
  Building,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { CORE_PROGRAMS, ACADEMY_INFO } from '../data/academyData';
import { RevealOnScroll, CountUpNumber } from '../components/ScrollEffects';
import TrainingPathFinder from '../components/TrainingPathFinder';

const iconMap = {
  ShieldCheck,
  Flame,
  AlertTriangle,
  SearchCheck,
  Briefcase,
  BellRing,
};

const courseCodes = {
  'hse-training': 'OHS-101',
  'fire-safety-training': 'FIRE-202',
  'risk-assessment': 'RISK-303',
  'incident-investigation': 'INC-404',
  'safety-management': 'MGMT-505',
  'emergency-response': 'EMRG-606',
};

export default function CoursesPage({ setCurrentPage, onOpenEnquireModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCourseId, setExpandedCourseId] = useState(null);

  const categories = ['All', 'Core HSE', 'Emergency & Fire', 'Hazard Control', 'Investigation', 'Leadership & Systems'];

  const filteredPrograms = CORE_PROGRAMS.filter(prog => {
    const matchesCategory = selectedCategory === 'All' || prog.category === selectedCategory;
    const matchesSearch = prog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          prog.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (courseId) => {
    setExpandedCourseId(expandedCourseId === courseId ? null : courseId);
  };

  return (
    <div className="space-y-24 pb-24 pt-6 bg-white overflow-hidden">
      
      {/* 1. PAGE HEADER */}
      <section className="relative py-16 bg-gradient-to-b from-[#eef6fa]/80 to-[#ffffff] border-b border-slate-200 nebosh-grid-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0083A9] border-l-2 border-[#002b7f] pl-2.5 font-mono">
              Academic Curriculum
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#002b7f] leading-tight">
              Training Programs &amp; Courses
            </h1>
            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
              Explore our comprehensive occupational health and safety programs. Designed to cultivate practical, audit-ready competence across critical workplace safety domains.
            </p>
          </div>

          {/* Quick Metrics Bar with Animated Counters */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-[#002b7f]/40 transition-colors">
              <span className="text-2xl font-extrabold text-[#002b7f] block">
                <CountUpNumber end={6} suffix="" />
              </span>
              <span className="text-xs font-bold text-slate-800">Core Disciplines</span>
              <p className="text-[11px] text-slate-500 mt-0.5 font-normal">Specialised curricula</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-[#002b7f]/40 transition-colors">
              <span className="text-2xl font-extrabold text-[#002b7f] block">Flexible</span>
              <span className="text-xs font-bold text-slate-800">Delivery Modes</span>
              <p className="text-[11px] text-slate-500 mt-0.5 font-normal">Virtual &amp; cohort cohorts</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-[#002b7f]/40 transition-colors">
              <span className="text-2xl font-extrabold text-[#0083A9] block">
                <CountUpNumber end={24} suffix="/7" />
              </span>
              <span className="text-xs font-bold text-slate-800">Coordination</span>
              <p className="text-[11px] text-slate-500 mt-0.5 font-normal">Round-the-clock desk</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-[#002b7f]/40 transition-colors">
              <span className="text-2xl font-extrabold text-[#002b7f] block">Worldwide</span>
              <span className="text-xs font-bold text-slate-800">Accessibility</span>
              <p className="text-[11px] text-slate-500 mt-0.5 font-normal">International enrollment</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEARCH & FILTER TOOLBAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm hover:shadow-md transition-shadow">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#002b7f] text-white shadow-sm'
                    : 'bg-[#f0f7fb] text-slate-700 hover:text-[#002b7f] hover:bg-[#e1eef6]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search course title or topic..."
              className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-[#f8fafc] border border-slate-200 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none transition-colors"
            />
          </div>

        </div>
      </section>

      {/* 3. COURSE CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredPrograms.map((course, index) => {
            const IconComp = iconMap[course.iconName] || ShieldCheck;
            const isExpanded = expandedCourseId === course.id;
            const code = courseCodes[course.id] || 'OHS-MOD';

            return (
              <RevealOnScroll key={course.id} animation="fade-up" delay={index * 70}>
                <div
                  className="rounded-2xl bg-white border border-slate-200/90 hover:border-[#002b7f]/50 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 nebosh-card h-full group"
                >
                  {/* Course Header with Image and Badges */}
                  <div className="relative h-60 overflow-hidden bg-[#001f5c]">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                      onError={(e) => {
                        if (course.fallbackImage) {
                          e.currentTarget.src = course.fallbackImage;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001f5c]/95 via-[#001f5c]/40 to-transparent"></div>

                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-white text-[#002b7f] shadow-md font-mono border border-slate-200/80">
                        {code}
                      </span>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-white/95 text-slate-800 shadow-md">
                        {course.badge}
                      </span>
                    </div>

                    {/* Course Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-white text-[#002b7f] flex items-center justify-center font-bold shadow-md flex-shrink-0">
                        <IconComp className="w-6 h-6 stroke-[2.4]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-[#81ccdd] transition-colors">
                          {course.title}
                        </h3>
                        <p className="text-xs text-slate-200 line-clamp-1 font-normal">
                          {course.targetAudience}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Course Details Content */}
                  <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      {/* Short Overview */}
                      <div className="space-y-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#0083A9] block font-mono">
                          Overview
                        </span>
                        <p className="text-sm text-slate-700 leading-relaxed font-normal">
                          {course.shortDescription}
                        </p>
                      </div>

                      {/* Key Learning Areas */}
                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#002b7f] block font-mono">
                            Key Learning Areas
                          </span>
                          <button
                            onClick={() => toggleExpand(course.id)}
                            className="text-[11px] font-bold text-[#0083A9] hover:text-[#002b7f] flex items-center gap-1 cursor-pointer"
                          >
                            <span>{isExpanded ? 'Hide Syllabus Modules' : 'View Syllabus Modules'}</span>
                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>
                        </div>

                        {/* Learning Areas Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                          {course.learningAreas.slice(0, isExpanded ? course.learningAreas.length : 4).map((area, idx) => (
                            <div key={idx} className="flex items-start gap-2 bg-[#f8fafc] p-2.5 rounded-lg border border-slate-200/80 hover:border-[#0083A9]/60 transition-colors">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#0083A9] mt-0.5 flex-shrink-0" />
                              <span className="leading-snug text-[11px] font-normal">{area}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer Bar with Placeholder and Enquire CTA */}
                    <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                      <div className="space-y-0.5">
                        <div className="text-[11px] uppercase tracking-wider text-slate-500 font-bold font-mono">
                          Format &amp; Schedule
                        </div>
                        {/* Exact Placeholder Requested */}
                        <div className="text-xs font-bold text-[#002b7f]">
                          {course.trainingFormat}
                        </div>
                      </div>

                      {/* Exact Requested Button Label */}
                      <button
                        onClick={() => onOpenEnquireModal(course.title)}
                        className="btn-primary text-xs py-2.5 px-5"
                      >
                        <span>Enquire About This Course</span>
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

      {/* 3B. PERSONALIZED TRAINING PATH FINDER (WOW Factor 4) */}
      <RevealOnScroll animation="fade-up">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0083A9] font-mono">
              Career &amp; Workforce Guidance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b7f]">
              Find Your Optimal Training Track
            </h2>
            <p className="text-sm text-slate-600 font-normal">
              Select your frontline or management responsibility to reveal prescribed safety modules, required competencies, and estimated duration.
            </p>
          </div>

          <TrainingPathFinder onOpenEnquireModal={onOpenEnquireModal} />
        </section>
      </RevealOnScroll>

      {/* 4. FLEXIBLE LEARNING FOR PROFESSIONALS */}
      <RevealOnScroll animation="fade-up">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#f0f7fb] border border-[#cfe5ee] p-8 lg:p-12 relative overflow-hidden shadow-sm hover:border-[#002b7f]/30 transition-all">
            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0083A9] border-l-2 border-[#002b7f] pl-2.5 font-mono">
                Accessibility &amp; Modality
              </span>

              {/* Exact Requested Section Title */}
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002b7f] leading-tight">
                Flexible Learning for Professionals
              </h2>

              {/* Exact Required Explanation */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                SANTOSH understands that practicing professionals and frontline teams balance demanding operational shifts, travel, and project deadlines. Our training structure is engineered to support learners worldwide across different geographical locations, time zones, and industrial scheduling requirements.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-2 shadow-sm hover:border-[#002b7f]/40 transition-colors">
                  <Globe2 className="w-5 h-5 text-[#002b7f] mb-1" />
                  <h4 className="font-bold text-[#002b7f] text-sm">Worldwide Support</h4>
                  <p className="text-slate-600 leading-relaxed text-[11px] font-normal">
                    Accessible to individual professionals and international corporate teams across continents.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-2 shadow-sm hover:border-[#002b7f]/40 transition-colors">
                  <Clock className="w-5 h-5 text-[#002b7f] mb-1" />
                  <h4 className="font-bold text-[#002b7f] text-sm">24/7 Information Access</h4>
                  <p className="text-slate-600 leading-relaxed text-[11px] font-normal">
                    Inquire, coordinate syllabi, and align scheduling at any time with our round-the-clock operations desk.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-2 shadow-sm hover:border-[#002b7f]/40 transition-colors">
                  <Building className="w-5 h-5 text-[#002b7f] mb-1" />
                  <h4 className="font-bold text-[#002b7f] text-sm">Corporate Cohorts</h4>
                  <p className="text-slate-600 leading-relaxed text-[11px] font-normal">
                    Dedicated training arrangements for organizational branches, facility plants, and project sites.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => onOpenEnquireModal('Flexible Learning Enquiry')}
                  className="btn-primary text-xs py-3 px-6"
                >
                  <span>Discuss Flexible Training Options</span>
                </button>
                <span className="text-xs text-slate-600 font-medium">
                  Contact our coordinators for custom schedule alignments.
                </span>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

    </div>
  );
}

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Globe2, 
  Send, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
  Sparkles,
  PhoneCall,
  Mail,
  Building2
} from 'lucide-react';
import { CORE_PROGRAMS, ACADEMY_INFO } from '../data/academyData';
import { RevealOnScroll, CountUpNumber } from '../components/ScrollEffects';

export default function ContactPage({ setCurrentPage, onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    interestedTraining: 'HSE Training',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqs = [
    {
      q: "How does worldwide accessibility work for international learners?",
      a: "SANTOSH coordinates training programs accommodating different time zones. Syllabus details, schedules, and learning materials are accessible globally."
    },
    {
      q: "Can corporate organizations request training for their specific site hazards?",
      a: "Yes. Our safety management and risk assessment modules can be aligned to address specific operational environments including construction, manufacturing, and oil & gas."
    },
    {
      q: "How quickly does the 24/7 admissions desk respond?",
      a: "Our operations desk reviews enquiries continuously around the clock, providing timely program information and coordination assistance."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onShowToast) {
        onShowToast(`Enquiry sent successfully for ${formData.name}. Our 24/7 team will reach out promptly.`);
      }
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      organisation: '',
      interestedTraining: 'HSE Training',
      message: '',
    });
    setSubmitted(false);
  };

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-24 pb-24 pt-6 bg-white overflow-hidden">
      
      {/* 1. PAGE HEADER */}
      <section className="relative py-16 bg-gradient-to-b from-[#eef6fa] to-[#ffffff] border-b border-slate-200 nebosh-grid-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0083A9] border-l-2 border-[#002b7f] pl-2.5 font-mono">
              Communication Desk
            </span>

            {/* Exact Headline Requested */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#002b7f] leading-tight">
              Get in Touch With SANTOSH
            </h1>

            {/* Exact Supporting Text Requested */}
            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
              Have questions about our training programs? Contact us to discuss your learning or organisational training requirements.
            </p>
          </div>

          {/* Institutional Contact Bar with Animated Counters */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl font-extrabold text-[#002b7f] block">
                <CountUpNumber end={24} suffix="/7" />
              </span>
              <span className="text-xs font-bold text-slate-800">Operations Desk</span>
              <p className="text-[11px] text-slate-500 mt-0.5">Round-the-clock enquiries</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl font-extrabold text-[#002b7f] block">Worldwide</span>
              <span className="text-xs font-bold text-slate-800">Accessibility</span>
              <p className="text-[11px] text-slate-500 mt-0.5">Global admissions</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl font-extrabold text-[#0083A9] block">
                <CountUpNumber end={100} suffix="%" />
              </span>
              <span className="text-xs font-bold text-slate-800">Response Rate</span>
              <p className="text-[11px] text-slate-500 mt-0.5">Prompt coordinator replies</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl font-extrabold text-[#002b7f] block">Custom</span>
              <span className="text-xs font-bold text-slate-800">Corporate Cohorts</span>
              <p className="text-[11px] text-slate-500 mt-0.5">Tailored to site risks</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTACT SECTION: FORM & DETAILS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Business Details & Badges (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <RevealOnScroll animation="fade-up">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0083A9] font-mono">
                  Contact Information
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002b7f]">
                  Worldwide OHS Enquiries
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Our admissions and corporate training desk operates around the clock to support professionals and multi-location enterprises worldwide.
                </p>
              </div>
            </RevealOnScroll>

            {/* Required Specific Indicators (Refined Executive Cards) */}
            <div className="space-y-4">
              {/* Business Hours: 24/7 */}
              <RevealOnScroll animation="fade-up" delay={80}>
                <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-4 nebosh-card hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#e8f2f8] text-[#002b7f] flex items-center justify-center flex-shrink-0 border border-[#cfe5ee] shadow-sm">
                    <Clock className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                      Availability
                    </span>
                    <h4 className="text-base font-bold text-[#002b7f]">
                      Business Hours: 24/7
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Our team provides 24-hour enquiry response and syllabus assistance across all operational time zones.
                    </p>
                  </div>
                </div>
              </RevealOnScroll>

              {/* Accessibility: Worldwide */}
              <RevealOnScroll animation="fade-up" delay={160}>
                <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-4 nebosh-card hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#e8f2f8] text-[#002b7f] flex items-center justify-center flex-shrink-0 border border-[#cfe5ee] shadow-sm">
                    <Globe2 className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                      Geographic Reach
                    </span>
                    <h4 className="text-base font-bold text-[#002b7f]">
                      Accessibility: Worldwide
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Delivering structured training for participants and organizational branches across all global territories.
                    </p>
                  </div>
                </div>
              </RevealOnScroll>

              {/* Specialisation Badge */}
              <RevealOnScroll animation="fade-up" delay={240}>
                <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-4 nebosh-card hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#e8f2f8] text-[#002b7f] flex items-center justify-center flex-shrink-0 border border-[#cfe5ee] shadow-sm">
                    <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                      Institutional Standard
                    </span>
                    <h4 className="text-base font-bold text-[#002b7f]">
                      Specialised HSE Focus
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      All communications are handled by qualified occupational health and safety training coordinators.
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Quick FAQ Dropdowns for prospective trainees */}
            <RevealOnScroll animation="fade-up" delay={300}>
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-[#002b7f] uppercase tracking-wider block font-mono">
                  Quick Enquiries FAQ
                </span>
                {faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={idx} className="rounded-xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:border-[#002b7f] transition-colors">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-4 text-left text-xs font-bold text-slate-800 hover:text-[#002b7f] flex items-center justify-between gap-2 cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        {isOpen ? <ChevronUp className="w-4 h-4 text-[#002b7f] flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />}
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5 animate-in fade-in duration-200 font-normal">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Contact & Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <RevealOnScroll animation="fade-up" delay={100}>
              <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-xl relative overflow-hidden nebosh-card">
                
                {submitted ? (
                  <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                    <div className="w-20 h-20 rounded-full bg-[#e8f2f8] border border-[#7bbbd1] text-[#002b7f] mx-auto flex items-center justify-center shadow-sm">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#002b7f]">
                      Thank You, {formData.name}
                    </h3>
                    <p className="text-sm text-slate-700 max-w-md mx-auto leading-relaxed font-normal">
                      Your enquiry regarding <strong>{formData.interestedTraining}</strong> has been received by SANTOSH Academy. Our team operates 24/7 and will contact you via {formData.email} promptly.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={handleReset}
                        className="btn-primary text-sm px-8 py-3.5 cursor-pointer"
                      >
                        Send Another Enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-[#002b7f]">
                        Training Enquiry Form
                      </h3>
                      <p className="text-xs text-slate-500 font-normal">
                        Please provide your details below and our team will provide full training guidance.
                      </p>
                    </div>

                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-[#002b7f] focus:ring-2 focus:ring-[#002b7f]/20 transition-all placeholder:text-slate-400 shadow-sm"
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-[#002b7f] focus:ring-2 focus:ring-[#002b7f]/20 transition-all placeholder:text-slate-400 shadow-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 234 567 890"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-[#002b7f] focus:ring-2 focus:ring-[#002b7f]/20 transition-all placeholder:text-slate-400 shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Organisation & Interested Training */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Organisation / Employer *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.organisation}
                          onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                          placeholder="Company or Freelance"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-[#002b7f] focus:ring-2 focus:ring-[#002b7f]/20 transition-all placeholder:text-slate-400 shadow-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Interested Training Program *
                        </label>
                        <select
                          value={formData.interestedTraining}
                          onChange={(e) => setFormData({ ...formData, interestedTraining: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-[#002b7f] focus:ring-2 focus:ring-[#002b7f]/20 transition-all cursor-pointer shadow-sm"
                        >
                          {CORE_PROGRAMS.map((prog) => (
                            <option key={prog.id} value={prog.title}>
                              {prog.title}
                            </option>
                          ))}
                          <option value="General Training Enquiry">
                            General Training Enquiry
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Message / Requirements *
                      </label>
                      <textarea
                        rows="4"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please specify your training objectives, team size, or preferred timeline..."
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-[#002b7f] focus:ring-2 focus:ring-[#002b7f]/20 transition-all placeholder:text-slate-400 shadow-sm"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      {/* Exact CTA Label Requested */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full py-4 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        <Send className="w-4 h-4 stroke-[2.5]" />
                        <span>{loading ? 'Submitting...' : 'Send Enquiry'}</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </section>

      {/* 3. STRONG FINAL CTA SECTION (Exact text required) */}
      <RevealOnScroll animation="fade-up">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#002b7f] text-white p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none"></div>
            <div className="max-w-2xl mx-auto space-y-4 relative z-10">
              
              {/* Exact Required CTA Headline */}
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Ready to Strengthen Your Safety Knowledge?
              </h2>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                Explore our comprehensive occupational health and safety curriculum and discover practical training designed for modern workplaces.
              </p>

              {/* Exact Required CTA Button */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setCurrentPage('courses');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#002b7f] font-bold text-base shadow-lg transition-all cursor-pointer hover:scale-102 active:scale-98"
                >
                  <span>Explore Our Training Programs</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

    </div>
  );
}

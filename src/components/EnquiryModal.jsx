import React, { useState, useEffect } from 'react';
import { X, Send, ShieldCheck, Clock, Globe2, CheckCircle2 } from 'lucide-react';
import { CORE_PROGRAMS, ACADEMY_INFO, EXAM_PREP_PROGRAMS } from '../data/academyData';

export default function EnquiryModal({ isOpen, onClose, preselectedProgram, onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    interestedTraining: preselectedProgram || EXAM_PREP_PROGRAMS[0].title,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (preselectedProgram) {
      setFormData(prev => ({ ...prev, interestedTraining: preselectedProgram }));
    }
  }, [preselectedProgram]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onSuccess) {
        onSuccess(`Thank you, ${formData.name}! Your enquiry for "${formData.interestedTraining}" has been submitted.`);
      }
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl max-h-[92vh] flex flex-col bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header: NEBOSH Deep Navy Blue with Inset Ribbon */}
        <div className="bg-[#063B78] text-white px-6 py-4 flex items-center justify-between border-b border-[#052d5c] flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/10 text-white flex items-center justify-center border border-white/20 shadow-sm">
              <ShieldCheck className="w-5 h-5 stroke-[2.4]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-tight">
                Training Enquiry Desk
              </h3>
              <p className="text-xs text-slate-200">
                SANTOSH • 24/7 Worldwide Support
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body with Mobile Scroll */}
        <div className="p-6 sm:p-7 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#F3F8FC] border border-[#7bbbd1] text-[#063B78] mx-auto flex items-center justify-center shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-[#063B78]">
                Enquiry Successfully Received
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you for reaching out to <strong>SANTOSH</strong>. Our training coordinators review enquiries 24/7 and will contact you promptly regarding <strong>{formData.interestedTraining}</strong>.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="btn-primary text-sm px-7 py-3 cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-slate-600 mb-2 font-normal leading-relaxed">
                Fill in your details below to discuss your personal or organizational occupational health and safety training requirements.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alexander Vance"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-[#063B78] focus:ring-2 focus:ring-[#063B78]/20 transition-all placeholder:text-slate-400 shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alexander@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-[#063B78] focus:ring-2 focus:ring-[#063B78]/20 transition-all placeholder:text-slate-400 shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 555-019-2834"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-[#063B78] focus:ring-2 focus:ring-[#063B78]/20 transition-all placeholder:text-slate-400 shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Organisation / Company
                  </label>
                  <input
                    type="text"
                    value={formData.organisation}
                    onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                    placeholder="Company or Independent"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-[#063B78] focus:ring-2 focus:ring-[#063B78]/20 transition-all placeholder:text-slate-400 shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Interested Training Program *
                </label>
                <select
                  value={formData.interestedTraining}
                  onChange={(e) => setFormData({ ...formData, interestedTraining: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-[#063B78] focus:ring-2 focus:ring-[#063B78]/20 transition-all cursor-pointer shadow-sm"
                >
                  {EXAM_PREP_PROGRAMS.map((prog) => (
                    <option key={prog.id} value={prog.title}>
                      {prog.title}
                    </option>
                  ))}
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

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Message / Learning Requirements
                </label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your team size, learning objectives, or scheduling preferences..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-800 text-sm focus:outline-none focus:border-[#063B78] focus:ring-2 focus:ring-[#063B78]/20 transition-all placeholder:text-slate-400 shadow-sm"
                ></textarea>
              </div>

              {/* Bottom indicators */}
              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                <span className="flex items-center gap-1.5 text-[#063B78] font-semibold">
                  <Clock className="w-3.5 h-3.5" /> 24/7 Availability
                </span>
                <span className="flex items-center gap-1.5 text-slate-600">
                  <Globe2 className="w-3.5 h-3.5 text-[#00A6B4]" /> Worldwide Accessibility
                </span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full py-3.5 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4 stroke-[2.5]" />
                  <span>{loading ? 'Submitting Enquiry...' : 'Send Enquiry'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Globe, 
  Clock, 
  ChevronRight, 
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export default function Header({ currentPage, setCurrentPage, onOpenEnquireModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'courses', label: 'Courses' },
    { id: 'why-choose-us', label: 'Why Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        {/* Top information strip */}
        <div className="bg-[#063B78] text-white py-1.5 sm:py-2 px-3 sm:px-4 text-xs w-full max-w-full overflow-hidden">
          <div className="max-w-7xl mx-auto flex items-center justify-center lg:justify-between gap-4 text-[11px] font-medium">
            <span className="inline-flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-[#18C6D9]" />Business Hours: 24/7</span>
            <span className="hidden lg:inline">Accessible Worldwide</span>
            <span className="hidden lg:inline">Exam-Focused Preparation</span>
            <span className="hidden lg:inline">Dedicated Learner Support</span>
          </div>
        </div>

        {/* Main Navigation Bar (Clean White Background) */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full max-w-full">
          <div className="flex items-center justify-between h-14 sm:h-20 gap-2">
            
            {/* Brand Logo */}
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 text-left group focus:outline-none cursor-pointer min-w-0 shrink py-1"
              aria-label="SANTOSH Global HSE Academy Home"
            >
              <img 
                src="/images/santosh-logo-transparent.png" 
                alt="SANTOSH Global HSE Academy" 
                className="h-8.5 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`px-3.5 py-2 rounded-md text-sm font-semibold transition-colors relative cursor-pointer ${
                      isActive 
                        ? 'text-[#063B78] bg-[#F3F8FC]' 
                        : 'text-slate-700 hover:text-[#063B78] hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#063B78] rounded-full"></span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* CTA & Mobile Controls */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <button
                onClick={() => onOpenEnquireModal()}
                className="hidden md:inline-flex btn-orange text-xs py-2.5 px-4"
              >
                <span>ENQUIRE NOW</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 sm:p-2.5 rounded-lg bg-slate-100 text-slate-700 hover:text-[#063B78] hover:bg-slate-200 lg:hidden border border-slate-200 focus:outline-none cursor-pointer shrink-0"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200 max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="py-2.5 px-3 rounded-xl bg-[#F3F8FC] text-xs text-slate-600 mb-3 border border-[#d6e6f3] flex items-center gap-3">
              <img src="/images/santosh-shield-transparent.png" alt="SANTOSH Shield" className="h-9 w-auto object-contain shrink-0" />
              <div className="min-w-0">
                <p className="font-bold text-[#063B78] text-xs">SANTOSH Global HSE Academy</p>
                <p className="text-[10px] text-slate-600 font-medium leading-tight mt-0.5">Specialised Academy for NextGen Trainings in Occupational Safety and Health</p>
              </div>
            </div>

            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left text-sm font-semibold transition-colors cursor-pointer ${
                    isActive 
                      ? 'text-[#063B78] bg-[#F3F8FC] border-l-4 border-[#063B78]' 
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#063B78]' : 'text-slate-400'}`} />
                </button>
              );
            })}

            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquireModal();
                }}
                className="btn-primary w-full py-3.5 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Enquire Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between px-2">
              <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                <Clock className="w-3.5 h-3.5 text-[#063B78]" />
                24/7 Hours
              </span>
              <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                <Globe className="w-3.5 h-3.5 text-[#00A6B4]" />
                Worldwide Access
              </span>
            </div>
          </div>
        )}
      </header>

      {/* Header Placeholder Spacer (keeps layout perfectly positioned below fixed navbar) */}
      <div className="h-[78px] sm:h-[112px] w-full shrink-0" aria-hidden="true" />
    </>
  );
}

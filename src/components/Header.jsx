import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Globe, 
  Laptop,
  MapPin,
  Mail,
  ChevronRight, 
  ArrowRight,
  ShieldCheck,
  Clock
} from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export default function Header({ currentPage, setCurrentPage, onOpenEnquireModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'courses', label: 'Courses' },
    { id: 'certifications', label: 'Certifications', target: 'courses' },
    { id: 'services', label: 'Corporate Training' },
    { id: 'why-choose-us', label: 'Resources' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (linkId, targetPage = null) => {
    const pageToOpen = targetPage || linkId;
    setCurrentPage(pageToOpen);
    setMobileMenuOpen(false);

    if (linkId === 'certifications' && pageToOpen === 'home') {
      setTimeout(() => {
        document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        {/* Top information strip */}
        <div className="bg-[#04162E] text-white py-1.5 sm:py-2 px-3 sm:px-6 text-[11px] font-medium border-b border-white/10 w-full max-w-full overflow-hidden">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            {/* Left Items */}
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
              <span className="inline-flex items-center gap-1.5 text-slate-200">
                <Globe className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                <span>Global HSE Learning</span>
              </span>
              <span className="text-white/20 hidden sm:inline">|</span>
              <span className="inline-flex items-center gap-1.5 text-slate-200">
                <Laptop className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                <span>Online &amp; Classroom</span>
              </span>
              <span className="text-white/20 hidden md:inline">|</span>
              <span className="inline-flex items-center gap-1.5 text-slate-300 hidden md:inline-flex">
                <MapPin className="w-3.5 h-3.5 text-[#FF6A00] shrink-0" />
                <span>India · Middle East · Africa · Worldwide</span>
              </span>
            </div>

            {/* Right Items */}
            <div className="flex items-center gap-3.5 shrink-0">
              <a 
                href="mailto:info@santosh-global-hse-academy.com" 
                className="inline-flex items-center gap-1.5 text-slate-200 hover:text-[#38BDF8] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                <span className="hidden sm:inline">info@santosh-global-hse-academy.com</span>
              </a>
              {/* Social icons */}
              <div className="flex items-center gap-2.5 text-slate-300 pl-1">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#38BDF8] transition-colors" aria-label="LinkedIn">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.67 1.67 0 1 0 0-3.34 1.67 1.67 0 0 0 0 3.34m1.39 9.74v-8.37H5.07v8.37h2.78z"/></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6A00] transition-colors" aria-label="YouTube">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.26 5 12 5 12 5s-6.26 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2 26.2 26.2 0 0 0 2 12a26.2 26.2 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.74 19 12 19 12 19s6.26 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77C22 15.82 22 12 22 12s0-3.82-.42-4.81zM9.75 15.02V8.98L15 12l-5.25 3.02z"/></svg>
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="X (Twitter)">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar (Clean White Background) */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full max-w-full">
          <div className="flex items-center justify-between h-15 sm:h-20 gap-2">
            
            {/* Brand Logo */}
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center text-left group focus:outline-none cursor-pointer min-w-0 shrink py-1"
              aria-label="SANTOSH Global HSE Academy Home"
            >
              <img 
                src="/images/santosh-logo-transparent.png" 
                alt="SANTOSH Global HSE Academy" 
                className="h-9 sm:h-12 md:h-13 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id || (link.target && currentPage === link.target);
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id, link.target)}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors relative cursor-pointer ${
                      isActive 
                        ? 'text-[#0B2545] bg-[#F8FAFC]' 
                        : 'text-slate-700 hover:text-[#1D4ED8] hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#1D4ED8] rounded-full"></span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* CTA & Mobile Controls */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <button
                onClick={() => onOpenEnquireModal()}
                className="hidden md:inline-flex items-center gap-2 rounded-xl bg-[#FF6A00] hover:bg-[#EA580C] text-white text-xs font-black tracking-wider uppercase px-4 lg:px-5 py-2.5 sm:py-3 shadow-md shadow-orange-500/20 hover:shadow-orange-500/35 transition-all cursor-pointer"
              >
                <span>ENQUIRE NOW</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:text-[#0B2545] hover:bg-slate-200 lg:hidden border border-slate-200 focus:outline-none cursor-pointer shrink-0"
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
            <div className="py-2.5 px-3 rounded-xl bg-[#F8FAFC] text-xs text-slate-600 mb-3 border border-slate-200 flex items-center gap-3">
              <img src="/images/santosh-shield-transparent.png" alt="SANTOSH Shield" className="h-9 w-auto object-contain shrink-0" />
              <div className="min-w-0">
                <p className="font-bold text-[#0B2545] text-xs">SANTOSH Global HSE Academy</p>
                <p className="text-[10px] text-slate-600 font-medium leading-tight mt-0.5">Specialised Academy for NextGen Trainings in Occupational Safety and Health</p>
              </div>
            </div>

            {navLinks.map((link) => {
              const isActive = currentPage === link.id || (link.target && currentPage === link.target);
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id, link.target)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left text-sm font-semibold transition-colors cursor-pointer ${
                    isActive 
                      ? 'text-[#0B2545] bg-[#F8FAFC] border-l-4 border-[#1D4ED8]' 
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#1D4ED8]' : 'text-slate-400'}`} />
                </button>
              );
            })}

            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquireModal();
                }}
                className="btn-orange w-full py-3.5 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>ENQUIRE NOW</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-slate-500 flex flex-col gap-2 px-1">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#0B2545]" />
                  24/7 Hours
                </span>
                <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                  <Globe className="w-3.5 h-3.5 text-[#1D4ED8]" />
                  Worldwide Access
                </span>
              </div>
              <a href="mailto:info@santosh-global-hse-academy.com" className="text-slate-600 flex items-center gap-1.5 text-[11px] truncate">
                <Mail className="w-3.5 h-3.5 text-[#0B2545]" />
                info@santosh-global-hse-academy.com
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Header Placeholder Spacer (keeps layout perfectly positioned below fixed navbar) */}
      <div className="h-[74px] sm:h-[92px] w-full shrink-0" aria-hidden="true" />
    </>
  );
}

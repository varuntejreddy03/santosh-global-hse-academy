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

export default function Header({ currentPage, setCurrentPage, onOpenEnquireModal, colorTheme = 'plum', setColorTheme }) {
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

  const isPlum = colorTheme === 'plum';

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        {/* Top information strip (IOSH-style Royal Blue Service Bar) */}
        <div className="bg-[#1D55B2] text-white py-1.5 sm:py-2 px-3 sm:px-6 text-[11px] font-medium border-b border-white/10 w-full max-w-full overflow-hidden">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            {/* Left Items */}
            <div className="flex items-center gap-2.5 sm:gap-4 flex-wrap">
              <span className="inline-flex items-center gap-1.5 text-white font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>24/7 Training Desk:</span>
              </span>
              <span className="text-white/90 hidden sm:inline">
                ASP®, CSP® &amp; CRSP® Coaching &bull; Live Virtual &amp; Classroom Worldwide
              </span>
              <span className="text-white/30 hidden md:inline">|</span>
              <span className="text-sky-100 hidden md:inline">
                India &bull; Middle East &bull; Africa &bull; Worldwide
              </span>
            </div>

            {/* Right Items */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Palette Switcher Button */}
              {setColorTheme && (
                <div className="inline-flex items-center gap-1 bg-black/25 px-2 py-0.5 rounded-full text-[10px] font-bold border border-white/15">
                  <span className="text-white/70 hidden sm:inline mr-0.5">Style:</span>
                  <button
                    onClick={() => setColorTheme('plum')}
                    className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${isPlum ? 'bg-[#3E1457] text-white shadow-xs' : 'text-white/80 hover:text-white'}`}
                    title="Exact IOSH Royal Plum Palette"
                  >
                    IOSH Plum
                  </button>
                  <button
                    onClick={() => setColorTheme('navy')}
                    className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${!isPlum ? 'bg-[#0B2545] text-white shadow-xs' : 'text-white/80 hover:text-white'}`}
                    title="Direct Logo-Matched Royal Navy Palette"
                  >
                    Logo Navy
                  </button>
                </div>
              )}

              <a 
                href="mailto:info@santosh-global-hse-academy.com" 
                className="hidden lg:inline-flex items-center gap-1.5 text-white hover:text-sky-200 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-sky-200 shrink-0" />
                <span className="hidden xl:inline">info@santosh-global-hse-academy.com</span>
              </a>
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
                        ? (isPlum ? 'text-[#3E1457] bg-purple-50/70' : 'text-[#0B2545] bg-[#F8FAFC]')
                        : 'text-slate-700 hover:text-[#1D4ED8] hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full ${isPlum ? 'bg-[#3E1457]' : 'bg-[#1D4ED8]'}`}></span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* CTA & Mobile Controls */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <button
                onClick={() => onOpenEnquireModal()}
                className={`hidden md:inline-flex items-center gap-2 rounded-xl text-white text-xs font-black tracking-wider uppercase px-4 lg:px-5 py-2.5 sm:py-3 shadow-md transition-all cursor-pointer ${
                  isPlum 
                    ? 'bg-[#3E1457] hover:bg-[#4E1A6E] shadow-purple-900/20 hover:shadow-purple-900/35'
                    : 'bg-[#FF6A00] hover:bg-[#EA580C] shadow-orange-500/20 hover:shadow-orange-500/35'
                }`}
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

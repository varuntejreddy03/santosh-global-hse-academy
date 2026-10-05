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
    { id: 'why-choose-us', label: 'Why Choose Us' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      {/* Top micro-bar: NEBOSH-style Deep Navy Blue Bar */}
      <div className="bg-[#002b7f] text-white py-2 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>24/7 Operations Desk</span>
            </span>
            <span className="hidden sm:inline-block text-[#53bbdf]">•</span>
            <span className="inline-flex items-center gap-1.5 text-slate-100">
              <Globe className="w-3.5 h-3.5 text-[#81ccdd]" />
              Worldwide Training Accessibility
            </span>
          </div>
          <div className="hidden md:flex items-center gap-3 text-slate-200 text-[11px] font-medium">
            <span>Specialised Occupational Health &amp; Safety Academy</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (Clean White Background) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 text-left group focus:outline-none cursor-pointer"
          >
            <div className="w-11 h-11 rounded-lg bg-[#002b7f] flex items-center justify-center shadow-md group-hover:bg-[#001f5c] transition-colors flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-white stroke-[2.4]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold tracking-tight text-[#002b7f]">
                  SANTOSH
                </span>
                <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#f0f7fb] text-[#002b7f] font-bold border border-[#cfe5ee]">
                  ACADEMY
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden xl:block leading-tight font-medium max-w-sm line-clamp-1">
                Specialised Academy for NextGen Trainings in OHS
              </p>
            </div>
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
                      ? 'text-[#002b7f] bg-[#f0f7fb]' 
                      : 'text-slate-700 hover:text-[#002b7f] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#002b7f] rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA & Mobile Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenEnquireModal()}
              className="hidden sm:inline-flex btn-primary text-xs py-2.5 px-4.5"
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-slate-100 text-slate-700 hover:text-[#002b7f] hover:bg-slate-200 lg:hidden border border-slate-200 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="py-2.5 px-3.5 rounded-lg bg-[#f0f7fb] text-xs text-slate-600 mb-3 border border-[#cfe5ee]">
            <p className="font-bold text-[#002b7f] mb-0.5">SANTOSH Academy</p>
            <p className="text-[11px] text-slate-600">Specialised Academy for NextGen Trainings in Occupational Health and Safety</p>
          </div>

          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left text-sm font-semibold transition-colors cursor-pointer ${
                  isActive 
                    ? 'text-[#002b7f] bg-[#f0f7fb] border-l-4 border-[#002b7f]' 
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#002b7f]' : 'text-slate-400'}`} />
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
              <span>Enquire Now (24/7)</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between px-2">
            <span className="flex items-center gap-1.5 text-slate-700 font-medium">
              <Clock className="w-3.5 h-3.5 text-[#002b7f]" />
              24/7 Hours
            </span>
            <span className="flex items-center gap-1.5 text-slate-700 font-medium">
              <Globe className="w-3.5 h-3.5 text-[#0083A9]" />
              Worldwide Access
            </span>
          </div>
        </div>
      )}
    </header>
  );
}

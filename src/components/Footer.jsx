import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Globe2, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { ACADEMY_INFO, CORE_PROGRAMS } from '../data/academyData';

export default function Footer({ setCurrentPage, onOpenEnquireModal }) {
  const handleNav = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProgramClick = (programTitle) => {
    setCurrentPage('courses');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#001f5c] border-t border-[#002b7f] text-slate-300 relative overflow-hidden">
      {/* Top NEBOSH-style Cyan to Navy Accent Ribbon */}
      <div className="h-1.5 w-full nebosh-ribbon-bar"></div>

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Academy Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#002b7f] font-bold shadow-md">
                <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tight text-white">
                  SANTOSH
                </span>
                <span className="ml-2 text-[10px] tracking-wider px-2 py-0.5 rounded bg-[#002b7f] text-[#81ccdd] font-bold border border-[#0083A9]/40">
                  ACADEMY
                </span>
              </div>
            </div>

            <p className="text-sm text-white font-medium leading-relaxed">
              Specialised Academy for NextGen Trainings in Occupational Health and Safety.
            </p>

            <p className="text-xs text-slate-300 leading-relaxed">
              Committed to delivering practical, professional, and accessible occupational health and safety training designed for individual professionals and organizations worldwide.
            </p>

            <div className="pt-2 flex flex-col gap-2.5 text-xs text-slate-200">
              <div className="flex items-center gap-2.5 py-1.5 px-3 rounded-lg bg-[#002b7f]/80 border border-[#0083A9]/40 w-fit">
                <Clock className="w-4 h-4 text-[#81ccdd] flex-shrink-0" />
                <span><strong>Business Hours:</strong> 24/7 Operations Desk</span>
              </div>
              <div className="flex items-center gap-2.5 py-1.5 px-3 rounded-lg bg-[#002b7f]/80 border border-[#0083A9]/40 w-fit">
                <Globe2 className="w-4 h-4 text-[#81ccdd] flex-shrink-0" />
                <span><strong>Accessibility:</strong> Worldwide</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[#53bbdf] pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Services' },
                { id: 'courses', label: 'Courses' },
                { id: 'why-choose-us', label: 'Why Choose Us' },
                { id: 'contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className="hover:text-white transition-colors text-left flex items-center gap-1.5 group cursor-pointer text-slate-300"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#53bbdf] group-hover:translate-x-0.5 transition-transform" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Training Programs (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[#53bbdf] pl-2.5">
              Training Areas
            </h4>
            <ul className="space-y-2.5 text-sm">
              {CORE_PROGRAMS.map((prog) => (
                <li key={prog.id}>
                  <button
                    onClick={() => handleProgramClick(prog.title)}
                    className="hover:text-white transition-colors text-left flex items-center gap-1.5 group cursor-pointer text-slate-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#53bbdf] flex-shrink-0" />
                    <span className="line-clamp-1">{prog.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Round-the-clock Enquiry & CTA (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[#53bbdf] pl-2.5">
              24/7 Enquiries
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Have questions about customized training or organizational safety requirements? Reach out at any time.
            </p>

            <button
              onClick={() => onOpenEnquireModal()}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0083A9] hover:bg-[#53bbdf] text-white hover:text-[#001f5c] font-bold text-sm transition-all shadow-md active:scale-95 cursor-pointer hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Enquire About Training</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="p-3 rounded-lg bg-[#002b7f]/60 border border-[#0083A9]/30 space-y-1.5 text-xs">
              <div className="text-white font-semibold">Standard Response Guarantee</div>
              <p className="text-slate-300 text-[11px]">
                Enquiry submissions are attended around the clock by our dedicated training coordinators.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="mt-14 pt-8 border-t border-[#002b7f] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} SANTOSH. Specialised Academy for NextGen Trainings in Occupational Health and Safety. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span>Occupational Health &amp; Safety Excellence</span>
            <span>•</span>
            <span>Worldwide Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

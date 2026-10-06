import React from 'react';
import {
  ArrowRight, Download, Check, Star, Users, Laptop, FileCheck, UserCheck,
  BookOpen, Globe2, Lightbulb, FileText, BarChart3, Target, Trophy,
  ShieldCheck, GraduationCap, Award, ChevronRight,
} from 'lucide-react';
import {
  ACADEMY_INFO, CORE_PROGRAMS, EXAM_PREP_PROGRAMS, BENEFITS, JOURNEY_STEPS, WHY_US_POINTS,
  STATS, STATS_VERIFIED, INSTRUCTOR, INSTRUCTOR_VERIFIED,
  TESTIMONIALS, TESTIMONIALS_VERIFIED,
} from '../data/academyData';
import { RevealOnScroll } from '../components/ScrollEffects';

const icons = {
  Users, Laptop, FileCheck, UserCheck, BookOpen, Globe2,
  Lightbulb, FileText, BarChart3, Target, Trophy,
};

const TONES = {
  teal:   { bar: 'bg-[#00A6B4]', tint: 'from-[#e6f7f9]', text: 'text-[#00A6B4]', badge: 'bg-[#00A6B4]/10 text-[#00808b]', btn: 'bg-[#063B78] hover:bg-[#0757B8]', tick: 'text-[#00A6B4]' },
  blue:   { bar: 'bg-[#0757B8]', tint: 'from-[#e8f0fb]', text: 'text-[#0757B8]', badge: 'bg-[#0757B8] text-white', btn: 'bg-[#063B78] hover:bg-[#0757B8]', tick: 'text-[#0757B8]' },
  orange: { bar: 'bg-[#FF7A00]', tint: 'from-[#fff2e5]', text: 'text-[#FF7A00]', badge: 'bg-[#FF7A00]/10 text-[#c25c00]', btn: 'bg-[#FF7A00] hover:bg-[#e66d00]', tick: 'text-[#FF7A00]' },
};

export default function HomePage({ setCurrentPage, onOpenEnquireModal }) {
  const scrollToPrograms = () =>
    document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
  const enquire = (title = '') => onOpenEnquireModal(title);

  return (
    <div className="bg-white">
      {/* 4. HERO */}
      <section className="relative isolate overflow-hidden bg-[#063B78] text-white">
        <img
          src={ACADEMY_INFO.heroImage}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#063B78] via-[#063B78]/90 to-[#063B78]/30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#18C6D9]">BUILD A SAFER TOMORROW</p>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-white">
            GLOBAL HSE<br />CERTIFICATIONS
          </h1>
          <p className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18C6D9]">
            ASP® • CSP® • CRSP®
          </p>
          <p className="mt-5 text-lg sm:text-xl font-semibold text-white">
            Focused training. Expert guidance. Exam success.
          </p>
          <p className="mt-3 max-w-xl text-sm sm:text-base text-slate-200 leading-relaxed">
            Structured preparation designed to help safety professionals build knowledge,
            confidence and exam readiness for professional safety certification examinations.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={scrollToPrograms} className="btn-orange">
              Explore Courses <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={() => enquire()} className="btn-outline-light">
              <Download className="w-4 h-4" /> Download Brochure
            </button>
          </div>
          <ul className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl text-sm">
            {[
              [Users, 'Instructor-Led Training'],
              [Laptop, 'Flexible Learning Modes'],
              [FileCheck, 'Mock Exams & Review'],
              [UserCheck, 'Expert Mentorship'],
            ].map(([Icon, label]) => (
              <li key={label} className="flex items-center gap-2 text-slate-100">
                <Icon className="w-5 h-5 text-[#18C6D9] shrink-0" />
                <span className="font-medium">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Academy tagline (highlighted) */}
      <section className="bg-gradient-to-r from-[#00A6B4] to-[#0757B8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-center">
          <p className="text-lg sm:text-2xl font-extrabold text-white">
            SANTOSH — Specialised Academy for NextGen Trainings in Occupational Health and Safety
          </p>
          <p className="mt-1 text-sm font-medium text-white/90">Business hours 24/7 · Accessible all over the world</p>
        </div>
      </section>

      {/* 5. PROGRAM CARDS */}
      <section id="programs" className="bg-[#F3F8FC] py-14 sm:py-20 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B78]">Examination Preparation Courses</h2>
            <p className="mt-3 text-slate-600">
              Professional coaching to prepare you for the ASP®, CSP® and CRSP® examinations.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3 items-stretch">
            {EXAM_PREP_PROGRAMS.map((p, i) => {
              const t = TONES[p.tone];
              return (
                <RevealOnScroll key={p.id} delay={i * 100} className="h-full">
                  <article
                    className={`relative h-full flex flex-col overflow-hidden rounded-2xl bg-white border shadow-lg ${
                      p.featured ? 'border-[#0757B8] ring-2 ring-[#0757B8]/20 lg:-translate-y-2' : 'border-slate-200'
                    }`}
                  >
                    <div className={`h-1.5 ${t.bar}`} />
                    <div className={`flex-1 flex flex-col p-6 sm:p-7 bg-gradient-to-b ${t.tint} to-white`}>
                      <span className={`self-start rounded-full px-3 py-1 text-[11px] font-bold tracking-wide uppercase ${t.badge}`}>
                        {p.badge}
                      </span>
                      <h3 className="mt-4 text-3xl font-extrabold text-[#063B78]">{p.code}</h3>
                      <p className="text-sm font-semibold text-slate-600">{p.fullName}</p>
                      <ul className="mt-5 space-y-2.5 flex-1">
                        {p.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2.5 text-sm text-slate-700">
                            <Check className={`w-4 h-4 mt-0.5 shrink-0 stroke-[3] ${t.tick}`} />
                            {pt}
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => enquire(p.title)}
                        className={`mt-7 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold text-white transition-colors cursor-pointer ${t.btn}`}
                      >
                        Explore {p.code} Program <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </article>
                </RevealOnScroll>
              );
            })}
          </div>
          <p className="mt-6 text-center text-xs text-slate-500 max-w-3xl mx-auto">
            SANTOSH Global HSE Academy provides independent training and examination preparation.
            The ASP®, CSP® and CRSP® credentials are awarded solely by their respective certifying bodies.
          </p>
        </div>
      </section>

      {/* Services: professional trainings */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B78]">Professional Trainings</h2>
          <p className="mt-2 text-slate-600">Health, Safety and Environment courses for professionals and organisations.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_PROGRAMS.map((c) => (
              <button key={c.id} onClick={() => setCurrentPage('services')} className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm hover:border-[#00A6B4] cursor-pointer">
                <img src={c.image} alt="" className="h-16 w-16 rounded-lg object-cover" loading="lazy" />
                <span>
                  <span className="block font-bold text-[#063B78]">{c.title}</span>
                  <span className="block text-xs text-slate-500 line-clamp-2">{c.shortDescription}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BENEFITS STRIP */}
      <section className="bg-white py-10 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {BENEFITS.map((b) => {
            const Icon = icons[b.icon];
            return (
              <div key={b.title} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F3F8FC] text-[#0757B8]">
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-sm font-bold text-[#063B78]">{b.title}</p>
                <p className="text-xs text-slate-500 mt-0.5">{b.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. STATS (verified figures only) */}
      {STATS_VERIFIED && (
        <section className="bg-[#063B78] text-white py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-3xl sm:text-4xl font-extrabold text-white">{s.value}</p>
                <p className="mt-1 text-sm text-[#81ccdd]">{s.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 8. JOURNEY */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B78]">Your Journey to Certification</h2>
          <p className="mt-2 text-slate-600">
            A simple and structured approach to help you move from preparation to exam readiness.
          </p>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4 relative">
            {JOURNEY_STEPS.map((s, i) => {
              const Icon = icons[s.icon];
              return (
                <li key={s.title} className="relative">
                  {i < JOURNEY_STEPS.length - 1 && (
                    <span className="hidden lg:block absolute top-6 left-14 right-0 border-t-2 border-dashed border-[#18C6D9]/50" />
                  )}
                  <div className="relative flex items-center gap-3">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0757B8] text-sm font-bold text-white ring-4 ring-white">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <Icon className="w-7 h-7 text-[#00A6B4]" />
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-[#063B78]">{s.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{s.text}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* 9. WHY US */}
      <section className="bg-[#F3F8FC]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2">
          <div className="px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B78]">Why SANTOSH Global HSE Academy?</h2>
            <p className="mt-2 text-xl font-bold text-[#00A6B4]">More than training. A career partner.</p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We are committed to empowering HSE professionals with structured, exam-focused
              preparation and continuous professional guidance as they work towards their global
              certification goals.
            </p>
            <ul className="mt-6 space-y-3">
              {WHY_US_POINTS.map((p) => (
                <li key={p} className="flex items-center gap-3 font-semibold text-[#063B78]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF7A00]">
                    <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <button onClick={() => setCurrentPage('why-choose-us')} className="mt-8 btn-primary">
              Know More About Us <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="min-h-[280px] lg:min-h-full">
            <img
              src="/images/hse_training_3d.jpg"
              alt="Instructor-led HSE examination preparation session"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 10. INSTRUCTOR (renders only once verified details are supplied) */}
      {INSTRUCTOR_VERIFIED && (
        <section className="py-14 sm:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-[280px_1fr] items-center">
            {INSTRUCTOR.photo && (
              <img src={INSTRUCTOR.photo} alt={INSTRUCTOR.name} className="w-full rounded-2xl object-cover shadow-lg" loading="lazy" />
            )}
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B78]">Learn From Industry Experience</h2>
              <p className="mt-4 text-2xl font-bold text-[#063B78]">{INSTRUCTOR.name}</p>
              <p className="text-[#00A6B4] font-semibold">{INSTRUCTOR.role}</p>
              <p className="mt-4 text-slate-600 leading-relaxed">{INSTRUCTOR.bio}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {INSTRUCTOR.expertise.map((e) => (
                  <li key={e} className="rounded-full bg-[#F3F8FC] px-3 py-1 text-xs font-semibold text-[#0757B8]">{e}</li>
                ))}
              </ul>
              <button onClick={() => setCurrentPage('about')} className="mt-6 btn-primary">
                View Instructor Profile <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 11. TESTIMONIALS (genuine only) */}
      {TESTIMONIALS_VERIFIED && TESTIMONIALS.length > 0 && (
        <section className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B78]">What Our Learners Say</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {TESTIMONIALS.slice(0, 3).map((t) => (
                <figure key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    {t.photo && <img src={t.photo} alt={t.name} className="h-12 w-12 rounded-full object-cover" loading="lazy" />}
                    <div>
                      <figcaption className="font-bold text-[#063B78]">{t.name}</figcaption>
                      <p className="text-xs text-slate-500">{t.program} Candidate, {t.country}</p>
                    </div>
                  </div>
                  <blockquote className="mt-4 text-sm text-slate-700">“{t.quote}”</blockquote>
                  <div className="mt-3 flex gap-0.5" aria-label={`${t.rating} out of 5`}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FF7A00] text-[#FF7A00]" />
                    ))}
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 12. FINAL CTA */}
      <section className="relative isolate overflow-hidden bg-[#063B78] text-white">
        <img src={ACADEMY_INFO.heroImage} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40" loading="lazy" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#063B78] via-[#063B78]/90 to-[#063B78]/60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <p className="text-lg font-semibold text-[#18C6D9]">Ready to Advance Your HSE Career?</p>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold text-white">
            Join SANTOSH <span className="text-[#18C6D9]">Global HSE Academy</span>
          </h2>
          <p className="mt-4 max-w-xl text-slate-200">
            Get structured preparation, expert guidance and dedicated support for your ASP®, CSP®
            and CRSP® examination journey.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => enquire()} className="btn-orange">
              Enquire Now <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={() => enquire()} className="btn-outline-light">
              Download Brochure <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="border-t border-white/15 bg-[#052d5c]/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-slate-100">
            {[
              [ShieldCheck, 'Build Your Knowledge', 'Get Prepared'],
              [Users, 'Learn from', 'Industry Experts'],
              [Award, 'Advance Your Career', 'Globally'],
              [Globe2, 'Join a Global', 'Learning Community'],
            ].map(([Icon, a, b]) => (
              <div key={a} className="flex items-center gap-3">
                <Icon className="w-7 h-7 text-[#18C6D9] shrink-0" />
                <span className="leading-tight">{a}<br />{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

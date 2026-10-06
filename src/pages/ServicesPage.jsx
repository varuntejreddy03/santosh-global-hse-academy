import React from 'react';
import { Users, Laptop, FileCheck, UserCheck, BookOpen, Globe2 } from 'lucide-react';
import { PageHero, CtaBand } from '../components/PageHero';

const items = [
  [BookOpen, 'Structured Curriculum', 'Step-by-step preparation aligned to each examination’s published blueprint.'],
  [Users, 'Instructor-Led Sessions', 'Live guidance from experienced HSE professionals.'],
  [FileCheck, 'Practice Questions & Mock Exams', 'Exam-style practice with detailed explanations and performance review.'],
  [UserCheck, 'Expert Mentorship', 'Professional guidance on weak areas and exam strategy.'],
  [Laptop, 'Online & Classroom Delivery', 'Flexible learning modes for working professionals.'],
  [Globe2, 'Global Learning Community', 'Learn alongside safety professionals from around the world.'],
];

export default function ServicesPage({ onOpenEnquireModal }) {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Resources"
        title="Everything you need to"
        accent="prepare with confidence"
        text="The learning support that comes with every ASP®, CSP® and CRSP® examination-preparation program."
      />
      <section className="bg-[#F3F8FC] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(([Icon, t, d]) => (
            <div key={t} className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e6f7f9] text-[#00A6B4]"><Icon className="w-6 h-6" /></div>
              <h3 className="text-lg font-bold text-[#063B78]">{t}</h3>
              <p className="mt-2 text-sm text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBand onEnquire={onOpenEnquireModal} />
    </div>
  );
}

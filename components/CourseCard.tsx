'use client';

import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import type { Course, PathwayStage } from '@/data/courses';
import { trackEvent } from '@/lib/analytics';

const stageClasses: Record<PathwayStage, string> = {
  Foundations: 'bg-teal text-white',
  'Learning Path': 'bg-sky text-white',
  Specialisation: 'bg-orange text-white',
  'Launch Pad': 'bg-navy text-white'
};

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group flex h-full flex-col rounded-card bg-white p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:shadow-pop">
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-cream px-3 py-1 text-xs font-extrabold text-navy">Age {course.ageRange}</span>
        <span className={`rounded-full px-3 py-1 text-xs font-extrabold ${stageClasses[course.pathwayStage]}`}>{course.pathwayStage}</span>
        {course.comingSoon && <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-extrabold text-slate-600">Coming Soon</span>}
      </div>
      <h3 className="text-2xl font-extrabold leading-tight text-navy">{course.title}</h3>
      <p className="mt-1 font-bold text-orange">{course.subtitle}</p>
      <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-700">{course.descriptor}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {course.keywords.slice(0, 4).map((keyword) => (
          <span key={keyword} className="rounded-full bg-creamAlt px-3 py-1 text-xs font-bold text-navy/75">{keyword}</span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-2 text-sm font-bold text-slate-600">
        <Clock size={16} />
        {course.duration} · {course.format}
      </div>
      <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
        <Link
          href={`/courses/${course.slug}`}
          onClick={() => trackEvent('course_card_click', { course: course.slug })}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-navy px-4 py-3 text-sm font-extrabold text-white transition hover:bg-[#082a47]"
        >
          Explore Course <ArrowRight size={16} />
        </Link>
        {course.comingSoon ? (
          <button className="flex-1 cursor-not-allowed rounded-full bg-slate-100 px-4 py-3 text-sm font-extrabold text-slate-400" disabled>Register Now</button>
        ) : (
          <a
            href={course.registerLink}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent('registration_click', { course: course.slug, batch: 'course_card' })}
            className="inline-flex flex-1 items-center justify-center rounded-full bg-orange px-4 py-3 text-sm font-extrabold text-white transition hover:bg-[#e76e00]"
          >
            Register Now
          </a>
        )}
      </div>
    </article>
  );
}

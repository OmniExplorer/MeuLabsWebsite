'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Users } from 'lucide-react';
import { formatPathwayStage, type Course, type PathwayStage } from '@/data/courses';
import { trackEvent } from '@/lib/analytics';

const stageClasses: Record<PathwayStage, string> = {
  Foundations: 'bg-gradient-to-br from-[#FF7A00] to-[#FFB347] text-white',
  'Learning Path': 'bg-gradient-to-br from-[#31C3DE] to-[#7DE3F2] text-white',
  Specialisation: 'bg-gradient-to-br from-[#48D83E] to-[#8BE95E] text-white',
  'Launch Pad': 'bg-gradient-to-br from-[#8B5CF6] to-[#C084FC] text-white'
};

const courseImages: Record<string, string> = {
  kx: '/assets/images/hero-robotics.jpg',
  'kx-superhero': '/assets/images/project-traffic.jpg',
  'kx-wild': '/assets/images/electronics-board.jpg',
  'kx-j': '/assets/images/hero-robotics.jpg',
  'coding-software': '/assets/images/hero-code.jpg',
  'robotics-iot': '/assets/images/project-prototype.jpg',
  'digital-media': '/assets/images/project-film.jpg',
  se: '/assets/images/project-dashboard.jpg',
  ds: '/assets/images/project-ai.jpg',
  eee: '/assets/images/electronics-board.jpg',
  es: '/assets/images/project-electronics-lab.jpg',
  mr: '/assets/images/project-electronics-lab.jpg',
  cs: '/assets/images/hero-code.jpg',
  gd: '/assets/images/project-game.jpg',
  dm: '/assets/images/project-video.jpg',
  va: '/assets/images/project-film.jpg',
  ua: '/assets/images/why-curriculum.jpg',
  ig: '/assets/images/why-instructors.jpg',
  fs: '/assets/images/project-3d-print.jpg'
};

const courseHrefOverrides: Record<string, string> = {
  'kx-superhero': '/courses/kx',
  'kx-wild': '/courses/kx'
};

export function CourseCard({ course }: { course: Course }) {
  const courseHref = courseHrefOverrides[course.slug] ?? `/courses/${course.slug}`;

  return (
    <article className="group flex h-full min-h-[382px] flex-col overflow-hidden rounded-[14px] border border-navy/10 bg-white shadow-[0_12px_30px_rgba(13,53,87,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-pop">
      <div className="relative h-[152px] overflow-hidden bg-creamAlt">
        <Image
          src={courseImages[course.slug] ?? '/assets/images/project-electronics-lab.jpg'}
          alt=""
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 92vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-3.5">
        <div className="mb-2 flex flex-wrap items-center gap-1.5">
          <span className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-extrabold tracking-[0.08em] ${stageClasses[course.pathwayStage]}`}>{formatPathwayStage(course.pathwayStage)}</span>
          {course.comingSoon && <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-extrabold text-slate-600">Coming Soon</span>}
        </div>
        <h3 className="line-clamp-2 min-h-[42px] text-lg font-extrabold leading-tight text-navy">{course.title}</h3>
        <div className="mt-0 flex flex-wrap gap-1.5">
          {course.keywords.slice(0, 3).map((keyword) => (
            <span key={keyword} className="rounded-full bg-[#FFF4E6] px-2.5 py-1.5 text-[11px] font-extrabold leading-none">
              <span className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-transparent">{keyword}</span>
            </span>
          ))}
        </div>
        <div className="mt-3 grid gap-1.5 text-[13px] font-semibold text-navy">
          <div className="flex min-h-[22px] items-center gap-2">
            <Users size={14} className="shrink-0 text-slate-500" strokeWidth={2.4} aria-hidden />
            <span>Age: {course.ageRange}</span>
          </div>
          <div className="flex min-h-[22px] items-center gap-2">
            <Clock size={14} className="shrink-0 text-slate-500" strokeWidth={2.4} aria-hidden />
            <span>Duration: {course.duration}</span>
          </div>
        </div>
        <div className="mt-auto grid gap-2 pt-4 sm:grid-cols-2">
          <Link
            href={courseHref}
            onClick={() => trackEvent('course_card_click', { course: course.slug })}
            className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-extrabold shadow-[0_10px_24px_rgba(13,53,87,0.10)] transition duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-creamAlt hover:shadow-pop"
          >
            <span className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-transparent">View Course</span>
            <ArrowRight size={14} className="text-[#FF4F1F]" aria-hidden />
          </Link>
          {course.comingSoon ? (
            <button className="min-h-[40px] cursor-not-allowed rounded-full bg-slate-100 px-4 py-2 text-[13px] font-extrabold text-slate-400" disabled>Join Waitlist</button>
          ) : (
            <a
              href={course.registerLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent('registration_click', { course: course.slug, batch: 'course_card' })}
              className="inline-flex min-h-[40px] items-center justify-center rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] px-4 py-2 text-[13px] font-extrabold text-white shadow-[0_10px_24px_rgba(255,79,31,0.20)] transition duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:from-[#ff6b00] hover:to-[#f04417] hover:shadow-pop"
            >
              Register Now
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

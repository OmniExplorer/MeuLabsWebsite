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

const selectedStageClasses: Record<PathwayStage, string> = {
  Foundations: 'border-orange ring-orange/30',
  'Learning Path': 'border-sky ring-sky/30',
  Specialisation: 'border-[#48D83E] ring-[#48D83E]/30',
  'Launch Pad': 'border-[#8B5CF6] ring-[#8B5CF6]/30'
};

const courseImages: Record<string, string> = {
  kx: '/assets/images/Course-Hero-Images/KX.jpg',
  'kx-superhero': '/assets/images/Course-Hero-Images/KX.jpg',
  'kx-wild': '/assets/images/Course-Hero-Images/KX.jpg',
  'kx-j': '/assets/images/Course-Hero-Images/KXJ .jpg',
  'coding-software': '/assets/images/Course-Hero-Images/Coding and Software .jpg',
  'robotics-iot': '/assets/images/Course-Hero-Images/Robotics and IoT.jpg',
  'digital-media': '/assets/images/Course-Hero-Images/Digital Media.jpg',
  se: '/assets/images/Course-Hero-Images/Software Engineering.jpg',
  ds: '/assets/images/Course-Hero-Images/Data Science and AI.jpg',
  gd: '/assets/images/Course-Hero-Images/Game Development.jpg',
  cs: '/assets/images/Course-Hero-Images/Cyber Security.jpg',
  es: '/assets/images/Course-Hero-Images/Embedded Systems & IoT.jpg',
  eee: '/assets/images/Course-Hero-Images/Electrical and Electronics Engineering.jpg',
  mr: '/assets/images/Course-Hero-Images/Manufacturing and Robotics.jpg',
  dm: '/assets/images/Course-Hero-Images/Digital Marketing.jpg',
  va: '/assets/images/Course-Hero-Images/Animation & Post-Production.jpg',
  ua: '/assets/images/Course-Hero-Images/University Access.jpg',
  ig: '/assets/images/Course-Hero-Images/Industry Gateway.jpg',
  fs: '/assets/images/Course-Hero-Images/Founder Studio.jpg'
};

const courseHrefOverrides: Record<string, string> = {
  'kx-superhero': '/courses/kx',
  'kx-wild': '/courses/kx'
};

export function CourseCard({
  course,
  displayTitle,
  selected = false,
  onSelect,
  basePath = ''
}: {
  course: Course;
  displayTitle?: string;
  selected?: boolean;
  onSelect?: (slug: string) => void;
  basePath?: string;
}) {
  const courseHref = courseHrefOverrides[course.slug] ?? `${basePath}/courses/${course.slug}`;
  const title = displayTitle ?? course.title;
  const selectedClass = selected ? `${selectedStageClasses[course.pathwayStage]} ring-4 shadow-pop` : 'border-navy/10';

  return (
    <article
      className={`group flex h-full min-h-[382px] flex-col overflow-hidden rounded-[14px] border bg-white shadow-[0_12px_30px_rgba(13,53,87,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-pop ${onSelect ? 'cursor-pointer' : ''} ${selectedClass}`}
      onClick={() => { if (onSelect) { trackEvent('course_select', { course: course.slug }); onSelect(course.slug); } }}
    >
      <div className="relative h-[152px] overflow-hidden bg-creamAlt">
        <Image
          src={courseImages[course.slug] ?? '/assets/images/project-electronics-lab.jpg'}
          alt={title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          style={course.slug === 'mr' ? { objectPosition: 'center 38%' } : undefined}
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 92vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-3.5">
        <div className="mb-2 flex flex-wrap items-center gap-1.5">
          <span className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-extrabold tracking-[0.08em] ${stageClasses[course.pathwayStage]}`}>{formatPathwayStage(course.pathwayStage)}</span>
          {course.comingSoon && <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-extrabold text-slate-600">Coming Soon</span>}
        </div>
        <h3 className="line-clamp-2 min-h-[42px] text-lg font-extrabold leading-tight text-navy">{title}</h3>
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
          <a
            href={course.registerLink}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent(course.comingSoon ? 'waitlist_click' : 'registration_click', { course: course.slug, batch: 'course_card' })}
            className="inline-flex min-h-[40px] items-center justify-center rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] px-4 py-2 text-[13px] font-extrabold text-white shadow-[0_10px_24px_rgba(255,79,31,0.20)] transition duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:from-[#ff6b00] hover:to-[#f04417] hover:shadow-pop"
          >
            {course.comingSoon ? 'Join Waitlist' : 'Register Now'}
          </a>
        </div>
      </div>
    </article>
  );
}

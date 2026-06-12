'use client';

import { useState } from 'react';
import { Blocks, Bot, BrainCircuit, BriefcaseBusiness, Code2, Factory, GraduationCap, Landmark, Lightbulb, Megaphone, Orbit, Rocket, Route, Shield, Video, type LucideIcon } from 'lucide-react';
import { allCourses } from '@/data/courses';
import { AutoCarousel } from './AutoCarousel';
import { CourseExplorer } from './CourseExplorer';

type EcosystemCourse = {
  slug: string;
  name: string;
  icon: LucideIcon;
  href: string;
  badge?: string;
};

type EcosystemStage = {
  title: string;
  age: string;
  body: string;
  courses: EcosystemCourse[];
  color: string;
  accent: string;
  ringColor: string;
  cornerColor: string;
  badge: string;
};

const specialisationIconBySlug = {
  se: Code2,
  ds: BrainCircuit,
  gd: Code2,
  cs: Shield,
  es: Bot,
  eee: Orbit,
  mr: Factory,
  dm: Megaphone,
  va: Video
};

const specialisationCourses = allCourses
  .filter((course) => course.pathwayStage === 'Specialisation')
  .map((course) => ({
    slug: course.slug,
    name: course.title,
    icon: specialisationIconBySlug[course.slug as keyof typeof specialisationIconBySlug] ?? GraduationCap,
    href: `/courses/${course.slug}`,
    badge: course.comingSoon ? 'COMING SOON' : undefined
  }));

const ecosystemStages: EcosystemStage[] = [
  {
    title: 'Foundations',
    age: 'Age 6 - 12',
    body: 'Build strong foundational skills across coding, design, robotics, videography, communication, and leadership while developing essential 21st-century skills.',
    courses: [
      { slug: 'kx-j', name: 'STEM For Kids: Junior', icon: Rocket, href: '/courses/kx-j' },
      { slug: 'kx', name: 'STEM For Kids', icon: Shield, href: '/courses/kx' }
    ],
    color: 'bg-gradient-to-br from-[#FF7A00] to-[#FFB347]',
    accent: 'from-orange/16 via-white to-white border-orange/60',
    ringColor: 'border-orange',
    cornerColor: 'bg-orange/20',
    badge: 'bg-gradient-to-br from-[#FF7A00] to-[#FF4F1F]'
  },
  {
    title: 'Learning Paths',
    age: 'Age 10 - 14',
    body: 'Choose themed courses aligned with engineering, analytics, or creative expression. Deeper, project-driven, and skill-focused.',
    courses: [
      { slug: 'coding-software', name: 'Coding and Software', icon: Code2, href: '/courses/coding-software' },
      { slug: 'robotics-iot', name: 'Robotics and IoT', icon: Bot, href: '/courses/robotics-iot' },
      { slug: 'digital-media', name: 'Digital Media Production', icon: Video, href: '/courses/digital-media' }
    ],
    color: 'bg-gradient-to-br from-[#31C3DE] to-[#7DE3F2]',
    accent: 'from-sky/16 via-white to-white border-sky/60',
    ringColor: 'border-sky',
    cornerColor: 'bg-sky/20',
    badge: 'bg-gradient-to-br from-[#1995D3] to-[#31C3DE]'
  },
  {
    title: 'Specialisations',
    age: 'Age 12 - 16',
    body: 'Dive deep into industry-focused domains through advanced projects, technical mentorship, and real-world problem solving.',
    courses: specialisationCourses,
    color: 'bg-gradient-to-br from-[#48D83E] to-[#8BE95E]',
    accent: 'from-[#48D83E]/16 via-white to-white border-[#48D83E]/60',
    ringColor: 'border-[#48D83E]',
    cornerColor: 'bg-[#48D83E]/20',
    badge: 'bg-gradient-to-br from-[#48D83E] to-[#65D96C]'
  },
  {
    title: 'Launch Pad',
    age: 'Age 16 +',
    body: 'Transition into university, career, or entrepreneurship through structured pathways and our Launch Network.',
    courses: [
      { slug: 'ig', name: 'Industry Gateway', icon: BriefcaseBusiness, href: '/courses/ig' },
      { slug: 'ua', name: 'University Access', icon: Landmark, href: '/courses/ua' },
      { slug: 'fs', name: 'Founder Studio', icon: Lightbulb, href: '/courses/fs', badge: 'COMING SOON' }
    ],
    color: 'bg-gradient-to-br from-[#8B5CF6] to-[#C084FC]',
    accent: 'from-[#8B5CF6]/16 via-white to-white border-[#8B5CF6]/60',
    ringColor: 'border-[#8B5CF6]',
    cornerColor: 'bg-[#8B5CF6]/20',
    badge: 'bg-gradient-to-br from-[#8B5CF6] to-[#A855F7]'
  }
];

export function CoursesExplorerEcosystem() {
  const [selectedSlug, setSelectedSlug] = useState<string>();

  return (
    <>
      <section id="explorer" className="bg-cream px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[92rem]">
          <div className="mb-5">
            <div className="mb-3 max-w-3xl border-l-4 border-orange pl-5">
              <p className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">Course Explorer</p>
            </div>
          </div>
          <CourseExplorer selectedSlug={selectedSlug} onSelectCourse={setSelectedSlug} />
        </div>
      </section>

      <section className="bg-cream px-4 pb-5 sm:px-6 lg:px-8" aria-labelledby="course-ecosystem-title">
        <div className="mx-auto max-w-[92rem]">
          <div className="mb-6 border-l-4 border-orange pl-5">
            <p className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">Learning Pathway</p>
          </div>
          <h2 id="course-ecosystem-title" className="sr-only">Learning Pathway</h2>
          <div className="grid gap-4 lg:grid-cols-4">
            {ecosystemStages.map((stage, index) => {
              const stageNumber = index + 1;
              const isStageSelected = stage.courses.some((course) => course.slug === selectedSlug);
              const selectedStageCourse = stage.courses.find((course) => course.slug === selectedSlug);
              const displayedCourses = stage.title === 'Specialisations' && selectedStageCourse
                ? [selectedStageCourse, ...stage.courses.filter((course) => course.slug !== selectedSlug)]
                : stage.title === 'Specialisations' ? [...stage.courses, ...stage.courses] : stage.courses;
              const articleClass = isStageSelected
                ? `bg-gradient-to-b ${stage.accent} ${stage.ringColor}`
                : 'border-slate-200 bg-gradient-to-b from-white via-white to-slate-50 grayscale';
              const badgeClass = isStageSelected ? stage.badge : 'bg-slate-300';
              const cornerClass = isStageSelected ? stage.cornerColor : 'bg-slate-200';

              return (
                <article key={stage.title} className={`relative flex h-full flex-col overflow-hidden rounded-[22px] border-x border-b border-t-[5px] p-4 shadow-soft transition duration-300 ${articleClass}`}>
                  <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 overflow-hidden">
                    <div className={`absolute -right-8 -top-10 h-32 w-32 rounded-full transition duration-300 ${cornerClass}`} />
                  </div>
                  <div className="relative mb-5 grid min-h-[56px] grid-cols-[auto_minmax(0,1fr)] items-start gap-4 pr-8">
                    <div className={`grid h-11 min-w-[70px] shrink-0 place-items-center rounded-2xl px-3 text-sm font-extrabold text-white shadow-soft transition duration-300 ${badgeClass}`}>
                      Level {stageNumber}
                    </div>
                    <div className="min-w-0">
                      <h3 className="break-words text-xl font-extrabold leading-tight text-navy">{stage.title}</h3>
                      <p className="mt-1 text-sm font-extrabold text-navy/75">{stage.age}</p>
                    </div>
                  </div>
                  <p className="min-h-[118px] text-sm font-semibold leading-6 text-slate-700 lg:min-h-[168px]">{stage.body}</p>
                  <p className="mt-4 text-sm font-extrabold uppercase tracking-[0.18em] text-slate-600">{stage.title === 'Launch Pad' ? 'Pathways' : 'Courses'}</p>
                  {stage.title === 'Specialisations' && !selectedStageCourse ? (
                    <AutoCarousel
                      axis="y"
                      ariaLabel="Specialisation courses"
                      className="specialisation-course-carousel mt-3 max-h-[268px] pr-1"
                      trackClassName="grid gap-2.5 pb-2.5"
                      speedPixelsPerSecond={60}
                    >
                      {stage.courses.map((course) => (
                        <EcosystemCourseTablet key={course.slug} course={course} selected={selectedSlug === course.slug} stage={stage} />
                      ))}
                    </AutoCarousel>
                  ) : (
                    <div className="no-scrollbar mt-3 max-h-[268px] overflow-y-auto pr-1">
                      <ul className="grid gap-2.5">
                        {displayedCourses.map((course) => (
                          <li key={course.slug}>
                            <EcosystemCourseTablet course={course} selected={selectedSlug === course.slug} stage={stage} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function EcosystemCourseTablet({
  course,
  selected,
  stage
}: {
  course: EcosystemCourse;
  selected: boolean;
  stage: EcosystemStage;
}) {
  const CourseIcon = course.icon;
  const iconClass = selected ? `${stage.color} text-white` : 'bg-slate-200 text-slate-500';
  const tabletClass = selected
    ? `border-2 ${stage.ringColor} bg-white text-navy shadow-[inset_0_0_0_1px_rgba(255,255,255,0.85),0_12px_24px_rgba(13,53,87,0.12)]`
    : 'border-slate-200 bg-white/80 text-slate-500 grayscale';

  return (
    <a href={course.href} className={`grid min-h-[58px] grid-cols-[2.5rem_1fr] items-center gap-3 rounded-[14px] border px-3.5 py-2.5 text-sm font-extrabold leading-5 transition duration-200 hover:-translate-y-1 hover:scale-[1.01] focus-visible:scale-[1.01] ${tabletClass}`}>
      <span className={`grid h-7 w-7 place-items-center self-center rounded-full transition duration-200 ${iconClass}`}>
        <CourseIcon size={16} strokeWidth={2.5} aria-hidden />
      </span>
      <span className="min-w-0 break-words">
        {course.name}
        {course.badge && <span className="mt-1 block w-fit rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-extrabold text-slate-500">{course.badge}</span>}
      </span>
    </a>
  );
}

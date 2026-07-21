'use client';

import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Bot, BrainCircuit, BriefcaseBusiness, Code2, Factory, GraduationCap, Landmark, Lightbulb, Megaphone, Orbit, Rocket, Shield, Video, type LucideIcon } from 'lucide-react';
import { allCourses, type Course } from '@/data/courses';
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
    body: 'Build strong foundational skills in Robotics, Coding, electronics, IoT, creative design, critical thinking, and leadership while developing essential 21st-century skills.',
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
    body: 'Choose themed courses aligned with coding, robotics, and digital media, designed to help students build deeper understanding through project-based, skill-focused learning.',
    courses: [
      { slug: 'coding-software', name: 'Coding and Software', icon: Code2, href: '/courses/coding-software' },
      { slug: 'robotics-iot', name: 'Robotics and IoT', icon: Bot, href: '/courses/robotics-iot' },
      { slug: 'digital-media', name: 'Digital Media', icon: Video, href: '/courses/digital-media' }
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

const specialisationsByLearningPath: Record<string, string[]> = {
  'coding-software': ['se', 'ds', 'gd', 'cs'],
  'robotics-iot': ['es', 'eee', 'mr'],
  'digital-media': ['dm', 'va']
};

const foundationSlugs = ['kx-j', 'kx'];
const learningPathSlugs = Object.keys(specialisationsByLearningPath);
const specialisationSlugs = Object.values(specialisationsByLearningPath).flat();
const launchPadSlugs = ['ig', 'ua', 'fs'];

function getActivePathSlugs(selectedSlug?: string) {
  if (!selectedSlug) return new Set<string>();

  if (foundationSlugs.includes(selectedSlug)) {
    return new Set([...foundationSlugs, ...learningPathSlugs, ...specialisationSlugs, ...launchPadSlugs]);
  }

  if (learningPathSlugs.includes(selectedSlug)) {
    return new Set([...foundationSlugs, selectedSlug, ...specialisationsByLearningPath[selectedSlug], ...launchPadSlugs]);
  }

  const parentLearningPath = learningPathSlugs.find((slug) => specialisationsByLearningPath[slug].includes(selectedSlug));
  if (parentLearningPath) {
    return new Set([...foundationSlugs, parentLearningPath, selectedSlug, ...launchPadSlugs]);
  }

  if (launchPadSlugs.includes(selectedSlug)) {
    return new Set([...foundationSlugs, ...learningPathSlugs, ...specialisationSlugs, selectedSlug]);
  }

  return new Set([selectedSlug]);
}

export function CoursesExplorerEcosystem({
  courses = allCourses,
  basePath = '',
  hiddenInterestLabels = []
}: {
  courses?: Course[];
  basePath?: string;
  hiddenInterestLabels?: string[];
}) {
  const [selectedSlug, setSelectedSlug] = useState<string>();
  const stages = ecosystemStages;
  const activePathSlugs = useMemo(() => getActivePathSlugs(selectedSlug), [selectedSlug]);
  const pathwayGridRef = useRef<HTMLDivElement>(null);
  const [foundationBranch, setFoundationBranch] = useState<{ startX: number; startY: number; endX: number; targetYs: number[] }>();
  const [learningBranches, setLearningBranches] = useState<Array<{ slug: string; d: string; endX: number; endY: number }>>([]);

  useLayoutEffect(() => {
    const grid = pathwayGridRef.current;
    if (!grid) return;

    const updateBranch = () => {
      if (!window.matchMedia('(min-width: 1024px)').matches) {
        setFoundationBranch(undefined);
        return;
      }

      const source = grid.querySelector<HTMLElement>('[data-course-slug="kx"]');
      const targets = learningPathSlugs
        .map((slug) => grid.querySelector<HTMLElement>(`[data-course-slug="${slug}"]`))
        .filter((element): element is HTMLElement => Boolean(element));
      if (!source || targets.length !== learningPathSlugs.length) return;

      const gridBox = grid.getBoundingClientRect();
      const sourceBox = source.getBoundingClientRect();
      const targetBoxes = targets.map((target) => target.getBoundingClientRect());
      const startX = sourceBox.right - gridBox.left;
      const startY = sourceBox.top + sourceBox.height / 2 - gridBox.top;
      const endX = targetBoxes[0].left - gridBox.left;
      const targetYs = targetBoxes.map((box) => box.top + box.height / 2 - gridBox.top);

      setFoundationBranch({
        startX,
        startY,
        endX,
        targetYs
      });
    };

    updateBranch();
    const observer = new ResizeObserver(updateBranch);
    observer.observe(grid);
    window.addEventListener('resize', updateBranch);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateBranch);
    };
  }, [selectedSlug]);

  useLayoutEffect(() => {
    const grid = pathwayGridRef.current;
    const showAllLearningBranches = Boolean(selectedSlug && foundationSlugs.includes(selectedSlug));
    if (!grid || !selectedSlug || (!showAllLearningBranches && !learningPathSlugs.includes(selectedSlug))) {
      setLearningBranches([]);
      return;
    }

    const updateBranches = () => {
      if (!window.matchMedia('(min-width: 1024px)').matches) {
        setLearningBranches([]);
        return;
      }

      const gridBox = grid.getBoundingClientRect();
      const sourceSlugs = showAllLearningBranches ? learningPathSlugs : [selectedSlug];
      const nextBranches = sourceSlugs.flatMap((sourceSlug) => {
        const source = grid.querySelector<HTMLElement>(`[data-course-slug="${sourceSlug}"]`);
        const targetSlugs = specialisationsByLearningPath[sourceSlug];
        if (!source || !targetSlugs) return [];
        const sourceBox = source.getBoundingClientRect();
        const startX = sourceBox.right - gridBox.left;
        const startY = sourceBox.top + sourceBox.height / 2 - gridBox.top;

        return targetSlugs.flatMap((slug) => {
          const target = grid.querySelector<HTMLElement>(`[data-course-slug="${slug}"]`);
          if (!target) return [];
          const targetBox = target.getBoundingClientRect();
          const endX = targetBox.left - gridBox.left;
          const endY = targetBox.top + targetBox.height / 2 - gridBox.top;
          return [{
            slug: `${sourceSlug}-${slug}`,
            endX,
            endY,
            d: `M ${startX} ${startY} C ${startX + 24} ${startY}, ${endX - 34} ${endY}, ${endX - 2} ${endY}`
          }];
        });
      });
      setLearningBranches(nextBranches);
    };

    updateBranches();
    const observer = new ResizeObserver(updateBranches);
    observer.observe(grid);
    window.addEventListener('resize', updateBranches);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateBranches);
    };
  }, [selectedSlug]);

  return (
    <>
      <section id="explorer" className="bg-cream px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[92rem]">
          <div className="mb-5">
            <div className="mb-3 max-w-3xl border-l-4 border-orange pl-5">
              <p className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">Course Explorer</p>
            </div>
          </div>
          <CourseExplorer selectedSlug={selectedSlug} onSelectCourse={setSelectedSlug} courses={courses} basePath={basePath} hiddenInterestLabels={hiddenInterestLabels} />
        </div>
      </section>

      <section className="bg-[linear-gradient(90deg,#FFEACC_0%,#FFFFFF_100%)] px-4 pb-5 sm:px-6 lg:px-8" aria-labelledby="course-ecosystem-title">
        <div className="mx-auto max-w-[92rem]">
          <div className="mb-6 border-l-4 border-orange pl-5">
            <p className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">Learning Pathway</p>
          </div>
          <h2 id="course-ecosystem-title" className="text-[2.85rem] font-normal leading-[1.05] text-navy md:text-[4rem]">A long-term journey, built step by step</h2>
          <p className="mb-10 mt-5 w-full text-lg font-extrabold leading-8 text-slate-600">From first steps to advanced pathways, our courses help students discover their passions and build real-world skills for the future.</p>
          <div ref={pathwayGridRef} className="relative grid items-stretch gap-5 lg:grid-cols-4">
            {foundationBranch && selectedSlug && foundationSlugs.includes(selectedSlug) && (
              <svg className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-hidden" aria-hidden="true">
                {foundationBranch.targetYs.map((targetY, index) => (
                  <g key={learningPathSlugs[index]}>
                    <path
                      d={`M ${foundationBranch.startX} ${foundationBranch.startY} C ${foundationBranch.startX + 24} ${foundationBranch.startY}, ${foundationBranch.endX - 34} ${targetY}, ${foundationBranch.endX - 2} ${targetY}`}
                      fill="none"
                      stroke="white"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                    <path
                      d={`M ${foundationBranch.startX} ${foundationBranch.startY} C ${foundationBranch.startX + 24} ${foundationBranch.startY}, ${foundationBranch.endX - 34} ${targetY}, ${foundationBranch.endX - 2} ${targetY}`}
                      fill="none"
                      stroke="#FF7A00"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <path d={`M ${foundationBranch.endX - 10} ${targetY - 7} L ${foundationBranch.endX - 2} ${targetY} L ${foundationBranch.endX - 10} ${targetY + 7}`} fill="none" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={`M ${foundationBranch.endX - 10} ${targetY - 7} L ${foundationBranch.endX - 2} ${targetY} L ${foundationBranch.endX - 10} ${targetY + 7}`} fill="none" stroke="#FF7A00" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                ))}
              </svg>
            )}
            {learningBranches.length > 0 && (
              <svg className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-hidden" aria-hidden="true">
                {learningBranches.map((branch) => (
                  <g key={branch.slug}>
                    <path d={branch.d} fill="none" stroke="white" strokeWidth="8" strokeLinecap="round" />
                    <path d={branch.d} fill="none" stroke="#31C3DE" strokeWidth="3.5" strokeLinecap="round" />
                    <path d={`M ${branch.endX - 10} ${branch.endY - 7} L ${branch.endX - 2} ${branch.endY} L ${branch.endX - 10} ${branch.endY + 7}`} fill="none" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={`M ${branch.endX - 10} ${branch.endY - 7} L ${branch.endX - 2} ${branch.endY} L ${branch.endX - 10} ${branch.endY + 7}`} fill="none" stroke="#31C3DE" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                ))}
              </svg>
            )}
            {stages.map((stage, index) => {
              const stageNumber = index + 1;
              const isStageSelected = stage.courses.some((course) => course.slug === selectedSlug);
              const isStageActive = stage.courses.some((course) => activePathSlugs.has(course.slug));
              const selectedStageCourse = stage.courses.find((course) => course.slug === selectedSlug);
              const selectedLearningSpecialisations = selectedSlug ? specialisationsByLearningPath[selectedSlug] : undefined;
              const displayedCourses = stage.title === 'Specialisations' && selectedStageCourse
                ? [selectedStageCourse, ...stage.courses.filter((course) => course.slug !== selectedSlug)]
                : stage.title === 'Specialisations' && selectedLearningSpecialisations
                  ? [
                      ...selectedLearningSpecialisations.map((slug) => stage.courses.find((course) => course.slug === slug)).filter((course): course is EcosystemCourse => Boolean(course)),
                      ...stage.courses.filter((course) => !selectedLearningSpecialisations.includes(course.slug))
                    ]
                  : stage.title === 'Specialisations' && !selectedSlug ? [...stage.courses, ...stage.courses] : stage.courses;
              const articleClass = isStageActive
                ? stage.ringColor
                : 'border-slate-200 grayscale';
              const badgeClass = isStageActive ? stage.badge : 'bg-slate-300';
              const cornerClass = isStageActive ? stage.cornerColor : 'bg-slate-200';

              return (
                <article key={stage.title} className={`relative flex h-full flex-col overflow-hidden rounded-[22px] border-x border-b border-t-[5px] bg-[linear-gradient(180deg,#FFFFFF_0%,#FFFAEE_19%,#FFFCF5_80%,#FFFFFF_100%)] p-4 shadow-soft transition duration-300 ${articleClass} ${isStageSelected ? 'ring-4 ring-navy/10' : ''}`}>
                  <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 overflow-hidden">
                    <div className={`absolute -right-8 -top-10 h-32 w-32 rounded-full transition duration-300 ${cornerClass}`} />
                  </div>
                  <div className="relative mb-5 grid min-h-[70px] grid-cols-[auto_minmax(0,1fr)] items-start gap-3 pr-3 lg:h-[70px]">
                    <div className={`grid h-11 min-w-[64px] shrink-0 place-items-center rounded-2xl px-2.5 text-sm font-extrabold text-white shadow-soft transition duration-300 ${badgeClass}`}>
                      Level {stageNumber}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-extrabold leading-tight text-navy xl:text-xl">{stage.title}</h3>
                      <p className="mt-1 text-sm font-extrabold text-navy/75">{stage.age}</p>
                    </div>
                  </div>
                  <p className="min-h-[118px] text-sm font-semibold leading-6 text-slate-700 lg:h-[168px] lg:min-h-[168px]">{stage.body}</p>
                  <p className="mt-4 text-sm font-extrabold uppercase tracking-[0.18em] text-slate-600">{stage.title === 'Launch Pad' ? 'Pathways' : 'Courses'}</p>
                  {stage.title === 'Specialisations' && !selectedSlug ? (
                    <AutoCarousel
                      axis="y"
                      ariaLabel="Specialisation courses"
                      className="specialisation-course-carousel mt-3 max-h-[268px] px-1 pt-1"
                      trackClassName="grid gap-2.5 pb-2.5"
                      speedPixelsPerSecond={60}
                    >
                      {stage.courses.map((course) => (
                        <EcosystemCourseTablet key={course.slug} course={course} selected={selectedSlug === course.slug} active={activePathSlugs.has(course.slug)} stage={stage} basePath={basePath} />
                      ))}
                    </AutoCarousel>
                  ) : (
                    <div className={`no-scrollbar mt-3 overflow-y-auto px-1 pt-1 transition-[max-height] duration-300 ${selectedSlug && foundationSlugs.includes(selectedSlug) && stage.title === 'Specialisations' ? 'max-h-[640px]' : 'max-h-[268px]'}`}>
                      <ul className="grid gap-2.5">
                        {displayedCourses.map((course, courseIndex) => (
                          <li key={course.slug}>
                            <EcosystemCourseTablet course={course} selected={selectedSlug === course.slug} active={activePathSlugs.has(course.slug)} stage={stage} basePath={basePath} />
                            {stage.title === 'Foundations' && selectedSlug === 'kx-j' && courseIndex === 0 && <FoundationArrow />}
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

function FoundationArrow() {
  return (
    <div className="relative z-40 flex h-0 items-center justify-center" aria-hidden="true">
      <svg width="24" height="22" viewBox="0 0 24 22" fill="none" className="absolute top-0 overflow-visible drop-shadow-[0_3px_5px_rgba(255,122,0,0.24)]">
        <path d="M12 0V15M6.5 9.5L12 15L17.5 9.5" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 0V15M6.5 9.5L12 15L17.5 9.5" stroke="#FF7A00" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function EcosystemCourseTablet({
  course,
  selected,
  active,
  stage,
  basePath = ''
}: {
  course: EcosystemCourse;
  selected: boolean;
  active: boolean;
  stage: EcosystemStage;
  basePath?: string;
}) {
  const CourseIcon = course.icon;
  const iconClass = active ? `${stage.color} text-white` : 'bg-slate-200 text-slate-500';
  const tabletClass = active
    ? `border-2 ${stage.ringColor} bg-white text-navy shadow-[inset_0_0_0_1px_rgba(255,255,255,0.85),0_12px_24px_rgba(13,53,87,0.12)]`
    : 'border-slate-200 bg-white/80 text-slate-500 grayscale';

  return (
    <a data-course-slug={course.slug} href={`${basePath}${course.href}`} className={`relative z-30 grid min-h-[58px] grid-cols-[2.5rem_1fr] items-center gap-3 rounded-[14px] border px-3.5 py-2.5 text-sm font-extrabold leading-5 transition duration-200 hover:-translate-y-1 hover:scale-[1.01] hover:brightness-[1.02] hover:shadow-pop focus-visible:-translate-y-1 focus-visible:scale-[1.01] focus-visible:shadow-pop ${tabletClass}`}>
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

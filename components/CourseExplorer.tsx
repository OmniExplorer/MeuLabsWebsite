'use client';

import { useMemo, useState } from 'react';
import { allCourses } from '@/data/courses';
import { CourseCard } from './CourseCard';

const ageGroups = [
  { label: '8 - 12', slugs: ['kx', 'kx-superhero', 'kx-wild', 'kx-j'] },
  { label: '10-14', slugs: ['kx-j', 'coding-software', 'robotics-iot', 'digital-media'] },
  { label: '12-16', slugs: ['ds', 'se', 'cs', 'gd', 'mr', 'eee', 'es', 'dm', 'va'] },
  { label: '16+', slugs: ['ua', 'ig', 'fs'] }
];

const interestGroups = [
  { label: 'STEM', slugs: ['kx', 'kx-superhero', 'kx-wild', 'kx-j'] },
  { label: 'Programming', slugs: ['kx-wild', 'coding-software', 'se'] },
  { label: 'AI and Data', slugs: ['coding-software', 'ds', 'cs'] },
  { label: 'Robotics & IoT', slugs: ['kx', 'robotics-iot', 'mr', 'es'] },
  { label: 'Engineering', slugs: ['robotics-iot', 'eee', 'es', 'mr'] },
  { label: 'Creative Media', slugs: ['kx-wild', 'digital-media', 'dm', 'va', 'gd'] },
  { label: 'Business & Careers', slugs: ['robotics-iot', 'ua', 'ig', 'fs'] }
];

export function CourseExplorer() {
  const [activeAge, setActiveAge] = useState('All Ages');
  const [activeInterest, setActiveInterest] = useState('All Interests');

  const courseMap = useMemo(() => new Map(allCourses.map((course) => [course.slug, course])), []);
  const visibleCourses = useMemo(() => {
    const ageGroup = activeAge === 'All Ages' ? undefined : ageGroups.find((group) => group.label === activeAge);
    const interestGroup = activeInterest === 'All Interests' ? undefined : interestGroups.find((group) => group.label === activeInterest);

    if (!ageGroup && !interestGroup) return allCourses;

    const matchingSlugs = allCourses
      .map((course) => course.slug)
      .filter((slug) => (!ageGroup || ageGroup.slugs.includes(slug)) && (!interestGroup || interestGroup.slugs.includes(slug)));

    return matchingSlugs
      .map((slug) => courseMap.get(slug))
      .filter((course): course is NonNullable<typeof course> => Boolean(course));
  }, [activeAge, activeInterest, courseMap]);

  const pillClass = (active: boolean) => `whitespace-nowrap rounded-full px-3.5 py-2.5 text-xs font-extrabold transition duration-200 xl:px-[17px] xl:py-[11px] ${active ? 'bg-[linear-gradient(135deg,#FFD166_0%,#F4A261_100%)] text-navy shadow-soft' : 'bg-white/80 text-slate-600 shadow-[0_8px_18px_rgba(13,53,87,0.06)] hover:bg-white hover:text-navy'}`;

  return (
    <div>
      <div className="mb-7">
        <div className="flex w-full flex-wrap items-center gap-x-2.5 gap-y-2 xl:flex-nowrap xl:gap-x-3">
          <div className="flex shrink-0 items-center gap-1.5 xl:gap-2">
            <span className="mr-1 whitespace-nowrap text-[11px] font-extrabold uppercase text-slate-400">By Age</span>
            {ageGroups.map((group) => group.label).map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveAge(tag)}
                className={pillClass(activeAge === tag)}
                type="button"
              >
                {tag}
              </button>
            ))}
            <button
              onClick={() => setActiveAge('All Ages')}
              className={pillClass(activeAge === 'All Ages')}
              type="button"
            >
              All Ages
            </button>
          </div>
          <div className="mx-0.5 h-7 w-[2px] shrink-0 rounded-full bg-navy/30" />
          <div className="flex flex-wrap items-center gap-1.5 xl:flex-nowrap xl:gap-2">
            <span className="mr-1 whitespace-nowrap text-[11px] font-extrabold uppercase text-slate-400">By Interest</span>
            {interestGroups.map((group) => group.label).map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveInterest(tag)}
                className={pillClass(activeInterest === tag)}
                type="button"
              >
                {tag}
              </button>
            ))}
            <button onClick={() => setActiveInterest('All Interests')} className={pillClass(activeInterest === 'All Interests')} type="button">All Interests</button>
          </div>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {visibleCourses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </div>
  );
}

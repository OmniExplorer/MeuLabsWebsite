'use client';

import { useMemo, useState } from 'react';
import { allCourses } from '@/data/courses';
import { CourseCard } from './CourseCard';

const ageGroups = [
  { label: '8 - 12', slugs: ['kx', 'kx-superhero', 'kx-wild'] },
  { label: '10-14', slugs: ['coding-software', 'robotics-iot', 'digital-media'] },
  { label: '12-16', slugs: ['ds', 'se', 'cs', 'gd', 'mr', 'eee', 'es', 'dm', 'va'] },
  { label: '16+', slugs: ['ua', 'ig', 'fs'] }
];

const interestGroups = [
  { label: 'STEM / STEAM', slugs: ['kx', 'kx-superhero', 'kx-wild', 'kx-j'] },
  { label: 'Programming', slugs: ['kx-wild', 'coding-software', 'se'] },
  { label: 'AI and Data', slugs: ['coding-software', 'ds', 'cs'] },
  { label: 'Robotics & IoT', slugs: ['kx', 'robotics-iot', 'mr', 'es'] },
  { label: 'Engineering & Electronics', slugs: ['robotics-iot', 'eee', 'es'] },
  { label: 'Game Dev', slugs: ['kx-superhero', 'coding-software', 'gd'] },
  { label: 'Creative Media & Animation', slugs: ['kx-wild', 'digital-media', 'dm', 'va'] },
  { label: 'Business, Careers', slugs: ['robotics-iot', 'ua', 'ig', 'fs'] }
];

export function CourseExplorer() {
  const [mode, setMode] = useState<'age' | 'interest'>('age');
  const [activeTag, setActiveTag] = useState('All');
  const groups = mode === 'age' ? ageGroups : interestGroups;

  const courseMap = useMemo(() => new Map(allCourses.map((course) => [course.slug, course])), []);
  const visibleCourses = useMemo(() => {
    if (activeTag === 'All') return allCourses;

    const selectedGroup = groups.find((group) => group.label === activeTag);
    if (!selectedGroup) return allCourses;

    return selectedGroup.slugs
      .map((slug) => courseMap.get(slug))
      .filter((course): course is NonNullable<typeof course> => Boolean(course));
  }, [activeTag, courseMap, groups]);

  const changeMode = (nextMode: 'age' | 'interest') => {
    setMode(nextMode);
    setActiveTag('All');
  };

  return (
    <div>
      <div className="mb-10 inline-flex max-w-full flex-col rounded-[28px] border border-white/70 bg-white/70 p-4 shadow-[0_22px_58px_rgba(13,53,87,0.10)] backdrop-blur sm:p-5">
        <div className="flex flex-wrap gap-3">
          <button onClick={() => changeMode('age')} className={`rounded-full px-6 py-3 text-sm font-extrabold transition duration-200 ${mode === 'age' ? 'bg-[linear-gradient(135deg,#6A5CFF_0%,#2CAC95_100%)] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.24),0_8px_18px_rgba(44,172,149,0.18)]' : 'bg-white text-slate-600 hover:bg-creamAlt hover:text-navy'}`} type="button">Filter by Age</button>
          <button onClick={() => changeMode('interest')} className={`rounded-full px-6 py-3 text-sm font-extrabold transition duration-200 ${mode === 'interest' ? 'bg-[linear-gradient(135deg,#6A5CFF_0%,#2CAC95_100%)] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.24),0_8px_18px_rgba(44,172,149,0.18)]' : 'bg-white text-slate-600 hover:bg-creamAlt hover:text-navy'}`} type="button">Filter by Interest</button>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {['All', ...groups.map((group) => group.label)].map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`rounded-full px-5 py-2.5 text-sm font-extrabold transition duration-200 ${activeTag === tag ? 'bg-[linear-gradient(135deg,#FFD166_0%,#F4A261_100%)] text-navy shadow-soft' : 'bg-white text-slate-600 hover:bg-creamAlt hover:text-navy'}`}
              type="button"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleCourses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </div>
  );
}

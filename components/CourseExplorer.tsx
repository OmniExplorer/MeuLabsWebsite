'use client';

import { useMemo, useState } from 'react';
import { allCourses, type Course } from '@/data/courses';
import { CourseCard } from './CourseCard';
import { trackEvent } from '@/lib/analytics';

const ageGroups = [
  { label: '6 - 12', slugs: ['kx-j', 'kx'] },
  { label: '10-14', slugs: ['coding-software', 'robotics-iot', 'digital-media'] },
  { label: '12-16', slugs: ['ds', 'se', 'cs', 'gd', 'mr', 'eee', 'es', 'dm', 'va'] },
  { label: '16+', slugs: ['ua', 'ig', 'fs'] }
];

const interestGroups = [
  { label: 'STEM', slugs: ['kx-j', 'kx'] },
  { label: 'Programming', slugs: ['coding-software', 'se'] },
  { label: 'AI and Data', slugs: ['coding-software', 'ds', 'cs'] },
  { label: 'Robotics & IoT', slugs: ['kx', 'robotics-iot', 'mr', 'es'] },
  { label: 'Engineering', slugs: ['robotics-iot', 'eee', 'es', 'mr'] },
  { label: 'Creative Media', slugs: ['digital-media', 'dm', 'va', 'gd'] },
  { label: 'Business & Careers', slugs: ['robotics-iot', 'ua', 'ig', 'fs'] }
];

const courseExplorerDisplayTitles: Record<string, string> = {
  'coding-software': 'Coding and Software',
  'robotics-iot': 'Robotics and IoT',
  'digital-media': 'Digital Media'
};

export function CourseExplorer({
  selectedSlug,
  onSelectCourse,
  courses = allCourses,
  basePath = '',
  hiddenInterestLabels = []
}: {
  selectedSlug?: string;
  onSelectCourse?: (slug: string) => void;
  courses?: Course[];
  basePath?: string;
  hiddenInterestLabels?: string[];
}) {
  const [activeAge, setActiveAge] = useState('All Ages');
  const [activeInterest, setActiveInterest] = useState('All Interests');

  const courseMap = useMemo(() => new Map(courses.map((course) => [course.slug, course])), [courses]);
  const courseSlugs = useMemo(() => courses.map((course) => course.slug), [courses]);
  const visibleAgeGroups = useMemo(
    () => ageGroups.filter((group) => group.slugs.some((slug) => courseSlugs.includes(slug))),
    [courseSlugs]
  );
  const visibleInterestGroups = useMemo(
    () => interestGroups.filter((group) => !hiddenInterestLabels.includes(group.label) && group.slugs.some((slug) => courseSlugs.includes(slug))),
    [courseSlugs, hiddenInterestLabels]
  );
  const visibleCourses = useMemo(() => {
    const ageGroup = activeAge === 'All Ages' ? undefined : visibleAgeGroups.find((group) => group.label === activeAge);
    const interestGroup = activeInterest === 'All Interests' ? undefined : visibleInterestGroups.find((group) => group.label === activeInterest);

    if (!ageGroup && !interestGroup) return courses;

    const matchingSlugs = courses
      .map((course) => course.slug)
      .filter((slug) => (!ageGroup || ageGroup.slugs.includes(slug)) && (!interestGroup || interestGroup.slugs.includes(slug)));

    return matchingSlugs
      .map((slug) => courseMap.get(slug))
      .filter((course): course is NonNullable<typeof course> => Boolean(course));
  }, [activeAge, activeInterest, courseMap, courses, visibleAgeGroups, visibleInterestGroups]);

  const pillClass = (active: boolean) => `whitespace-nowrap rounded-full px-3 py-2 text-xs font-extrabold transition duration-200 sm:px-3.5 sm:py-2.5 xl:px-[17px] xl:py-[11px] ${active ? 'bg-[linear-gradient(135deg,#FFD166_0%,#F4A261_100%)] text-navy shadow-soft' : 'bg-white/80 text-slate-600 shadow-[0_8px_18px_rgba(13,53,87,0.06)] hover:bg-white hover:text-navy'}`;

  const selectAge = (age: string) => {
    trackEvent('course_filter', { filter_type: 'age_group', filter_value: age });
    setActiveAge(age);
    setActiveInterest('All Interests');
  };

  const selectInterest = (interest: string) => {
    trackEvent('course_filter', { filter_type: 'interest', filter_value: interest });
    setActiveInterest(interest);
    setActiveAge('All Ages');
  };

  return (
    <div className="w-full min-w-0 overflow-visible">
      <div className="mb-7">
        <div className="flex w-full min-w-0 flex-col gap-3 xl:flex-row xl:items-start xl:gap-x-3">
          <div className="flex w-full min-w-0 flex-wrap items-center gap-1.5 xl:w-auto xl:flex-nowrap xl:gap-2">
            <span className="mr-1 w-full text-[11px] font-extrabold uppercase text-slate-400 sm:w-auto">By Age</span>
            {visibleAgeGroups.map((group) => group.label).map((tag) => (
              <button
                key={tag}
                onClick={() => selectAge(tag)}
                className={pillClass(activeAge === tag)}
                type="button"
              >
                {tag}
              </button>
            ))}
            <button
              onClick={() => selectAge('All Ages')}
              className={pillClass(activeAge === 'All Ages')}
              type="button"
            >
              All Ages
            </button>
          </div>
          <div className="mx-0.5 hidden h-7 w-[2px] shrink-0 rounded-full bg-navy/30 xl:block" />
          <div className="flex w-full min-w-0 flex-wrap items-center gap-1.5 xl:flex-1 xl:flex-nowrap xl:gap-2">
            <span className="mr-1 w-full text-[11px] font-extrabold uppercase text-slate-400 sm:w-auto">By Interest</span>
            {visibleInterestGroups.map((group) => group.label).map((tag) => (
              <button
                key={tag}
                onClick={() => selectInterest(tag)}
                className={pillClass(activeInterest === tag)}
                type="button"
              >
                {tag}
              </button>
            ))}
            <button onClick={() => selectInterest('All Interests')} className={pillClass(activeInterest === 'All Interests')} type="button">All Interests</button>
          </div>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {visibleCourses.map((course) => (
          <CourseCard
            key={course.slug}
            course={course}
            displayTitle={courseExplorerDisplayTitles[course.slug]}
            selected={selectedSlug === course.slug}
            onSelect={onSelectCourse}
            basePath={basePath}
          />
        ))}
      </div>
    </div>
  );
}

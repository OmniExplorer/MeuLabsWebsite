'use client';

import { useMemo, useState } from 'react';
import { allCourses } from '@/data/courses';
import { CourseCard } from './CourseCard';

const ageGroups = [
  { label: '8-12', slugs: ['kx', 'kx-j'] },
  { label: '10-14', slugs: ['an', 'pd', 'cx'] },
  { label: '12-16', slugs: ['ds', 'se', 'cs', 'gd', 'mr', 'eee', 'es', 'dm', 'va'] },
  { label: '16+', slugs: ['ua', 'ig', 'fs'] }
];

const interestGroups = [
  { label: 'STEM / STEAM', slugs: ['kx', 'pd', 'mr'] },
  { label: 'Programming', slugs: ['an', 'se', 'gd'] },
  { label: 'AI and Data', slugs: ['an', 'ds'] },
  { label: 'Robotics & IoT', slugs: ['pd', 'es', 'mr'] },
  { label: 'Engineering & Electronics', slugs: ['pd', 'eee', 'es'] },
  { label: 'Game Dev', slugs: ['gd', 'se'] },
  { label: 'Creative Media & Animation', slugs: ['cx', 'va'] },
  { label: 'Business & Careers', slugs: ['dm', 'ua', 'ig', 'fs'] }
];

export function CourseExplorer() {
  const [mode, setMode] = useState<'age' | 'interest'>('age');
  const groups = mode === 'age' ? ageGroups : interestGroups;

  const courseMap = useMemo(() => new Map(allCourses.map((course) => [course.slug, course])), []);

  return (
    <div>
      <div className="mb-8 inline-flex rounded-full bg-white p-1 shadow-soft">
        <button onClick={() => setMode('age')} className={`rounded-full px-5 py-3 text-sm font-extrabold ${mode === 'age' ? 'bg-navy text-white' : 'text-navy'}`} type="button">By Age</button>
        <button onClick={() => setMode('interest')} className={`rounded-full px-5 py-3 text-sm font-extrabold ${mode === 'interest' ? 'bg-navy text-white' : 'text-navy'}`} type="button">By Interest</button>
      </div>
      <div className="grid gap-10">
        {groups.map((group) => (
          <section key={group.label}>
            <h3 className="mb-5 text-2xl font-extrabold text-navy">{group.label}</h3>
            <div className="grid gap-6 lg:grid-cols-2">
              {group.slugs.map((slug) => {
                const course = courseMap.get(slug);
                return course ? <CourseCard key={`${group.label}-${slug}`} course={course} /> : null;
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const reasons = [
  {
    title: 'Expert instructors',
    body: 'Mentors guide students through real projects with care and technical clarity.',
    image: '/assets/images/why-instructors.jpg'
  },
  {
    title: 'Personal attention',
    body: 'Small-group learning helps students ask questions, get feedback and keep moving.',
    image: '/assets/images/why-attention.jpg'
  },
  {
    title: 'Safe creative spaces',
    body: 'Students learn in a supportive lab culture built for curiosity and making.',
    image: '/assets/images/why-space.jpg'
  },
  {
    title: 'World-class curriculum',
    body: 'Programmes connect project work with global tools, standards and portfolio habits.',
    image: '/assets/images/why-curriculum.jpg'
  },
  {
    title: 'Fun learning culture',
    body: 'Students showcase work, collaborate and build confidence as creators.',
    image: '/assets/images/why-culture.jpg'
  }
];

export function WhyMeuLabs() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setTimeout(() => {
      setActive((current) => (current + 1) % reasons.length);
    }, 3200);

    return () => window.clearTimeout(timer);
  }, [active, paused]);

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
      <div className="grid gap-3" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        {reasons.map((reason, index) => (
          <button
            key={reason.title}
            type="button"
            aria-pressed={active === index}
            onFocus={() => {
              setPaused(true);
              setActive(index);
            }}
            onBlur={() => setPaused(false)}
            onMouseEnter={() => setActive(index)}
            onClick={() => {
              setPaused(true);
              setActive(index);
            }}
            className={`relative cursor-pointer rounded-card p-5 text-left transition duration-300 focus:outline-none focus:ring-4 focus:ring-orange/35 ${active === index ? 'bg-navy text-white shadow-[0_0_0_3px_rgba(255,122,0,0.95),0_22px_55px_rgba(255,79,31,0.24)]' : 'bg-white text-navy shadow-soft hover:-translate-y-1 hover:shadow-pop'}`}
          >
            <span className="text-lg font-extrabold">{reason.title}</span>
            <span className={`mt-2 block text-sm leading-6 ${active === index ? 'text-white/78' : 'text-slate-700'}`}>{reason.body}</span>
          </button>
        ))}
      </div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-pop" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        {reasons.map((reason, index) => (
          <Image
            key={reason.image}
            src={reason.image}
            alt=""
            fill
            className={`object-cover transition-opacity duration-700 ${active === index ? 'opacity-100' : 'opacity-0'}`}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        ))}
      </div>
    </div>
  );
}

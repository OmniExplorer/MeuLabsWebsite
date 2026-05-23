'use client';

import { CalendarDays, MapPin, Users } from 'lucide-react';
import type { IntakeBatch } from '@/data/intakes';
import type { Course } from '@/data/courses';
import { daysToNextClosingDate, seededSpots } from '@/lib/registration';
import { trackEvent } from '@/lib/analytics';

export function RegistrationCard({ batch, course }: { batch: IntakeBatch; course: Course }) {
  const spots = seededSpots(course.slug, batch.label);
  const daysLeft = daysToNextClosingDate();

  return (
    <article className="rounded-card bg-white p-6 shadow-soft">
      <p className="text-lg font-extrabold text-navy">{batch.label}</p>
      <div className="mt-5 grid gap-3 text-sm font-semibold text-slate-700">
        <span className="flex items-center gap-2"><CalendarDays size={17} className="text-orange" /> Starts this intake month</span>
        <span className="flex items-center gap-2"><MapPin size={17} className="text-orange" /> {course.location}</span>
        <span className="flex items-center gap-2"><Users size={17} className="text-orange" /> {spots} spots left</span>
      </div>
      <p className="mt-5 rounded-2xl bg-cream px-4 py-3 text-sm font-extrabold text-navy">Registration closes in {daysLeft} days</p>
      <a
        href={course.registerLink}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackEvent('registration_click', { course: course.slug, batch: batch.label })}
        className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-orange px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#e76e00]"
      >
        Register Now
      </a>
    </article>
  );
}

'use client';

import { trackEvent } from '@/lib/analytics';

const syllabusFormUrl = 'https://forms.gle/tqh1A9XXqkDX9uQJ6';

export function SyllabusForm({ courseSlug }: { courseSlug: string }) {
  return (
    <a
      href={syllabusFormUrl}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackEvent('syllabus_request', { course: courseSlug })}
      className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] px-6 font-extrabold text-white shadow-[0_12px_24px_rgba(255,93,25,0.22)] transition hover:-translate-y-0.5"
    >
      Request Syllabus
    </a>
  );
}

'use client';

import { useState } from 'react';
import { trackEvent } from '@/lib/analytics';

export function SyllabusForm({ courseSlug }: { courseSlug: string }) {
  const [submitted, setSubmitted] = useState(false);
  if (submitted) {
    return (
      <div className="rounded-card bg-teal/10 p-6 font-bold leading-7 text-navy">
        Thank you for your interest, one of our student counsellors will be in touch with you soon to share your requested details.
      </div>
    );
  }

  return (
    <form
      className="grid w-full gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        trackEvent('syllabus_request', { course: courseSlug });
        setSubmitted(true);
      }}
    >
      {['Name', 'Email', 'Phone'].map((label) => (
        <label key={label} className="sr-only" htmlFor={label.toLowerCase()}>{label}</label>
      ))}
      <input id="name" required placeholder="Full Name" className="min-h-[54px] rounded-[8px] border border-orange/15 bg-white px-5 font-bold outline-none shadow-[0_8px_18px_rgba(13,53,87,0.04)] placeholder:text-slate-400 focus:border-orange" />
      <input id="email" required type="email" placeholder="Email Address" className="min-h-[54px] rounded-[8px] border border-orange/15 bg-white px-5 font-bold outline-none shadow-[0_8px_18px_rgba(13,53,87,0.04)] placeholder:text-slate-400 focus:border-orange" />
      <input id="phone" required placeholder="Phone Number" className="min-h-[54px] rounded-[8px] border border-orange/15 bg-white px-5 font-bold outline-none shadow-[0_8px_18px_rgba(13,53,87,0.04)] placeholder:text-slate-400 focus:border-orange" />
      <button className="min-h-[54px] rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] px-6 font-extrabold text-white shadow-[0_12px_24px_rgba(255,93,25,0.22)] transition hover:-translate-y-0.5" type="submit">Request Syllabus</button>
    </form>
  );
}

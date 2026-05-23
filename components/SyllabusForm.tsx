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
      className="grid gap-3 md:grid-cols-[1fr_1fr_1fr_auto]"
      onSubmit={(event) => {
        event.preventDefault();
        trackEvent('syllabus_request', { course: courseSlug });
        setSubmitted(true);
      }}
    >
      {['Name', 'Email', 'Phone'].map((label) => (
        <label key={label} className="sr-only" htmlFor={label.toLowerCase()}>{label}</label>
      ))}
      <input id="name" required placeholder="Name" className="rounded-full border border-navy/10 px-5 py-3 font-semibold outline-none focus:border-orange" />
      <input id="email" required type="email" placeholder="Email" className="rounded-full border border-navy/10 px-5 py-3 font-semibold outline-none focus:border-orange" />
      <input id="phone" required placeholder="Phone" className="rounded-full border border-navy/10 px-5 py-3 font-semibold outline-none focus:border-orange" />
      <button className="rounded-full bg-navy px-6 py-3 font-extrabold text-white transition hover:bg-[#082a47]" type="submit">Request</button>
    </form>
  );
}

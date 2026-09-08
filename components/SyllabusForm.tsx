'use client';

import { FormEvent, useState } from 'react';
import { trackEvent } from '@/lib/analytics';

export function SyllabusForm({ courseSlug, courseTitle }: { courseSlug: string; courseTitle: string }) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');
    setErrorMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const response = await fetch('/api/syllabus-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: formData.get('fullName'),
        contactNumber: formData.get('contactNumber'),
        email: formData.get('email'),
        courseSlug
      })
    }).catch(() => null);

    if (!response) {
      trackEvent('form_error', { form_id: 'syllabus-request', course: courseSlug, error_type: 'network' });
      setErrorMessage('We could not connect to the request service. Please try again.');
      setStatus('error');
      return;
    }

    if (!response.ok) {
      trackEvent('form_error', { form_id: 'syllabus-request', course: courseSlug, error_type: 'server', status_code: response.status });
      const result = (await response.json().catch(() => null)) as { error?: unknown } | null;
      setErrorMessage(
        typeof result?.error === 'string'
          ? result.error
          : 'We could not submit your request. Please try again.'
      );
      setStatus('error');
      return;
    }

    trackEvent('syllabus_request', { course: courseSlug });
    trackEvent('generate_lead', { course: courseSlug, form_id: 'syllabus-request' });
    form.reset();
    setStatus('success');
  }

  if (status === 'success') {
    return (
      <div className="rounded-[8px] bg-teal/10 p-6 font-bold leading-7 text-navy" role="status">
        Thank you for your interest. One of our student counsellors will be in touch soon to share the {courseTitle} syllabus.
      </div>
    );
  }

  return (
    <form id="syllabus-request" className="grid w-full gap-4" onSubmit={handleSubmit}>
      <label className="grid gap-1.5 text-sm font-extrabold text-navy">
        Parent/Guardian Full Name
        <input
          name="fullName"
          required
          type="text"
          minLength={2}
          maxLength={100}
          autoComplete="name"
          placeholder="Enter parent/guardian full name"
          className="min-h-[54px] rounded-[8px] border border-orange/20 bg-white px-5 font-semibold outline-none shadow-[0_8px_18px_rgba(13,53,87,0.04)] placeholder:text-slate-400 focus:border-orange"
        />
      </label>
      <label className="grid gap-1.5 text-sm font-extrabold text-navy">
        Parent/Guardian Contact Number
        <input
          name="contactNumber"
          required
          type="tel"
          minLength={7}
          maxLength={25}
          pattern="^\+?[\d\s()-]+$"
          inputMode="tel"
          autoComplete="tel"
          placeholder="Enter parent/guardian contact number"
          className="min-h-[54px] rounded-[8px] border border-orange/20 bg-white px-5 font-semibold outline-none shadow-[0_8px_18px_rgba(13,53,87,0.04)] placeholder:text-slate-400 focus:border-orange"
        />
      </label>
      <label className="grid gap-1.5 text-sm font-extrabold text-navy">
        Parent/Guardian Email Address
        <input
          name="email"
          required
          type="email"
          maxLength={254}
          inputMode="email"
          autoComplete="email"
          placeholder="Enter parent/guardian email address"
          className="min-h-[54px] rounded-[8px] border border-orange/20 bg-white px-5 font-semibold outline-none shadow-[0_8px_18px_rgba(13,53,87,0.04)] placeholder:text-slate-400 focus:border-orange"
        />
      </label>
      {status === 'error' && (
        <p className="text-sm font-bold text-red-600" role="alert">
          {errorMessage}
        </p>
      )}
      <button
        className="mt-1 min-h-[54px] rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] px-6 font-extrabold text-white shadow-[0_12px_24px_rgba(255,93,25,0.22)] transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70"
        type="submit"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Submitting...' : 'Request Syllabus'}
      </button>
    </form>
  );
}

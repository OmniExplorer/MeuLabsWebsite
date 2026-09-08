'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { analyticsEnabled, initializeAnalytics, measurementId, safeUrl, trackEvent } from '@/lib/analytics';

function label(element: Element) {
  return (element.getAttribute('data-analytics-label') || element.getAttribute('aria-label') ||
    element.querySelector('img')?.getAttribute('alt') || element.textContent || element.tagName)
    .replace(/[\w.+-]+@[\w.-]+\.[a-z]{2,}/gi, '[redacted]')
    .replace(/\+?\d[\d\s()-]{6,}\d/g, '[redacted]')
    .replace(/\s+/g, ' ').trim().slice(0, 100);
}

function sectionName(element: Element) {
  return element.id || element.getAttribute('aria-labelledby') ||
    'section_' + (Array.from(document.querySelectorAll('main section')).indexOf(element) + 1);
}

export function GoogleAnalytics() {
  const pathname = usePathname();
  const previousPage = useRef<string>();

  useEffect(() => {
    if (!analyticsEnabled || previousPage.current === pathname) return;
    initializeAnalytics();
    trackEvent('page_view', {
      page_title: document.title,
      page_referrer: previousPage.current
        ? window.location.origin + previousPage.current
        : document.referrer ? safeUrl(document.referrer) : ''
    });
    previousPage.current = pathname;
    if (pathname.startsWith('/courses/')) {
      trackEvent('view_course', { course: pathname.split('/')[2] });
    }
  }, [pathname]);

  useEffect(() => {
    if (!analyticsEnabled) return;
    const startedForms = new WeakSet<HTMLFormElement>();
    const changedFields = new WeakSet<Element>();
    const scrollMilestones = new Set<number>();
    const seenSections = new Set<string>();
    let scrollFrame = 0;

    const click = (event: MouseEvent) => {
      if (event.type === 'auxclick' && event.button !== 1) return;
      if (!(event.target instanceof Element)) return;
      const element = event.target.closest('a,button,[role="button"],summary');
      if (!element || element.closest('[data-analytics-ignore]') || element.hasAttribute('disabled')) return;
      const anchor = element instanceof HTMLAnchorElement ? element : null;
      let linkType = '';
      if (anchor) {
        const url = new URL(anchor.href, window.location.origin);
        linkType = url.protocol === 'tel:' ? 'phone' : url.protocol === 'mailto:' ? 'email' :
          /(^|\.)(wa\.me|whatsapp\.com)$/.test(url.hostname) ? 'whatsapp' :
          /(^|\.)(youtube\.com|youtu\.be)$/.test(url.hostname) ? 'video' :
          anchor.hasAttribute('download') || /\.(pdf|zip|docx?|xlsx?|pptx?)$/i.test(url.pathname) ? 'download' :
          url.origin !== window.location.origin ? 'outbound' : 'internal';
      }
      trackEvent(anchor ? 'link_click' : 'button_click', {
        element_label: label(element),
        section: element.closest('section') ? sectionName(element.closest('section')!) :
          element.closest('nav,header,footer')?.tagName.toLowerCase() || 'content',
        link_type: linkType || undefined,
        link_url: anchor ? safeUrl(anchor.href) : undefined
      });
    };

    const formActivity = (event: Event) => {
      const field = event.target;
      if (!(field instanceof HTMLInputElement || field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement)) return;
      const form = field.form;
      if (!form || form.closest('[data-analytics-ignore]')) return;
      const payload = { form_id: form.id || 'form', field_name: field.name || field.id || field.type };
      if (!startedForms.has(form)) {
        startedForms.add(form);
        trackEvent('form_start', { form_id: payload.form_id });
      }
      if (event.type === 'change' && !changedFields.has(field)) {
        changedFields.add(field);
        trackEvent('form_field_complete', payload);
      }
      if (event.type === 'invalid') trackEvent('form_validation_error', payload);
    };
    const submit = (event: Event) => {
      if (event.target instanceof HTMLFormElement && !event.target.closest('[data-analytics-ignore]')) {
        trackEvent('form_submit', { form_id: event.target.id || 'form' });
      }
    };
    const measureScroll = () => {
      scrollFrame = 0;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (height <= 0) return;
      const percent = Math.min(100, Math.round(window.scrollY / height * 100));
      [25, 50, 75, 90, 100].forEach((milestone) => {
        if (percent >= milestone && !scrollMilestones.has(milestone)) {
          scrollMilestones.add(milestone);
          trackEvent('scroll_depth', { percent_scrolled: milestone });
        }
      });
    };
    const scroll = () => { if (!scrollFrame) scrollFrame = requestAnimationFrame(measureScroll); };
    const observer = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const section = sectionName(entry.target);
        if (entry.isIntersecting && !seenSections.has(section)) {
          seenSections.add(section);
          trackEvent('section_view', { section });
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -20% 0px' });
    document.querySelectorAll('main section').forEach((section) => observer?.observe(section));

    // Bubble so carousel drags that suppress clicks are not counted as link clicks.
    document.addEventListener('click', click);
    document.addEventListener('auxclick', click);
    document.addEventListener('focusin', formActivity, true);
    document.addEventListener('change', formActivity, true);
    document.addEventListener('invalid', formActivity, true);
    document.addEventListener('submit', submit, true);
    window.addEventListener('scroll', scroll, { passive: true });
    return () => {
      document.removeEventListener('click', click);
      document.removeEventListener('auxclick', click);
      document.removeEventListener('focusin', formActivity, true);
      document.removeEventListener('change', formActivity, true);
      document.removeEventListener('invalid', formActivity, true);
      document.removeEventListener('submit', submit, true);
      window.removeEventListener('scroll', scroll);
      cancelAnimationFrame(scrollFrame);
      observer?.disconnect();
    };
  }, [pathname]);

  if (!analyticsEnabled) return null;
  return <Script id="google-analytics" src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />;
}

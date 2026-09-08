export type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

export const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? '';
export const analyticsEnabled = /^G-[A-Z0-9]+$/.test(measurementId);

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  meuAnalyticsInitialized?: boolean;
};

export function safeUrl(value: string): string {
  try {
    const url = new URL(value, window.location.origin);
    if (!['http:', 'https:'].includes(url.protocol)) return url.protocol;
    // External URLs can contain phone numbers or prefilled personal information.
    return url.origin === window.location.origin ? url.origin + url.pathname : url.origin;
  } catch {
    return '';
  }
}

export function initializeAnalytics() {
  if (typeof window === 'undefined' || !analyticsEnabled) return;
  const w = window as AnalyticsWindow;
  if (w.meuAnalyticsInitialized) return;
  w.dataLayer = w.dataLayer || [];
  w.gtag = w.gtag || function () { w.dataLayer!.push(arguments); };
  w.meuAnalyticsInitialized = true;
  w.gtag('js', new Date());
  w.gtag('config', measurementId, {
    send_page_view: false,
    page_location: safeUrl(window.location.href),
    page_referrer: document.referrer ? safeUrl(document.referrer) : '',
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    ...(process.env.NEXT_PUBLIC_GA_DEBUG === 'true' ? { debug_mode: true } : {})
  });
}

export function trackEvent(eventName: string, payload: AnalyticsPayload = {}) {
  if (typeof window === 'undefined' || !analyticsEnabled) return;
  initializeAnalytics();
  if (eventName === 'page_view') {
    (window as AnalyticsWindow).gtag?.('set', {
      page_location: safeUrl(window.location.href),
      page_referrer: payload.page_referrer,
      page_title: payload.page_title
    });
  }
  (window as AnalyticsWindow).gtag?.('event', eventName, {
    ...payload,
    page_location: safeUrl(window.location.href),
    page_path: window.location.pathname
  });
}

export type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

export function trackEvent(eventName: string, payload: AnalyticsPayload = {}) {
  if (typeof window === 'undefined') return;
  const w = window as Window & { gtag?: (...args: unknown[]) => void };
  w.gtag?.('event', eventName, payload);
}

# Google Analytics setup

1. The website is configured for GA4 measurement ID G-LVVWP9MG4K in .env.production. Confirm that this is the Web stream for https://meulabs.org.
2. Production builds load the public measurement ID from .env.production. If your host already defines NEXT_PUBLIC_GA_MEASUREMENT_ID, set it to G-LVVWP9MG4K because hosting variables override this file. Local development stays untracked unless you copy .env.example to .env.local.
3. In the stream settings, turn Enhanced measurement OFF. This integration owns page views, links, forms and scrolling; automatic collection would duplicate events and could collect unsanitized URLs.
4. Rebuild and deploy: NEXT_PUBLIC variables are embedded at build time. The existing Next.js integration loads the Google tag; do not also paste the standalone script snippet into the layout.
5. Temporarily set NEXT_PUBLIC_GA_DEBUG=true, rebuild, and verify the checklist below in GA4 Admin > DebugView and Reports > Realtime. Turn debug off and rebuild after testing.
6. Mark generate_lead as a key event. It fires only after the syllabus request API returns success. Registration/waitlist clicks are handoffs, not completed registrations.

## Events

| Events | Meaning |
| --- | --- |
| page_view, view_course | Initial page and client navigation; course detail views |
| link_click | All links, with link_type internal/outbound/phone/email/whatsapp/video/download |
| button_click | Buttons including navigation toggles, filters, FAQ and feature controls |
| course_filter | Selected course age-group or interest filter |
| faq_toggle | FAQ identifier and opening/closing action |
| feature_select | User hover, focus or click on a feature; no automatic rotations |
| carousel_interaction | User drag or wheel movement; no automatic carousel movement |
| course_select | Course selection when a card has a selection handler |
| scroll_depth | 25/50/75/90/100 percent, once per page visit |
| section_view | Identified sections entering the viewport, once per page visit |
| form_start, form_field_complete | Form interaction and first change to each field per page visit; no values |
| form_validation_error, form_submit | Browser validation failure and submission attempt |
| form_error | Network/server failure, without raw error details |
| syllabus_request, generate_lead | Successful syllabus request |
| course_card_click, project_card_click, registration_click, waitlist_click, whatsapp_click, call_click | Existing business-specific click events |

A single click can have a generic event and a business event. These are different views of the same interaction; do not sum them as unique clicks or mark both as conversions. Register event-scoped custom dimensions for course, batch, source, section, element_label, link_type, form_id, field_name, filter_type, filter_value, action and error_type when needed in reports.

## Verification checklist

- With NEXT_PUBLIC_GA_MEASUREMENT_ID explicitly set to an empty string, confirm no gtag script or analytics requests load.
- With a real ID and debug enabled, confirm one page_view on initial load, internal navigation, and browser back/forward.
- Exercise desktop/mobile navigation, FAQ open/close, both filters, features, carousel dragging/wheeling, cards and registration links.
- Check phone, email, WhatsApp, social, map, video and download links; link_type should identify the interaction.
- Scroll a long page and confirm each milestone fires only once until navigation.
- Focus/change form fields, try browser-invalid input, and simulate offline/server failure. No generate_lead should fire on failure.
- Submit a valid syllabus request only when ready to create a real request. Confirm one generate_lead on success.
- Inspect collected parameters: no entered names, emails, telephone numbers, query strings or URL fragments.
- Confirm data in the deployed site's Realtime report after deployment.

## Boundaries

Google Analytics cannot record interactions blocked by browser settings/ad blockers or activity inside external Google Forms, WhatsApp or YouTube pages. Video links measure handoffs, not playback. Tracking is aggregate event analytics, not session replay or keystroke capture.

URLs omit query strings and fragments; external destinations retain only their origin and tel/mailto links only their protocol. This intentionally omits query-based campaign attribution. Public static labels and field names are tracked, never input values. Do not put personal information in analytics labels or event payloads. Advertising signals/personalization are disabled. If a consent manager is added, gate initialization and event collection through that manager.

## Implementation validation

Type checking and the production build passed. Lint passed with the existing AutoCarousel hook-dependency warning. Isolated checks passed for disabled/invalid IDs, server rendering safety, queued events, one-time initialization, URL sanitization, navigation/back page views, referrers and listener cleanup. Measurement ID G-LVVWP9MG4K is configured for production builds. Live browser delivery and GA4 Realtime verification remain pending deployment.

References: [Google SPA measurement](https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications), [Google guidance on avoiding personal information](https://support.google.com/analytics/answer/6366371).

import { NextResponse } from 'next/server';

const googleFormResponseUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSdeJo7Ph89sfOERv43yndnFzIctGqAOaRHppWtGyi9HcCDETw/formResponse';

const googleFormCourseNames: Record<string, string> = {
  kx: 'STEM For Kids',
  'kx-j': 'STEM For Kids : Junior',
  'robotics-iot': 'Robotics & Iot',
  'coding-software': 'Coding and Software',
  'digital-media': 'Digital Media',
  se: 'Software Engineering',
  ds: 'Data Science & Ai',
  gd: 'Game Development',
  cs: 'Cyber Security',
  es: 'Embedded Systems & IoT',
  eee: 'Electrical and Electronics Engineering',
  mr: 'Manufacturing and Robotics',
  dm: 'Digital Marketing',
  va: 'Animation & Post-Production',
  ua: 'University Access',
  ig: 'Industry Gateway',
  fs: 'Founder Studio'
};

function isValidEmail(email: string) {
  return email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidName(name: string) {
  return (
    name.length >= 2 &&
    name.length <= 100 &&
    !/[\d<>{}[\]\\/@#$%^&*=+_|~`]/.test(name) &&
    name.split(/\s+/).some((part) => part.length >= 2)
  );
}

function isValidContactNumber(contactNumber: string) {
  if (contactNumber.length < 7 || contactNumber.length > 25) return false;
  if (!/^\+?[\d\s()-]+$/.test(contactNumber)) return false;

  const digitCount = contactNumber.replace(/\D/g, '').length;
  return digitCount >= 7 && digitCount <= 15;
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return NextResponse.json({ error: 'Invalid request data.' }, { status: 400 });
    }

    const fields = body as Record<string, unknown>;

    const fullName = typeof fields.fullName === 'string' ? fields.fullName.trim() : '';
    const contactNumber = typeof fields.contactNumber === 'string' ? fields.contactNumber.trim() : '';
    const email = typeof fields.email === 'string' ? fields.email.trim().toLowerCase() : '';
    const courseSlug = typeof fields.courseSlug === 'string' ? fields.courseSlug.trim() : '';
    const courseName = googleFormCourseNames[courseSlug];

    if (
      !isValidName(fullName) ||
      !isValidContactNumber(contactNumber) ||
      !isValidEmail(email) ||
      !courseName
    ) {
      return NextResponse.json({ error: 'Please provide valid contact details.' }, { status: 400 });
    }

    const formData = new URLSearchParams({
      'entry.1993885080': courseName,
      'entry.1400183479': fullName,
      'entry.1596032868': '__other_option__',
      'entry.1596032868.other_option_response': 'Not provided via website',
      'entry.1251468854': 'English',
      'entry.826847957': fullName,
      'entry.124140190': contactNumber,
      'entry.1989203663': email,
      pageHistory: '0,1'
    });

    const response = await fetch(googleFormResponseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
      cache: 'no-store'
    });

    if (!response.ok) {
      if (response.status === 401 || response.status === 403) {
        return NextResponse.json(
          {
            error:
              'The connected Google Form requires sign-in. Disable its sign-in or one-response restriction to accept website submissions.'
          },
          { status: 503 }
        );
      }

      return NextResponse.json(
        { error: 'The connected Google Form rejected the submission.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'The request could not be submitted.' }, { status: 500 });
  }
}

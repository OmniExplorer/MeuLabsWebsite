'use client';

import Image from 'next/image';
import { Clock, Mail, Phone } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { ButtonLink } from './ButtonLink';
import { Reveal } from './Reveal';
import { counselorMessage, whatsappHref } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';

export function CounselorCTA({
  courseName,
  source = 'page',
  compact = false,
  buttonShape = 'pill'
}: {
  courseName?: string;
  source?: string;
  compact?: boolean;
  buttonShape?: 'pill' | 'square';
}) {
  const message = counselorMessage(courseName);

  if (compact) {
    return (
      <section className="mx-auto max-w-[92rem] overflow-hidden rounded-lg border border-orange/20 bg-[#FFF8EF] text-navy shadow-[0_14px_34px_rgba(13,53,87,0.08)]">
        <div className="grid min-h-[260px] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex flex-col justify-center px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
            <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">Not sure where to start?</h2>
            <p className="mt-4 max-w-2xl text-base font-bold leading-7 text-slate-600">Talk to a Meu Labs student counselor and get help choosing the best course based on age, interests, and experience level.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href={whatsappHref(message)} external shape={buttonShape} onClick={() => trackEvent('whatsapp_click', { source })}>Talk to a Student Counselor</ButtonLink>
              <ButtonLink href="/courses" variant="secondary" shape={buttonShape}>Explore All Courses</ButtonLink>
            </div>
          </div>
          <div className="relative hidden min-h-[260px] overflow-hidden lg:block">
            <Image src="/assets/images/why-instructors.jpg" alt="" fill className="object-cover object-right" sizes="54vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFF8EF]/75 via-transparent to-transparent" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl overflow-hidden rounded-[24px] border border-orange/20 bg-[radial-gradient(circle_at_72%_18%,rgba(255,122,0,0.18),transparent_28%),linear-gradient(105deg,#FFF8EF_0%,#FFF4E6_100%)] p-6 text-navy shadow-[0_24px_64px_rgba(13,53,87,0.10)] md:p-7 lg:p-8">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.78fr_0.88fr] lg:items-center">
        <Reveal>
          <h2 className="max-w-xl text-5xl font-normal leading-[1.08] md:text-6xl">Not sure where to start?</h2>
          <p className="mt-6 max-w-xl text-lg font-extrabold leading-8 text-slate-600">Our student counselors are here to help you choose the right starting point based on your child&apos;s interests, age and goals.</p>
          <div className="mt-9 flex flex-col gap-4 sm:items-start">
            <ButtonLink href={whatsappHref(message)} external shape={buttonShape} onClick={() => trackEvent('whatsapp_click', { source })}>Talk to a Student Counselor</ButtonLink>
            <ButtonLink href="/courses" variant="secondary" shape={buttonShape}>Explore Courses</ButtonLink>
          </div>
        </Reveal>

        <Reveal animation="pop" delay={100}>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-[290px] overflow-hidden rounded-[24px] shadow-pop">
            <Image src="/assets/images/why-curriculum.jpg" alt="" fill className="object-cover" sizes="330px" />
          </div>
        </Reveal>

        <Reveal animation="pop" delay={200}>
          <div className="rounded-[24px] bg-[#FFF8EF]/88 p-6 shadow-[0_22px_60px_rgba(13,53,87,0.12)] backdrop-blur">
            <h3 className="text-2xl font-normal text-navy">Student Counselor</h3>
            <p className="mt-4 text-lg font-extrabold text-slate-600">We&apos;re here to help!</p>
            <div className="mt-7 grid gap-5">
              <div className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-orange/12 text-orange">
                  <Clock size={18} aria-hidden />
                </span>
                <p className="font-extrabold leading-6 text-navy">{siteConfig.openingHours}</p>
              </div>
              <a href={`tel:${siteConfig.phoneNumber}`} onClick={() => trackEvent('call_click', { source })} className="flex gap-4 rounded-[16px] transition hover:text-orange">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-orange/12 text-orange">
                  <Phone size={18} aria-hidden />
                </span>
                <span className="font-extrabold leading-10 text-navy">{siteConfig.phoneNumber}</span>
              </a>
              <a href="mailto:hello.nz@meulabs.org" className="flex gap-4 rounded-[16px] transition hover:text-orange">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-orange/12 text-orange">
                  <Mail size={18} aria-hidden />
                </span>
                <span className="font-extrabold leading-10 text-navy">hello.nz@meulabs.org</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

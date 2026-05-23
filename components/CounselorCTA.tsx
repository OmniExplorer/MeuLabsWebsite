'use client';

import { Mail, MessageCircle, Phone } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { ButtonLink } from './ButtonLink';
import { Reveal } from './Reveal';
import { counselorMessage, whatsappHref } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';

export function CounselorCTA({ courseName, source = 'page' }: { courseName?: string; source?: string }) {
  const message = counselorMessage(courseName);
  return (
    <section className="overflow-hidden rounded-[34px] bg-navy p-8 text-white shadow-pop md:p-10 lg:p-12">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <Reveal>
          <h2 className="max-w-2xl text-4xl font-extrabold leading-tight md:text-5xl">Not sure where your child should start?</h2>
          <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-white/82">Talk to a Meu Labs student counselor and we&apos;ll help you choose the best course based on your child&apos;s age, interests and experience level.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={whatsappHref(message)} external onClick={() => trackEvent('whatsapp_click', { source })}>Talk to a Student Counselor</ButtonLink>
            <ButtonLink href="/courses" variant="secondary">View All Courses</ButtonLink>
          </div>
        </Reveal>

        <div className="grid gap-4">
          <Reveal animation="pop" delay={100}>
          <a
            href={whatsappHref(message)}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent('whatsapp_click', { source })}
            className="block rounded-[22px] border border-white/18 bg-white/10 p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/14"
          >
            <div className="mb-3 flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.16em] text-cream">
              <MessageCircle size={18} />
              WhatsApp
            </div>
            <p className="font-semibold leading-7 text-white/82">Fastest option for parents who want guidance before deciding.</p>
          </a>
          </Reveal>
          <Reveal animation="pop" delay={200}>
          <a
            href={`tel:${siteConfig.phoneNumber}`}
            onClick={() => trackEvent('call_click', { source })}
            className="block rounded-[22px] border border-white/18 bg-white/10 p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/14"
          >
            <div className="mb-3 flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.16em] text-cream">
              <Phone size={18} />
              Phone
            </div>
            <p className="font-semibold leading-7 text-white/82">{siteConfig.phoneNumber}</p>
          </a>
          </Reveal>
          <Reveal animation="pop" delay={300}>
          <a href="mailto:hello@meulabs.org" className="block rounded-[22px] border border-white/18 bg-white/10 p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/14">
            <div className="mb-3 flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.16em] text-cream">
              <Mail size={18} />
              Email
            </div>
            <p className="font-semibold leading-7 text-white/82">hello@meulabs.org</p>
          </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

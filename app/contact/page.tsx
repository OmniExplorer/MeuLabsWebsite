import type { Metadata } from 'next';
import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import {
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Mail,
  MessageCircle,
  Phone,
  Route,
  UsersRound
} from 'lucide-react';
import { ButtonLink } from '@/components/ButtonLink';
import { ContactFAQAccordion } from '@/components/ContactFAQAccordion';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { siteConfig } from '@/data/siteConfig';
import { counselorMessage, whatsappHref } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Contact | Meu Labs - Talk to a Student Counselor',
  description: "Talk to a Meu Labs student counselor to choose the best course for your child's age, interests, experience level and goals.",
  openGraph: { images: ['/og-default.jpg'] }
};

const contact = {
  phoneDisplay: '+64 9 555 0187',
  phoneHref: 'tel:+6495550187',
  whatsappHref: whatsappHref(counselorMessage()),
  email: 'hello.nz@meulabs.org',
  hours: siteConfig.openingHours,
  address: siteConfig.address
};

const supportCards = [
  {
    title: 'Choose the right course',
    body: "Tell us your child's age, interests and experience level, and we'll recommend a suitable starting point.",
    icon: UsersRound
  },
  {
    title: 'Find the next intake',
    body: "We'll help you check available batches, times, locations and registration deadlines.",
    icon: CalendarCheck
  },
  {
    title: 'Understand the pathway',
    body: 'We can explain how each course connects to the next stage of learning at Meu Labs.',
    icon: Route
  },
  {
    title: 'Register confidently',
    body: "Once you are ready, we'll direct you to the correct course registration link.",
    icon: ClipboardCheck
  }
];

export default function ContactPage() {
  return (
    <main className="bg-[#F8F1E2] text-navy">
      <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_76%_18%,rgba(255,122,0,0.20),transparent_31%),radial-gradient(circle_at_22%_45%,rgba(255,122,0,0.16),transparent_28%),linear-gradient(120deg,#F8F1E2_0%,#FFF6EA_55%,#FFE7CE_100%)] px-4 sm:px-6 lg:px-8">
        <div
          className="absolute inset-y-0 right-0 -z-20 hidden w-[58%] lg:block"
          style={{
            WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, transparent 14%, black 44%)',
            maskImage: 'linear-gradient(90deg, transparent 0%, transparent 14%, black 44%)'
          }}
        >
          <Image
            src="/assets/images/Contact-Main-hero.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="58vw"
          />
        </div>
        <Reveal animation="pop" delay={320} className="absolute bottom-8 right-0 z-20 hidden w-[22rem] rounded-l-lg border border-r-0 border-orange/15 bg-[#FFF8EF]/95 p-4 shadow-[0_18px_48px_rgba(13,53,87,0.16)] backdrop-blur lg:block">
          <ContactLine icon={MessageCircle} label="Chat on WhatsApp" value={contact.phoneDisplay} />
          <ContactLine icon={Phone} label="Call Us" value={contact.phoneDisplay} />
          <ContactLine icon={Clock3} label="Hours" value={contact.hours} />
        </Reveal>

        <div className="mx-auto grid max-w-[92rem] gap-8 py-10 lg:min-h-[620px] lg:grid-cols-[0.84fr_1.16fr] lg:items-center lg:py-16">
          <div className="max-w-3xl">
            <Reveal>
              <SectionHeader
                eyebrow="Talk to Meu Labs"
                title="Not sure which course is right for your child?"
                subtitle="Our student counselors can help you choose the best starting point based on your child's age, interests, experience level, and goals."
                titleAs="h1"
                className="mb-0"
                titleClassName="text-4xl font-black leading-[1.04] sm:text-5xl lg:text-6xl"
                subtitleClassName="max-w-2xl text-base font-bold leading-7 sm:text-lg sm:leading-8"
              />
            </Reveal>
            <Reveal animation="pop" delay={160} className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={contact.whatsappHref} external>
                <MessageCircle size={18} aria-hidden />
                Chat on WhatsApp
              </ButtonLink>
              <ButtonLink href={contact.phoneHref} variant="secondary" className="border border-orange/35 text-orange shadow-none">
                <Phone size={18} aria-hidden />
                Call Us
              </ButtonLink>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold text-slate-600">
                <CheckCircle2 size={16} className="text-teal" aria-hidden />
                We typically reply within a few minutes
              </p>
            </Reveal>
          </div>

          <div className="relative min-h-[310px] overflow-hidden rounded-lg bg-creamAlt lg:min-h-[500px] lg:overflow-visible lg:rounded-none lg:bg-transparent">
            <Image
              src="/assets/images/why-instructors.jpg"
              alt="Meu Labs counselor helping a student"
              fill
              className="object-cover object-center opacity-80 lg:hidden"
              sizes="100vw"
            />
            <Reveal animation="pop" delay={320} className="absolute -right-4 bottom-0 w-[min(88%,22rem)] rounded-lg border border-orange/15 bg-[#FFF8EF]/95 p-4 shadow-[0_18px_48px_rgba(13,53,87,0.16)] backdrop-blur sm:-right-6 lg:hidden">
              <ContactLine icon={MessageCircle} label="Chat on WhatsApp" value={contact.phoneDisplay} />
              <ContactLine icon={Phone} label="Call Us" value={contact.phoneDisplay} />
              <ContactLine icon={Clock3} label="Hours" value={contact.hours} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-4 pb-10 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-[92rem]">
          <Reveal>
            <SectionHeader
              title="How our student counselors can help you"
              center
              className="mb-14"
              titleClassName="text-2xl !font-black leading-tight sm:text-3xl md:text-3xl"
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {supportCards.map(({ title, body, icon: Icon }, index) => (
              <Reveal key={title} animation="pop" delay={index * 90} className="h-full">
                <article className="h-full rounded-lg border border-orange/15 bg-[#FFF8EF] p-5 shadow-[0_10px_30px_rgba(13,53,87,0.08)]">
                  <span className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-[#FF7A00] to-[#FF4F1F] text-white shadow-soft">
                    <Icon size={25} strokeWidth={2.4} aria-hidden />
                  </span>
                  <h3 className="mt-4 text-base font-black leading-snug text-navy">{title}</h3>
                  <p className="mt-2 text-sm font-bold leading-6 text-slate-700">{body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-7 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[92rem] gap-7 lg:grid-cols-[0.72fr_1.55fr] lg:items-center">
          <Reveal>
            <SectionHeader
              title="We are here to help"
              subtitle="For course inquiries, registrations, school programmes, workshops, or partnerships, contact our New Zealand team directly."
              className="mb-0"
              titleClassName="!text-3xl !font-black !leading-[1.32] sm:!text-4xl md:!text-4xl"
              subtitleClassName="mt-6 max-w-lg text-base font-bold leading-8"
            />
          </Reveal>

          <Reveal animation="pop" delay={120}>
            <article className="relative overflow-hidden rounded-[18px] border-2 border-orange/50 bg-[linear-gradient(120deg,#FFF8EF_0%,#FFE7CE_100%)] p-6 shadow-[0_18px_48px_rgba(13,53,87,0.10)] sm:p-8">
              <div className="relative grid gap-7 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="relative h-7 w-11 overflow-hidden rounded-[4px] border border-white shadow-sm">
                      <span className="text-xs font-black text-white">NZ</span>
                    </span>
                    <span className="text-sm font-black uppercase tracking-[0.08em] text-orange">New Zealand</span>
                  </div>
                  <h3 className="mt-5 text-3xl font-black leading-tight text-navy sm:text-4xl">Meu Labs New Zealand</h3>
                  <p className="mt-2 text-base font-extrabold text-slate-600">{contact.address}</p>
                  <div className="mt-6 grid gap-3 text-sm font-extrabold text-navy">
                    <a href={contact.phoneHref} className="inline-flex items-center gap-3 transition hover:text-orange">
                      <Phone size={17} className="text-orange" aria-hidden />
                      {contact.phoneDisplay}
                    </a>
                    <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-3 transition hover:text-orange">
                      <Mail size={17} className="text-orange" aria-hidden />
                      {contact.email}
                    </a>
                    <p className="inline-flex items-center gap-3">
                      <Clock3 size={17} className="text-orange" aria-hidden />
                      {contact.hours}
                    </p>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-3 md:w-64">
                  <ButtonLink href={contact.whatsappHref} external>
                    <MessageCircle size={18} aria-hidden />
                    Chat on WhatsApp
                  </ButtonLink>
                  <ButtonLink href={contact.phoneHref} variant="secondary" className="border border-orange/35 text-orange shadow-none">
                    <Phone size={18} aria-hidden />
                    Call Us
                  </ButtonLink>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-7 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[92rem]">
          <Reveal>
            <SectionHeader
              title="Frequently asked questions"
              center
              className="mb-12"
              titleClassName="text-2xl !font-black leading-tight sm:text-3xl md:text-3xl"
            />
          </Reveal>
          <ContactFAQAccordion />
        </div>
      </section>
    </main>
  );
}

function ContactLine({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 border-b border-navy/10 py-3 first:pt-0 last:border-b-0 last:pb-0">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-orange/10 text-orange">
        <Icon size={17} aria-hidden />
      </span>
      <span>
        <span className="block text-xs font-black text-navy">{label}</span>
        <span className="mt-0.5 block text-xs font-extrabold text-slate-600">{value}</span>
      </span>
    </div>
  );
}

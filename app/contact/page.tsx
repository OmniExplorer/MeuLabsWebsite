import type { Metadata } from 'next';
import { Phone } from 'lucide-react';
import { ButtonLink } from '@/components/ButtonLink';
import { CourseCard } from '@/components/CourseCard';
import { SectionHeader } from '@/components/SectionHeader';
import { courses } from '@/data/courses';
import { siteConfig } from '@/data/siteConfig';
import { counselorMessage, whatsappHref } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Contact | Meu Labs — Robotics, Coding & STEM for Kids in Sri Lanka',
  description: "Talk to a Meu Labs student counselor to choose the best course for your child's age, interests and experience level.",
  openGraph: { images: ['/og-default.jpg'] }
};

export default function ContactPage() {
  const support = [
    ['Choose the right course', "Tell us your child's age, interests and experience level, and we'll recommend a suitable starting point."],
    ['Find the next intake', "We'll help you check available batches, times, locations and registration deadlines."],
    ['Understand the pathway', 'We can explain how each course connects to the next stage of learning at Meu Labs.'],
    ['Register confidently', "Once you're ready, we'll direct you to the correct course registration link."]
  ];

  return (
    <main>
      <section className="bg-navy px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-orange">Talk to Meu Labs</p>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">Not sure which course is right for your child?</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-white/80">Our student counselors can help you choose the best starting point based on your child&apos;s age, interests, experience level and goals.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={whatsappHref(counselorMessage())} external>Chat on WhatsApp</ButtonLink>
            <ButtonLink href={`tel:${siteConfig.phoneNumber}`} variant="secondary"><Phone size={17} /> Call Us</ButtonLink>
          </div>
        </div>
      </section>
      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {support.map(([title, body]) => (
              <article key={title} className="rounded-card bg-white p-6 shadow-soft">
                <h2 className="text-xl font-extrabold text-navy">{title}</h2>
                <p className="mt-3 leading-7 text-slate-700">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-creamAlt px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title="Course Quick Links" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 6).map((course) => <CourseCard key={course.slug} course={course} />)}
          </div>
        </div>
      </section>
      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[28px] bg-white p-8 shadow-soft">
          <SectionHeader title="Location & Hours" subtitle={`${siteConfig.address}. ${siteConfig.openingHours}.`} />
        </div>
      </section>
    </main>
  );
}

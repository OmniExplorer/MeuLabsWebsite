import type { Metadata } from 'next';
import { BookOpenCheck, Code2, GraduationCap } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';

export const metadata: Metadata = {
  title: 'About | Meu Labs - Project-Based STEM Learning in New Zealand',
  description: 'Learn about the Meu Labs pathway for STEM, coding and future-ready learning.',
  openGraph: { images: ['/og-default.jpg'] }
};

const pillars = [
  {
    title: 'Project-based learning',
    body: 'Students learn by building, testing, presenting and improving real projects.',
    icon: BookOpenCheck
  },
  {
    title: 'STEM and coding focus',
    body: 'The pathway currently focuses on STEM foundations and coding-related courses.',
    icon: Code2
  },
  {
    title: 'Future pathways',
    body: 'Older students can prepare for university access, portfolios and founder-style project work.',
    icon: GraduationCap
  }
];

export default function NzAboutPage() {
  return (
    <main className="bg-cream px-4 py-16 text-navy sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[92rem]">
        <SectionHeader
          eyebrow="About Meu Labs"
          title="A home for students who learn by doing."
          subtitle="Meu Labs brings the same project-based learning approach to students through selected STEM, coding, University Access and Founder Studio pathways."
          titleAs="h1"
        />
        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map(({ title, body, icon: Icon }) => (
            <article key={title} className="rounded-lg border border-orange/15 bg-white p-5 shadow-[0_12px_30px_rgba(13,53,87,0.08)]">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#FF7A00] to-[#FF4F1F] text-white">
                <Icon size={23} aria-hidden />
              </span>
              <h2 className="mt-4 text-lg font-black">{title}</h2>
              <p className="mt-2 text-sm font-bold leading-6 text-slate-700">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

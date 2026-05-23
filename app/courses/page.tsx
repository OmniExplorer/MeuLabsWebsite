import type { Metadata } from 'next';
import { ButtonLink } from '@/components/ButtonLink';
import { CounselorCTA } from '@/components/CounselorCTA';
import { CourseExplorer } from '@/components/CourseExplorer';
import { FAQAccordion } from '@/components/FAQAccordion';
import { SectionHeader } from '@/components/SectionHeader';

export const metadata: Metadata = {
  title: 'Courses | Meu Labs — Robotics, Coding & STEM for Kids in Sri Lanka',
  description: 'Explore robotics, coding, design, analytics, AI and engineering courses designed for different ages, interests and experience levels.',
  openGraph: { images: ['/og-default.jpg'] }
};

export default function CoursesPage() {
  return (
    <main>
      <section className="bg-navy px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-orange">Meu Labs Courses</p>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">Choose the right STEM pathway for your child.</h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-white/80">Explore robotics, coding, design, analytics, AI and engineering courses designed for different ages, interests and experience levels.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#explorer">Compare Courses</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">Talk to a Student Counselor</ButtonLink>
          </div>
        </div>
      </section>
      <section id="explorer" className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title="Course Explorer" subtitle="Filter by age or interest to compare pathways and choose the best next step." />
          <CourseExplorer />
        </div>
      </section>
      <section className="bg-creamAlt px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeader center title="Frequently asked questions" />
          <FAQAccordion />
        </div>
      </section>
      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <CounselorCTA source="/courses" />
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from 'next';
import { ButtonLink } from '@/components/ButtonLink';
import { CounselorCTA } from '@/components/CounselorCTA';
import { CourseExplorer } from '@/components/CourseExplorer';
import { FAQAccordion } from '@/components/FAQAccordion';
import { PageHero } from '@/components/PageHero';
import { SectionHeader } from '@/components/SectionHeader';

export const metadata: Metadata = {
  title: 'Courses | Meu Labs — Robotics, Coding & STEM for Kids in Sri Lanka',
  description: 'Explore robotics, coding, design, analytics, AI and engineering courses designed for different ages, interests and experience levels.',
  openGraph: { images: ['/og-default.jpg'] }
};

export default function CoursesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Meu Labs Courses"
        title="Choose the right STEM pathway for your child."
        subtitle="Explore robotics, coding, design, analytics, AI and engineering courses designed for different ages, interests and experience levels."
        imageSrc="/assets/images/courses-hero-student-3d.png"
        imageMode="object"
      >
        <ButtonLink href="#explorer">Compare Courses</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">Talk to a Student Counselor</ButtonLink>
      </PageHero>
      <section id="explorer" className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Course Explorer" title="Find the right course for your child." subtitle="Filter by age or interest to compare pathways and choose the best next step." />
          <CourseExplorer />
        </div>
      </section>
      <section className="bg-creamAlt px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeader center eyebrow="FAQ" title="Frequently asked questions" />
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

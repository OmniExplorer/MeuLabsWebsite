import type { Metadata } from 'next';
import { ButtonLink } from '@/components/ButtonLink';
import { CounselorCTA } from '@/components/CounselorCTA';
import { CoursesExplorerEcosystem } from '@/components/CoursesExplorerEcosystem';
import { PageHero } from '@/components/PageHero';

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
        <ButtonLink href="/contact" variant="secondary">Talk to a Student Counselor</ButtonLink>
      </PageHero>
      <CoursesExplorerEcosystem />
      <section className="bg-cream px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[92rem]">
          <CounselorCTA source="/courses" compact />
        </div>
      </section>
    </main>
  );
}

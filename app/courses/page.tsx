import type { Metadata } from 'next';
import { ButtonLink } from '@/components/ButtonLink';
import { CoursesExplorerEcosystem } from '@/components/CoursesExplorerEcosystem';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Courses | Meu Labs — Robotics, Coding & STEM for Kids in Sri Lanka',
  description: 'Explore robotics, coding, digital media, AI and engineering courses designed for different ages, interests and experience levels.',
  openGraph: { images: ['/og-default.jpg'] }
};

export default function CoursesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Meu Labs Courses"
        title="Choose the right STEM pathway for your child."
        subtitle="Explore robotics, coding, digital media, AI and engineering courses designed for different ages, interests and experience levels."
        imageSrc="/assets/images/Coursees-Main-Hero-Image.jpg"
        imageAlt="Meu Labs students learning coding, electronics, robotics, and digital media"
        imageStyle="single"
      >
        <ButtonLink href="/contact" variant="secondary">Talk to a Student Counselor</ButtonLink>
      </PageHero>
      <CoursesExplorerEcosystem />
    </main>
  );
}

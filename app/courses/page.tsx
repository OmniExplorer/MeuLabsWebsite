import type { Metadata } from 'next';
import { ButtonLink } from '@/components/ButtonLink';
import { CoursesExplorerEcosystem } from '@/components/CoursesExplorerEcosystem';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Courses | Meu Labs — Robotics, Coding, IoT & STEM Classes in New Zealand',
  description: 'Browse all Meu Labs courses — robotics, IoT, coding, STEM, STEAM, AI, engineering and digital media classes for kids and teens in Auckland, New Zealand.',
  keywords: [
    'coding classes New Zealand',
    'robotics classes New Zealand',
    'STEM courses New Zealand',
    'STEAM courses New Zealand',
    'IoT courses New Zealand',
    'STEM classes Auckland',
    'kids coding New Zealand',
    'robotics and coding New Zealand',
    'programming courses New Zealand',
    'AI classes New Zealand',
    'digital media classes New Zealand',
    'engineering courses New Zealand',
    'children tech classes New Zealand'
  ],
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

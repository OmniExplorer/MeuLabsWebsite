import type { Metadata } from 'next';
import { ButtonLink } from '@/components/ButtonLink';
import { CoursesExplorerEcosystem } from '@/components/CoursesExplorerEcosystem';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Courses | Meu Labs — Robotics, Coding, IoT & STEM Classes in Sri Lanka',
  description: 'Browse all Meu Labs courses — robotics, IoT, coding, STEM, STEAM, AI, engineering and digital media classes for kids and teens in Colombo, Sri Lanka.',
  keywords: [
    'coding classes Sri Lanka',
    'robotics classes Sri Lanka',
    'STEM courses Sri Lanka',
    'STEAM courses Sri Lanka',
    'IoT courses Sri Lanka',
    'STEM classes Colombo',
    'kids coding Sri Lanka',
    'robotics and coding Sri Lanka',
    'programming courses Sri Lanka',
    'AI classes Sri Lanka',
    'digital media classes Sri Lanka',
    'engineering courses Sri Lanka',
    'children tech classes Sri Lanka'
  ],
  openGraph: { images: ['/og-default.jpg'] }
};

export default function CoursesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Meu Labs Courses"
        title="Choose the right STEM pathway for your child."
        subtitle="Explore Robotics, Coding, Digital Media, AI and Engineering courses designed for different ages, interests and experience levels."
        imageSrc="/assets/images/Coursees-Main-Hero-Image.jpg"
        imageAlt="Meu Labs students learning coding, electronics, robotics, and digital media"
        imageStyle="contact"
      >
        <ButtonLink href="/contact" variant="secondary">Talk to a Student Counselor</ButtonLink>
      </PageHero>
      <CoursesExplorerEcosystem />
    </main>
  );
}

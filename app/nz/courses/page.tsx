import type { Metadata } from 'next';
import { ButtonLink } from '@/components/ButtonLink';
import { CoursesExplorerEcosystem } from '@/components/CoursesExplorerEcosystem';
import { PageHero } from '@/components/PageHero';
import { getNzCourses } from '@/data/regions';

export const metadata: Metadata = {
  title: 'Courses | Meu Labs — Robotics, Coding, IoT & STEM Classes in New Zealand',
  description: 'Browse Meu Labs courses — coding, STEM, STEAM, AI, software and future-ready classes for kids and teens in New Zealand.',
  openGraph: { images: ['/og-default.jpg'] }
};

export const dynamic = 'force-dynamic';

export default function NzCoursesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Meu Labs Courses"
        title="Choose the right STEM or coding pathway for your child."
        subtitle="Explore STEM for Kids, coding pathways, University Access and Founder Studio courses designed for different ages, interests and experience levels."
        imageSrc="/assets/images/Coursees-Main-Hero-Image.jpg"
        imageAlt="Students learning coding and STEM with Meu Labs"
        imageStyle="single"
      >
        <ButtonLink href="/nz/contact" variant="secondary">Talk to a Student Counselor</ButtonLink>
      </PageHero>
      <CoursesExplorerEcosystem courses={getNzCourses()} basePath="/nz" stageSet="nz" hiddenInterestLabels={['Robotics & IoT', 'Engineering']} />
    </main>
  );
}

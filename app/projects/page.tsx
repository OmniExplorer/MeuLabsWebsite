import type { Metadata } from 'next';
import { ButtonLink } from '@/components/ButtonLink';
import { PageHero } from '@/components/PageHero';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeader } from '@/components/SectionHeader';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Student Projects | Meu Labs — Robotics, Coding & STEM for Kids in Sri Lanka',
  description: 'See what Meu Labs students build, create and achieve through project-based STEM learning.',
  openGraph: { images: ['/og-default.jpg'] }
};

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Young innovators are building the future."
        title="See what our students build, create, and achieve."
        imageSrc="/assets/images/project-prototype.jpg"
      >
        <ButtonLink href="/courses">Explore Courses</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">Help Me Choose</ButtonLink>
      </PageHero>
      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="In The News" title="Big ideas making waves beyond the classroom." subtitle="Explore the projects, stories, videos, wins, and milestones that show how Meu Labs students are turning ideas into real-world impact." />
          <div className="grid gap-6 md:grid-cols-3">
            {['Competition showcase', 'Student demo day', 'Workshop milestone'].map((item) => (
              <a key={item} href="https://facebook.com/meulabs" target="_blank" rel="noreferrer" className="rounded-card bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-pop">
                <h3 className="text-xl font-extrabold text-navy">{item}</h3>
                <p className="mt-3 leading-7 text-slate-700">Facebook post link placeholder for current news and milestone updates.</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-creamAlt px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title="Featured Projects" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
        </div>
      </section>
      <section className="bg-cream px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-extrabold text-navy md:text-5xl">Ready to help your child build something real?</h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/courses">Explore Courses</ButtonLink>
            <ButtonLink href="/contact" variant="dark">Speak with a Student Counselor</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}

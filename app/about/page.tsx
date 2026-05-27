import type { Metadata } from 'next';
import { ButtonLink } from '@/components/ButtonLink';
import { CounselorCTA } from '@/components/CounselorCTA';
import { PageHero } from '@/components/PageHero';
import { SectionHeader } from '@/components/SectionHeader';

export const metadata: Metadata = {
  title: 'About | Meu Labs — Robotics, Coding & STEM for Kids in Sri Lanka',
  description: 'Meu Labs is a project-based learning space where students explore robotics, coding, design, data and AI through guided hands-on programmes.',
  openGraph: { images: ['/og-default.jpg'] }
};

export default function AboutPage() {
  const model = ['Hands-on building instead of passive learning', 'Guided mentoring from instructors', 'Structured progression across age and skill levels', 'Student work that can be documented and shared'];
  const sections = [
    ['Why parents choose us', 'A balance of curiosity, creativity and serious STEM skill-building.'],
    ['Schools & partnerships', 'ECA programmes, workshops, competitions and institutional partnerships can be added as confirmed.'],
    ['Student outcomes', 'Students grow problem-solving ability, technical confidence, communication, collaboration and portfolio work.'],
    ['Future-ready learning', 'The pathway connects foundations to advanced software, data, AI, embedded systems and product design.']
  ];

  return (
    <main>
      <PageHero
        eyebrow="About Meu Labs"
        title="Helping students build confidence through real-world STEM learning."
        subtitle="Meu Labs is a project-based learning space where students explore robotics, coding, design, data and AI through guided hands-on programmes."
        imageSrc="/assets/images/why-space.jpg"
      >
        <ButtonLink href="/courses">Explore Courses</ButtonLink>
        <ButtonLink href="/projects" variant="secondary">View Student Projects</ButtonLink>
      </PageHero>
      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader title="Our learning model is built around projects." subtitle="Students learn best when they can build, test, explain and improve their ideas. At Meu Labs, technical concepts are introduced through guided projects, instructor support and opportunities to present what they create." />
          </div>
          <div className="grid gap-4">
            {model.map((item) => <div key={item} className="rounded-card bg-white p-5 font-extrabold text-navy shadow-soft">{item}</div>)}
          </div>
        </div>
      </section>
      <section className="bg-creamAlt px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2">
            {sections.map(([title, body]) => (
              <article key={title} className="rounded-card bg-white p-7 shadow-soft">
                <h2 className="text-2xl font-extrabold text-navy">{title}</h2>
                <p className="mt-3 leading-7 text-slate-700">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <CounselorCTA source="/about" />
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from 'next';
import { Blocks, GraduationCap, Rocket, Route } from 'lucide-react';
import { ButtonLink } from '@/components/ButtonLink';
import { CounselorCTA } from '@/components/CounselorCTA';
import { CourseExplorer } from '@/components/CourseExplorer';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Courses | Meu Labs — Robotics, Coding & STEM for Kids in Sri Lanka',
  description: 'Explore robotics, coding, design, analytics, AI and engineering courses designed for different ages, interests and experience levels.',
  openGraph: { images: ['/og-default.jpg'] }
};

const pathwayStages = [
  {
    title: 'Foundations',
    level: '01',
    age: 'Age 8 - 12',
    body: 'Build curiosity and strong basics through hands-on learning and projects.',
    icon: Blocks,
    badge: 'bg-gradient-to-br from-[#FF7A00] to-[#FF4F1F]',
    accent: 'from-orange/16 via-white to-white border-orange/60',
    cornerColor: 'bg-orange/20'
  },
  {
    title: 'Learning Paths',
    level: '02',
    age: 'Age 10 - 14',
    body: 'Dive deeper into interests and build real-world skills and confidence.',
    icon: Route,
    badge: 'bg-gradient-to-br from-[#1995D3] to-[#31C3DE]',
    accent: 'from-sky/16 via-white to-white border-sky/60',
    cornerColor: 'bg-sky/20'
  },
  {
    title: 'Specialisations',
    level: '03',
    age: 'Age 12 - 16',
    body: 'Master advanced skills and work on industry-relevant projects.',
    icon: GraduationCap,
    badge: 'bg-gradient-to-br from-[#48D83E] to-[#65D96C]',
    accent: 'from-[#48D83E]/16 via-white to-white border-[#48D83E]/60',
    cornerColor: 'bg-[#48D83E]/20'
  },
  {
    title: 'Launch Pad',
    level: '04',
    age: 'Age 16 +',
    body: 'Prepare for portfolios, mentorship, and real opportunities.',
    icon: Rocket,
    badge: 'bg-gradient-to-br from-[#8B5CF6] to-[#A855F7]',
    accent: 'from-[#8B5CF6]/16 via-white to-white border-[#8B5CF6]/60',
    cornerColor: 'bg-[#8B5CF6]/20'
  }
];

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
      <section id="explorer" className="bg-cream px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[92rem]">
          <div className="mb-5">
            <div>
              <div className="mb-3 max-w-3xl border-l-4 border-orange pl-5">
                <p className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">Course Explorer</p>
              </div>
            </div>
          </div>
          <CourseExplorer />
        </div>
      </section>
      <section className="bg-cream px-4 pb-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[92rem] rounded-[14px] border border-orange/20 bg-[#FFF8EF] p-4 shadow-[0_10px_26px_rgba(13,53,87,0.06)]">
          <div className="grid gap-4 lg:grid-cols-[0.82fr_3fr] lg:items-center">
            <div>
              <h2 className="text-xl font-extrabold leading-tight text-navy">Our 4-Stage Learning Pathway</h2>
              <p className="mt-2 text-sm font-bold leading-6 text-slate-600">A structured journey to help students explore, learn, build, and launch with confidence.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {pathwayStages.map((stage) => {
                const StageIcon = stage.icon;
                return (
                  <article key={stage.title} className={`relative overflow-hidden rounded-[14px] border-t-[4px] bg-gradient-to-b ${stage.accent} p-3 shadow-[0_8px_18px_rgba(13,53,87,0.05)]`}>
                    <div className="pointer-events-none absolute right-0 top-0 h-16 w-16 overflow-hidden">
                      <div className={`absolute -right-5 -top-7 h-16 w-16 rounded-full ${stage.cornerColor}`} />
                    </div>
                    <div className="relative flex items-start gap-3">
                      <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${stage.badge} text-white shadow-soft`}>
                        <StageIcon size={18} strokeWidth={2.5} aria-hidden />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`rounded-full px-2 py-0.5 text-[10px] font-extrabold text-white ${stage.badge}`}>Level {stage.level}</span>
                          <h3 className="text-sm font-extrabold text-navy">{stage.title}</h3>
                        </div>
                        <p className="mt-1 text-xs font-extrabold text-navy/70">{stage.age}</p>
                        <p className="mt-1 text-xs font-bold leading-5 text-slate-600">{stage.body}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-cream px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[92rem]">
          <CounselorCTA source="/courses" compact />
        </div>
      </section>
    </main>
  );
}

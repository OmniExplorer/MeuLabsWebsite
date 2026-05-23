import Image from 'next/image';
import { Blocks, Bot, BrainCircuit, BriefcaseBusiness, Code2, Factory, GraduationCap, Landmark, Lightbulb, Megaphone, Orbit, Rocket, Route, Shield, Trees, Video } from 'lucide-react';
import { ButtonLink } from '@/components/ButtonLink';
import { CounselorCTA } from '@/components/CounselorCTA';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { WhyMeuLabs } from '@/components/WhyMeuLabs';
import { projects } from '@/data/projects';

const pathway = [
  {
    title: 'Foundations',
    age: 'Age 8 - 12',
    body: 'Build strong foundational skills across coding, design, robotics, videography, communication, and leadership while developing essential 21st-century skills.',
    courses: [
      { name: 'STEM For KIDS: Project Mars', icon: Orbit },
      { name: 'STEM For KIDS: Super Hero', icon: Shield },
      { name: 'STEM For KIDS: Into the Wild', icon: Trees }
    ],
    color: 'bg-gradient-to-br from-[#FF7A00] to-[#FFB347]',
    icon: Blocks
  },
  {
    title: 'Learning Paths',
    age: 'Age 10 - 14',
    body: 'Choose themed courses aligned with engineering, analytics, or creative expression. Deeper, project-driven, and skill-focused.',
    courses: [
      { name: 'Intro to Programming', icon: Code2 },
      { name: 'Robotics and IoT', icon: Bot },
      { name: 'Digital Media Production', icon: Video }
    ],
    color: 'bg-gradient-to-br from-[#31C3DE] to-[#7DE3F2]',
    icon: Route
  },
  {
    title: 'Specialisations',
    age: 'Age 12 - 16',
    body: 'Dive deep into industry-focused domains through advanced projects, technical mentorship, and real-world problem solving.',
    courses: [
      { name: 'Software Engineering', icon: Code2 },
      { name: 'Data Science and AI', icon: BrainCircuit },
      { name: 'Manufacturing and Robotics', icon: Factory },
      { name: 'Digital Marketing', icon: Megaphone }
    ],
    color: 'bg-gradient-to-br from-[#8B5CF6] to-[#C084FC]',
    icon: GraduationCap
  },
  {
    title: 'Launch Pad',
    age: 'Age 16 +',
    body: 'Transition into university, career, or entrepreneurship through structured pathways and our Launch Network.',
    courses: [
      { name: 'University Access', icon: Landmark },
      { name: 'Industry Gateway', icon: BriefcaseBusiness },
      { name: 'Founder Studio', icon: Lightbulb }
    ],
    color: 'bg-gradient-to-br from-[#48D83E] to-[#8BE95E]',
    icon: Rocket
  }
];

export default function HomePage() {
  return (
    <main>
      <section className="relative min-h-[760px] overflow-hidden bg-creamAlt">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_42%,rgba(255,122,0,0.26),transparent_32%),radial-gradient(circle_at_82%_22%,rgba(255,79,31,0.12),transparent_30%),linear-gradient(120deg,#F8F1E2_0%,#FFF6EA_58%,rgba(255,122,0,0.12)_100%)]" />
        <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.92fr_1fr] lg:px-8">
          <div className="max-w-4xl text-navy">
            <Reveal>
              <div className="mb-8 max-w-3xl border-l-4 border-orange pl-5">
                <p className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">Sri Lanka&apos;s Best Robotics, Coding, STEAM Courses for Kids</p>
              </div>
            </Reveal>
            <Reveal delay={100}><h1 className="text-4xl font-extrabold leading-[1.08] md:text-6xl">Where students discover their passion and build <span className="text-orange">real world tools and skills</span></h1></Reveal>
            <Reveal delay={200}><p className="mt-6 max-w-2xl text-xl leading-9 text-slate-700">Bridge the gap between what your child learns in school and what they need for the real world</p></Reveal>
            <Reveal animation="pop" delay={300} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/courses">Explore Courses</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">Speak with a Student Counselor</ButtonLink>
            </Reveal>
          </div>
          <Reveal animation="pop" delay={400} className="relative mx-auto aspect-[1.18/1] w-full max-w-[680px] lg:ml-auto lg:scale-110">
            <div className="absolute -right-1 top-8 z-30 grid grid-cols-5 gap-1.5">
              {Array.from({ length: 25 }).map((_, index) => (
                <span key={index} className="dot-ripple h-1.5 w-1.5 rounded-full bg-orange" style={{ animationDelay: `${(index % 5) * 120 + Math.floor(index / 5) * 18}ms` }} />
              ))}
            </div>
            <div className="absolute left-[7%] bottom-[18%] z-30 grid grid-cols-4 gap-1.5">
              {Array.from({ length: 20 }).map((_, index) => (
                <span key={index} className="dot-ripple h-1.5 w-1.5 rounded-full bg-orange" style={{ animationDelay: `${(index % 4) * 130 + Math.floor(index / 4) * 18}ms` }} />
              ))}
            </div>
            <div
              className="absolute left-[0%] top-[9%] z-30 h-[78%] w-[60%] overflow-hidden p-2 shadow-[0_30px_58px_rgba(5,24,44,0.34)]"
              style={{
                background: 'linear-gradient(90deg, transparent 0 50%, #fff 50% 100%)',
                clipPath: 'polygon(22% 0, 100% 8%, 78% 100%, 0 90%)',
                transform: 'rotate(-4deg) translate(-10px, -4px)'
              }}
            >
              <div className="relative h-full w-full overflow-hidden" style={{ clipPath: 'polygon(22% 0, 100% 8%, 78% 100%, 0 90%)' }}>
                <Image src="/assets/images/hero-robotics.jpg" alt="" fill priority className="object-cover" sizes="(min-width: 1024px) 30vw, 82vw" />
              </div>
            </div>
            <div
              className="absolute right-[4%] top-[7%] z-20 h-[45%] w-[49%] overflow-hidden rounded-[28px] bg-white p-2 shadow-[0_18px_38px_rgba(5,24,44,0.20)]"
              style={{ transform: 'rotate(2deg) translateX(-8px)' }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[20px]">
                <Image src="/assets/images/hero-code.jpg" alt="" fill className="object-cover" sizes="(min-width: 1024px) 28vw, 78vw" />
              </div>
            </div>
            <div
              className="absolute bottom-[8%] right-[5%] z-20 h-[45%] w-[53%] overflow-hidden rounded-[28px] bg-white p-2 shadow-[0_18px_38px_rgba(5,24,44,0.20)]"
              style={{ transform: 'rotate(-1deg) translateX(-4px)' }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[20px]">
                <Image src="/assets/images/electronics-board.jpg" alt="" fill className="object-cover" sizes="(min-width: 1024px) 32vw, 84vw" />
                <div className="absolute bottom-4 left-4 rounded-xl bg-navy px-3 py-2 text-xs font-extrabold text-white shadow-soft">Smart Home</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeader title="See what your child will build at Meu Labs." subtitle="From robots to web apps, media productions to AI agents, students build literally anything." />
            <ButtonLink href="/projects" className="mb-10 w-fit">View Student Projects</ButtonLink>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {projects.slice(0, 10).map((project, index) => (
              <Reveal key={project.title} animation="pop" delay={(index % 5) * 90} className="h-full">
                <a
                  href={project.link}
                  className="group grid h-[220px] grid-cols-[42%_1fr] overflow-hidden rounded-card bg-white shadow-soft transition duration-200 hover:-translate-y-1 hover:shadow-pop xl:h-[305px] xl:grid-cols-1"
                >
                  <div className="relative h-full overflow-hidden xl:h-[120px]">
                    <Image src={project.image} alt="" fill className="object-cover transition duration-300 group-hover:scale-105" sizes="180px" />
                  </div>
                  <div className="grid min-h-0 min-w-0 grid-rows-[2rem_3.1rem_2.65rem_auto] p-4">
                    <div className="flex flex-wrap content-start gap-1.5 overflow-hidden">
                        {project.skills.slice(0, 2).map((skill) => (
                          <span key={skill} className="rounded-full bg-cream px-2.5 py-1 text-[11px] font-extrabold text-navy">
                            {skill}
                          </span>
                        ))}
                    </div>
                    <h3 className="line-clamp-2 self-start text-lg font-extrabold leading-tight text-navy">{project.title}</h3>
                    <p className="line-clamp-2 self-start text-xs font-semibold leading-5 text-slate-600">{project.description}</p>
                    <span className="self-end bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-sm font-extrabold text-transparent">View Related Course</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-creamAlt px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader center title="A long-term journey, built one step at a time." subtitle="Whether they are just starting out or ready for industry level programs, our courses help students find their passion and build industry ready skills." />
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-4">
            {pathway.map((stage, index) => {
              const Icon = stage.icon;
              return (
              <Reveal key={stage.title} animation="pop" delay={index * 100} className="h-full">
              <article className="group flex h-full flex-col rounded-card border border-navy/8 bg-white p-6 shadow-soft transition hover:shadow-pop">
                <div className="mb-5 flex min-h-[56px] items-start gap-4">
                  <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${stage.color} text-xl font-extrabold text-white shadow-soft transition duration-200 group-hover:scale-110`}>
                    <Icon size={25} strokeWidth={2.4} aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold leading-tight text-navy">{stage.title}</h3>
                    <p className="mt-1 text-sm font-extrabold text-navy/75">{stage.age}</p>
                  </div>
                </div>
                <p className="min-h-[154px] text-sm font-semibold leading-7 text-slate-700">{stage.body}</p>
                <ul className="mt-6 grid gap-2">
                  {stage.courses.map((course) => {
                    const CourseIcon = course.icon;
                    return (
                      <li key={course.name} className="grid h-10 grid-cols-[2rem_1fr] items-center gap-3 text-sm font-extrabold leading-5 text-navy transition duration-200 group-hover:scale-[1.02]">
                        <span className={`grid h-7 w-7 place-items-center self-center rounded-full ${stage.color} text-white transition duration-200 group-hover:scale-110`}>
                          <CourseIcon size={15} strokeWidth={2.5} aria-hidden />
                        </span>
                        <span>{course.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </article>
              </Reveal>
              );
            })}
          </div>
          <Reveal animation="pop" delay={400} className="mt-10 text-center"><ButtonLink href="/courses">Explore Courses</ButtonLink></Reveal>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader eyebrow="Why Meu Labs" eyebrowStyle="hero" title="A home for students who learn by doing." subtitle="We combine expert instruction, safe creative spaces, and a world-class project-based curriculum so students build confidence, creativity, and real technical skill." />
          </Reveal>
          <Reveal animation="pop" delay={200}>
            <WhyMeuLabs />
          </Reveal>
          <Reveal animation="pop" delay={300} className="mt-10"><ButtonLink href="/about">Learn More</ButtonLink></Reveal>
        </div>
      </section>

      <section className="bg-creamAlt px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal animation="pop">
            <CounselorCTA source="/" />
          </Reveal>
        </div>
      </section>
    </main>
  );
}

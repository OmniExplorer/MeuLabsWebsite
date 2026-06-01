import Image from 'next/image';
import { Blocks, Bot, BrainCircuit, BriefcaseBusiness, Code2, Factory, GraduationCap, Landmark, Lightbulb, Megaphone, Orbit, Rocket, Route, Shield, Trees, Video } from 'lucide-react';
import { ButtonLink } from '@/components/ButtonLink';
import { CounselorCTA } from '@/components/CounselorCTA';
import { Reveal } from '@/components/Reveal';
import { WhyMeuLabs } from '@/components/WhyMeuLabs';
import { courses } from '@/data/courses';
import { projects } from '@/data/projects';

const specialisationIconBySlug = {
  se: Code2,
  ds: BrainCircuit,
  gd: Code2,
  cs: Shield,
  es: Bot,
  eee: Orbit,
  mr: Factory,
  dm: Megaphone,
  va: Video
};

const specialisationCourses = courses
  .filter((course) => course.pathwayStage === 'Specialisation')
  .map((course) => ({
    name: course.title,
    icon: specialisationIconBySlug[course.slug as keyof typeof specialisationIconBySlug] ?? GraduationCap,
    href: `/courses/${course.slug}`,
    badge: course.comingSoon ? 'COMING SOON' : undefined
  }));

const pathway = [
  {
    title: 'Foundations',
    age: 'Age 8 - 12',
    body: 'Build strong foundational skills across coding, design, robotics, videography, communication, and leadership while developing essential 21st-century skills.',
    courses: [
      { name: 'STEM For Kids: Junior', icon: Rocket, href: '/courses/kx-j' },
      { name: 'STEM For Kids: Project Mars', icon: Shield, href: '/courses/kx' }
    ],
    color: 'bg-gradient-to-br from-[#FF7A00] to-[#FFB347]',
    accent: 'from-orange/16 via-white to-white border-orange/60',
    ringColor: 'border-orange',
    cornerColor: 'bg-orange/20',
    badge: 'bg-gradient-to-br from-[#FF7A00] to-[#FF4F1F]',
    icon: Blocks
  },
  {
    title: 'Learning Paths',
    age: 'Age 10 - 14',
    body: 'Choose themed courses aligned with engineering, analytics, or creative expression. Deeper, project-driven, and skill-focused.',
    courses: [
      { name: 'Coding and Software', icon: Code2, href: '/courses/coding-software' },
      { name: 'Robotics and IoT', icon: Bot, href: '/courses/robotics-iot' },
      { name: 'Digital Media Production', icon: Video, href: '/courses/digital-media' }
    ],
    color: 'bg-gradient-to-br from-[#31C3DE] to-[#7DE3F2]',
    accent: 'from-sky/16 via-white to-white border-sky/60',
    ringColor: 'border-sky',
    cornerColor: 'bg-sky/20',
    badge: 'bg-gradient-to-br from-[#1995D3] to-[#31C3DE]',
    icon: Route
  },
  {
    title: 'Specialisations',
    age: 'Age 12 - 16',
    body: 'Dive deep into industry-focused domains through advanced projects, technical mentorship, and real-world problem solving.',
    courses: specialisationCourses,
    color: 'bg-gradient-to-br from-[#48D83E] to-[#8BE95E]',
    accent: 'from-[#48D83E]/16 via-white to-white border-[#48D83E]/60',
    ringColor: 'border-[#48D83E]',
    cornerColor: 'bg-[#48D83E]/20',
    badge: 'bg-gradient-to-br from-[#48D83E] to-[#65D96C]',
    icon: GraduationCap
  },
  {
    title: 'Launch Pad',
    age: 'Age 16 +',
    body: 'Transition into university, career, or entrepreneurship through structured pathways and our Launch Network.',
    courses: [
      { name: 'Industry Gateway', icon: BriefcaseBusiness, href: '/courses/ig' },
      { name: 'University Access', icon: Landmark, href: '/courses/ua' },
      { name: 'Founder Studio', icon: Lightbulb, href: '/courses/fs', badge: 'COMING SOON' }
    ],
    color: 'bg-gradient-to-br from-[#8B5CF6] to-[#C084FC]',
    accent: 'from-[#8B5CF6]/16 via-white to-white border-[#8B5CF6]/60',
    ringColor: 'border-[#8B5CF6]',
    cornerColor: 'bg-[#8B5CF6]/20',
    badge: 'bg-gradient-to-br from-[#8B5CF6] to-[#A855F7]',
    icon: Rocket
  }
];

const projectCards = projects.slice(0, 10);

const popularPrograms = [
  {
    title: 'STEM For Kids: Project Mars',
    age: 'Age 8-12',
    body: 'Fun, hands-on projects that build curiosity, creativity and confidence.',
    href: '/courses/kx',
    image: '/assets/images/hero-robotics.jpg',
    color: 'bg-gradient-to-br from-[#FF7A00] to-[#FFB347]',
    icon: Rocket
  },
  {
    title: 'Coding and Software',
    age: 'Age 12-16',
    body: 'Turn data into insights and build real world analytical skills.',
    href: '/courses/coding-software',
    image: '/assets/images/project-dashboard.jpg',
    color: 'bg-gradient-to-br from-[#31C3DE] to-[#7DE3F2]',
    icon: Code2
  },
  {
    title: 'Robotics and IoT',
    age: 'Age 12-16',
    body: 'Design thinking, 3D modeling and prototyping real world products.',
    href: '/courses/robotics-iot',
    image: '/assets/images/project-prototype.jpg',
    color: 'bg-gradient-to-br from-[#31C3DE] to-[#7DE3F2]',
    icon: Bot
  },
  {
    title: 'Digital Media Production',
    age: 'Age 10-16',
    body: 'Storytelling through film, animation, photography and more.',
    href: '/courses/digital-media',
    image: '/assets/images/project-film.jpg',
    color: 'bg-gradient-to-br from-[#31C3DE] to-[#7DE3F2]',
    icon: Video
  }
];

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="relative min-h-[760px] overflow-hidden bg-creamAlt px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_42%,rgba(255,122,0,0.26),transparent_32%),radial-gradient(circle_at_82%_22%,rgba(255,79,31,0.12),transparent_30%),linear-gradient(120deg,#F8F1E2_0%,#FFF6EA_58%,rgba(255,122,0,0.12)_100%)]" />
        <div className="relative mx-auto grid min-h-[760px] max-w-[92rem] items-center gap-8 py-20 lg:grid-cols-[0.84fr_1.16fr]">
          <div className="max-w-4xl text-navy">
            <Reveal>
              <div className="mb-8 max-w-3xl border-l-4 border-orange pl-5">
                <p className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">Where students discover their passion and build real world tools and skills</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-4xl font-normal leading-[1.08] md:text-6xl">
                Sri Lanka&apos;s Best{' '}
                <Image
                  src="/assets/images/Removal-192.png"
                  alt="Robotics"
                  width={600}
                  height={157}
                  priority
                  className="relative top-[3px] -ml-[7px] mr-1 inline-block h-[1.22em] w-auto align-[-0.07em] md:-ml-[15px] md:h-[1.28em]"
                />
                {' '}
                <span className="coding-type" aria-label="Coding">
                  <span aria-hidden="true">Coding</span>
                </span>{' '}
                <span className="stem-tiles" aria-label="STEM">
                  {[
                    ['S', 'stem-tile-blue', '0ms'],
                    ['T', 'stem-tile-orange', '220ms'],
                    ['E', 'stem-tile-teal', '440ms'],
                    ['M', 'stem-tile-yellow', '660ms']
                  ].map(([letter, tileClass, delay]) => (
                    <span key={letter} className={`stem-tile ${tileClass}`} style={{ animationDelay: delay }} aria-hidden="true">
                      {letter}
                    </span>
                  ))}
                </span>{' '}
                Courses <span className="relative top-[5px] whitespace-nowrap">for <span className="text-orange">Kids</span></span>
              </h1>
            </Reveal>
            <Reveal delay={200}><p className="mt-6 max-w-2xl text-xl leading-9 text-slate-700">Bridge the gap between what your child learns in school and what they need for the real world</p></Reveal>
            <Reveal animation="pop" delay={300} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/courses">Explore Courses</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">Speak with a Student Counselor</ButtonLink>
            </Reveal>
          </div>
          <Reveal animation="pop" delay={400} className="relative mx-auto aspect-[1.18/1] w-full max-w-[760px] lg:ml-auto lg:scale-[1.12]">
            <div className="absolute -right-1 top-8 z-30 grid grid-cols-5 gap-1.5" aria-hidden="true">
              {Array.from({ length: 25 }).map((_, index) => (
                <span key={index} className="dot-ripple h-1.5 w-1.5 rounded-full bg-orange" style={{ animationDelay: `${(index % 5) * 120 + Math.floor(index / 5) * 18}ms` }} />
              ))}
            </div>
            <div
              className="absolute left-[0%] top-[9%] z-30 h-[78%] w-[60%] overflow-hidden p-2 shadow-[0_30px_58px_rgba(5,24,44,0.34)]"
              style={{
                background: 'linear-gradient(90deg, transparent 0 44%, rgba(255,246,234,0.72) 44% 100%)',
                clipPath: 'polygon(22% 0, 100% 8%, 78% 100%, 0 90%)',
                transform: 'rotate(-4deg) translate(-10px, -4px)'
              }}
            >
              <div
                className="relative h-full w-full overflow-hidden"
                style={{
                  clipPath: 'polygon(22% 0, 100% 8%, 78% 100%, 0 90%)',
                  WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, #000 18%, #000 100%)',
                  maskImage: 'linear-gradient(90deg, transparent 0%, #000 18%, #000 100%)'
                }}
              >
                <Image src="/assets/images/hero-robotics.jpg" alt="" fill priority className="object-cover" sizes="(min-width: 1024px) 30vw, 82vw" />
              </div>
            </div>
            <div
              className="absolute right-[4%] top-[7%] z-20 h-[45%] w-[49%] overflow-hidden rounded-[28px] bg-[#FFF6EA]/70 p-2 shadow-[0_18px_38px_rgba(5,24,44,0.20)]"
              style={{ transform: 'rotate(2deg) translateX(-8px)' }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[20px]">
                <Image src="/assets/images/hero-code.jpg" alt="" fill className="object-cover" sizes="(min-width: 1024px) 28vw, 78vw" />
              </div>
            </div>
            <div
              className="absolute bottom-[8%] right-[5%] z-20 h-[45%] w-[53%] overflow-hidden rounded-[28px] bg-[#FFF6EA]/70 p-2 shadow-[0_18px_38px_rgba(5,24,44,0.20)]"
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

      <section className="bg-creamAlt px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="learning-pathway-title">
        <div className="mx-auto max-w-[92rem]">
          <Reveal>
            <div className="mb-10 max-w-[58rem]">
              <div className="mb-6 border-l-4 border-orange pl-5">
                <p className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">Learning Pathway</p>
              </div>
              <h2 id="learning-pathway-title" className="text-balance text-[2.85rem] font-normal leading-[1.05] text-navy md:text-[4rem]">A long-term journey, built step by step</h2>
              <p className="mt-5 max-w-5xl text-pretty text-lg font-extrabold leading-8 text-slate-600">From first steps to advanced skills, our courses help students discover what they love and build real-world capabilities.</p>
            </div>
          </Reveal>
          <div className="grid gap-4 lg:grid-cols-4">
            {pathway.map((stage, index) => {
                  const stageNumber = index + 1;
                  const isSpecialisations = stage.title === 'Specialisations';
                  const displayedCourses = isSpecialisations ? [...stage.courses, ...stage.courses] : stage.courses;
                  return (
              <Reveal key={stage.title} animation="pop" delay={index * 100} className="h-full">
              <article className={`relative flex h-full flex-col overflow-hidden rounded-[22px] border-x border-b border-t-[5px] bg-gradient-to-b ${stage.accent} ${stage.ringColor} p-4 shadow-soft`}>
                <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 overflow-hidden">
                  <div className={`absolute -right-8 -top-10 h-32 w-32 rounded-full ${stage.cornerColor}`} />
                </div>
                <div className="relative mb-5 flex min-h-[56px] items-start gap-4">
                  <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${stage.badge} text-xl font-extrabold text-white shadow-soft`}>
                    {String(stageNumber).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="break-words text-xl font-extrabold leading-tight text-navy">{stage.title}</h3>
                    <p className="mt-1 text-sm font-extrabold text-navy/75">{stage.age}</p>
                  </div>
                </div>
                <p className="min-h-[118px] text-sm font-semibold leading-6 text-slate-700">{stage.body}</p>
                <p className="mt-4 text-sm font-extrabold uppercase tracking-[0.18em] text-slate-600">{stage.title === 'Launch Pad' ? 'Pathways' : 'Courses'}</p>
                <div className={isSpecialisations ? 'specialisation-course-carousel mt-3 max-h-[268px] overflow-hidden pr-1' : 'mt-3'}>
                <ul className={`grid gap-2.5 ${isSpecialisations ? 'specialisation-course-track' : ''}`}>
                  {displayedCourses.map((course, courseIndex) => {
                    const CourseIcon = course.icon;
                    return (
                      <li key={`${course.name}-${courseIndex}`}>
                        <a href={course.href} tabIndex={isSpecialisations && courseIndex >= stage.courses.length ? -1 : undefined} className={`grid min-h-[58px] grid-cols-[2.5rem_1fr] items-center gap-3 rounded-[14px] border border-navy/10 bg-white px-3.5 py-2.5 text-sm font-extrabold leading-5 text-navy transition duration-200 hover:-translate-y-1 hover:scale-[1.01] focus-visible:scale-[1.01] ${isSpecialisations ? '' : 'shadow-[0_12px_28px_rgba(13,53,87,0.05)] hover:shadow-pop'}`}>
                        <span className={`grid h-7 w-7 place-items-center self-center rounded-full ${stage.color} text-white transition duration-200`}>
                          <CourseIcon size={16} strokeWidth={2.5} aria-hidden />
                        </span>
                        <span className="min-w-0 break-words">
                          {course.name}
                          {'badge' in course && course.badge && <span className="mt-1 block w-fit rounded-full bg-[#E8DDFF] px-2 py-0.5 text-[11px] font-extrabold text-[#6D45FF]">{course.badge}</span>}
                        </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
                </div>
              </article>
              </Reveal>
              );
            })}
          </div>
          <Reveal animation="pop" delay={400} className="mt-10"><ButtonLink href="/courses">Explore Courses</ButtonLink></Reveal>
        </div>
      </section>

      <section className="overflow-hidden bg-cream px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="student-projects-title">
        <div className="mx-auto max-w-[92rem]">
          <Reveal>
            <div className="mb-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[58rem]">
                <div className="mb-6 border-l-4 border-orange pl-5">
                  <p className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">Student Projects</p>
                </div>
                <h2 id="student-projects-title" className="text-balance text-[2.85rem] font-normal leading-[1.05] text-navy md:text-[4rem]">See what your child will build at Meu Labs.</h2>
                <p className="mt-5 max-w-5xl text-pretty text-lg font-extrabold leading-8 text-slate-600">From Robots to WebApps from Media productions to AI agents. At Meu Labs students build literally anything</p>
              </div>
              <ButtonLink href="/projects" className="w-fit shrink-0 lg:mb-2">View Student Projects</ButtonLink>
            </div>
          </Reveal>
        </div>
        <div className="mx-auto mt-2 max-w-[92rem]">
          <Reveal animation="pop" delay={150}>
          <div className="project-carousel-shell py-3" aria-label="Featured student projects">
            <div className="project-carousel-track flex w-max gap-5 pr-5 sm:gap-6 sm:pr-6">
              {[...projectCards, ...projectCards].map((project, index) => {
                const isDuplicate = index >= projectCards.length;

                return (
                <a
                  key={`${project.title}-${index}`}
                  href={project.link}
                  aria-hidden={isDuplicate}
                  tabIndex={isDuplicate ? -1 : undefined}
                  className="group grid h-[320px] w-[min(68vw,230px)] shrink-0 grid-rows-[124px_1fr] overflow-hidden rounded-[20px] border border-navy/10 bg-white transition duration-200 hover:-translate-y-1 sm:h-[335px] sm:w-[250px] sm:grid-rows-[136px_1fr]"
                >
                  <div className="relative h-full min-h-0 overflow-hidden">
                    <Image src={project.image} alt="" fill className="object-cover transition duration-300 group-hover:scale-105" sizes="310px" />
                  </div>
                  <div className="flex min-h-0 min-w-0 flex-1 flex-col p-4">
                    <div className="flex flex-wrap content-start gap-1.5 overflow-hidden">
                      {project.skills.slice(0, 1).map((skill) => (
                        <span key={skill} className="rounded-full bg-cream px-3.5 py-2 text-xs font-extrabold uppercase">
                          <span className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-transparent">
                            {skill}
                          </span>
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-3 line-clamp-2 self-start break-words text-lg font-extrabold leading-tight text-navy">{project.title}</h3>
                    <p className="mt-2 line-clamp-3 self-start break-words text-xs font-extrabold leading-5 text-slate-600">{project.description}</p>
                  </div>
                </a>
                );
              })}
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="popular-programmes-title">
        <div className="mx-auto max-w-[92rem]">
          <Reveal>
            <div className="mb-10 max-w-[58rem]">
              <div className="mb-6 border-l-4 border-orange pl-5">
                <p className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">Popular Programmes</p>
              </div>
              <h2 id="popular-programmes-title" className="text-balance text-[2.85rem] font-normal leading-[1.05] text-navy md:text-[4rem]">Explore our most loved courses.</h2>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {popularPrograms.map((program, index) => {
              const Icon = program.icon;

              return (
                <Reveal key={program.title} animation="pop" delay={index * 90} className="h-full">
                  <a href={program.href} className="group flex h-full min-h-[340px] flex-col overflow-hidden rounded-[14px] border border-navy/10 bg-white shadow-[0_18px_46px_rgba(13,53,87,0.10)] transition duration-200 hover:-translate-y-1 hover:shadow-pop">
                    <div className="relative h-[130px] overflow-visible">
                      <Image src={program.image} alt="" fill className="object-cover transition duration-300 group-hover:scale-105" sizes="(min-width: 1280px) 280px, (min-width: 768px) 45vw, 90vw" />
                      <span className={`absolute -bottom-5 left-5 grid h-10 w-10 place-items-center rounded-full ${program.color} text-white shadow-soft`}>
                        <Icon size={20} strokeWidth={2.4} aria-hidden />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-4 pt-8">
                      <h3 className="text-xl font-normal leading-tight text-navy">{program.title}</h3>
                      <p className="mt-2 text-base font-extrabold text-slate-600">{program.age}</p>
                      <p className="mt-4 text-base font-extrabold leading-7 text-slate-600">{program.body}</p>
                      <span className="mt-auto pt-5 text-base font-extrabold text-[#FF4F1F]">View Course &gt;</span>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="why-meu-labs-title">
        <div className="mx-auto max-w-[92rem]">
          <Reveal>
            <div className="mb-7">
              <div className="mb-5 border-l-4 border-orange pl-5">
                <p className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">Why Meu Labs</p>
              </div>
              <h2 id="why-meu-labs-title" className="max-w-[72rem] text-balance text-[2.75rem] font-normal leading-[1.05] text-navy md:text-[3.6rem]">A Home for students who learn by <span className="block">doing.</span></h2>
            </div>
          </Reveal>
          <Reveal animation="pop" delay={200}>
            <WhyMeuLabs intro="We combine expert instruction, safe creative spaces, and a world-class project-based curriculum so students build confidence, creativity, and real technical skill." />
          </Reveal>
          <Reveal animation="pop" delay={300} className="mt-10">
            <CounselorCTA source="/" compact />
          </Reveal>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  BookOpenCheck,
  Bot,
  CalendarDays,
  CheckCircle2,
  Clock,
  FileDown,
  FolderKanban,
  Lightbulb,
  MapPin,
  MessageCircle,
  MonitorUp,
  PackageCheck,
  PenTool,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users
} from 'lucide-react';
import { allCourses, getCourse, type Course } from '@/data/courses';
import { courseAliases } from '@/data/courseContent';
import { intakes } from '@/data/intakes';
import { CourseCard } from '@/components/CourseCard';
import { CounselorCTA } from '@/components/CounselorCTA';
import { Reveal } from '@/components/Reveal';
import { SyllabusForm } from '@/components/SyllabusForm';
import { counselorMessage, whatsappHref } from '@/lib/whatsapp';
import { currentMonthName, daysToNextClosingDate, seededSpots } from '@/lib/registration';

type PageProps = { params: { slug: string } };

const projectImages = [
  '/assets/images/project-dashboard.jpg',
  '/assets/images/project-traffic.jpg',
  '/assets/images/project-electronics-lab.jpg',
  '/assets/images/project-game.jpg',
  '/assets/images/project-film.jpg',
  '/assets/images/project-prototype.jpg'
];

const focusIcons = [MonitorUp, Bot, PenTool, Sparkles, Lightbulb, Rocket];
const outcomeIcons = [BookOpenCheck, Bot, FolderKanban, PenTool, MonitorUp, PackageCheck];
const outcomeBadgeClasses = [
  'bg-gradient-to-br from-[#7C3AED] to-[#C084FC] shadow-[0_10px_22px_rgba(124,58,237,0.24)]',
  'bg-gradient-to-br from-[#00A86B] to-[#65D96C] shadow-[0_10px_22px_rgba(0,168,107,0.22)]',
  'bg-gradient-to-br from-[#FF7A00] to-[#FF4F1F] shadow-[0_10px_22px_rgba(255,122,0,0.24)]',
  'bg-gradient-to-br from-[#1995D3] to-[#31C3DE] shadow-[0_10px_22px_rgba(25,149,211,0.22)]',
  'bg-gradient-to-br from-[#F5B400] to-[#FFD166] shadow-[0_10px_22px_rgba(245,180,0,0.22)]',
  'bg-gradient-to-br from-[#FF4D8D] to-[#8B5CF6] shadow-[0_10px_22px_rgba(255,77,141,0.20)]'
];

const toolLogoMap: Record<string, string> = {
  'adobe after effects': '/assets/logos/tools/adobeaftereffects.svg',
  'adobe premiere pro': '/assets/logos/tools/adobepremierepro.svg',
  arduino: '/assets/logos/tools/arduino.svg',
  aseprite: '/assets/logos/tools/aseprite.svg',
  audacity: '/assets/logos/tools/audacity.svg',
  autodesk: '/assets/logos/tools/autodesk.svg',
  bandlab: '/assets/logos/tools/bandlab.svg',
  blender: '/assets/logos/tools/blender.svg',
  canva: '/assets/logos/tools/canva.svg',
  'c#': '/assets/logos/tools/csharp.svg',
  chatgpt: '/assets/logos/tools/chatgpt.svg',
  clipchamp: '/assets/logos/tools/clipchamp.svg',
  css: '/assets/logos/tools/css.svg',
  'da vinci resolve': '/assets/logos/tools/davinciresolve.svg',
  easyeda: '/assets/logos/tools/easyeda.svg',
  excel: '/assets/logos/tools/excel.svg',
  figma: '/assets/logos/tools/figma.svg',
  firebase: '/assets/logos/tools/firebase.svg',
  flask: '/assets/logos/tools/flask.svg',
  'fusion 360': '/assets/logos/tools/autodesk.svg',
  github: '/assets/logos/tools/github.svg',
  git: '/assets/logos/tools/github.svg',
  godot: '/assets/logos/tools/godot.svg',
  'google analytics': '/assets/logos/tools/googleanalytics.svg',
  'google colab': '/assets/logos/tools/googlecolab.svg',
  'google trends': '/assets/logos/tools/google.svg',
  'google workspace': '/assets/logos/tools/googleworkspace.svg',
  html: '/assets/logos/tools/html5.svg',
  javascript: '/assets/logos/tools/javascript.svg',
  jupyter: '/assets/logos/tools/jupyter.svg',
  kaggle: '/assets/logos/tools/kaggle.svg',
  krita: '/assets/logos/tools/krita.svg',
  linux: '/assets/logos/tools/linux.svg',
  mailchimp: '/assets/logos/tools/mailchimp.svg',
  'meta business': '/assets/logos/tools/meta.svg',
  'ml for kids': '/assets/logos/tools/mlforkids.svg',
  'our world in data': '/assets/logos/tools/ourworldindata.svg',
  platformio: '/assets/logos/tools/platformio.svg',
  postman: '/assets/logos/tools/postman.svg',
  'power bi': '/assets/logos/tools/powerbi.svg',
  scratch: '/assets/logos/tools/scratch.svg',
  python: '/assets/logos/tools/python.svg',
  nodered: '/assets/logos/tools/nodered.svg',
  raspberry: '/assets/logos/tools/raspberrypi.svg',
  react: '/assets/logos/tools/react.svg',
  'scikit-learn': '/assets/logos/tools/scikitlearn.svg',
  scikitlearn: '/assets/logos/tools/scikitlearn.svg',
  sqlite: '/assets/logos/tools/sqlite.svg',
  'sql database': '/assets/logos/tools/sqlite.svg',
  streamlit: '/assets/logos/tools/streamlit.svg',
  tensorflow: '/assets/logos/tools/tensorflow.svg',
  tinkercad: '/assets/logos/tools/tinkercad.svg',
  unity: '/assets/logos/tools/unity.svg',
  webflow: '/assets/logos/tools/webflow.svg',
  wireshark: '/assets/logos/tools/wireshark.svg',
  wordpress: '/assets/logos/tools/wordpress.svg'
};

const courseHeroPhotos: Record<string, string> = {
  kx: '/assets/images/hero-robotics.jpg',
  'coding-software': '/assets/images/hero-code.jpg',
  'robotics-iot': '/assets/images/project-prototype.jpg',
  'digital-media': '/assets/images/project-film.jpg',
  se: '/assets/images/hero-code.jpg',
  ds: '/assets/images/project-ai.jpg',
  es: '/assets/images/project-electronics-lab.jpg',
  eee: '/assets/images/electronics-board.jpg',
  mr: '/assets/images/project-electronics-lab.jpg'
};

export function generateStaticParams() {
  return [...allCourses.map((course) => ({ slug: course.slug })), ...Object.keys(courseAliases).map((slug) => ({ slug }))];
}

export function generateMetadata({ params }: PageProps): Metadata {
  const course = getCourse(params.slug);
  if (!course) return {};
  return {
    title: `${course.internalName || course.title} | Meu Labs — Robotics, Coding & STEM for Kids in Sri Lanka`,
    description: course.descriptor,
    openGraph: { images: ['/og-default.jpg'] }
  };
}

function getPageTitle(course: Course) {
  return course.internalName || course.title;
}

function formatCourseFormat(format: string) {
  const match = format.match(/^1\s*x\s*(\d+)\s*hr\/week$/i);
  if (match) return `One ${match[1]}-Hour Session Per Week`;
  return format.replace(/\b(\d+)-hour\b/i, '$1-Hour').replace(/\bsession per week\b/i, 'Session Per Week');
}

function getToolLogo(tool: string) {
  const normalized = tool.toLowerCase();
  return Object.entries(toolLogoMap).find(([key]) => matchesToolLogoKey(normalized, key))?.[1];
}

function matchesToolLogoKey(normalizedTool: string, key: string) {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`(^|[^a-z0-9])${escapedKey}([^a-z0-9]|$)`, 'i').test(normalizedTool);
}

function isWideToolLogo(tool: string) {
  const normalized = tool.toLowerCase();
  return normalized.includes('google workspace') || normalized.includes('our world in data') || normalized.includes('ml for kids') || normalized.includes('meta business');
}

function getHeroPhoto(course: Course) {
  return courseHeroPhotos[course.slug] || '/assets/images/hero-robotics.jpg';
}

function shortProjectLabel(project: string, index: number) {
  if (project.startsWith('http')) return `Example Project ${index + 1}`;
  return project;
}

function splitPrerequisites(text: string) {
  return text
    .split(/\. (?=[A-Z])/)
    .map((item) => item.trim().replace(/\.$/, ''))
    .filter(Boolean);
}

function getOutcomeTitle(outcome: string) {
  const normalized = outcome.toLowerCase();
  if (normalized.includes('clean') || normalized.includes('maintainable')) return 'Clean Code';
  if (normalized.includes('frontend') || normalized.includes('responsive') || normalized.includes('interface')) return 'Frontend Development';
  if (normalized.includes('backend') || normalized.includes('database') || normalized.includes('api')) return 'Backend & Databases';
  if (normalized.includes('full-stack') || normalized.includes('end-to-end')) return 'Full-Stack Systems';
  if (normalized.includes('debugging') || normalized.includes('testing') || normalized.includes('optimization')) return 'Debugging & Testing';
  if (normalized.includes('3d') || normalized.includes('cad')) return '3D Design';
  if (normalized.includes('program') || normalized.includes('coding') || normalized.includes('automation')) return 'Coding & Automation';
  if (normalized.includes('data') || normalized.includes('decisions')) return 'Strategy & Decisions';
  if (normalized.includes('video') || normalized.includes('storytelling') || normalized.includes('animation')) return 'Digital Storytelling';
  if (normalized.includes('teamwork') || normalized.includes('collaborate')) return 'Teamwork';
  if (normalized.includes('prototype') || normalized.includes('electronics') || normalized.includes('microcontrollers')) return 'Prototype Building';
  return outcome.split(' ').slice(0, 3).join(' ');
}

export default function CoursePage({ params }: PageProps) {
  const course = getCourse(params.slug);
  if (!course) notFound();

  const pageTitle = getPageTitle(course);
  const courseIntakes = intakes.filter((batch) => batch.courseSlug === course.slug);
  const recommended = course.recommendedCourses.map(getCourse).filter(Boolean).slice(0, 4);
  const closingDays = daysToNextClosingDate();
  const heroPhoto = getHeroPhoto(course);
  const prerequisites = splitPrerequisites(course.prerequisites);
  const primaryCtaLabel = course.comingSoon ? 'Join the Interest List' : 'Register Now';

  return (
    <main className="bg-[#F8F1E3]">
      <section className="relative bg-creamAlt pb-0 pt-0 text-navy">
        <div className="mx-auto w-full">
          <div className="relative bg-[#06243A] shadow-[0_22px_60px_rgba(13,53,87,0.18)]">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_36%,rgba(255,122,0,0.22),transparent_30%),linear-gradient(135deg,#061C31_0%,#092D4B_46%,#052038_100%)]" />
              <div
                className="absolute inset-y-0 right-0 w-full sm:w-[76%] lg:w-[64%]"
                style={{
                  WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.03) 24%, rgba(0,0,0,0.34) 45%, #000 68%)',
                  maskImage: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.03) 24%, rgba(0,0,0,0.34) 45%, #000 68%)'
                }}
              >
                <Image
                  src={heroPhoto}
                  alt=""
                  fill
                  priority
                  className="object-cover object-right"
                  sizes="(min-width: 1024px) 58vw, 100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,26,45,0.04)_0%,rgba(3,26,45,0.22)_100%)]" />
              </div>
              <div className="absolute inset-y-0 left-0 w-[60%] bg-[linear-gradient(90deg,rgba(3,26,45,0.34)_0%,rgba(3,26,45,0)_100%)]" />
            </div>

            <div className="relative z-10 mx-auto grid min-h-[760px] max-w-[92rem] gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-8">
              <Reveal className="flex max-w-3xl flex-col justify-center text-white" animation="rise">
                <div className="mb-8 max-w-3xl border-l-4 border-orange pl-5">
                  <p className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">{course.subtitle}</p>
                </div>
                <h1 className="max-w-4xl text-4xl font-normal leading-[1.08] tracking-normal md:text-6xl">{pageTitle}</h1>
                <p className="mt-6 max-w-3xl text-xl font-semibold leading-9 text-white/88">{course.descriptor}</p>
                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-extrabold lg:flex-nowrap">
                  {[
                    { label: 'Age', value: course.ageRange, Icon: Users },
                    { label: 'Duration', value: course.duration, Icon: Clock },
                    { label: 'Format', value: formatCourseFormat(course.format), Icon: CalendarDays },
                    { label: 'Pathway Stage', value: course.pathwayStage, Icon: ShieldCheck }
                  ].map(({ label, value, Icon }) => (
                    <div key={label} className="flex min-w-fit items-center gap-2.5">
                      <Icon size={19} className="shrink-0 text-orange" aria-hidden />
                      <span>
                        <span className="block text-[11px] uppercase tracking-[0.08em] text-white/58">{label}</span>
                        <span className="block text-[15px] leading-5 text-white">{value}</span>
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-9 flex flex-wrap gap-4">
                  <a href={course.registerLink} target="_blank" rel="noreferrer" className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] px-8 text-sm font-extrabold text-white shadow-[0_14px_34px_rgba(255,79,31,0.22)] transition hover:-translate-y-0.5 hover:shadow-pop">
                    {primaryCtaLabel}
                  </a>
                  <a href={whatsappHref(counselorMessage(course.title))} target="_blank" rel="noreferrer" className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full border border-white/55 bg-white/8 px-8 text-sm font-extrabold text-white shadow-[0_14px_34px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 hover:bg-white hover:text-navy">
                    <MessageCircle size={17} /> Talk to a Student Counselor
                  </a>
                </div>
              </Reveal>
              <div aria-hidden="true" className="hidden lg:block" />
            </div>

          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#FFEBD1_0%,#FFF4E4_58%,#FFF8EF_100%)] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[92rem]">
          <Reveal className="mb-7 border-l-4 border-orange pl-5">
            <p className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">What you will explore</p>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-5">
            {course.focusAreas.map((area, index) => {
              const Icon = focusIcons[index % focusIcons.length];
              return (
                <Reveal key={area} animation="pop" delay={index * 70} className="h-full">
                  <article className="flex min-h-[210px] flex-col items-center justify-center rounded-[8px] border border-orange/20 bg-white p-7 text-center shadow-[0_14px_30px_rgba(13,53,87,0.07)]">
                    <Icon size={48} strokeWidth={1.8} className="mb-5 text-navy" aria-hidden />
                    <h3 className="text-lg font-extrabold leading-tight text-navy">{area}</h3>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-[92rem] gap-6 lg:grid-cols-[1.15fr_0.95fr]">
          <Reveal animation="rise" className="h-full">
          <article className="flex h-full flex-col rounded-[10px] border border-navy/10 bg-white p-8 shadow-[0_14px_34px_rgba(13,53,87,0.07)]">
            <div className="border-l-4 border-orange pl-4">
              <h2 className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">What You Will Learn</h2>
            </div>
            <div className="mt-10 flex flex-1 flex-col justify-between divide-y divide-navy/10 pt-4">
              {course.learningOutcomes.map((outcome, index) => {
                const Icon = outcomeIcons[index % outcomeIcons.length];
                const badgeClass = outcomeBadgeClasses[index % outcomeBadgeClasses.length];
                return (
                  <div key={outcome} className="grid gap-5 py-5 first:pt-0 sm:grid-cols-[64px_1fr]">
                    <span className={`grid h-14 w-14 place-items-center rounded-full text-white ${badgeClass}`}>
                      <Icon size={26} strokeWidth={2.1} aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-base font-extrabold leading-tight text-navy">{getOutcomeTitle(outcome)}</h3>
                      <p className="mt-1 text-sm font-semibold leading-6 text-slate-700">{outcome}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
          </Reveal>

          <Reveal animation="rise" delay={100} className="h-full">
          <div className="grid h-full gap-5">
            <article className="flex min-h-[430px] flex-col rounded-[10px] border border-navy/10 bg-white p-8 shadow-[0_14px_34px_rgba(13,53,87,0.07)]">
              <div className="border-l-4 border-orange pl-4">
                <h2 className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">Tools You Will Use</h2>
              </div>
              <div className="mt-8 grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3">
                {course.toolsUsed.map((tool) => {
                  const logo = getToolLogo(tool);
                  const wideLogo = isWideToolLogo(tool);
                  return (
                    <div key={tool} className="grid min-h-[145px] place-items-center rounded-[8px] border border-navy/10 bg-white p-4 text-center shadow-[0_8px_18px_rgba(13,53,87,0.04)]">
                      {logo ? (
                        <Image
                          src={logo}
                          alt=""
                          width={wideLogo ? 132 : 64}
                          height={wideLogo ? 42 : 64}
                          className={`${wideLogo ? 'mb-4 h-10 w-32' : 'mb-3 h-16 w-16'} object-contain`}
                        />
                      ) : (
                        <span className="mb-3 grid h-16 w-16 place-items-center rounded-full bg-orange/12 text-sm font-extrabold text-orange">{tool.slice(0, 2).toUpperCase()}</span>
                      )}
                      <span className="text-xs font-extrabold leading-tight text-navy">{tool}</span>
                    </div>
                  );
                })}
              </div>
            </article>

            <article className="rounded-[10px] border border-orange/20 bg-white p-7 shadow-[0_18px_42px_rgba(255,122,0,0.13)]">
              <div className="border-l-4 border-orange pl-4">
                <h2 className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">Prerequisites</h2>
              </div>
              <div className="mt-6 grid gap-4">
                {(prerequisites.length ? prerequisites : [course.prerequisites]).map((item) => (
                  <p key={item} className="flex gap-4 text-sm font-bold leading-6 text-navy">
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] shadow-[0_8px_18px_rgba(255,93,25,0.28)]">
                      <CheckCircle2 size={16} className="text-white" aria-hidden />
                    </span>
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </article>
          </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[92rem] gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal animation="rise" className="h-full">
          <article className="h-full rounded-[10px] border border-orange/15 bg-white p-7 shadow-[0_18px_42px_rgba(13,53,87,0.08)]">
            <div className="border-l-4 border-orange pl-4">
              <h2 className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">Example Projects</h2>
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {(course.exampleProjects.length ? course.exampleProjects : ['Project details coming soon']).slice(0, 4).map((project, index) => (
                <a key={project} href={project.startsWith('http') ? project : '#'} target={project.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="group overflow-hidden rounded-[8px] border border-navy/10 bg-white shadow-[0_10px_24px_rgba(13,53,87,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(13,53,87,0.12)]">
                  <div className="relative h-36 bg-creamAlt">
                    <Image src={projectImages[index % projectImages.length]} alt="" fill className="object-cover transition duration-300 group-hover:scale-105" sizes="(min-width: 1024px) 18vw, 45vw" />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy/45 to-transparent" />
                  </div>
                  <div className="flex min-h-[64px] flex-col items-start justify-center gap-2 p-4">
                    <span className="text-sm font-extrabold leading-tight text-navy">{shortProjectLabel(project, index)}</span>
                    <span className="text-xs font-black text-orange">
                      View Project <span aria-hidden>&gt;</span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a href="#request-syllabus" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] px-5 text-sm font-extrabold text-white shadow-[0_12px_24px_rgba(255,93,25,0.2)] transition hover:-translate-y-0.5">
                Download Full Syllabus <FileDown size={16} />
              </a>
              <a href="#request-syllabus" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-navy/20 bg-creamAlt px-5 text-sm font-extrabold text-navy transition hover:-translate-y-0.5 hover:border-orange hover:text-orange">
                Download One Pager <FileDown size={16} />
              </a>
            </div>
          </article>
          </Reveal>

          <Reveal animation="rise" delay={100} className="h-full">
          <article id="request-syllabus" className="flex h-full min-h-[645px] flex-col rounded-[10px] border border-orange/20 bg-[linear-gradient(135deg,#FFFFFF_0%,#FFF8EF_52%,#FFECD5_100%)] p-5 shadow-[0_18px_42px_rgba(255,122,0,0.12)] md:p-7">
            <div className="border-l-4 border-orange pl-4">
              <h2 className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">Request Full Syllabus</h2>
            </div>
            <p className="mt-5 max-w-xl text-sm font-bold leading-6 text-slate-700">Fill in your details and we will send the full syllabus to you.</p>
            <div className="mt-7">
              <SyllabusForm courseSlug={course.slug} />
            </div>
            <p className="mt-auto pt-8 text-xs font-bold text-slate-500">We respect your privacy. Your information is safe with us.</p>
          </article>
          </Reveal>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#FFEBD1_0%,#FFF4E4_58%,#FFF8EF_100%)] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[92rem] gap-6 lg:grid-cols-[1.6fr_0.8fr]">
          <Reveal animation="rise" className="h-full">
          <article className="h-full rounded-[10px] border border-navy/10 bg-white p-6 shadow-[0_10px_24px_rgba(13,53,87,0.05)]">
            <div className="border-l-4 border-orange pl-4">
              <h2 className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">{currentMonthName()} Intake Now Open</h2>
            </div>
            <p className="mt-1 text-sm font-extrabold text-orange">Registration closes in {closingDays} days</p>
            {course.comingSoon ? (
              <p className="mt-6 rounded-[8px] bg-cream p-4 text-sm font-extrabold text-navy">Intake details coming soon.</p>
            ) : (
              <div className="mt-6 grid gap-x-8 gap-y-3 md:grid-cols-2">
                {courseIntakes.map((batch) => (
                  <div key={batch.label} className="flex items-center justify-between gap-3 text-sm font-semibold text-navy">
                    <span className="flex items-center gap-2"><Clock size={16} className="text-slate-500" /> {batch.label}</span>
                    <span className="shrink-0 font-extrabold text-orange">{seededSpots(course.slug, batch.label)} spots left</span>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
              {course.location.split('/').map((location) => (
                <span key={location} className="inline-flex items-center gap-2 rounded-full bg-creamAlt px-4 py-2 text-sm font-extrabold text-navy">
                  <MapPin size={16} className="text-orange" /> {location.trim()}
                </span>
              ))}
            </div>
          </article>
          </Reveal>

          <Reveal animation="rise" delay={100} className="h-full">
          <article className="flex h-full flex-col justify-center rounded-[10px] bg-gradient-to-br from-[#EEF7FF] to-white p-8 shadow-[0_10px_24px_rgba(13,53,87,0.05)]">
            <div className="border-l-4 border-orange pl-4">
              <h3 className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-lg font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-xl">Limited Seats. Big Impact.</h3>
            </div>
            <p className="mt-3 text-sm font-semibold leading-6 text-slate-700">Our small batch sizes ensure personalised attention and the best learning experience for every student.</p>
            <a href={course.registerLink} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-fit min-h-[48px] items-center justify-center rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] px-7 text-sm font-extrabold text-white shadow-[0_12px_24px_rgba(255,93,25,0.22)] transition hover:-translate-y-0.5">
              {primaryCtaLabel}
            </a>
          </article>
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-12 max-w-[92rem]">
          <div className="mb-5 border-l-4 border-orange pl-4">
            <h2 className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">Other Recommended Courses</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {recommended.map((item) => item ? <CourseCard key={item.slug} course={item} /> : null)}
          </div>
          <div className="mt-10">
            <CounselorCTA courseName={course.title} source={`/courses/${course.slug}`} compact />
          </div>
        </Reveal>
      </section>
    </main>
  );
}

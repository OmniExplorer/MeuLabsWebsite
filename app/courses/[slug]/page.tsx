import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
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
  Ratio,
  Rocket,
  ShieldCheck,
  Sparkles,
  Timer,
  Users
} from 'lucide-react';
import { allCourses, getCourse, type Course } from '@/data/courses';
import { courseAliases } from '@/data/courseContent';
import { intakes } from '@/data/intakes';
import { CourseCard } from '@/components/CourseCard';
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
  arduino: '/assets/logos/tools/arduino.svg',
  chatgpt: '/assets/logos/tools/chatgpt.svg',
  clipchamp: '/assets/logos/tools/clipchamp.svg',
  scratch: '/assets/logos/tools/scratch.svg',
  tinkercad: '/assets/logos/tools/tinkercad.svg',
  'google workspace': '/assets/logos/tools/googleworkspace.svg'
};

const stageHeroBackgrounds: Record<Course['pathwayStage'], string> = {
  Foundations:
    'radial-gradient(circle at 18% 40%, rgba(255, 122, 0, 0.38), transparent 32%), radial-gradient(circle at 68% 24%, rgba(255, 179, 71, 0.36), transparent 34%), radial-gradient(circle at 92% 86%, rgba(255, 79, 31, 0.22), transparent 36%), linear-gradient(120deg, #FFD9A8 0%, #FFF0D6 46%, #FFC56F 100%)',
  'Learning Path':
    'radial-gradient(circle at 18% 40%, rgba(49, 195, 222, 0.20), transparent 30%), radial-gradient(circle at 72% 28%, rgba(125, 227, 242, 0.18), transparent 31%), radial-gradient(circle at 92% 88%, rgba(25, 149, 211, 0.10), transparent 34%), linear-gradient(120deg, #EEF9FC 0%, #FFF8EF 54%, #E5F8FB 100%)',
  Specialisation:
    'radial-gradient(circle at 18% 40%, rgba(72, 216, 62, 0.16), transparent 30%), radial-gradient(circle at 72% 28%, rgba(139, 233, 94, 0.16), transparent 31%), radial-gradient(circle at 92% 88%, rgba(49, 195, 222, 0.10), transparent 34%), linear-gradient(120deg, #F0FBEF 0%, #FFF8EF 54%, #E7F9E5 100%)',
  'Launch Pad':
    'radial-gradient(circle at 18% 40%, rgba(139, 92, 246, 0.16), transparent 30%), radial-gradient(circle at 72% 28%, rgba(192, 132, 252, 0.16), transparent 31%), radial-gradient(circle at 92% 88%, rgba(255, 122, 0, 0.10), transparent 34%), linear-gradient(120deg, #F4F0FF 0%, #FFF8EF 54%, #EEE5FF 100%)'
};

const stageHeroGlows: Record<Course['pathwayStage'], string> = {
  Foundations: 'radial-gradient(circle,rgba(255,122,0,0.40)_0%,rgba(255,179,71,0.28)_42%,transparent_72%)',
  'Learning Path': 'radial-gradient(circle,rgba(49,195,222,0.22)_0%,rgba(125,227,242,0.16)_42%,transparent_72%)',
  Specialisation: 'radial-gradient(circle,rgba(72,216,62,0.18)_0%,rgba(139,233,94,0.14)_42%,transparent_72%)',
  'Launch Pad': 'radial-gradient(circle,rgba(139,92,246,0.18)_0%,rgba(192,132,252,0.14)_42%,transparent_72%)'
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

function formatHours(format: string) {
  const match = format.match(/(\d+)\s*-?\s*hour|(\d+)\s*hr/i);
  const hours = match?.[1] ?? match?.[2];
  return hours ? `${hours} Hours` : 'Weekly';
}

function formatCourseFormat(format: string) {
  const match = format.match(/^1\s*x\s*(\d+)\s*hr\/week$/i);
  if (match) return `One ${match[1]}-Hour Session Per Week`;
  return format.replace(/\b(\d+)-hour\b/i, '$1-Hour').replace(/\bsession per week\b/i, 'Session Per Week');
}

function getMetricValue(course: Course) {
  const months = course.duration.match(/\d+/)?.[0] ?? course.duration;
  const sessions = Number(months) ? Number(months) * 8 : 32;
  const hours = formatHours(course.format).match(/\d+/)?.[0];
  return {
    months,
    sessions,
    hours: hours && Number(months) ? String(Number(months) * 8 * Number(hours)) : formatHours(course.format)
  };
}

function getToolLogo(tool: string) {
  const normalized = tool.toLowerCase();
  return Object.entries(toolLogoMap).find(([key]) => normalized.includes(key))?.[1];
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
  const metrics = getMetricValue(course);
  const courseIntakes = intakes.filter((batch) => batch.courseSlug === course.slug);
  const recommended = course.recommendedCourses.map(getCourse).filter(Boolean).slice(0, 4);
  const closingDays = daysToNextClosingDate();
  const heroArtwork = course.slug === 'kx' ? '/assets/images/kx-hero-themes.png' : '/assets/images/courses-hero-student-3d.png';
  const prerequisites = splitPrerequisites(course.prerequisites);
  const heroBackground = stageHeroBackgrounds[course.pathwayStage];
  const heroGlow = stageHeroGlows[course.pathwayStage];

  return (
    <main className="bg-[#F8F1E3]">
      <section className="relative overflow-hidden px-4 pb-12 pt-8 text-navy sm:px-6 lg:px-8">
        <div className="absolute inset-0" style={{ background: heroBackground }} />
        <div className="mx-auto max-w-[92rem]">
          <div className="relative">
            <div className="grid min-h-[560px] gap-10 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="flex max-w-4xl flex-col justify-center">
                <div className="mb-8 max-w-3xl border-l-4 border-orange pl-5">
                  <p className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">{course.subtitle}</p>
                </div>
                <h1 className="max-w-4xl text-4xl font-normal leading-[1.08] tracking-normal md:text-6xl">{pageTitle}</h1>
                <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-700">{course.descriptor}</p>
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
                        <span className="block text-[11px] uppercase tracking-[0.08em] text-slate-500">{label}</span>
                        <span className="block text-[15px] leading-5 text-navy">{value}</span>
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-9 flex flex-wrap gap-4">
                  {!course.comingSoon && (
                    <a href={course.registerLink} target="_blank" rel="noreferrer" className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] px-8 text-sm font-extrabold text-white shadow-[0_14px_34px_rgba(255,79,31,0.22)] transition hover:-translate-y-0.5 hover:shadow-pop">
                      Register Now
                    </a>
                  )}
                  <a href={whatsappHref(counselorMessage(course.title))} target="_blank" rel="noreferrer" className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-extrabold text-navy shadow-[0_14px_34px_rgba(13,53,87,0.10)] transition hover:-translate-y-0.5 hover:bg-cream">
                    <MessageCircle size={17} /> Talk to a Student Counselor
                  </a>
                </div>
              </div>
              <div className="relative min-h-[430px] lg:min-h-[560px]">
                <div className="absolute inset-x-10 bottom-8 top-10 z-0 rounded-full" style={{ background: heroGlow }} />
                <div className="absolute -inset-x-6 -bottom-2 top-0 z-10 lg:-inset-x-12 lg:-top-4">
                  <Image
                    src={heroArtwork}
                    alt=""
                    fill
                    priority
                    className="object-contain object-center drop-shadow-[0_30px_42px_rgba(13,53,87,0.22)]"
                    sizes="(min-width: 1024px) 46vw, 92vw"
                  />
                </div>
              </div>
            </div>
            <div className="relative z-10 -mt-4 rounded-[14px] bg-white p-4 text-navy shadow-[0_18px_44px_rgba(13,53,87,0.12)] lg:ml-auto lg:mr-10 lg:-mt-20 lg:max-w-3xl">
              <div className="grid gap-2 sm:grid-cols-5">
                {[
                  { value: metrics.months, label: 'Months', Icon: CalendarDays },
                  { value: metrics.sessions, label: 'Sessions', Icon: ShieldCheck },
                  { value: metrics.hours, label: 'Hours', Icon: Timer },
                  { value: '1:5', label: 'Teacher Student Ratio', Icon: Ratio },
                  { value: 'Personalised', label: 'Support', Icon: Rocket }
                ].map(({ value, label, Icon }) => (
                  <div key={label} className="flex min-h-[76px] min-w-0 flex-col items-center justify-center rounded-[10px] bg-creamAlt/70 px-2 text-center">
                    <Icon size={20} className="mb-1 text-orange" aria-hidden />
                    <span className="max-w-full text-[clamp(1.15rem,1.45vw,1.5rem)] font-extrabold leading-none">{value}</span>
                    <span className="mt-1 text-[11px] font-bold leading-tight text-slate-600">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#FFEBD1_0%,#FFF4E4_58%,#FFF8EF_100%)] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[92rem]">
          <div className="mb-7 border-l-4 border-orange pl-5">
            <p className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">What you will explore</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-5">
            {course.focusAreas.map((area, index) => {
              const Icon = focusIcons[index % focusIcons.length];
              return (
                <article key={area} className="flex min-h-[210px] flex-col items-center justify-center rounded-[8px] border border-orange/20 bg-white p-7 text-center shadow-[0_14px_30px_rgba(13,53,87,0.07)]">
                  <Icon size={48} strokeWidth={1.8} className="mb-5 text-navy" aria-hidden />
                  <h3 className="text-lg font-extrabold leading-tight text-navy">{area}</h3>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-[92rem] gap-6 lg:grid-cols-[1.15fr_0.95fr]">
          <article className="rounded-[10px] border border-navy/10 bg-white p-8 shadow-[0_14px_34px_rgba(13,53,87,0.07)]">
            <div className="border-l-4 border-orange pl-4">
              <h2 className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">What You Will Learn</h2>
            </div>
            <div className="mt-8 divide-y divide-navy/10">
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

          <div className="grid gap-5">
            <article className="rounded-[10px] border border-navy/10 bg-white p-8 shadow-[0_14px_34px_rgba(13,53,87,0.07)]">
              <div className="border-l-4 border-orange pl-4">
                <h2 className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">Tools You Will Use</h2>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {course.toolsUsed.map((tool) => {
                  const logo = getToolLogo(tool);
                  return (
                    <div key={tool} className="grid min-h-[128px] place-items-center rounded-[8px] border border-navy/10 bg-white p-4 text-center shadow-[0_8px_18px_rgba(13,53,87,0.04)]">
                      {logo ? <Image src={logo} alt="" width={58} height={58} className="mb-3 h-14 w-14 object-contain" /> : <span className="mb-3 grid h-14 w-14 place-items-center rounded-full bg-orange/12 text-sm font-extrabold text-orange">{tool.slice(0, 2).toUpperCase()}</span>}
                      <span className="text-xs font-extrabold leading-tight text-navy">{tool}</span>
                    </div>
                  );
                })}
              </div>
            </article>

            <article className="rounded-[10px] bg-gradient-to-br from-[#FFF2D8] to-white p-6 shadow-[0_10px_24px_rgba(13,53,87,0.05)]">
              <h2 className="text-xl font-extrabold text-navy">Prerequisites</h2>
              <div className="mt-4 grid gap-3">
                {(prerequisites.length ? prerequisites : [course.prerequisites]).map((item) => (
                  <p key={item} className="flex gap-3 text-sm font-semibold leading-6 text-slate-700">
                    <CheckCircle2 size={17} className="mt-1 shrink-0 text-orange" aria-hidden />
                    {item}
                  </p>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[92rem] gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-[10px] border border-navy/10 bg-white p-6 shadow-[0_10px_24px_rgba(13,53,87,0.05)]">
            <h2 className="text-2xl font-extrabold text-navy">Example Projects</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {(course.exampleProjects.length ? course.exampleProjects : ['Project details coming soon']).slice(0, 6).map((project, index) => (
                <a key={project} href={project.startsWith('http') ? project : '#'} target={project.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="group overflow-hidden rounded-[8px] border border-navy/10 bg-white">
                  <div className="relative h-24 bg-creamAlt">
                    <Image src={projectImages[index % projectImages.length]} alt="" fill className="object-cover transition duration-300 group-hover:scale-105" sizes="(min-width: 1024px) 18vw, 45vw" />
                  </div>
                  <div className="flex min-h-[58px] items-center justify-between gap-2 p-3">
                    <span className="text-xs font-extrabold leading-tight text-navy">{shortProjectLabel(project, index)}</span>
                    <ArrowRight size={15} className="shrink-0 text-orange" aria-hidden />
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <a href="#request-syllabus" className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[8px] border border-orange px-5 text-sm font-extrabold text-orange transition hover:bg-orange hover:text-white">
                Download Full Syllabus <FileDown size={16} />
              </a>
              <a href="#request-syllabus" className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[8px] border border-navy/30 px-5 text-sm font-extrabold text-navy transition hover:bg-navy hover:text-white">
                Download One Pager <FileDown size={16} />
              </a>
            </div>
          </article>

          <article id="request-syllabus" className="rounded-[10px] bg-gradient-to-br from-white to-[#ECF7FF] p-6 shadow-[0_10px_24px_rgba(13,53,87,0.06)]">
            <h2 className="text-2xl font-extrabold text-navy">Request Full Syllabus</h2>
            <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">Fill in your details and we will send the full syllabus to you.</p>
            <div className="mt-5">
              <SyllabusForm courseSlug={course.slug} />
            </div>
            <p className="mt-4 text-xs font-bold text-slate-500">We respect your privacy. Your information is safe with us.</p>
          </article>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[92rem] gap-6 lg:grid-cols-[1.6fr_0.8fr]">
          <article className="rounded-[10px] border border-navy/10 bg-white p-6 shadow-[0_10px_24px_rgba(13,53,87,0.05)]">
            <h2 className="text-2xl font-extrabold text-navy">{currentMonthName()} Intake Now Open</h2>
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

          <article className="flex flex-col justify-center rounded-[10px] bg-gradient-to-br from-[#EEF7FF] to-white p-8 shadow-[0_10px_24px_rgba(13,53,87,0.05)]">
            <h3 className="text-xl font-extrabold text-navy">Limited Seats. Big Impact.</h3>
            <p className="mt-3 text-sm font-semibold leading-6 text-slate-700">Our small batch sizes ensure personalised attention and the best learning experience for every student.</p>
            {!course.comingSoon && (
              <a href={course.registerLink} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-fit min-h-[44px] items-center justify-center rounded-[8px] bg-navy px-6 text-sm font-extrabold text-white transition hover:bg-[#082a47]">
                Register Now
              </a>
            )}
          </article>
        </div>
      </section>

      <section className="px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[92rem]">
          <h2 className="mb-5 text-2xl font-extrabold text-navy">Other Recommended Courses</h2>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {recommended.map((item) => item ? <CourseCard key={item.slug} course={item} /> : null)}
          </div>
        </div>
      </section>
    </main>
  );
}

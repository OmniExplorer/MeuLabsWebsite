import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BookOpen, CheckCircle2, CircleDot, ClipboardCheck, FolderKanban, MapPin, Users } from 'lucide-react';
import { allCourses, courses, getCourse } from '@/data/courses';
import { intakes } from '@/data/intakes';
import { ButtonLink } from '@/components/ButtonLink';
import { CounselorCTA } from '@/components/CounselorCTA';
import { CourseCard } from '@/components/CourseCard';
import { RegistrationCard } from '@/components/RegistrationCard';
import { SectionHeader } from '@/components/SectionHeader';
import { SyllabusForm } from '@/components/SyllabusForm';
import { counselorMessage, whatsappHref } from '@/lib/whatsapp';
import { currentMonthName, daysToNextClosingDate } from '@/lib/registration';

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return allCourses.map((course) => ({ slug: course.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const course = getCourse(params.slug);
  if (!course) return {};
  return {
    title: `${course.title} | Meu Labs — Robotics, Coding & STEM for Kids in Sri Lanka`,
    description: course.subtitle,
    openGraph: { images: ['/og-default.jpg'] }
  };
}

export default function CoursePage({ params }: PageProps) {
  const course = getCourse(params.slug);
  if (!course) notFound();

  const courseIntakes = intakes.filter((batch) => batch.courseSlug === course.slug);
  const recommended = course.recommendedCourses.map(getCourse).filter(Boolean).slice(0, 3);
  const closingDays = daysToNextClosingDate();

  return (
    <main>
      <section className="bg-navy px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="rounded-full bg-orange px-4 py-2 text-sm font-extrabold">{course.pathwayStage}</span>
          <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">{course.title}</h1>
          <p className="mt-3 text-2xl font-bold text-orange">{course.subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {course.keywords.map((keyword) => <span key={keyword} className="rounded-full bg-white/10 px-3 py-1 text-sm font-bold">{keyword}</span>)}
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-extrabold">
            <span className="rounded-full bg-white px-4 py-2 text-navy">Age {course.ageRange}</span>
            <span className="rounded-full bg-white/10 px-4 py-2">{course.duration}</span>
            <span className="rounded-full bg-white/10 px-4 py-2">{course.format}</span>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {!course.comingSoon && <ButtonLink href={course.registerLink} external>Register Now</ButtonLink>}
            <ButtonLink href={whatsappHref(counselorMessage(course.title))} external variant="secondary">Talk to a Student Counselor</ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[28px] bg-white p-8 text-xl font-semibold leading-9 text-navy shadow-soft">{course.descriptor}</div>
      </section>

      <section className="bg-creamAlt px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title="Focus Areas" />
          <div className="grid gap-4 md:grid-cols-2">
            {course.focusAreas.map((area) => (
              <div key={area} className="flex items-center gap-4 rounded-card bg-white p-5 font-extrabold text-navy shadow-soft">
                <CircleDot className="text-orange" /> {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title="Learning Outcomes" />
          <div className="grid gap-4">
            {course.learningOutcomes.map((outcome, index) => (
              <div key={outcome} className="flex gap-4 rounded-card bg-white p-6 shadow-soft">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-orange font-extrabold text-white">{index + 1}</span>
                <p className="pt-1 text-lg font-bold leading-8 text-navy">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-creamAlt px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title="Course Structure" subtitle={course.courseStructure} />
          <div className="grid gap-5 md:grid-cols-4">
            {[
              ['Session style', BookOpen],
              ['Progress tracking', ClipboardCheck],
              ['Portfolio', FolderKanban],
              ['Group size', Users]
            ].map(([label, Icon]) => (
              <div key={label as string} className="rounded-card bg-white p-6 shadow-soft">
                <Icon className="mb-4 text-orange" />
                <h3 className="font-extrabold text-navy">{label as string}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">Guided project learning with instructor support and clear milestones.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader title="Tools Used" />
            <div className="flex flex-wrap gap-3">
              {course.toolsUsed.map((tool) => <span key={tool} className="rounded-full bg-white px-4 py-2 font-bold text-navy shadow-soft">{tool}</span>)}
            </div>
          </div>
          <div>
            <SectionHeader title="Prerequisites" />
            <p className="rounded-card bg-white p-6 text-lg font-semibold leading-8 text-slate-700 shadow-soft">{course.prerequisites}</p>
          </div>
        </div>
      </section>

      <section className="bg-creamAlt px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title="Example Projects" />
          <div className="grid gap-4 md:grid-cols-3">
            {(course.exampleProjects.length ? course.exampleProjects : ['Project details coming soon']).map((project) => (
              <div key={project} className="rounded-card bg-white p-6 shadow-soft">
                <CheckCircle2 className="mb-4 text-teal" />
                <h3 className="font-extrabold text-navy">{project}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap gap-3">
            {course.location.split('/').map((location) => (
              <span key={location} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-extrabold text-navy shadow-soft"><MapPin size={17} className="text-orange" />{location.trim()}</span>
            ))}
          </div>
          <div className="rounded-[28px] bg-white p-6 shadow-soft md:p-8">
            <SectionHeader title="Request Full Syllabus" subtitle="Share your details and our student counselors will follow up with the requested course information." />
            <SyllabusForm courseSlug={course.slug} />
          </div>
        </div>
      </section>

      <section className="bg-creamAlt px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title={`Upcoming Intakes - ${currentMonthName()}`} subtitle="Choose a batch and register for the intake that works best for your child." />
          <p className="mb-8 inline-block rounded-full bg-orange px-5 py-3 font-extrabold text-white">Registration closes in {closingDays} days</p>
          {course.comingSoon ? (
            <div className="rounded-card bg-white p-8 font-extrabold text-navy shadow-soft">Intake details coming soon.</div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {courseIntakes.map((batch) => <RegistrationCard key={batch.label} batch={batch} course={course} />)}
            </div>
          )}
        </div>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <CounselorCTA courseName={course.title} source={`/courses/${course.slug}`} />
        </div>
      </section>

      <section className="bg-creamAlt px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title="Other Recommended Courses" />
          <div className="grid gap-6 md:grid-cols-3">
            {recommended.map((item) => item ? <CourseCard key={item.slug} course={item} /> : null)}
          </div>
        </div>
      </section>
    </main>
  );
}

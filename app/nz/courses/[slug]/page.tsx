import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2, Clock, GraduationCap, MapPin, Users } from 'lucide-react';
import { ButtonLink } from '@/components/ButtonLink';
import { CourseCard } from '@/components/CourseCard';
import { SectionHeader } from '@/components/SectionHeader';
import { getNzCourse, getNzCourses, nzConfig } from '@/data/regions';

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return getNzCourses().map((course) => ({ slug: course.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const course = getNzCourse(params.slug);

  if (!course) {
    return { title: 'Course Not Found | Meu Labs' };
  }

  return {
    title: `${course.title} | Meu Labs`,
    description: course.descriptor,
    openGraph: { images: ['/og-default.jpg'] }
  };
}

export default function NzCourseDetailPage({ params }: PageProps) {
  const course = getNzCourse(params.slug);

  if (!course) notFound();

  const recommendedCourses = course.recommendedCourses
    .map((slug) => getNzCourse(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
    .slice(0, 3);

  return (
    <main className="bg-cream text-navy">
      <section className="bg-[radial-gradient(circle_at_20%_24%,rgba(255,122,0,0.22),transparent_30%),linear-gradient(120deg,#F8F1E2_0%,#FFF6EA_58%,#E7FBFF_100%)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[92rem] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-orange">Meu Labs</p>
            <h1 className="mt-4 text-4xl font-black leading-[1.04] sm:text-5xl lg:text-6xl">{course.title}</h1>
            <p className="mt-5 max-w-2xl text-base font-bold leading-8 text-slate-700">{course.descriptor}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={course.registerLink} external>
                {course.comingSoon ? 'Join Waitlist' : 'Register Interest'}
                <ArrowRight size={18} aria-hidden />
              </ButtonLink>
              <ButtonLink href="/nz/contact" variant="secondary">Talk to a Counselor</ButtonLink>
            </div>
          </div>
          <article className="grid gap-3 rounded-lg border border-orange/20 bg-white p-5 shadow-[0_16px_40px_rgba(13,53,87,0.08)] sm:grid-cols-2">
            <InfoItem icon={Users} label="Age" value={course.ageRange} />
            <InfoItem icon={Clock} label="Duration" value={course.duration} />
            <InfoItem icon={GraduationCap} label="Pathway" value={course.pathwayStage} />
            <InfoItem icon={MapPin} label="Location" value={course.location} />
            {course.schedule?.length ? <InfoItem icon={Clock} label="Schedule" value={course.schedule.join('\n')} /> : null}
          </article>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[92rem] gap-10 lg:grid-cols-[1fr_0.75fr]">
          <div>
            <SectionHeader
              eyebrow="Course Details"
              title="What students will learn"
              subtitle="This pathway follows the Meu Labs project-based model with focused delivery information."
            />
            <div className="grid gap-3">
              {course.learningOutcomes.map((outcome) => (
                <div key={outcome} className="flex gap-3 rounded-lg border border-orange/15 bg-white p-4 shadow-[0_10px_24px_rgba(13,53,87,0.06)]">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-orange" aria-hidden />
                  <p className="text-sm font-bold leading-6 text-slate-700">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="rounded-lg border border-navy/10 bg-white p-5 shadow-[0_12px_30px_rgba(13,53,87,0.08)]">
            <h2 className="text-xl font-black">Course Snapshot</h2>
            <dl className="mt-5 grid gap-4 text-sm">
              <SnapshotItem label="Format" value={course.format} />
              {course.schedule?.length ? <SnapshotItem label="Available Time Slots" value={course.schedule.join('\n')} /> : null}
              <SnapshotItem label="Prerequisites" value={course.prerequisites} />
              <SnapshotItem label="Tools" value={course.toolsUsed.join(', ')} />
              <SnapshotItem label="Contact" value={nzConfig.email} />
            </dl>
          </aside>
        </div>
      </section>

      {recommendedCourses.length > 0 && (
        <section className="bg-creamAlt px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[92rem]">
            <SectionHeader eyebrow="Next Steps" title="Related courses" />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {recommendedCourses.map((item) => (
                <CourseCard key={item.slug} course={item} basePath="/nz" />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

function InfoItem({ icon: Icon, label, value }: { icon: typeof Users; label: string; value: string }) {
  return (
    <div className="rounded-lg bg-creamAlt p-4">
      <Icon size={20} className="text-orange" aria-hidden />
      <p className="mt-3 text-xs font-black uppercase tracking-[0.12em] text-slate-500">{label}</p>
      <p className="mt-1 whitespace-pre-line text-sm font-black text-navy">{value}</p>
    </div>
  );
}

function SnapshotItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">{label}</dt>
      <dd className="mt-1 whitespace-pre-line font-bold leading-6 text-navy">{value}</dd>
    </div>
  );
}

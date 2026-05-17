import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { isCourseAvailableForBranch, withBasePath } from "@/lib/branch-config";
import { courseDetails } from "@/lib/site-data";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export function getCourseDetail(courseId) {
  if (!courseId || !courseDetails[courseId]) {
    return null;
  }

  return courseDetails[courseId];
}

export function CourseDetailPage({ courseId, basePath = "", branch = "sl" }) {
  const course = getCourseDetail(courseId);

  if (!course || !isCourseAvailableForBranch(branch, courseId)) {
    redirect(withBasePath(basePath, "/programmes"));
  }

  return (
    <>
      <SiteHeader pathname={withBasePath(basePath, "/programmes")} basePath={basePath} ctaHref="/programmes" ctaLabel="Back To Programmes" />
      <main>
        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-8 overflow-hidden rounded-[36px] border border-white/40 bg-[linear-gradient(160deg,_rgba(255,255,255,0.82),_rgba(255,255,255,0.42))] p-6 shadow-[0_28px_80px_rgba(13,53,87,0.12)] backdrop-blur-2xl lg:grid-cols-[1.05fr_0.95fr] lg:p-8">
            <div className="flex flex-col justify-center">
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-[rgba(255,122,0,0.14)] px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-[color:var(--color-meu-orange)]">
                  {course.pathway}
                </span>
                <span className="rounded-full border border-white/50 bg-white/65 px-4 py-2 text-sm font-bold text-slate-600">
                  {course.age}
                </span>
                <span className="rounded-full border border-white/50 bg-white/65 px-4 py-2 text-sm font-bold text-slate-600">
                  {course.duration}
                </span>
              </div>
              <h1 className="mt-6 font-display text-5xl font-bold tracking-[-0.06em] text-[color:var(--color-meu-navy)] sm:text-6xl">
                {course.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{course.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {course.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-[rgba(13,53,87,0.08)] px-3 py-2 text-sm font-semibold text-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={withBasePath(basePath, "/programmes")}
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,_#ff7a00,_#ff9d4a)] px-7 py-4 text-base font-extrabold text-white shadow-[0_20px_48px_rgba(255,122,0,0.28)] transition hover:-translate-y-0.5"
                >
                  Back To Programmes
                </Link>
                <Link
                  href={withBasePath(basePath, "/contact")}
                  className="glass-panel inline-flex items-center justify-center px-7 py-4 text-base font-bold text-[color:var(--color-meu-navy)] transition hover:-translate-y-0.5"
                >
                  Talk To A Counselor
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[30px] border border-white/50 bg-[linear-gradient(145deg,_#fff8ec_0%,_#fffdf9_56%,_#f9f0e0_100%)] min-h-[320px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(255,122,0,0.18),_transparent_28%),radial-gradient(circle_at_80%_10%,_rgba(44,172,149,0.16),_transparent_24%)]" />
              <div className="relative h-full min-h-[320px]">
                <Image src={course.image} alt={course.title} fill className="object-contain p-8 sm:p-10" sizes="(max-width: 1024px) 100vw, 40rem" />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="glass-chip">Course Detail</span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.05em] text-[color:var(--color-meu-navy)] sm:text-5xl">
              {course.heading}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{course.copy}</p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="glass-panel p-7">
              <h3 className="font-display text-3xl font-semibold tracking-[-0.04em] text-[color:var(--color-meu-navy)]">
                {course.panelOneTitle}
              </h3>
              <ul className="mt-5 grid gap-4 text-base leading-7 text-slate-600">
                {course.panelOne.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-[color:var(--color-meu-orange)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="glass-panel p-7">
              <h3 className="font-display text-3xl font-semibold tracking-[-0.04em] text-[color:var(--color-meu-navy)]">
                {course.panelTwoTitle}
              </h3>
              <ul className="mt-5 grid gap-4 text-base leading-7 text-slate-600">
                {course.panelTwo.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-[color:var(--color-meu-orange)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter basePath={basePath} />
    </>
  );
}

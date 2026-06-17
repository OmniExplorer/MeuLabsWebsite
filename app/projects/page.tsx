import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight, Newspaper, Play } from 'lucide-react';
import { AutoCarousel } from '@/components/AutoCarousel';
import { ButtonLink } from '@/components/ButtonLink';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { YouTubeThumbnail } from '@/components/YouTubeThumbnail';
import { featuredVideoProjects, projectNews, studentCreations, type VideoProject } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Student Projects | Meu Labs — Robotics, Coding & STEM for Kids in Sri Lanka',
  description: 'See what Meu Labs students build, create and achieve through project-based STEM learning.',
  openGraph: { images: ['/og-default.jpg'] }
};

const pillarboxedVideoIds = new Set(['1hEFNYY8peE']);

function thumbnailClass(videoId: string) {
  return pillarboxedVideoIds.has(videoId)
    ? 'scale-[3.25] object-cover transition duration-300 group-hover:scale-[3.35]'
    : 'scale-[1.18] object-cover transition duration-300 group-hover:scale-[1.24]';
}

function FeaturedProjectCard({ project, duplicate = false }: { project: VideoProject; duplicate?: boolean }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      aria-hidden={duplicate}
      tabIndex={duplicate ? -1 : undefined}
      className="group grid h-[520px] w-[min(90vw,700px)] shrink-0 overflow-hidden rounded-[18px] border border-navy/10 bg-white transition duration-200 hover:-translate-y-1 hover:shadow-pop md:h-[300px] md:w-[calc((100vw-5rem)/2)] md:grid-cols-[0.94fr_1.06fr] md:items-center xl:w-[46rem]"
    >
      <div className="relative m-3 h-[220px] overflow-hidden rounded-[14px] bg-navy md:m-4 md:h-[calc(100%-2rem)]">
        <YouTubeThumbnail videoId={project.videoId} className={thumbnailClass(project.videoId)} sizes="(min-width: 1280px) 320px, (min-width: 768px) 41vw, 90vw" />
        <span className="absolute inset-0 bg-gradient-to-t from-navy/32 via-transparent to-transparent" />
        <span className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-full bg-white text-orange shadow-soft transition group-hover:scale-105">
          <Play size={20} fill="currentColor" strokeWidth={0} aria-hidden />
        </span>
      </div>
      <div className="flex min-w-0 flex-col px-5 pb-5 pt-0 md:px-4 md:py-4">
        {project.courseLabel && (
          <p className="w-fit rounded-full bg-[#FFF4E6] px-2.5 py-1.5 text-xs font-extrabold uppercase leading-none">
            <span className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-transparent">{project.courseLabel}</span>
          </p>
        )}
        <h3 className="mt-3 break-words text-xl font-extrabold leading-tight text-navy transition group-hover:text-orange md:text-2xl">{project.title}</h3>
        <p className="mt-3 line-clamp-5 break-words text-sm font-semibold leading-6 text-slate-700 md:line-clamp-6">{project.description}</p>
        <span className="mt-auto pt-3 text-base font-extrabold text-orange transition group-hover:text-[#FF4F1F]">Watch Video &gt;</span>
      </div>
    </a>
  );
}

function CreationCard({ project, duplicate = false }: { project: VideoProject; duplicate?: boolean }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      aria-hidden={duplicate}
      tabIndex={duplicate ? -1 : undefined}
      className="group grid h-[330px] w-[min(72vw,300px)] shrink-0 grid-rows-[150px_1fr] overflow-hidden rounded-[18px] border border-navy/10 bg-white transition duration-200 hover:-translate-y-1 hover:shadow-pop sm:w-[310px]"
    >
      <div className="relative overflow-hidden bg-navy">
        <YouTubeThumbnail videoId={project.videoId} className={thumbnailClass(project.videoId)} sizes="310px" />
        <span className="absolute bottom-4 left-4 grid h-10 w-10 place-items-center rounded-full bg-white text-orange shadow-soft">
          <Play size={17} fill="currentColor" aria-hidden />
        </span>
      </div>
      <div className="flex min-h-0 min-w-0 flex-col p-4">
        <h3 className="line-clamp-2 break-words text-lg font-extrabold leading-tight text-navy">{project.title}</h3>
        <p className="mt-3 line-clamp-3 break-words text-sm font-semibold leading-6 text-slate-600">{project.description}</p>
        <span className="mt-auto pt-3 text-sm font-extrabold text-orange">View project &gt;</span>
      </div>
    </a>
  );
}

export default function ProjectsPage() {
  const firstGalleryRow = studentCreations.filter((_, index) => index % 2 === 0);
  const secondGalleryRow = studentCreations.filter((_, index) => index % 2 === 1);

  return (
    <main id="main-content">
      <PageHero
        eyebrow="Young innovators are building the future."
        title="See what our students build, create, and achieve at Meu Labs"
        imageSrc="/assets/images/project-prototype.jpg"
      >
        <ButtonLink href="/courses">Explore Courses</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">Help Me Choose</ButtonLink>
      </PageHero>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="projects-news-title">
        <div className="mx-auto max-w-[92rem]">
          <Reveal>
            <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="w-full">
                <div className="mb-6 border-l-4 border-orange pl-5">
                  <p className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">In The News.</p>
                </div>
                <h2 id="projects-news-title" className="text-[2.85rem] font-normal leading-[1.05] text-navy md:text-[4rem]">Big ideas making waves beyond the classroom.</h2>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {projectNews.map((item, index) => (
              <Reveal key={item.link} animation="pop" delay={index * 60} className="h-full">
                <a href={item.link} target="_blank" rel="noreferrer" className="group block h-full min-w-0 rounded-[14px] transition duration-200 hover:-translate-y-1">
                  <div className="relative aspect-[1.45/1] overflow-hidden rounded-[14px] bg-cream shadow-[0_12px_30px_rgba(13,53,87,0.10)]">
                    <Image src={item.image} alt="" fill className={`${item.imageClassName ?? 'object-cover'} transition duration-300 group-hover:scale-105`} sizes="(min-width: 1024px) 23vw, (min-width: 640px) 46vw, 92vw" />
                    <span className="absolute inset-0 bg-gradient-to-t from-navy/28 via-transparent to-transparent" />
                    <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/95 text-orange shadow-soft">
                      <ArrowUpRight size={17} aria-hidden />
                    </span>
                  </div>
                  <div className="mt-4">
                    <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-extrabold leading-5 text-slate-500">
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#FFF4E6] px-2.5 py-1.5 leading-none">
                        <Newspaper size={12} aria-hidden />
                        <span className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-transparent">{item.label}</span>
                      </span>
                      <span aria-hidden="true">•</span>
                      <span>{item.timeAgo}</span>
                    </div>
                    <h3 className="mt-2 line-clamp-2 break-words text-lg font-extrabold leading-snug text-navy">{item.title}</h3>
                    <p className="mt-2 line-clamp-2 break-words text-sm font-semibold leading-6 text-slate-600">{item.description}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-cream px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="featured-projects-title">
        <div className="mx-auto max-w-[92rem]">
          <Reveal>
            <SectionHeader
              eyebrow="Featured Projects"
              title="Standout projects from the Meu Labs community"
              titleClassName="md:whitespace-nowrap md:text-[clamp(2rem,3.45vw,3.7rem)]"
            />
          </Reveal>
        </div>
        <Reveal animation="pop" delay={120}>
          <AutoCarousel ariaLabel="Featured student project videos" className="project-carousel-shell mx-auto max-w-[92rem] py-3" trackClassName="gap-5 pr-5 sm:gap-6 sm:pr-6">
            {featuredVideoProjects.map((project) => (
              <FeaturedProjectCard key={project.title} project={project} />
            ))}
          </AutoCarousel>
        </Reveal>
      </section>

      <section className="overflow-hidden bg-cream px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="student-creations-title">
        <div className="mx-auto max-w-[92rem]">
          <Reveal>
            <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeader eyebrow="Students' Creations" title="More projects built by Meu Labs learners" subtitle="A gallery of games, animations, robotics builds, design challenges, coding projects, and student-made stories." />
            </div>
          </Reveal>
        </div>
        <div className="grid gap-5">
          {[firstGalleryRow, secondGalleryRow].map((row, rowIndex) => (
            <Reveal key={rowIndex} animation="pop" delay={rowIndex * 100}>
              <AutoCarousel
                ariaLabel={rowIndex === 0 ? 'Student creations gallery row one' : 'Student creations gallery row two'}
                className="project-carousel-shell mx-auto max-w-[92rem] py-2"
                trackClassName="gap-5 pr-5 sm:gap-6 sm:pr-6"
                reverse={rowIndex !== 0}
              >
                {row.map((project) => (
                  <CreationCard key={project.title} project={project} />
                ))}
              </AutoCarousel>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}

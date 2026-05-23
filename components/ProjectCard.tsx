'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import { trackEvent } from '@/lib/analytics';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-card bg-white shadow-soft transition duration-200 hover:-translate-y-1 hover:shadow-pop">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={project.image} alt="" fill className="object-cover transition duration-300 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" />
      </div>
      <div className="p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <span key={skill} className="rounded-full bg-cream px-3 py-1 text-xs font-bold text-navy">{skill}</span>
          ))}
        </div>
        <h3 className="text-xl font-extrabold text-navy">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-700">{project.description}</p>
        <Link href={project.link} onClick={() => trackEvent('project_card_click', { project: project.title })} className="mt-5 inline-flex items-center gap-2 font-extrabold text-orange">
          View related course <ArrowRight size={17} />
        </Link>
      </div>
    </article>
  );
}

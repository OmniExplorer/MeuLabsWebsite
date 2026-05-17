"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useDeferredValue, useState } from "react";
import { galleryFilters, galleryItems } from "@/lib/site-data";
import { withBasePath } from "@/lib/branch-config";
import { SectionHeading, SiteFooter, SiteHeader } from "@/components/site-chrome";

function splitRows(items) {
  const rows = [[], []];
  items.forEach((item, index) => {
    rows[index % 2].push(item);
  });

  if (!rows[1].length) {
    rows[1] = rows[0];
  }

  return rows;
}

function GalleryCard({ item }) {
  return (
    <article className="glass-panel w-[280px] shrink-0 overflow-hidden sm:w-[320px] xl:w-[360px]">
      <div className="relative h-[240px] bg-[linear-gradient(145deg,_#fff8ec_0%,_#fffdf9_56%,_#f9f0e0_100%)]">
        <Image src={item.image} alt={item.alt} fill className="object-cover" sizes="(max-width: 640px) 280px, (max-width: 1280px) 320px, 360px" />
      </div>
      <div className="grid gap-3 p-5">
        <span className="inline-flex w-fit rounded-full bg-[rgba(255,122,0,0.12)] px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[color:var(--color-meu-orange)]">
          {item.tag}
        </span>
        <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-[color:var(--color-meu-navy)]">{item.title}</h3>
        <p className="text-sm leading-7 text-slate-600">{item.summary}</p>
      </div>
    </article>
  );
}

export default function StudentCreationsPage({ basePath = "" }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const deferredFilter = useDeferredValue(activeFilter);
  const visibleItems = galleryItems.filter((item) => deferredFilter === "all" || item.categories.includes(deferredFilter));
  const [rowOne, rowTwo] = splitRows(visibleItems);

  return (
    <>
      <SiteHeader pathname={withBasePath(basePath, "/student-creations")} basePath={basePath} />
      <main>
        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Student Creations"
            title="See the kind of work students build,"
            accent="design, and present."
            copy="The gallery now behaves like a moving proof wall: two continuous rows of projects that create a stronger sense of volume, variety, and real student output."
          />
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {galleryFilters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                className={`rounded-full border px-4 py-2.5 text-sm font-bold transition ${
                  activeFilter === filter.value
                    ? "border-transparent bg-[linear-gradient(135deg,_#ff7a00,_#ff9d4a)] text-white shadow-[0_14px_28px_rgba(255,122,0,0.22)]"
                    : "border-white/50 bg-white/60 text-slate-600 hover:bg-white/85 hover:text-[color:var(--color-meu-navy)]"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <span className="glass-chip">Gallery</span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.05em] text-[color:var(--color-meu-navy)] sm:text-5xl">
              Projects that make the learning visible.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Use the filters above to narrow the wall by discipline. The gallery keeps moving continuously so the page always feels active and full.
            </p>
          </div>

          {visibleItems.length ? (
            <div className="grid gap-5">
              {[rowOne, rowTwo].map((row, rowIndex) => (
                <div key={`row-${rowIndex}`} className="relative overflow-hidden py-2">
                  <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-[linear-gradient(90deg,_rgba(255,248,239,1),_rgba(255,248,239,0))] sm:w-20" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-[linear-gradient(270deg,_rgba(255,248,239,1),_rgba(255,248,239,0))] sm:w-20" />
                  <motion.div
                    key={`${deferredFilter}-${rowIndex}`}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className={`marquee-track flex w-max gap-4 sm:gap-5 ${rowIndex === 1 ? "marquee-track-reverse" : ""}`}
                  >
                    {[...row, ...row].map((item, itemIndex) => (
                      <GalleryCard key={`${item.title}-${itemIndex}`} item={item} />
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          ) : (
            <div className="glass-panel p-8 text-base font-semibold text-slate-600">
              No projects match that filter yet. Switch back to another category to see the wider showcase wall.
            </div>
          )}
        </section>
      </main>
      <SiteFooter basePath={basePath} />
    </>
  );
}

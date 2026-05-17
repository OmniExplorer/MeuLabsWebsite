"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { pathwayFamilies, stats } from "@/lib/site-data";
import { withBasePath } from "@/lib/branch-config";
import { SectionHeading, SiteFooter, SiteHeader } from "@/components/site-chrome";

const riseIn = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
};

export default function HomePage({
  basePath = "",
  heroChip = "Robotics, Coding & STEM for Sri Lanka",
  heroCopy = "Meu Labs now opens with a cleaner page structure: a focused homepage, a dedicated programmes explorer, a separate student creations gallery, and standalone about and contact pages for parents who want clearer navigation.",
  journeyCopy = "A structured progression from curious beginner to university-ready engineer.",
  statsData = stats,
  pathwayFamiliesData = pathwayFamilies
}) {
  const pathwayGridClass =
    pathwayFamiliesData.length >= 4
      ? "md:grid-cols-2 xl:grid-cols-4"
      : pathwayFamiliesData.length === 3
        ? "md:grid-cols-2 xl:grid-cols-3"
        : pathwayFamiliesData.length === 2
          ? "md:grid-cols-2"
          : "max-w-xl";
  const isNzBranch = basePath === "/nz";

  return (
    <>
      <SiteHeader pathname={withBasePath(basePath, "/")} basePath={basePath} />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 -z-10 h-[48rem] bg-[radial-gradient(circle_at_12%_16%,_rgba(255,122,0,0.26),_transparent_24%),radial-gradient(circle_at_82%_12%,_rgba(44,172,149,0.18),_transparent_22%),radial-gradient(circle_at_65%_42%,_rgba(77,141,246,0.14),_transparent_24%)]" />
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.65, ease: "easeOut" }}
              variants={riseIn}
              className="flex flex-col justify-center"
            >
              <span className="glass-chip w-fit">{heroChip}</span>
              <h1 className="mt-6 max-w-3xl font-display text-5xl font-bold tracking-[-0.07em] text-[color:var(--color-meu-navy)] sm:text-6xl lg:text-7xl">
                Build the future through{" "}
                <span className="text-[color:var(--color-meu-orange)]">robotics, coding, design</span>{" "}
                and hands-on STEM.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                {heroCopy}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={withBasePath(basePath, "/programmes")}
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,_#ff7a00,_#ff9d4a)] px-7 py-4 text-base font-extrabold text-white shadow-[0_20px_48px_rgba(255,122,0,0.28)] transition hover:-translate-y-0.5"
                >
                  Explore Programs
                </Link>
                <Link
                  href={withBasePath(basePath, "/student-creations")}
                  className="glass-panel inline-flex items-center justify-center px-7 py-4 text-base font-bold text-[color:var(--color-meu-navy)] transition hover:-translate-y-0.5"
                >
                  View Student Creations
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 36, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
              className="relative lg:pl-8"
            >
              <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-orange-300/30 blur-3xl" />
              <div className="absolute -right-6 bottom-8 h-44 w-44 rounded-full bg-teal-300/30 blur-3xl" />
              <div className="glass-panel relative overflow-hidden p-5 sm:p-7">
                <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
                  <figure className="overflow-hidden rounded-[24px] border border-white/50 bg-white/60">
                    <div className="relative aspect-[4/5]">
                      <Image src="/2023-03-25.png" alt="Live robotics mentoring session" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 28rem" priority />
                    </div>
                    <figcaption className="space-y-2 p-5">
                      <span className="text-xs font-black uppercase tracking-[0.28em] text-[color:var(--color-meu-orange)]">Live Sessions</span>
                      <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-[color:var(--color-meu-navy)]">
                        Students build with mentors, not just screens.
                      </p>
                    </figcaption>
                  </figure>
                  <div className="flex flex-col gap-5">
                    <div className="rounded-[24px] border border-white/50 bg-[linear-gradient(160deg,_rgba(255,255,255,0.72),_rgba(255,255,255,0.28))] p-5 backdrop-blur-xl">
                      <span className="text-xs font-black uppercase tracking-[0.28em] text-[color:var(--color-meu-navy)]">Inside Meu Labs</span>
                      <p className="mt-4 text-lg font-semibold text-[color:var(--color-meu-navy)]">
                        Robotics, coding, and STEM learning in one guided space.
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {["Robotics", "Coding", "STEM"].map((tag) => (
                          <span key={tag} className="rounded-full bg-[rgba(13,53,87,0.08)] px-3 py-1.5 text-sm font-semibold text-slate-700">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="overflow-hidden rounded-[24px] border border-white/50 bg-white/60">
                      <div className="relative aspect-[4/3]">
                        <Image src="/Meu-labs-image.jpeg" alt="Students learning in the Meu Labs environment" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 20rem" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {statsData.map((stat, index) => (
              <motion.article
                key={stat.label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="glass-panel p-6"
              >
                <div className="font-display text-4xl font-bold tracking-[-0.05em] text-[color:var(--color-meu-orange)]">{stat.value}</div>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">{stat.label}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Learning Journey"
            title="Your Learning"
            accent="Pathway"
            copy={journeyCopy}
            centered
          />
          <div className={`mt-12 grid gap-6 ${pathwayGridClass}`}>
            {pathwayFamiliesData.map((family, index) => (
              <motion.article
                key={family.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="glass-panel relative flex h-full overflow-hidden"
              >
                <div className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-r sm:h-36 ${family.accent}`} />
                <div className="relative flex h-full w-full flex-col">
                  <div className="px-5 pb-1 pt-5 sm:px-6 sm:pt-6">
                    <div className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">Learning Pathway</div>
                    <h3 className="mt-2 font-display text-3xl font-semibold tracking-[-0.05em] text-[color:var(--color-meu-navy)]">
                      {family.label}
                    </h3>
                  </div>
                  <div
                    className={
                      family.id === "foundations"
                        ? isNzBranch
                          ? "pb-3 pl-4 pr-0 -mr-2 sm:pl-5 sm:-mr-3"
                          : "pb-3 pl-3 pr-0 sm:pl-4 sm:pr-0"
                        : isNzBranch
                          ? "pb-3 pl-7 pr-0 -mr-6 sm:pl-8 sm:-mr-7"
                          : "pb-3 pl-5 pr-0 -mr-3 sm:pl-6 sm:-mr-4"
                    }
                  >
                    <div className="grid gap-3">
                      {family.items.map((item) => (
                        <Link
                          key={item.title}
                          href={withBasePath(basePath, item.href)}
                          className="group flex items-start gap-3 rounded-[22px] border border-white/60 bg-white/78 p-3 shadow-[0_16px_35px_rgba(13,53,87,0.08)] transition hover:-translate-y-0.5 hover:bg-white/90 sm:gap-4 sm:p-4"
                        >
                          <div className="relative size-16 shrink-0 overflow-hidden rounded-[18px] bg-[rgba(13,53,87,0.06)] sm:size-[4.75rem]">
                            <Image src={item.image} alt={item.title} fill className="object-cover p-2" sizes="(max-width: 640px) 4rem, 4.75rem" />
                          </div>
                          <div className="flex min-h-16 min-w-0 flex-1 items-center sm:min-h-[4.75rem]">
                            <div className="font-display text-lg font-semibold leading-tight tracking-[-0.04em] text-[color:var(--color-meu-navy)] sm:text-[1.75rem]">
                              {item.title}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 px-5 text-sm leading-6 text-slate-600 sm:px-6 sm:text-[0.95rem]">{family.blurb}</p>
                  {family.moreLabel ? (
                    <div className="ml-5 mt-4 inline-flex w-fit rounded-full bg-[rgba(13,53,87,0.08)] px-3 py-1.5 text-sm font-bold text-slate-700 sm:ml-6">
                      {family.moreLabel}
                    </div>
                  ) : null}
                  <Link
                    href={withBasePath(basePath, { pathname: "/programmes", query: family.query })}
                    className="mt-auto inline-flex items-center gap-2 px-5 pb-5 pt-6 font-display text-[1.45rem] font-semibold tracking-[-0.04em] text-[color:var(--color-meu-navy)] hover:text-[color:var(--color-meu-orange)] sm:px-6 sm:pb-6 sm:text-[1.7rem]"
                  >
                    Click Here To Preview
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-[36px] border border-[rgba(13,53,87,0.1)] bg-[linear-gradient(135deg,_#0d3557,_#145987)] p-8 text-white shadow-[0_30px_80px_rgba(13,53,87,0.22)] sm:p-12"
          >
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-orange-200">
                  Next Step
                </span>
                <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
                  Need help choosing the right programme for your child?
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
                  Move straight into the programmes explorer, browse student project outcomes, or contact the Meu Labs team for guidance on age fit, interests, and the best next course.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link href={withBasePath(basePath, "/contact")} className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-extrabold text-[color:var(--color-meu-navy)] transition hover:-translate-y-0.5">
                    Talk To A Student Counselor
                  </Link>
                  <Link href={withBasePath(basePath, "/student-creations")} className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-xl transition hover:-translate-y-0.5">
                    See Student Creations
                  </Link>
                </div>
              </div>
              <div className="grid gap-4">
                {[
                  ["Email", "hello@meulabs.org"],
                  ["Best Place To Start", "The Programmes page lets parents explore by pathway or by interest before opening each course."],
                  ["What To Review Next", "Open About for the Meu Labs model, Student Creations for project proof, or Contact for direct counselling."]
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-[24px] border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                    <div className="text-sm font-black uppercase tracking-[0.16em] text-orange-200">{title}</div>
                    <p className="mt-2 text-base leading-7 text-slate-100">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <SiteFooter basePath={basePath} />
    </>
  );
}

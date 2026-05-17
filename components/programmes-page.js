"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { startTransition, useDeferredValue } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ageFilters, interestFilters, programmeModes, programmes } from "@/lib/site-data";
import { withBasePath } from "@/lib/branch-config";
import { SectionHeading, SiteFooter, SiteHeader } from "@/components/site-chrome";

function normalizeState(searchParams) {
  const mode = searchParams.get("mode") === "interest" ? "interest" : "age";
  const age = searchParams.get("pathway") || "all";
  const interest = searchParams.get("interest") || "all";

  return { mode, age, interest };
}

const familyAccent = {
  foundations: "from-amber-300/70 to-orange-200/0",
  "learning-paths": "from-sky-300/70 to-cyan-200/0",
  specializations: "from-fuchsia-300/70 to-violet-200/0",
  launchpad: "from-emerald-300/70 to-teal-200/0"
};

export default function ProgrammesPage({
  basePath = "",
  programmesData = programmes,
  ageFiltersData = ageFilters,
  interestFiltersData = interestFilters,
  explorerCopy = "Structured robotics, coding, design, AI, and engineering programmes for different stages of the Meu Labs journey. Use the controls below to explore by age pathway or by interest."
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const filters = normalizeState(searchParams);

  function updateFilters(next) {
    startTransition(() => {
      const params = new URLSearchParams();

      if (next.mode === "interest") {
        params.set("mode", "interest");
        if (next.interest !== "all") {
          params.set("interest", next.interest);
        }
      } else if (next.age !== "all") {
        params.set("mode", "age");
        params.set("pathway", next.age);
      }

      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    });
  }

  const deferredFilters = useDeferredValue(filters);

  const visibleProgrammes = programmesData.filter((programme) => {
    if (deferredFilters.mode === "interest") {
      return deferredFilters.interest === "all" || programme.interests.includes(deferredFilters.interest);
    }

    return deferredFilters.age === "all" || programme.family === deferredFilters.age;
  });

  const activeChips = deferredFilters.mode === "interest" ? interestFiltersData : ageFiltersData;

  return (
    <>
      <SiteHeader pathname={withBasePath(basePath, "/programmes")} basePath={basePath} />
      <main>
        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Program Explorer"
            title="Our"
            accent="Programmes"
            copy={explorerCopy}
          />
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
          <div className="glass-panel p-4 sm:p-6">
            <div className="flex flex-wrap gap-3">
              {programmeModes.map((mode) => (
                <button
                  key={mode.id}
                  type="button"
                    onClick={() =>
                      updateFilters({
                        mode: mode.id,
                      age: "all",
                      interest: "all"
                    })
                  }
                  className={`rounded-full px-5 py-3 text-sm font-bold transition ${
                    filters.mode === mode.id
                      ? "bg-[color:var(--color-meu-navy)] text-white"
                      : "bg-white/55 text-slate-600 hover:bg-white/85 hover:text-[color:var(--color-meu-navy)]"
                  }`}
                >
                  {mode.label}
                </button>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {activeChips.map((chip) => {
                const selected =
                  deferredFilters.mode === "interest"
                    ? deferredFilters.interest === chip.value
                    : deferredFilters.age === chip.value;

                return (
                  <button
                    key={chip.value}
                    type="button"
                    onClick={() =>
                      updateFilters({
                        ...filters,
                        age: filters.mode === "age" ? chip.value : filters.age,
                        interest: filters.mode === "interest" ? chip.value : filters.interest
                      })
                    }
                    className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                      selected
                        ? "border-transparent bg-[color:var(--color-meu-orange)] text-white shadow-[0_16px_30px_rgba(255,122,0,0.22)]"
                        : "border-white/50 bg-white/45 text-slate-600 hover:bg-white/85 hover:text-[color:var(--color-meu-navy)]"
                    }`}
                  >
                    {chip.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:pb-20">
          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {visibleProgrammes.map((programme) => (
                <motion.div
                  key={programme.id}
                  layout
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12, scale: 0.98 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <Link
                    href={withBasePath(basePath, programme.href)}
                    className="glass-panel group flex h-full flex-col overflow-hidden p-5 transition hover:-translate-y-1"
                  >
                    <div className="relative overflow-hidden rounded-[24px] border border-white/50 bg-[rgba(255,255,255,0.5)] p-4">
                      <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-r ${familyAccent[programme.family]}`} />
                      <div className="relative flex items-start justify-between gap-3">
                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-full bg-[rgba(13,53,87,0.08)] px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-[color:var(--color-meu-navy)]">
                            {programme.familyLabel}
                          </span>
                          <span className="rounded-full border border-white/50 bg-white/55 px-3 py-1.5 text-xs font-bold text-slate-600">
                            {programme.age}
                          </span>
                        </div>
                        <div className="relative size-16 overflow-hidden rounded-[18px] bg-white/65">
                          <Image src={programme.image} alt={programme.title} fill className="object-contain p-2" sizes="4rem" />
                        </div>
                      </div>
                      <h3 className="relative mt-6 font-display text-3xl font-semibold tracking-[-0.05em] text-[color:var(--color-meu-navy)]">
                        {programme.title}
                      </h3>
                      <p className="relative mt-3 text-base leading-7 text-slate-600">{programme.summary}</p>
                    </div>
                    <div className="mt-5 flex items-center justify-between text-sm font-semibold text-slate-500">
                      <span>{programme.age}</span>
                      <span>{programme.duration}</span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {programme.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-[rgba(13,53,87,0.08)] px-3 py-1.5 text-sm font-semibold text-slate-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-[color:var(--color-meu-orange)]">
                      Open programme
                      <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>
      </main>
      <SiteFooter basePath={basePath} />
    </>
  );
}

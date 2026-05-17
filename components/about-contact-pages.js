import Link from "next/link";
import { withBasePath } from "@/lib/branch-config";
import { SectionHeading, SiteFooter, SiteHeader } from "@/components/site-chrome";

export function AboutPage({
  basePath = "",
  aboutCopy = "Meu Labs combines robotics, coding, AI, electronics, design, storytelling, and engineering into a project-based learning ecosystem. The goal is not just to teach isolated lessons. It is to help students build, test, present, and grow through real work."
}) {
  return (
    <>
      <SiteHeader pathname={withBasePath(basePath, "/about")} basePath={basePath} />
      <main>
        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="About Meu Labs"
            title="A cleaner structure, but still unmistakably"
            accent="Meu Labs."
            copy={aboutCopy}
          />
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href={withBasePath(basePath, "/programmes")} className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,_#ff7a00,_#ff9d4a)] px-7 py-4 text-base font-extrabold text-white shadow-[0_20px_48px_rgba(255,122,0,0.28)] transition hover:-translate-y-0.5">
              Explore Programs
            </Link>
            <Link href={withBasePath(basePath, "/student-creations")} className="glass-panel inline-flex items-center justify-center px-7 py-4 text-base font-bold text-[color:var(--color-meu-navy)] transition hover:-translate-y-0.5">
              See Student Creations
            </Link>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="What Matters"
              title="The structure changed so the story is easier for parents to understand."
              copy="The separate pages now let visitors go directly to programmes, outcomes, and contact information instead of digging through one long page."
            />
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["Project-Based By Default", "Students do not just consume lessons. They design, code, simulate, prototype, edit, build, and present work that can actually be shown."],
              ["Built Around Progression", "Foundations, learning paths, specializations, and launch-level readiness each have a clearer role inside the ecosystem."],
              ["Better For Parents", "The site now separates the questions parents actually ask: what the programs are, what students create, how Meu Labs works, and who to contact next."]
            ].map(([title, copy]) => (
              <article key={title} className="glass-panel p-6">
                <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-[color:var(--color-meu-navy)]">{title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-5 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="max-w-3xl lg:col-span-2">
            <SectionHeading
              eyebrow="How It Works"
              title="Meu Labs blends breadth, depth, and visible output."
            />
          </div>
          {[
            ["Learning Model", [
              "Students start with broad exposure to multiple disciplines.",
              "They move into guided projects with clearer skill-building.",
              "Later stages push deeper specialization and stronger technical ownership."
            ]],
            ["Why Families Choose It", [
              "Clearer progression across ages and interests.",
              "More visible student output and portfolio-ready work.",
              "Practical exposure to robotics, coding, design, media, and systems thinking."
            ]]
          ].map(([title, items]) => (
            <article key={title} className="glass-panel p-7">
              <h3 className="font-display text-3xl font-semibold tracking-[-0.04em] text-[color:var(--color-meu-navy)]">{title}</h3>
              <ul className="mt-5 grid gap-4 text-base leading-7 text-slate-600">
                {items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-[color:var(--color-meu-orange)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[36px] border border-[rgba(13,53,87,0.1)] bg-[linear-gradient(135deg,_#0d3557,_#145987)] p-8 text-white shadow-[0_30px_80px_rgba(13,53,87,0.22)] sm:p-12">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-orange-200">
              Next Step
            </span>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
              Use the separate pages to explore the ecosystem without friction.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
              Start with Programmes if you want course structure, Student Creations if you want proof of output, or Contact if you want direct counselling support for the right age band and interest area.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href={withBasePath(basePath, "/programmes")} className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-extrabold text-[color:var(--color-meu-navy)] transition hover:-translate-y-0.5">
                Open Programs
              </Link>
              <Link href={withBasePath(basePath, "/contact")} className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-xl transition hover:-translate-y-0.5">
                Contact Meu Labs
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter basePath={basePath} />
    </>
  );
}

export function ContactPage({ basePath = "" }) {
  return (
    <>
      <SiteHeader pathname={withBasePath(basePath, "/contact")} basePath={basePath} />
      <main>
        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Contact Meu Labs"
            title="Talk to the team about the right programme,"
            accent="age fit, and next step."
            copy="This page now acts as the dedicated contact destination instead of relying on a small homepage block. Use it for parent counselling, student fit questions, or pathway guidance."
          />
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="mailto:hello@meulabs.org" className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,_#ff7a00,_#ff9d4a)] px-7 py-4 text-base font-extrabold text-white shadow-[0_20px_48px_rgba(255,122,0,0.28)] transition hover:-translate-y-0.5">
              Email Meu Labs
            </a>
            <a href="tel:+94769623500" className="glass-panel inline-flex items-center justify-center px-7 py-4 text-base font-bold text-[color:var(--color-meu-navy)] transition hover:-translate-y-0.5">
              Call LK +94 76 962 3500
            </a>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-5 px-4 py-6 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <article className="glass-panel p-7">
            <h2 className="font-display text-4xl font-bold tracking-[-0.05em] text-[color:var(--color-meu-navy)]">
              What to contact us about
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The contact page is the right place for families who want help choosing between foundations, learning paths, specializations, and advanced options.
            </p>
            <ul className="mt-5 grid gap-4 text-base leading-7 text-slate-600">
              {[
                "Programme guidance by age and interest.",
                "Questions about the Project Superhero journey and other courses.",
                "Support deciding the best starting point for a student.",
                "Requests for meetings, calls, or parent counselling."
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-[color:var(--color-meu-orange)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <div className="grid gap-5">
            {[
              ["Email", "hello@meulabs.org", "Use email for programme questions, requests for follow-up, and direct parent inquiries."],
              ["Phone", "+94 76 962 3500", "Use the direct line for faster guidance when a parent wants to discuss programme fit."],
              ["Best Preparation", "Share age and interest area", "When contacting Meu Labs, the most useful starting information is the student age band and the domains they are most curious about."]
            ].map(([label, title, copy]) => (
              <article key={label} className="glass-panel p-6">
                <strong className="text-sm font-black uppercase tracking-[0.16em] text-[color:var(--color-meu-orange)]">{label}</strong>
                <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-[color:var(--color-meu-navy)]">{title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{copy}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter basePath={basePath} />
    </>
  );
}

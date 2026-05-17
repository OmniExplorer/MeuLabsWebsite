import Link from "next/link";
import { withBasePath } from "@/lib/branch-config";
import { SectionHeading, SiteFooter, SiteHeader } from "@/components/site-chrome";

export function AboutPage({
  basePath = "",
  aboutCopy = "Meu Labs brings together robotics, coding, AI, electronics, design, storytelling, and engineering through project-based learning. Students do not just study concepts in isolation. They build, test, present, and improve real work so their skills grow through doing."
}) {
  return (
    <>
      <SiteHeader pathname={withBasePath(basePath, "/about")} basePath={basePath} />
      <main>
        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="About Meu Labs"
            title="Project-based STEM learning that grows real"
            accent="capability."
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
              eyebrow="Why Meu Labs"
              title="Students learn best when they build, test, and explain what they create."
              copy="Meu Labs is designed to move students beyond passive lessons. The experience is hands-on, visible, and progressive, so families can clearly see how confidence and technical depth grow over time."
            />
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["Project-Based By Default", "Students design, code, simulate, prototype, edit, build, and present work that can actually be seen, tested, and explained."],
              ["Built Around Progression", "The learning journey moves from foundations into pathways and deeper specialization so students can grow with clearer direction."],
              ["Visible Growth For Families", "Parents can see stronger confidence, clearer thinking, and more polished outputs instead of only hearing that lessons were completed."]
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
              eyebrow="How Students Grow"
              title="Learning starts with curiosity and moves toward stronger technical ownership."
            />
          </div>
          {[
            ["Learning Model", [
              "Students begin with broad exposure to multiple disciplines so they can discover what excites them.",
              "They move into guided projects that build confidence through repeated practice, feedback, and iteration.",
              "Later stages push into deeper specialization, stronger systems thinking, and more independent execution."
            ]],
            ["Why Families Choose It", [
              "There is a clearer pathway across ages, interests, and technical depth.",
              "Student output is visible, portfolio-friendly, and easier to talk about with confidence.",
              "The experience connects robotics, coding, design, media, AI, and systems thinking in one ecosystem."
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
              Explore the pathways and find the best starting point for your child.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
              Start with Programmes if you want to understand the learning journey, Student Creations if you want to see the kind of work students produce, or Contact if you want direct guidance on age fit and interests.
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
            copy="Contact Meu Labs for help choosing the best starting point for your child. Families can reach out for programme guidance, pathway questions, age fit advice, and direct support on what to explore next."
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
              Reach out if you want clearer guidance on where your child should begin, which pathway fits their interests, or what kind of programme progression makes the most sense.
            </p>
            <ul className="mt-5 grid gap-4 text-base leading-7 text-slate-600">
              {[
                "Programme guidance based on age, confidence level, and interests.",
                "Questions about specific courses such as Mars Exploration, Project Superhero, Analytics, or advanced specializations.",
                "Support choosing the strongest starting point and next pathway.",
                "Requests for calls, meetings, or direct parent counselling."
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
              ["Email", "hello@meulabs.org", "Use email for programme questions, follow-up requests, and direct parent inquiries about the best fit."],
              ["Phone", "+94 76 962 3500", "Use the direct line for faster guidance when you want to talk through programme options and next steps."],
              ["Best Preparation", "Share age and interests", "The most useful first details are the student age band, current experience level, and the areas they are most curious about."]
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

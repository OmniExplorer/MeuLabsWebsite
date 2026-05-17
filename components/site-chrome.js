import Image from "next/image";
import Link from "next/link";
import { buildBranchNavLinks, withBasePath } from "@/lib/branch-config";

function isActive(href, pathname) {
  return pathname === href;
}

export function SiteHeader({
  pathname = "/",
  basePath = "",
  ctaHref = "/nz",
  ctaLabel = "Visit NZ"
}) {
  const links = buildBranchNavLinks(basePath);

  return (
    <header className="sticky top-0 z-50 border-b border-white/30 bg-[rgba(247,239,223,0.68)] backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex w-full items-center justify-between gap-4 lg:w-auto">
          <Link href={withBasePath(basePath, "/")} className="shrink-0">
            <Image src="/assets/img/Logo.svg" alt="Meu Labs" width={160} height={42} priority />
          </Link>
          <Link
            href={withBasePath(basePath, ctaHref)}
            className="inline-flex items-center rounded-full bg-[linear-gradient(135deg,_#ff7a00,_#ff9d4a)] px-5 py-3 text-sm font-extrabold text-white shadow-[0_16px_34px_rgba(255,122,0,0.28)] transition hover:-translate-y-0.5"
          >
            {ctaLabel}
          </Link>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-2 rounded-[24px] border border-white/40 bg-white/35 p-2 text-sm font-semibold text-[color:var(--color-meu-navy)] shadow-[0_12px_40px_rgba(13,53,87,0.08)] backdrop-blur-xl lg:flex-nowrap">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 transition ${
                isActive(link.href, pathname)
                  ? "bg-[color:var(--color-meu-navy)] text-white"
                  : "text-slate-600 hover:bg-white/60 hover:text-[color:var(--color-meu-navy)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter({ basePath = "" }) {
  const links = buildBranchNavLinks(basePath);

  return (
    <footer className="border-t border-[rgba(13,53,87,0.08)] bg-[linear-gradient(180deg,_rgba(255,255,255,0.2),_rgba(255,255,255,0.92))]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <Link href={withBasePath(basePath, "/")} className="w-fit">
            <Image src="/assets/img/Logo.svg" alt="Meu Labs" width={160} height={42} />
          </Link>
          <nav className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-600">
            {links.map((link, index) => (
              <span key={link.href} className="flex items-center gap-3">
                {index > 0 ? <span className="text-slate-300">•</span> : null}
                <Link href={link.href} className="hover:text-[color:var(--color-meu-navy)]">
                  {link.label === "Contact" ? "Contact Us" : link.label}
                </Link>
              </span>
            ))}
          </nav>
        </div>
        <div className="h-px bg-[rgba(13,53,87,0.1)]" />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Image src="/assets/img/STEM-1.webp" alt="STEM.org accredited educational experience" width={88} height={88} className="rounded-2xl" />
            <div className="flex flex-col gap-3 text-sm font-medium text-slate-600">
              <a href="tel:+94769623500" className="inline-flex items-center gap-3 hover:text-[color:var(--color-meu-navy)]">
                <span className="flex size-9 items-center justify-center rounded-full border border-white/50 bg-white/60 text-base">☎</span>
                <span>LK +94 76 962 3500</span>
              </a>
              <a href="mailto:hello@meulabs.org" className="inline-flex items-center gap-3 hover:text-[color:var(--color-meu-navy)]">
                <span className="flex size-9 items-center justify-center rounded-full border border-white/50 bg-white/60 text-base">✉</span>
                <span>hello@meulabs.org</span>
              </a>
            </div>
          </div>
          <div className="glass-panel overflow-hidden p-4">
            <Image
              src="/assets/img/world-map.svg"
              alt="Meu Labs locations map"
              width={720}
              height={320}
              className="h-auto w-full opacity-85"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SectionHeading({ eyebrow, title, accent, copy, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <span className="glass-chip mb-4">{eyebrow}</span> : null}
      <h2 className="font-display text-4xl font-bold tracking-[-0.05em] text-[color:var(--color-meu-navy)] sm:text-5xl">
        {title} {accent ? <span className="text-[color:var(--color-meu-orange)]">{accent}</span> : null}
      </h2>
      {copy ? <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{copy}</p> : null}
    </div>
  );
}

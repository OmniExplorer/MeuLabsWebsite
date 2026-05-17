import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/branch-config";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

function renderHref(link, fallback = "/contact") {
  return link?.href || fallback;
}

function getToolCardImages(page, section, card) {
  if (card.images.length) {
    return card.images;
  }

  if (section.id !== "tools") {
    return [];
  }

  if (page.slug === "product-design" && card.title === "Technical drawing and workshop interpretation") {
    return [
      { src: "/assets/img/tool-autodesk-official.ico", alt: "Autodesk logo" },
      { src: "/assets/img/tool-tinkercad.png", alt: "Tinkercad logo" }
    ];
  }

  if (page.slug === "eee") {
    return [
      { src: "/assets/img/tool-easyeda-official.ico", alt: "Circuit design logo" },
      { src: "/assets/img/tool-api-stack.svg", alt: "Electrical systems stack icon" }
    ];
  }

  return [];
}

export function ProgrammePage({ page, basePath = "" }) {
  const heroImage = page.hero.images[0] || null;
  const sectionAccent = "from-orange-300/35 via-amber-200/10 to-transparent";

  return (
    <>
      <SiteHeader
        pathname={withBasePath(basePath, `/${page.slug}`)}
        basePath={basePath}
        ctaHref={withBasePath(basePath, renderHref(page.navCta, "/programmes"))}
        ctaLabel={page.navCta?.label || "Back To Programmes"}
      />
      <main>
        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-8 overflow-hidden rounded-[36px] border border-white/40 bg-[linear-gradient(160deg,_rgba(255,255,255,0.82),_rgba(255,255,255,0.42))] p-6 shadow-[0_28px_80px_rgba(13,53,87,0.12)] backdrop-blur-2xl lg:grid-cols-[1.02fr_0.98fr] lg:p-8">
            <div className="flex flex-col justify-center">
              <div className="flex flex-wrap gap-3">
                {(page.hero.pills.length ? page.hero.pills : [page.hero.eyebrow].filter(Boolean)).map((pill, index) => (
                  <span
                    key={`${pill}-${index}`}
                    className={index === 0
                      ? "rounded-full bg-[rgba(255,122,0,0.14)] px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-[color:var(--color-meu-orange)]"
                      : "rounded-full border border-white/50 bg-white/65 px-4 py-2 text-sm font-bold text-slate-600"}
                  >
                    {pill}
                  </span>
                ))}
              </div>
              <h1 className="mt-6 font-display text-5xl font-bold tracking-[-0.06em] text-[color:var(--color-meu-navy)] sm:text-6xl">
                {page.hero.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{page.hero.summary}</p>
              {page.hero.tags.length ? (
                <div className="mt-6 flex flex-wrap gap-2">
                  {page.hero.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[rgba(13,53,87,0.08)] px-3 py-2 text-sm font-semibold text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
              {page.hero.actions.length ? (
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  {page.hero.actions.slice(0, 2).map((action, index) => (
                    <Link
                      key={action.href + index}
                      href={withBasePath(basePath, action.href)}
                      className={index === 0
                        ? "inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,_#ff7a00,_#ff9d4a)] px-7 py-4 text-base font-extrabold text-white shadow-[0_20px_48px_rgba(255,122,0,0.28)] transition hover:-translate-y-0.5"
                        : "glass-panel inline-flex items-center justify-center px-7 py-4 text-base font-bold text-[color:var(--color-meu-navy)] transition hover:-translate-y-0.5"}
                    >
                      {action.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="flex flex-col gap-5">
              {heroImage ? (
                <div className="relative overflow-hidden rounded-[30px] border border-white/50 bg-[linear-gradient(145deg,_#fff8ec_0%,_#fffdf9_56%,_#f9f0e0_100%)] min-h-[300px]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(255,122,0,0.18),_transparent_28%),radial-gradient(circle_at_80%_10%,_rgba(44,172,149,0.16),_transparent_24%)]" />
                  <div className="relative h-full min-h-[300px]">
                    <Image src={heroImage.src} alt={heroImage.alt || page.hero.title} fill className="object-contain p-8 sm:p-10" sizes="(max-width: 1024px) 100vw, 40rem" />
                  </div>
                </div>
              ) : null}
              {page.hero.note ? (
                <div className="glass-panel p-6">
                  <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-[color:var(--color-meu-navy)]">
                    {page.hero.note.title}
                  </h2>
                  <p className="mt-3 text-base leading-7 text-slate-600">{page.hero.note.copy}</p>
                </div>
              ) : null}
              {page.hero.articles.length ? (
                <div className="grid gap-4 md:grid-cols-2">
                  {page.hero.articles.map((article, index) => (
                    <article key={`${article.title}-${index}`} className="glass-panel p-5">
                      {article.label ? <div className="text-sm font-black uppercase tracking-[0.16em] text-[color:var(--color-meu-orange)]">{article.label}</div> : null}
                      {article.title ? <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-[color:var(--color-meu-navy)]">{article.title}</h3> : null}
                      {article.meta.length ? (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {article.meta.map((item) => (
                            <span key={item} className="rounded-full bg-[rgba(13,53,87,0.08)] px-3 py-1.5 text-sm font-semibold text-slate-700">
                              {item}
                            </span>
                          ))}
                        </div>
                      ) : null}
                      {article.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="mt-4 text-sm leading-7 text-slate-600">{paragraph}</p>
                      ))}
                      {article.listItems.length ? (
                        <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-600">
                          {article.listItems.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="mt-2 size-2 shrink-0 rounded-full bg-[color:var(--color-meu-orange)]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </article>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>

        {page.sections.map((section, sectionIndex) => {
          const displayImage = section.images.find((image) => image.src !== heroImage?.src) || null;
          const cardColumns = section.cards.length >= 4 ? "xl:grid-cols-2" : "lg:grid-cols-2";
          const useUnifiedToolStackLayout = section.id === "tools";
          const showSplitLayout = !useUnifiedToolStackLayout && Boolean(displayImage && section.cards.length);

          return (
            <section key={`${section.title}-${sectionIndex}`} id={section.id || undefined} className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
              <div className={`absolute inset-x-0 -z-10 mx-auto h-36 max-w-6xl bg-gradient-to-r ${sectionAccent} blur-3xl`} />
              <div className="max-w-3xl">
                {section.eyebrow ? <span className="glass-chip">{section.eyebrow}</span> : null}
                <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.05em] text-[color:var(--color-meu-navy)] sm:text-5xl">
                  {section.title}
                </h2>
                {section.copy ? <p className="mt-4 text-lg leading-8 text-slate-600">{section.copy}</p> : null}
              </div>
              {displayImage && !section.cards.length ? (
                <div className="glass-panel mt-8 overflow-hidden p-5">
                  <div className="relative min-h-[280px]">
                    <Image src={displayImage.src} alt={displayImage.alt || section.title} fill className="object-contain p-5" sizes="(max-width: 1280px) 100vw, 60rem" />
                  </div>
                </div>
              ) : null}
              {section.cards.length ? (
                <div className={`mt-8 grid gap-5 ${showSplitLayout ? "lg:grid-cols-[0.92fr_1.08fr]" : ""}`}>
                  {showSplitLayout ? (
                    <div className="glass-panel overflow-hidden p-5">
                      <div className="relative min-h-[300px]">
                        <Image src={displayImage.src} alt={displayImage.alt || section.title} fill className="object-contain p-5" sizes="(max-width: 1024px) 100vw, 28rem" />
                      </div>
                    </div>
                  ) : null}
                  <div className={`grid gap-5 ${cardColumns}`}>
                    {section.cards.map((card, cardIndex) => {
                      const cardImages = getToolCardImages(page, section, card);

                      return (
                        <article key={`${card.title}-${cardIndex}`} className="glass-panel p-6">
                          {cardImages.length ? (
                            <div className="mb-5 flex flex-wrap gap-3">
                              {cardImages.map((image, imageIndex) => (
                                <div key={`${image.src}-${imageIndex}`} className="relative size-14 overflow-hidden rounded-2xl bg-white/70">
                                  <Image src={image.src} alt={image.alt || card.title || "Programme tool"} fill className="object-contain p-2" sizes="3.5rem" />
                                </div>
                              ))}
                            </div>
                          ) : null}
                          {card.label ? <div className="text-sm font-black uppercase tracking-[0.16em] text-[color:var(--color-meu-orange)]">{card.label}</div> : null}
                          {card.title ? <h3 className="font-display text-3xl font-semibold tracking-[-0.04em] text-[color:var(--color-meu-navy)]">{card.title}</h3> : null}
                          {card.meta.length ? (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {card.meta.map((item) => (
                                <span key={item} className="rounded-full bg-[rgba(13,53,87,0.08)] px-3 py-1.5 text-sm font-semibold text-slate-700">
                                  {item}
                                </span>
                              ))}
                            </div>
                          ) : null}
                          {card.paragraphs.map((paragraph) => (
                            <p key={paragraph} className="mt-4 text-base leading-7 text-slate-600">{paragraph}</p>
                          ))}
                          {card.listItems.length ? (
                            <ul className="mt-5 grid gap-3 text-base leading-7 text-slate-600">
                              {card.listItems.map((item) => (
                                <li key={item} className="flex gap-3">
                                  <span className="mt-2 size-2 shrink-0 rounded-full bg-[color:var(--color-meu-orange)]" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </article>
                      );
                    })}
                  </div>
                </div>
              ) : null}
              {section.actions.length ? (
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  {section.actions.map((action, index) => (
                    <Link
                      key={`${action.href}-${index}`}
                      href={withBasePath(basePath, action.href)}
                      className={index === 0
                        ? "inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,_#ff7a00,_#ff9d4a)] px-7 py-4 text-base font-extrabold text-white shadow-[0_20px_48px_rgba(255,122,0,0.28)] transition hover:-translate-y-0.5"
                        : "glass-panel inline-flex items-center justify-center px-7 py-4 text-base font-bold text-[color:var(--color-meu-navy)] transition hover:-translate-y-0.5"}
                    >
                      {action.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </section>
          );
        })}
      </main>
      <SiteFooter basePath={basePath} />
    </>
  );
}

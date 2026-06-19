import Image from 'next/image';
import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt?: string;
  imageMode?: 'photo' | 'object';
  imageStyle?: 'framed' | 'contact' | 'single';
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, subtitle, imageSrc, imageAlt = '', imageMode = 'photo', imageStyle = 'framed', children }: PageHeroProps) {
  if (imageStyle === 'contact') {
    return (
      <section className="relative isolate overflow-hidden bg-[#F8F1E2] px-4 text-navy sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_76%_18%,rgba(255,122,0,0.20),transparent_31%),radial-gradient(circle_at_22%_45%,rgba(255,122,0,0.16),transparent_28%),linear-gradient(120deg,#F8F1E2_0%,#FFF6EA_55%,#FFE7CE_100%)]" />
        <div
          className="absolute inset-y-0 right-0 -z-20 hidden w-[58%] lg:block"
          style={{
            WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, transparent 14%, black 44%)',
            maskImage: 'linear-gradient(90deg, transparent 0%, transparent 14%, black 44%)'
          }}
        >
          <Image
            src={imageSrc}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="58vw"
          />
        </div>

        <div className="mx-auto grid max-w-[92rem] items-center gap-10 py-12 lg:min-h-[620px] lg:grid-cols-[0.82fr_1.18fr] lg:py-16">
          <div className="max-w-3xl">
            <Reveal>
              <div className="mb-8 max-w-3xl border-l-4 border-orange pl-5">
                <p className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">{eyebrow}</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="max-w-4xl text-4xl font-normal leading-[1.08] md:text-6xl">{title}</h1>
            </Reveal>
            {subtitle && (
              <Reveal delay={200}>
                <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-700">{subtitle}</p>
              </Reveal>
            )}
            {children && (
              <Reveal animation="pop" delay={300} className="mt-8 flex flex-col gap-3 sm:flex-row">
                {children}
              </Reveal>
            )}
          </div>

          <div className="relative min-h-[310px] overflow-hidden rounded-lg bg-[#FFF6EA]/70 lg:min-h-[500px] lg:overflow-visible lg:rounded-none lg:bg-transparent">
            <Image src={imageSrc} alt={imageAlt} fill priority className="object-cover object-center lg:hidden" sizes="100vw" />
            <div className="absolute right-2 top-2 hidden grid-cols-5 gap-1.5 lg:grid" aria-hidden="true">
              {Array.from({ length: 25 }).map((_, index) => (
                <span key={index} className="dot-ripple h-1.5 w-1.5 rounded-full bg-orange" style={{ animationDelay: `${(index % 5) * 120 + Math.floor(index / 5) * 18}ms` }} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-[760px] overflow-hidden bg-creamAlt px-4 text-navy sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_42%,rgba(255,122,0,0.26),transparent_32%),radial-gradient(circle_at_82%_22%,rgba(255,79,31,0.12),transparent_30%),linear-gradient(120deg,#F8F1E2_0%,#FFF6EA_58%,rgba(255,122,0,0.12)_100%)]" />
      <div className="relative mx-auto grid min-h-[760px] max-w-[92rem] items-center gap-8 py-20 lg:grid-cols-[0.84fr_1.16fr]">
        <div>
          <Reveal>
            <div className="mb-8 max-w-3xl border-l-4 border-orange pl-5">
              <p className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">{eyebrow}</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="max-w-4xl text-4xl font-normal leading-[1.08] md:text-6xl">{title}</h1>
          </Reveal>
          {subtitle && (
            <Reveal delay={200}>
              <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-700">{subtitle}</p>
            </Reveal>
          )}
          {children && (
            <Reveal animation="pop" delay={300} className="mt-8 flex flex-col gap-3 sm:flex-row">
              {children}
            </Reveal>
          )}
        </div>
        {imageStyle === 'single' ? (
          <Reveal animation="pop" delay={400} className="mx-auto w-full max-w-[760px] lg:ml-auto">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={3406}
              height={1938}
              priority
              sizes="(min-width: 1024px) 54vw, 92vw"
              className="h-auto w-full rounded-[32px] shadow-[0_30px_58px_rgba(5,24,44,0.28)]"
            />
          </Reveal>
        ) : (
        <Reveal animation="pop" delay={400} className="relative mx-auto aspect-[1.18/1] w-full max-w-[760px] lg:ml-auto lg:scale-[1.14]">
          <div className="absolute -right-1 top-8 z-0 grid grid-cols-5 gap-1.5" aria-hidden="true">
            {Array.from({ length: 25 }).map((_, index) => (
              <span key={index} className="dot-ripple h-1.5 w-1.5 rounded-full bg-orange" style={{ animationDelay: `${(index % 5) * 120 + Math.floor(index / 5) * 18}ms` }} />
            ))}
          </div>
          <div className="absolute left-[7%] bottom-[18%] z-0 grid grid-cols-4 gap-1.5" aria-hidden="true">
            {Array.from({ length: 20 }).map((_, index) => (
              <span key={index} className="dot-ripple h-1.5 w-1.5 rounded-full bg-orange" style={{ animationDelay: `${(index % 4) * 130 + Math.floor(index / 4) * 18}ms` }} />
            ))}
          </div>
          {imageMode === 'object' ? (
            <>
              <div className="absolute inset-x-10 bottom-10 top-12 z-10 rounded-full bg-[radial-gradient(circle,rgba(255,122,0,0.22)_0%,rgba(49,195,222,0.12)_42%,transparent_72%)]" />
              <div className="absolute -inset-x-12 -bottom-6 -top-4 z-20">
                <Image src={imageSrc} alt={imageAlt} fill priority className="object-contain drop-shadow-[0_30px_42px_rgba(13,53,87,0.22)]" sizes="(min-width: 1024px) 42vw, 95vw" />
              </div>
            </>
          ) : (
            <>
              <div className="absolute inset-x-8 bottom-8 top-8 z-10 rounded-[30px] bg-[linear-gradient(135deg,rgba(255,122,0,0.20),rgba(49,195,222,0.14))]" />
              <div className="absolute inset-[6%] z-20 overflow-hidden rounded-[34px] border border-white/70 bg-[#FFF6EA]/70 p-3 shadow-[0_30px_80px_rgba(13,53,87,0.18)]" style={{ transform: 'rotate(2deg)' }}>
                <div className="relative h-full w-full overflow-hidden rounded-[24px]">
                  <Image src={imageSrc} alt={imageAlt} fill priority className="object-cover" sizes="(min-width: 1024px) 38vw, 90vw" />
                </div>
              </div>
            </>
          )}
        </Reveal>
        )}
      </div>
    </section>
  );
}

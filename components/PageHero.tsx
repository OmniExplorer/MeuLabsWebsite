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
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, subtitle, imageSrc, imageAlt = '', imageMode = 'photo', children }: PageHeroProps) {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-creamAlt text-navy">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_42%,rgba(255,122,0,0.26),transparent_32%),radial-gradient(circle_at_82%_22%,rgba(255,79,31,0.12),transparent_30%),linear-gradient(120deg,#F8F1E2_0%,#FFF6EA_58%,rgba(255,122,0,0.12)_100%)]" />
      <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.92fr_1fr] lg:px-8">
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
        <Reveal animation="pop" delay={400} className="relative mx-auto aspect-[1.18/1] w-full max-w-[680px] lg:ml-auto lg:scale-110">
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
              <div className="absolute -inset-x-8 -bottom-2 top-0 z-20">
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
      </div>
    </section>
  );
}

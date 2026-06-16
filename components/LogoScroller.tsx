import Image from 'next/image';
import { AutoCarousel } from './AutoCarousel';

export type LogoScrollerItem = {
  name: string;
  src: string;
  href?: string;
};

type LogoScrollerProps = {
  title: string;
  items: LogoScrollerItem[];
  reverse?: boolean;
};

export function LogoScroller({ title, items, reverse = false }: LogoScrollerProps) {
  return (
    <AutoCarousel
      ariaLabel={`${title} logos`}
      className="project-carousel-shell py-2"
      trackClassName="gap-5 pr-5 sm:gap-6 sm:pr-6"
      reverse={reverse}
    >
      {items.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target={item.href ? '_blank' : undefined}
          rel={item.href ? 'noreferrer' : undefined}
          className="grid min-h-36 w-[min(48vw,13rem)] shrink-0 grid-rows-[1fr_auto] place-items-center gap-3 rounded-xl border border-navy/5 bg-[#FFFDFC] p-5 text-center shadow-[0_8px_18px_rgba(13,53,87,0.04)] sm:w-[13rem]"
        >
          <Image
            src={item.src}
            alt={`${item.name} logo`}
            width={150}
            height={90}
            className="max-h-20 w-full object-contain"
            sizes="136px"
          />
          <p className="text-xs font-black leading-tight text-navy">{item.name}</p>
        </a>
      ))}
    </AutoCarousel>
  );
}

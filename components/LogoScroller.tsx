'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type LogoScrollerProps = {
  title: string;
  items: string[];
  showDots?: boolean;
};

export function LogoScroller({ title, items, showDots }: LogoScrollerProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const node = scrollerRef.current;
    if (!node) return;

    node.scrollBy({
      left: direction === 'right' ? node.clientWidth * 0.82 : -node.clientWidth * 0.82,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-w-0">
      <button
        type="button"
        aria-label={`Previous ${title} logos`}
        className="absolute -left-3 top-1/2 z-10 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-white text-orange shadow-soft transition hover:-translate-x-0.5 hover:shadow-pop"
        onClick={() => scroll('left')}
      >
        <ChevronLeft size={17} aria-hidden />
      </button>
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-8 py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <div
            key={item}
            className="grid min-h-32 w-[8.5rem] shrink-0 snap-start place-items-center rounded-xl border border-navy/5 bg-[#FFFDFC] p-4 text-center shadow-[0_8px_18px_rgba(13,53,87,0.04)]"
          >
            <span className="text-sm font-black leading-snug text-navy">{item}</span>
          </div>
        ))}
      </div>
      <button
        type="button"
        aria-label={`Next ${title} logos`}
        className="absolute -right-3 top-1/2 z-10 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-white text-orange shadow-soft transition hover:translate-x-0.5 hover:shadow-pop"
        onClick={() => scroll('right')}
      >
        <ChevronRight size={17} aria-hidden />
      </button>
      {showDots && (
        <div className="mt-4 flex justify-center gap-2">
          {[0, 1, 2, 3].map((dot) => (
            <span key={dot} className={`h-2 w-2 rounded-full ${dot === 0 ? 'bg-orange' : 'bg-orange/20'}`} />
          ))}
        </div>
      )}
    </div>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export type LogoScrollerItem = {
  name: string;
  src: string;
};

type LogoScrollerProps = {
  title: string;
  items: LogoScrollerItem[];
};

export function LogoScroller({ title, items }: LogoScrollerProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollControls = () => {
    const node = scrollerRef.current;
    if (!node) return;

    const maxScrollLeft = node.scrollWidth - node.clientWidth;
    setCanScrollLeft(node.scrollLeft > 2);
    setCanScrollRight(node.scrollLeft < maxScrollLeft - 2);
  };

  const scroll = (direction: 'left' | 'right') => {
    const node = scrollerRef.current;
    if (!node) return;

    node.scrollBy({
      left: direction === 'right' ? node.clientWidth * 0.82 : -node.clientWidth * 0.82,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;

    updateScrollControls();
    node.addEventListener('scroll', updateScrollControls, { passive: true });
    window.addEventListener('resize', updateScrollControls);

    return () => {
      node.removeEventListener('scroll', updateScrollControls);
      window.removeEventListener('resize', updateScrollControls);
    };
  }, [items]);

  return (
    <div className="relative min-w-0">
      {canScrollLeft && (
        <button
          type="button"
          aria-label={`Previous ${title} logos`}
          className="absolute -left-3 top-1/2 z-10 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-white text-orange shadow-soft transition hover:-translate-x-0.5 hover:shadow-pop"
          onClick={() => scroll('left')}
        >
          <ChevronLeft size={17} aria-hidden />
        </button>
      )}
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-3 overflow-x-hidden scroll-smooth py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <div
            key={item.name}
            className="grid min-h-32 w-[calc((100%_-_0.75rem)/2)] shrink-0 snap-start place-items-center rounded-xl border border-navy/5 bg-[#FFFDFC] p-5 text-center shadow-[0_8px_18px_rgba(13,53,87,0.04)] sm:w-[calc((100%_-_1.5rem)/3)] lg:w-[calc((100%_-_3rem)/5)]"
          >
            <Image
              src={item.src}
              alt={`${item.name} logo`}
              width={150}
              height={90}
              className="max-h-20 w-full object-contain"
              sizes="136px"
            />
          </div>
        ))}
      </div>
      {canScrollRight && (
        <button
          type="button"
          aria-label={`Next ${title} logos`}
          className="absolute -right-3 top-1/2 z-10 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-white text-orange shadow-soft transition hover:translate-x-0.5 hover:shadow-pop"
          onClick={() => scroll('right')}
        >
          <ChevronRight size={17} aria-hidden />
        </button>
      )}
    </div>
  );
}

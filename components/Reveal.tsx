'use client';

import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  animation?: 'fade' | 'rise' | 'pop';
  delay?: number;
};

export function Reveal({ children, className = '', animation = 'rise', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${visible ? `reveal-${animation}` : 'reveal-pending'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

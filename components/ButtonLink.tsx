import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'dark' | 'ghost';
  shape?: 'pill' | 'square';
  className?: string;
  external?: boolean;
  onClick?: () => void;
};

const variants = {
  primary: 'bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] text-white hover:from-[#ff6b00] hover:to-[#f04417] shadow-soft',
  secondary: 'bg-white text-navy hover:bg-creamAlt shadow-soft',
  dark: 'bg-navy text-white hover:bg-[#082a47] shadow-soft',
  ghost: 'bg-transparent text-navy hover:bg-white/70'
};

const shapes = {
  pill: 'rounded-full',
  square: 'rounded-lg'
};

export function ButtonLink({ href, children, variant = 'primary', shape = 'pill', className = '', external, onClick }: ButtonLinkProps) {
  const classes = `inline-flex items-center justify-center gap-2 ${shapes[shape]} px-6 py-3.5 text-base font-extrabold transition duration-200 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-pop active:translate-y-0 active:scale-[0.99] ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer" onClick={onClick}>
        {children}
        <ArrowRight size={17} aria-hidden />
      </a>
    );
  }

  return (
    <Link className={classes} href={href} onClick={onClick}>
      {children}
      <ArrowRight size={17} aria-hidden />
    </Link>
  );
}

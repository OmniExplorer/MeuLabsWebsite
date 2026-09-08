'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ButtonLink } from './ButtonLink';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/courses', label: 'Courses' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActiveLink = (href: string) => {
    return href === '/' ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-cream/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/assets/logos/logo.svg" alt="Meu Labs" width={150} height={48} className="h-auto w-40" priority />
        </Link>
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active = isActiveLink(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`relative py-2 text-sm font-bold transition hover:text-orange ${active ? 'text-orange' : 'text-navy/80'}`}
              >
                {link.label}
                <span className={`absolute inset-x-0 -bottom-1 mx-auto h-0.5 w-8 rounded-full bg-orange transition-opacity ${active ? 'opacity-100' : 'opacity-0'}`} />
              </Link>
            );
          })}
        </div>
        <div className="hidden lg:block">
          <ButtonLink href="/courses">Explore Courses</ButtonLink>
        </div>
        <button
          className="grid h-11 w-11 place-items-center rounded-full bg-white text-navy shadow-soft lg:hidden"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      <div className={`grid border-t border-white/70 bg-cream px-4 transition-[grid-template-rows] duration-300 ease-out lg:hidden ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className={`mx-auto grid max-w-7xl gap-2 pb-6 pt-3 transition-all duration-300 ${open ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`}>
            {navLinks.map((link) => {
              const active = isActiveLink(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`rounded-2xl px-4 py-3 font-bold transition duration-200 hover:bg-white ${active ? 'bg-white text-orange' : 'text-navy'}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <ButtonLink href="/courses" className="mt-3 w-fit px-5 py-2.5 text-sm" onClick={() => setOpen(false)}>Explore Courses</ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}

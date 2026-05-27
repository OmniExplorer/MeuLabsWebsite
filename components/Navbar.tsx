'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { courses } from '@/data/courses';
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

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-cream/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/assets/logos/logo.svg" alt="Meu Labs" width={150} height={48} className="h-auto w-40" priority />
        </Link>
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-bold text-navy/80 hover:text-orange">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden lg:block">
          <ButtonLink href="/courses">Explore Courses</ButtonLink>
        </div>
        <button
          className="grid h-11 w-11 place-items-center rounded-full bg-white text-navy shadow-soft lg:hidden"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/70 bg-cream px-4 pb-6 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-2xl px-4 py-3 font-bold text-navy hover:bg-white" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="mt-2 rounded-card bg-white p-4 shadow-soft">
              <p className="mb-3 text-sm font-extrabold text-navy">Course links</p>
              <div className="grid gap-2">
                {courses.map((course) => (
                  <Link key={course.slug} href={`/courses/${course.slug}`} className="text-sm font-semibold text-slate-700 hover:text-orange" onClick={() => setOpen(false)}>
                    {course.title}
                  </Link>
                ))}
              </div>
            </div>
            <ButtonLink href="/courses" className="mt-3" onClick={() => setOpen(false)}>Explore Courses</ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}

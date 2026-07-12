'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { ChevronRight, Mail, MapPin, MessageCircle, Phone, ShieldCheck, UserRound } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

const courseLinks = [
  { href: '/courses', label: 'All Courses' },
  { href: '/courses/kx', label: 'STEM For Kids' },
  { href: '/courses/coding-software', label: 'Coding and Software' },
  { href: '/courses/robotics-iot', label: 'Robotics and IoT' },
  { href: '/courses/digital-media', label: 'Digital Media' },
  { href: '/courses/se', label: 'Software Engineering' }
];

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/about', label: 'Our Approach' },
  { href: '/projects', label: 'Student Projects' },
  { href: '/contact', label: 'Careers' },
  { href: '/about', label: 'Blog' }
];

const socials = [
  { href: siteConfig.socialLinks.facebook, label: 'Facebook', icon: '/assets/logos/social/facebook.svg', className: 'bg-[#1877F2]' },
  { href: siteConfig.socialLinks.instagram, label: 'Instagram', icon: '/assets/logos/social/instagram.svg', className: 'bg-[#C13584]' },
  { href: siteConfig.socialLinks.youtube, label: 'YouTube', icon: '/assets/logos/social/youtube.svg', className: 'bg-[#FF0033]' },
  { href: siteConfig.socialLinks.linkedin, label: 'LinkedIn', icon: '/assets/logos/social/linkedin.svg', className: 'bg-[#0A66C2]' }
];

const footerLogos = [
  { label: 'STEM.org Accredited / Certified', srcs: ['/assets/logos/STEMMACCREDITED2.png', '/assets/logos/STEMCERTIFIED.png'], href: 'https://stem.org/' },
  { label: 'ICTA Supported by', src: '/assets/logos/icta.png', href: 'https://www.icta.lk/' },
  { label: 'Hatch Incubated', src: '/assets/logos/hatch-logo.png', href: 'https://hatch.lk/' },
  { label: 'Krya National Partner', src: '/assets/logos/krya.png', href: 'https://krya.global/' },
  { label: 'Dragonfly Trained by', src: '/assets/logos/dragonfly.png', href: 'https://www.dragonfly-training.co.uk/' },
  { label: 'Scratch SEC Partner', src: '/assets/logos/scratchlogonew.png', href: 'https://scratch.mit.edu/' }
];

export function Footer() {
  const contactConfig = {
    phoneNumber: siteConfig.phoneNumber,
    phoneHref: `tel:${siteConfig.phoneNumber.replace(/\s/g, '')}`,
    whatsappNumber: siteConfig.whatsappNumber,
    email: 'hello@meulabs.org',
    address: siteConfig.address,
    callLabel: 'Call Us',
    whatsappLabel: 'Chat on WhatsApp'
  };
  const whatsappOrEmailHref = contactConfig.whatsappNumber
    ? `https://wa.me/${contactConfig.whatsappNumber.replace(/\D/g, '')}`
    : `mailto:${contactConfig.email}`;

  return (
    <footer className="bg-[#07002A] text-white">
      <div className="px-4 py-7 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[92rem]">
          <div className="grid gap-6 rounded-[10px] border border-[#1B2A77]/70 bg-[#07073A] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:p-7">
            <div className="grid gap-4 sm:grid-cols-[4.25rem_1fr] sm:items-center">
              <span className="grid h-14 w-14 place-items-center rounded-[14px] border-2 border-orange text-orange shadow-[0_0_30px_rgba(255,122,0,0.22)]">
                <UserRound size={27} strokeWidth={2.4} aria-hidden />
              </span>
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.08em] text-[#FFC247]">Talk to a Student Counselor</p>
                <h2 className="mt-2 text-2xl font-black leading-tight sm:text-3xl">Not sure where to start?</h2>
                <p className="mt-2 max-w-xl text-sm font-bold leading-6 text-slate-300">Our student counselors are here to help you choose the right course for your child&apos;s goals and future.</p>
              </div>
            </div>

            <div className="hidden h-24 w-px bg-white/12 lg:block" aria-hidden="true" />

            <div className="grid gap-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <a href={whatsappOrEmailHref} target={contactConfig.whatsappNumber ? '_blank' : undefined} rel={contactConfig.whatsappNumber ? 'noreferrer' : undefined} className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[#00D46A]/45 bg-[#003E2A] px-4 text-xs font-black text-[#21F28B] shadow-[0_10px_26px_rgba(0,212,106,0.16)] transition hover:-translate-y-0.5">
                  <MessageCircle size={15} aria-hidden />
                  {contactConfig.whatsappLabel}
                </a>
                <a href={contactConfig.phoneHref} className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] px-4 text-xs font-black text-white shadow-[0_12px_30px_rgba(255,79,31,0.26)] transition hover:-translate-y-0.5 hover:from-[#ff6b00] hover:to-[#f04417]">
                  <Phone size={14} aria-hidden />
                  {contactConfig.callLabel}
                  <ChevronRight size={15} aria-hidden />
                </a>
              </div>
              <div>
                <a href={`mailto:${contactConfig.email}`} className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#17105A] px-6 text-xs font-black text-white transition hover:-translate-y-0.5 hover:bg-[#21177A]">
                  <Mail size={14} aria-hidden />
                  Email Us
                  <ChevronRight size={15} aria-hidden />
                </a>
              </div>
              <p className="inline-flex items-center gap-2 text-xs font-bold text-slate-400">
                <ShieldCheck size={15} className="text-slate-500" aria-hidden />
                Trusted by parents. Loved by students.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[92rem] gap-8 lg:grid-cols-[1.35fr_0.85fr_0.95fr_1.35fr_1.7fr]">
          <div>
          <Link href="/" className="inline-flex">
            <Image src="/assets/logos/logo.svg" alt="Meu Labs" width={150} height={47} className="h-auto w-40" />
          </Link>
          <p className="mt-5 max-w-[300px] text-sm font-extrabold leading-6 text-slate-300">Empowering young minds through project-based STEM, robotics, coding and creative learning.</p>
          <div className="mt-5 flex flex-nowrap gap-2.5">
            {socials.map(({ href, label, icon, className }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-white shadow-soft transition hover:-translate-y-1 ${className}`}>
                <Image src={icon} alt="" width={18} height={18} className="h-[18px] w-[18px] object-contain" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Courses">
          <FooterHeading>Courses</FooterHeading>
          <ul className="mt-4 grid gap-2.5 text-xs font-extrabold leading-5 text-slate-300">
            {courseLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="inline-flex items-center gap-1.5 transition hover:text-orange"><ChevronRight size={12} aria-hidden />{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <FooterHeading>Company</FooterHeading>
          <ul className="mt-4 grid gap-2.5 text-xs font-extrabold leading-5 text-slate-300">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="inline-flex items-center gap-1.5 transition hover:text-orange"><ChevronRight size={12} aria-hidden />{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <FooterHeading>Contact</FooterHeading>
          <div className="mt-4 grid gap-3 text-xs font-extrabold leading-5 text-slate-300">
            <a href={contactConfig.phoneHref} className="grid grid-cols-[1.25rem_1fr] gap-3 transition hover:text-orange">
              <Phone size={15} className="text-orange" aria-hidden />
              <span>{contactConfig.phoneNumber}</span>
            </a>
            <a href={`mailto:${contactConfig.email}`} className="grid grid-cols-[1.25rem_1fr] gap-3 transition hover:text-orange">
              <Mail size={15} className="text-orange" aria-hidden />
              <span>{contactConfig.email}</span>
            </a>
            <div className="grid grid-cols-[1.25rem_1fr] gap-3">
              <MapPin size={16} className="text-orange" aria-hidden />
              <span>{contactConfig.address}</span>
            </div>
          </div>
        </div>

        <div>
          <FooterHeading>Our Locations</FooterHeading>
          <div className="relative mt-4 aspect-[2.55/1] max-w-[360px]">
            <Image src="/assets/images/world-map.svg" alt="" fill className="object-contain opacity-70 invert" sizes="310px" />
            <span className="footer-map-pin absolute left-[62%] top-[50%] z-10 h-6 w-6 text-orange drop-shadow-[0_10px_12px_rgba(255,122,0,0.34)]">
              <MapPin size={24} fill="currentColor" strokeWidth={0} aria-hidden className="h-6 w-6" />
              <span className="absolute left-1/2 top-[7px] h-2 w-2 -translate-x-1/2 rounded-full bg-white" />
            </span>
            <span className="footer-map-pin absolute left-[58%] top-[46%] z-20 h-6 w-6 text-[#65D96C] drop-shadow-[0_10px_12px_rgba(101,217,108,0.32)] [animation-delay:160ms]">
              <MapPin size={24} fill="currentColor" strokeWidth={0} aria-hidden className="h-6 w-6" />
              <span className="absolute left-1/2 top-[7px] h-2 w-2 -translate-x-1/2 rounded-full bg-white" />
            </span>
            <span className="footer-map-pin absolute left-[83%] top-[58%] z-10 h-6 w-6 text-[#2FA8FF] drop-shadow-[0_10px_12px_rgba(47,168,255,0.34)] [animation-delay:320ms]">
              <MapPin size={24} fill="currentColor" strokeWidth={0} aria-hidden className="h-6 w-6" />
              <span className="absolute left-1/2 top-[7px] h-2 w-2 -translate-x-1/2 rounded-full bg-white" />
            </span>
          </div>
          <div className="mt-4 grid gap-x-4 gap-y-2 text-xs font-extrabold sm:grid-cols-[max-content_max-content]">
            <span className="inline-flex whitespace-nowrap items-center gap-2"><span className="h-2.5 w-2.5 shrink-0 rounded-full bg-orange" />Sri Lanka</span>
            <span className="inline-flex whitespace-nowrap items-center gap-2"><span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#2FA8FF]" />New Zealand</span>
            <span className="inline-flex whitespace-nowrap items-center gap-2 sm:col-span-2"><span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#65D96C]" />Maldives <small className="text-[11px] text-slate-400">Coming Soon</small></span>
          </div>
        </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-[92rem] flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-5">
              {footerLogos.map((logo) => (
                <a key={logo.label} href={logo.href} target="_blank" rel="noreferrer" aria-label={logo.label} className="grid h-9 min-w-[4.2rem] place-items-center transition hover:-translate-y-0.5">
                  {logo.srcs ? (
                    <div className="flex items-center gap-1.5">
                      {logo.srcs.map((src) => (
                        <Image key={src} src={src} alt={logo.label} width={38} height={34} className="max-h-8 w-auto object-contain" />
                      ))}
                    </div>
                  ) : logo.src ? (
                    <Image src={logo.src} alt={logo.label} width={86} height={34} className="max-h-8 w-auto object-contain" />
                  ) : null}
                </a>
              ))}
            </div>
            <p className="text-xs font-extrabold text-slate-400">© 2026 Meu Labs. All rights reserved.</p>
            <div className="flex gap-5 text-xs font-extrabold text-slate-300">
              <Link href="#" className="transition hover:text-orange">Privacy Policy</Link>
              <span className="text-white/20" aria-hidden="true">|</span>
              <Link href="#" className="transition hover:text-orange">Terms of Use</Link>
            </div>
          </div>
        </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="relative w-fit pb-3 text-sm font-black text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-7 after:rounded-full after:bg-orange">
      {children}
    </h2>
  );
}

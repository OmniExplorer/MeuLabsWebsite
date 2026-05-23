import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { Reveal } from './Reveal';
import { siteConfig } from '@/data/siteConfig';

export function Footer() {
  const socials = [
    { href: siteConfig.socialLinks.facebook, label: 'Facebook', icon: Facebook },
    { href: siteConfig.socialLinks.instagram, label: 'Instagram', icon: Instagram },
    { href: siteConfig.socialLinks.youtube, label: 'YouTube', icon: Youtube },
    { href: siteConfig.socialLinks.linkedin, label: 'LinkedIn', icon: Linkedin }
  ];

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact Us' }
  ];

  return (
    <footer className="border-t border-navy/10 bg-cream text-navy">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col gap-8 border-b border-navy/12 pb-10 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/assets/logos/logo.svg" alt="Meu Labs" width={150} height={48} className="h-auto w-40" />
          </Link>
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-extrabold text-slate-600">
            {navLinks.map((link, index) => (
              <span key={link.href} className="flex items-center gap-4">
                <Link href={link.href} className="transition hover:text-orange">{link.label}</Link>
                {index < navLinks.length - 1 && <span className="text-orange/40">•</span>}
              </span>
            ))}
          </nav>
        </Reveal>

        <div className="grid gap-10 py-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <Reveal delay={100} className="grid gap-8">
            <p className="max-w-xl text-lg font-semibold leading-8 text-slate-700">Project-based robotics, coding, design, data and AI learning for future-ready students.</p>

            <div className="grid gap-8">
              <div>
                <h3 className="mb-4 font-extrabold">Contact</h3>
                <div className="grid gap-3 text-sm font-semibold text-slate-700">
                  <a href={`tel:${siteConfig.phoneNumber}`} className="flex items-center gap-3 hover:text-orange">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-cream"><Phone size={17} /></span>
                    {siteConfig.phoneNumber}
                  </a>
                  <a href="mailto:hello@meulabs.org" className="flex items-center gap-3 hover:text-orange">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-cream"><Mail size={17} /></span>
                    hello@meulabs.org
                  </a>
                  <span className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-cream"><MapPin size={17} /></span>
                    {siteConfig.address}
                  </span>
                </div>
              </div>

            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span>
                <Image src="/assets/logos/icta.png" alt="ICTA" width={170} height={64} className="h-16 w-auto object-contain" />
              </span>
              <span>
                <Image src="/assets/logos/scratchlogo.png" alt="Scratch" width={200} height={76} className="h-20 w-auto object-contain" />
              </span>
              <span>
                <Image src="/assets/logos/STEM-1.webp" alt="STEM.org" width={170} height={64} className="h-16 w-auto object-contain" />
              </span>
            </div>
          </Reveal>

          <Reveal animation="pop" delay={200} className="relative aspect-[16/9] overflow-hidden">
            <Image src="/assets/images/world-map.svg" alt="" fill className="object-contain opacity-90" sizes="(min-width: 1024px) 48vw, 100vw" />
            <button type="button" aria-label="New Zealand coming soon" className="absolute left-[82%] top-[72%] animate-bounce text-[#FF4F1F] drop-shadow-[0_8px_12px_rgba(255,79,31,0.35)] transition hover:scale-110">
              <MapPin size={30} fill="currentColor" />
              <span className="absolute left-1/2 top-[34%] h-2 w-2 -translate-x-1/2 rounded-full bg-white" />
            </button>
            <button type="button" aria-label="Maldives coming soon" className="absolute left-[61%] top-[55%] animate-bounce text-[#FF4F1F] drop-shadow-[0_8px_12px_rgba(255,79,31,0.35)] transition hover:scale-110 [animation-delay:180ms]">
              <MapPin size={30} fill="currentColor" />
              <span className="absolute left-1/2 top-[34%] h-2 w-2 -translate-x-1/2 rounded-full bg-white" />
            </button>
          </Reveal>
        </div>

        <Reveal delay={300} className="flex flex-col gap-5 border-t border-navy/12 pt-8 text-sm font-semibold text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-5">
            <span>© Meu Labs</span>
            <Link href="#" className="hover:text-orange">Privacy</Link>
            <Link href="#" className="hover:text-orange">Terms</Link>
          </div>
          <div className="flex gap-3">
            {socials.map(({ href, label, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-11 w-11 place-items-center rounded-full bg-white text-navy shadow-soft transition hover:bg-orange hover:text-white">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </footer>
  );
}

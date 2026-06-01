import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

const courseLinks = [
  { href: '/courses', label: 'All Courses' },
  { href: '/courses/kx', label: 'STEM For Kids: Project Mars' },
  { href: '/courses/coding-software', label: 'Coding and Software' },
  { href: '/courses/robotics-iot', label: 'Robotics and IoT' },
  { href: '/courses/digital-media', label: 'Digital Media Production' },
  { href: '/courses/se', label: 'Specialisations' }
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

export function Footer() {
  return (
    <footer className="bg-[#06243A] text-white">
      <div className="mx-auto grid max-w-[92rem] gap-7 px-4 py-8 sm:px-6 lg:grid-cols-[1.35fr_0.95fr_0.9fr_1.35fr_1.85fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex">
            <Image src="/assets/logos/logo.svg" alt="Meu Labs" width={150} height={47} className="h-auto w-36" />
          </Link>
          <p className="mt-5 max-w-[330px] text-sm font-extrabold leading-6 text-slate-300">Empowering young minds through project-based STEM, robotics, coding and creative learning.</p>
          <div className="mt-5 flex flex-nowrap gap-2.5">
            {socials.map(({ href, label, icon, className }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-white shadow-soft transition hover:-translate-y-1 ${className}`}>
                <Image src={icon} alt="" width={18} height={18} className="h-[18px] w-[18px] object-contain" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Courses">
          <h2 className="text-sm font-medium">Courses</h2>
          <ul className="mt-4 grid gap-2 text-xs font-extrabold leading-5 text-slate-300">
            {courseLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition hover:text-orange">{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h2 className="text-sm font-medium">Company</h2>
          <ul className="mt-4 grid gap-2 text-xs font-extrabold leading-5 text-slate-300">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition hover:text-orange">{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-medium">Contact</h2>
          <div className="mt-4 grid gap-3 text-xs font-extrabold leading-5 text-slate-300">
            <a href={`tel:${siteConfig.phoneNumber}`} className="grid grid-cols-[1.25rem_1fr] gap-3 transition hover:text-orange">
              <Phone size={17} className="text-orange" aria-hidden />
              <span>{siteConfig.phoneNumber}</span>
            </a>
            <a href="mailto:info@meulabs.com" className="grid grid-cols-[1.25rem_1fr] gap-3 transition hover:text-orange">
              <Mail size={17} className="text-orange" aria-hidden />
              <span>info@meulabs.com</span>
            </a>
            <div className="grid grid-cols-[1.25rem_1fr] gap-3">
              <MapPin size={18} className="text-orange" aria-hidden />
              <span>No. 133, High Level Road, Nugegoda, Colombo, Sri Lanka</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium">Our Locations</h2>
          <div className="relative mt-4 aspect-[2.55/1] max-w-[380px]">
            <Image src="/assets/images/world-map.svg" alt="" fill className="object-contain opacity-75 invert" sizes="310px" />
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
            <span className="inline-flex whitespace-nowrap items-center gap-2"><span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#2FA8FF]" />New Zealand <small className="text-[11px] text-slate-400">Coming Soon</small></span>
            <span className="inline-flex whitespace-nowrap items-center gap-2 sm:col-span-2"><span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#65D96C]" />Maldives <small className="text-[11px] text-slate-400">Coming Soon</small></span>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F6F7] text-navy">
        <div className="mx-auto flex max-w-[92rem] flex-col gap-4 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex flex-wrap items-center gap-5">
            <Image src="/assets/logos/icta.png" alt="ICTA" width={112} height={42} className="h-7 w-auto object-contain" />
            <Image src="/assets/logos/scratchlogo.png" alt="Scratch" width={84} height={38} className="h-8 w-auto object-contain" />
            <Image src="/assets/logos/STEM-1.webp" alt="STEM.org accredited" width={118} height={42} className="h-8 w-auto object-contain" />
          </div>
          <p className="text-xs font-extrabold text-slate-600">© 2026 Meu Labs. All rights reserved.</p>
          <div className="flex gap-5 text-xs font-extrabold">
            <Link href="#" className="transition hover:text-orange">Privacy Policy</Link>
            <Link href="#" className="transition hover:text-orange">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

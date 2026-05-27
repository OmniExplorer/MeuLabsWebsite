import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

const courseLinks = [
  { href: '/courses', label: 'All Courses' },
  { href: '/courses/kx', label: 'STEM for Kids: Project Mars' },
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
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.45fr_1fr_1fr_1.35fr_1.65fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex">
            <Image src="/assets/logos/logo.svg" alt="Meu Labs" width={160} height={50} className="h-auto w-40" />
          </Link>
          <p className="mt-8 max-w-[300px] text-base font-extrabold leading-7 text-slate-300">Empowering young minds through project-based STEM, robotics, coding and creative learning.</p>
          <div className="mt-7 flex flex-nowrap gap-3">
            {socials.map(({ href, label, icon, className }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-white shadow-soft transition hover:-translate-y-1 ${className}`}>
                <Image src={icon} alt="" width={20} height={20} className="h-5 w-5 object-contain" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Courses">
          <h2 className="text-base font-medium">Courses</h2>
          <ul className="mt-6 grid gap-3 text-sm font-extrabold leading-6 text-slate-300">
            {courseLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition hover:text-orange">{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h2 className="text-base font-medium">Company</h2>
          <ul className="mt-6 grid gap-3 text-sm font-extrabold leading-6 text-slate-300">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition hover:text-orange">{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-base font-medium">Contact</h2>
          <div className="mt-6 grid gap-4 text-sm font-extrabold leading-6 text-slate-300">
            <a href={`tel:${siteConfig.phoneNumber}`} className="grid grid-cols-[1.5rem_1fr] gap-4 transition hover:text-orange">
              <Phone size={20} className="text-orange" aria-hidden />
              <span>{siteConfig.phoneNumber}</span>
            </a>
            <a href="mailto:info@meulabs.com" className="grid grid-cols-[1.5rem_1fr] gap-4 transition hover:text-orange">
              <Mail size={20} className="text-orange" aria-hidden />
              <span>info@meulabs.com</span>
            </a>
            <div className="grid grid-cols-[1.5rem_1fr] gap-4">
              <MapPin size={21} className="text-orange" aria-hidden />
              <span>No. 133, High Level Road, Nugegoda, Colombo, Sri Lanka</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-base font-medium">Our Locations</h2>
          <div className="relative mx-auto mt-7 aspect-[2.35/1] max-w-[310px]">
            <Image src="/assets/images/world-map.svg" alt="" fill className="object-contain opacity-75 invert" sizes="310px" />
            <span className="footer-map-pin absolute left-[62%] top-[50%] z-10 h-[30px] w-[30px] text-orange drop-shadow-[0_10px_12px_rgba(255,122,0,0.34)]">
              <MapPin size={30} fill="currentColor" strokeWidth={0} aria-hidden className="h-[30px] w-[30px]" />
              <span className="absolute left-1/2 top-[8px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white" />
            </span>
            <span className="footer-map-pin absolute left-[58%] top-[46%] z-20 h-[30px] w-[30px] text-[#65D96C] drop-shadow-[0_10px_12px_rgba(101,217,108,0.32)] [animation-delay:160ms]">
              <MapPin size={30} fill="currentColor" strokeWidth={0} aria-hidden className="h-[30px] w-[30px]" />
              <span className="absolute left-1/2 top-[8px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white" />
            </span>
            <span className="footer-map-pin absolute left-[83%] top-[58%] z-10 h-[30px] w-[30px] text-[#2FA8FF] drop-shadow-[0_10px_12px_rgba(47,168,255,0.34)] [animation-delay:320ms]">
              <MapPin size={30} fill="currentColor" strokeWidth={0} aria-hidden className="h-[30px] w-[30px]" />
              <span className="absolute left-1/2 top-[8px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white" />
            </span>
          </div>
          <div className="mt-6 grid gap-x-5 gap-y-4 text-sm font-extrabold sm:grid-cols-[max-content_max-content]">
            <span className="inline-flex whitespace-nowrap items-center gap-2"><span className="h-3 w-3 shrink-0 rounded-full bg-orange" />Sri Lanka</span>
            <span className="inline-flex whitespace-nowrap items-center gap-2"><span className="h-3 w-3 shrink-0 rounded-full bg-[#2FA8FF]" />New Zealand <small className="text-xs text-slate-400">Coming Soon</small></span>
            <span className="inline-flex whitespace-nowrap items-center gap-2 sm:col-span-2"><span className="h-3 w-3 shrink-0 rounded-full bg-[#65D96C]" />Maldives <small className="text-xs text-slate-400">Coming Soon</small></span>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F6F7] text-navy">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex flex-wrap items-center gap-7">
            <Image src="/assets/logos/icta.png" alt="ICTA" width={112} height={42} className="h-9 w-auto object-contain" />
            <Image src="/assets/logos/scratchlogo.png" alt="Scratch" width={84} height={38} className="h-10 w-auto object-contain" />
            <Image src="/assets/logos/STEM-1.webp" alt="STEM.org accredited" width={118} height={42} className="h-10 w-auto object-contain" />
          </div>
          <p className="text-sm font-extrabold text-slate-600">© 2026 Meu Labs. All rights reserved.</p>
          <div className="flex gap-7 text-sm font-extrabold">
            <Link href="#" className="transition hover:text-orange">Privacy Policy</Link>
            <Link href="#" className="transition hover:text-orange">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import { Brain, Building2, CheckCircle2, HeartHandshake, ShieldCheck, Sparkles, UsersRound } from 'lucide-react';
import { ButtonLink } from '@/components/ButtonLink';
import { CounselorCTA } from '@/components/CounselorCTA';
import { LogoScroller, type LogoScrollerItem } from '@/components/LogoScroller';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';

export const metadata: Metadata = {
  title: 'About | Meu Labs - Project-Based STEM Learning in Sri Lanka',
  description: 'Meu Labs helps students build confidence, creativity and real-world technical skills through project-based STEM learning.',
  openGraph: { images: ['/og-default.jpg'] }
};

const learningSections = [
  {
    eyebrow: 'Expert Instructors',
    title: 'Guided by instructors who bring real-world experience into the classroom.',
    body: 'Meu Labs instructors are trained to do more than deliver lessons. They guide students through building, testing, debugging, presenting, and improving real projects. We believe students learn best from mentors who understand how these skills are used beyond the classroom.',
    points: ['Safeguarding-trained instructors', 'STEM-certified teaching team', 'Industry-experienced mentors', 'Practical guidance through every project', 'Support with coding, robotics, design, electronics, AI, and creative technology'],
    image: '/assets/images/why-instructors.jpg',
    icon: UsersRound
  },
  {
    eyebrow: 'Personal Attention',
    title: 'Small groups, clear feedback, and personalised next steps.',
    body: 'We keep our learning environment personal so every student gets the support they need. With small-group classes and a strong instructor-to-student ratio, students receive regular guidance while parents stay informed about their progress.',
    points: ['Approximately 1 instructor for every 5 students', 'Regular parent updates on student work and progress', 'Instructor feedback on participation, creativity, teamwork, and technical understanding', 'Guidance based on each student’s confidence, interests, and readiness', 'Clear next-step recommendations at the end of each course'],
    image: '/assets/images/why-attention.jpg',
    icon: HeartHandshake
  },
  {
    eyebrow: 'Fun Learning Culture',
    title: 'Serious learning that still feels exciting.',
    body: 'Meu Labs is built around curiosity, energy, and student ownership. Students learn through missions, games, challenges, builds, videos, prototypes, showcases, and team activities that make technical learning feel meaningful and memorable.',
    points: ['Challenge-based learning', 'Team activities and friendly competition', 'Student showcases and project presentations', 'A culture where mistakes become part of learning', 'Students build confidence by creating things they are proud of'],
    image: '/assets/images/why-culture.jpg',
    icon: Sparkles
  },
  {
    eyebrow: 'Safe Creative Spaces',
    title: 'A safe, well-equipped space for building, coding, and experimenting.',
    body: 'Students need the right environment to explore technology confidently. Meu Labs provides structured, supervised learning spaces where students can safely work with computers, electronics, tools, prototypes, and creative equipment.',
    points: ['Fully equipped makerspace for hands-on learning', 'Access to devices for student work', 'Monitored internet access during sessions', 'Course-specific safety briefings before hands-on activities', 'PPE and safety practices for relevant tools and classroom spaces', 'Closed-off learning facility with a single monitored entrance and security personnel'],
    image: '/assets/images/why-space.jpg',
    icon: ShieldCheck
  },
  {
    eyebrow: 'World-Class Curriculum',
    title: 'A curriculum built for real-world learning.',
    body: 'Our curriculum is designed to help students build both technical depth and human skills. We use project-based learning, modern tools, and structured progression so students can explore widely, specialise deeply, and connect what they learn to real-world problems.',
    points: ['Project-Based Learning: students learn by building real projects', 'Mind, Hand, and Heart approach: thinking, making, and purpose-driven learning', 'T-shaped learning: broad exposure first, then deeper specialisation', 'Real-world tools across coding, robotics, AI, engineering, design, and media', 'Long-term progression from foundations to launchpad opportunities'],
    image: '/assets/images/why-curriculum.jpg',
    icon: Brain
  }
];

const accreditationLogos = [
  { type: 'image-group', srcs: ['/assets/logos/STEMMACCREDITED2.png', '/assets/logos/STEMCERTIFIED.png'], label: 'STEM.org', meta: 'Accredited / Certified' },
  { type: 'image', src: '/assets/logos/icta.png', label: 'ICTA', meta: 'Supported by' },
  { type: 'image', src: '/assets/logos/hatch-logo.png', label: 'Hatch', meta: 'Incubated' },
  { type: 'image', src: '/assets/logos/krya.png', label: 'Krya', meta: 'National Partner' },
  { type: 'image', src: '/assets/logos/dragonfly.png', label: 'dragonfly', meta: 'Trained by' },
  { type: 'image', src: '/assets/logos/scratchlogonew.png', label: 'Scratch', meta: 'SEC Partner' }
];

const trustedBy: LogoScrollerItem[] = [
  { name: 'British School', src: '/assets/logos/British_School_Colombo_crest.png' },
  { name: 'LPF Academy', src: '/assets/logos/LPF.png' },
  { name: 'French School', src: '/assets/logos/EFIC.png' },
  { name: 'Maple Bear', src: '/assets/logos/Maple.png' },
  { name: 'Burhani', src: '/assets/logos/Burhani.png' },
  { name: 'JPC', src: '/assets/logos/JPC.png' },
  { name: 'Musaeus', src: '/assets/logos/Musaeus_College_crest.png' },
  { name: 'St Claires', src: '/assets/logos/ST Claires.png' },
  { name: 'BALPP', src: '/assets/logos/BALPP.png' }
];

const builtBy: LogoScrollerItem[] = [
  { name: 'MIT', src: '/assets/logos/MIT-Massachusetts-Institute-of-Technology-Logo.png' },
  { name: 'UoL', src: '/assets/logos/UOL.png' },
  { name: 'Cambridge', src: '/assets/logos/Cambridge.png' },
  { name: 'SLIIT', src: '/assets/logos/sliit.png' },
  { name: 'IIT', src: '/assets/logos/iitlogo.png' },
  { name: 'UWC', src: '/assets/logos/UWC.png' },
  { name: 'UoC', src: '/assets/logos/UOC.png' },
  { name: 'CIMA', src: '/assets/logos/CIM,ALOGO.png' }
];

export default function AboutPage() {
  return (
    <main className="bg-cream text-navy">
      <PageHero
        eyebrow="About Meu Labs"
        title="A home for students who learn by doing."
        subtitle="Meu Labs helps students build confidence, creativity, and real-world technical skills through project-based learning, expert mentoring, and hands-on programmes in robotics, coding, design, data, AI, and engineering."
        imageSrc="/assets/images/why-space.jpg"
        imageAlt="Meu Labs learning space"
        imageStyle="contact"
      >
        <ButtonLink href="/courses">Explore Courses</ButtonLink>
        <ButtonLink href="/projects" variant="secondary">View Student Projects</ButtonLink>
      </PageHero>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[92rem]">
          <Reveal>
            <SectionHeader
              eyebrow="Built by the best. Trusted by the best."
              title="Built by the best. Trusted by the best."
              subtitle="Meu Labs brings together people, schools, partners, and institutions that believe students should learn beyond the textbook. Our programmes are shaped by real-world experience, strong academic foundations, and partnerships that drive future-ready learning."
              center
              titleClassName="!text-3xl !font-black !leading-[1.18] sm:!text-5xl"
              subtitleClassName="mx-auto max-w-5xl text-sm font-bold leading-6"
            />
          </Reveal>
          <Reveal animation="pop">
            <div className="rounded-[22px] border border-orange/15 bg-[#FFF8EF] p-4 shadow-[0_22px_60px_rgba(13,53,87,0.09)] sm:p-5">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
                {accreditationLogos.map((logo) => (
                  <LogoTile key={`${logo.label}-${logo.meta}`} logo={logo} />
                ))}
              </div>
              <ProofLogoRow
                title="Trusted by"
                body="Schools, partners, and organisations Meu Labs works with."
                icon={Building2}
                items={trustedBy}
              />
              <ProofLogoRow
                title="Built by"
                body="Universities, companies, and institutions connected to the Meu Labs team."
                icon={UsersRound}
                items={builtBy}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[92rem] gap-7">
          {learningSections.map((section, index) => (
            <LearningFeature key={section.title} section={section} reverse={index % 2 === 1} delay={index * 80} />
          ))}
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <Reveal animation="pop">
          <CounselorCTA source="/about" compact />
        </Reveal>
      </section>
    </main>
  );
}

function LearningFeature({
  section,
  reverse,
  delay
}: {
  section: {
    eyebrow: string;
    title: string;
    body: string;
    points: string[];
    image: string;
    icon: LucideIcon;
  };
  reverse?: boolean;
  delay?: number;
}) {
  const Icon = section.icon;

  return (
    <Reveal delay={delay}>
      <article className="overflow-hidden rounded-[18px] border border-orange/20 bg-white shadow-[0_18px_48px_rgba(13,53,87,0.08)]">
        <div className={`grid gap-0 lg:grid-cols-2 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
          <div className="p-6 sm:p-8 lg:p-10">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#FF7A00] to-[#FF4F1F] text-white shadow-soft">
              <Icon size={22} strokeWidth={2.5} aria-hidden />
            </span>
            <p className="mt-5 text-sm font-black uppercase tracking-[0.08em] text-orange">{section.eyebrow}</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-[1.16] text-navy lg:text-4xl">{section.title}</h2>
            <p className="mt-5 max-w-3xl text-base font-bold leading-8 text-slate-700">{section.body}</p>
            <div className="mt-6 grid gap-3">
              {section.points.map((point) => (
                <div key={point} className="grid grid-cols-[1.5rem_1fr] gap-3 text-sm font-extrabold leading-6 text-navy">
                  <CheckCircle2 size={18} className="mt-0.5 text-orange" aria-hidden />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[320px] lg:min-h-full">
            <Image src={section.image} alt="" fill className="object-cover" sizes="(min-width: 1024px) 46vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function LogoTile({
  logo
}: {
  logo: {
    type: string;
    src?: string;
    srcs?: string[];
    label: string;
    meta: string;
    color?: string;
  };
}) {
  return (
    <div className="grid min-h-24 place-items-center rounded-xl bg-white p-4 text-center shadow-[0_10px_26px_rgba(13,53,87,0.06)]">
      <div className="grid min-h-[3.4rem] place-items-center">
        {logo.type === 'image-group' && logo.srcs ? (
          <div className="mx-auto grid w-full max-w-40 grid-cols-2 items-center justify-items-center gap-4">
            {logo.srcs.map((src) => (
              <Image key={src} src={src} alt={logo.label} width={86} height={70} className="max-h-14 w-auto object-contain" />
            ))}
          </div>
        ) : logo.type === 'image' && logo.src ? (
          <Image src={logo.src} alt={logo.label} width={128} height={52} className="max-h-10 w-auto object-contain" />
        ) : (
          <span className={`text-2xl font-black leading-none ${logo.color ?? 'text-navy'}`}>{logo.label}</span>
        )}
      </div>
      <p className="text-[10px] font-bold leading-tight text-slate-500">{logo.meta}</p>
    </div>
  );
}

function ProofLogoRow({
  title,
  body,
  icon: Icon,
  items
}: {
  title: string;
  body: string;
  icon: LucideIcon;
  items: LogoScrollerItem[];
}) {
  return (
    <div className="mt-4 rounded-[18px] bg-white p-4 shadow-[0_10px_26px_rgba(13,53,87,0.06)]">
      <div className="grid gap-5 xl:grid-cols-[20rem_1fr] xl:items-center">
        <div className="rounded-xl border border-orange/15 bg-[#FFF8EF] p-5">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#FF7A00] to-[#FF4F1F] text-white shadow-soft">
              <Icon size={23} strokeWidth={2.5} aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-black uppercase tracking-[0.08em] text-orange">{title}</p>
              <h3 className="mt-1 text-xl font-black leading-[1.16] text-navy">{title === 'Trusted by' ? 'Leading schools, partners and organisations' : 'People shaped by world-class universities and companies'}</h3>
            </div>
          </div>
          <p className="mt-4 text-sm font-bold leading-6 text-slate-600">{body}</p>
        </div>

        <LogoScroller title={title} items={items} />
      </div>
    </div>
  );
}

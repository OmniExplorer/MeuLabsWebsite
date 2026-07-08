import type { Metadata } from 'next';
import { Clock3, Mail, MapPin } from 'lucide-react';
import { ButtonLink } from '@/components/ButtonLink';
import { SectionHeader } from '@/components/SectionHeader';
import { nzConfig } from '@/data/regions';

export const metadata: Metadata = {
  title: 'Contact | Meu Labs - Talk to a Student Counselor',
  description: "Talk to a Meu Labs student counselor to choose the best course for your child's age, interests, experience level and goals.",
  openGraph: { images: ['/og-default.jpg'] }
};

export default function NzContactPage() {
  return (
    <main className="bg-cream text-navy">
      <section className="bg-[radial-gradient(circle_at_78%_18%,rgba(255,122,0,0.18),transparent_30%),linear-gradient(120deg,#F8F1E2_0%,#FFF6EA_58%,#E7FBFF_100%)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[92rem] gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeader
            eyebrow="Talk to Meu Labs"
            title="Not sure which course is right for your child?"
            subtitle="Our student counselors can help you choose the best starting point based on your child's age, interests, experience level, and goals."
            titleAs="h1"
            className="mb-0"
          />
          <article className="rounded-lg border border-orange/20 bg-white p-6 shadow-[0_16px_40px_rgba(13,53,87,0.08)]">
            <h2 className="text-2xl font-black">Meu Labs New Zealand</h2>
            <div className="mt-6 grid gap-4 text-sm font-bold text-slate-700">
              <ContactRow icon={MapPin} label="Location" value={nzConfig.address} />
              <ContactRow icon={Mail} label="Email" value={nzConfig.email} href={`mailto:${nzConfig.email}`} />
              <ContactRow icon={Clock3} label="Hours" value={nzConfig.openingHours} />
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`mailto:${nzConfig.email}`} external>
                <Mail size={18} aria-hidden />
                Email Us
              </ButtonLink>
              <ButtonLink href="/nz/courses" variant="secondary">View Courses</ButtonLink>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <Icon size={18} className="mt-0.5 shrink-0 text-orange" aria-hidden />
      <span>
        <span className="block text-xs font-black uppercase tracking-[0.12em] text-slate-500">{label}</span>
        <span className="mt-1 block text-base font-black text-navy">{value}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className="flex gap-3 rounded-lg bg-creamAlt p-4 transition hover:text-orange">
        {content}
      </a>
    );
  }

  return <div className="flex gap-3 rounded-lg bg-creamAlt p-4">{content}</div>;
}

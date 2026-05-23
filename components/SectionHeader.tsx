type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  eyebrowStyle?: 'default' | 'hero';
};

export function SectionHeader({ eyebrow, title, subtitle, center, eyebrowStyle = 'default' }: SectionHeaderProps) {
  return (
    <div className={`mb-10 max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && eyebrowStyle === 'hero' && (
        <div className={`mb-5 border-l-4 border-orange pl-5 ${center ? 'mx-auto w-fit text-left' : ''}`}>
          <p className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">{eyebrow}</p>
        </div>
      )}
      {eyebrow && eyebrowStyle === 'default' && <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-orange">{eyebrow}</p>}
      <h2 className="text-3xl font-extrabold leading-tight text-navy md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg leading-8 text-slate-700">{subtitle}</p>}
    </div>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  eyebrowStyle?: 'default' | 'hero';
  titleAs?: 'h1' | 'h2' | 'h3';
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center,
  eyebrowStyle = 'default',
  titleAs: TitleTag = 'h2',
  className = '',
  titleClassName = '',
  subtitleClassName = ''
}: SectionHeaderProps) {
  return (
    <div className={`mb-10 w-full ${center ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && (
        <div className={`mb-6 border-l-4 border-orange pl-5 ${center ? 'mx-auto w-fit text-left' : ''}`}>
          <p className="bg-gradient-to-r from-[#FF7A00] to-[#FF4F1F] bg-clip-text text-xl font-black uppercase leading-snug tracking-[0.08em] text-transparent md:text-2xl">{eyebrow}</p>
        </div>
      )}
      <TitleTag className={`text-[2.85rem] font-normal leading-[1.05] text-navy md:text-[4rem] ${titleClassName}`}>{title}</TitleTag>
      {subtitle && <p className={`mt-5 w-full text-lg font-extrabold leading-8 text-slate-600 ${subtitleClassName}`}>{subtitle}</p>}
    </div>
  );
}

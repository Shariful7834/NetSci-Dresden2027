import { cn } from '../../lib/cn';

/**
 * SectionLabel — the gold-divider eyebrow label shown above section headings.
 */
interface Props {
  text: string;
  /** Centre the label and add a matching divider on the right. */
  center?: boolean;
  /** Gold text for dark backgrounds (default is blue for light backgrounds). */
  dark?: boolean;
  className?: string;
}

export default function SectionLabel({ text, center = false, dark = false, className = '' }: Props) {
  return (
    <div className={cn('flex items-center gap-3', center && 'justify-center', className)}>
      <div className="h-px w-10 bg-tu-gold flex-shrink-0" />
      <span
        className={cn(
          'text-xs uppercase tracking-[0.25em] font-semibold',
          dark ? 'text-tu-gold' : 'text-tu-blue'
        )}
      >
        {text}
      </span>
      {center && <div className="h-px w-10 bg-tu-gold flex-shrink-0" />}
    </div>
  );
}

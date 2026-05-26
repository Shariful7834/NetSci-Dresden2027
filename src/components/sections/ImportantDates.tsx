import SectionLabel from '../ui/SectionLabel';
import { dates } from '../../data/conference';
import { useTranslations } from '../../i18n/utils';
import { cn } from '../../lib/cn';

const t = useTranslations();

export default function ImportantDates() {
  return (
    <section id="registration" className="px-4 lg:px-8 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-card border border-tu-navy/5 p-8 md:p-12" data-reveal>
          <SectionLabel text={t('dates.label')} className="mb-5" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-tu-deep">{t('dates.heading')}</h2>

          <ul className="mt-8 divide-y divide-tu-navy/10">
            {dates.map((d) => (
              <li
                key={d.label}
                className={cn(
                  'flex items-center justify-between gap-4 py-4',
                  d.primary && 'bg-tu-ice/60 -mx-4 px-4 rounded-lg my-2'
                )}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className={cn(
                      'shrink-0 inline-block w-2.5 h-2.5 rounded-full',
                      d.done ? 'bg-tu-ink/20' : d.primary ? 'bg-tu-gold' : d.highlight ? 'bg-tu-ember' : 'bg-tu-blue'
                    )}
                  />
                  <span
                    className={cn(
                      'font-medium',
                      d.done ? 'line-through text-tu-ink/40' : d.primary ? 'text-tu-deep text-lg' : 'text-tu-ink'
                    )}
                  >
                    {d.label}
                  </span>
                </div>
                <span
                  className={cn(
                    'font-mono text-sm md:text-base shrink-0',
                    d.done ? 'line-through text-tu-ink/40' : d.primary ? 'text-tu-deep font-semibold' : 'text-tu-ink/70'
                  )}
                >
                  {d.date}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

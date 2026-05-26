import SectionLabel from '../ui/SectionLabel';
import { stats } from '../../data/conference';
import { useTranslations } from '../../i18n/utils';
import { cn } from '../../lib/cn';

const t = useTranslations();

export default function About() {
  return (
    <section id="about" className="bg-tu-deep text-white px-6 lg:px-8 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left: heading + description */}
          <div className="lg:col-span-3" data-reveal>
            <SectionLabel text={t('about.label')} dark className="mb-7" />

            <h2 className="font-display text-5xl md:text-6xl font-black text-white leading-[1.05] text-balance">
              {t('about.heading')}
              <br />
              <em className="text-tu-gold not-italic">{t('about.place')}</em>
            </h2>

            <p className="mt-7 text-lg leading-relaxed text-white/80 max-w-xl">
              {t('about.body1.pre')}{' '}
              <a
                href="https://netscisociety.net"
                className="text-tu-gold font-medium underline decoration-tu-gold/40 decoration-2 underline-offset-4 hover:decoration-tu-gold transition-colors"
              >
                {t('about.body1.link')}
              </a>
              {t('about.body1.post')}
            </p>

            <p className="mt-4 text-lg leading-relaxed text-white/65 max-w-xl">{t('about.body2')}</p>
          </div>

          {/* Right: stats 2×2 grid */}
          <div className="lg:col-span-2 grid grid-cols-2 rounded-2xl overflow-hidden border border-white/10">
            {stats.map((s, i) => (
              <div
                key={s.label}
                data-reveal
                style={{ ['--reveal-delay' as string]: `${i * 80}ms` }}
                className={cn(
                  'bg-tu-navy/70 p-8 flex flex-col',
                  i % 2 === 1 && 'border-l border-white/10',
                  i >= 2 && 'border-t border-white/10'
                )}
              >
                <span className="font-display text-5xl lg:text-6xl font-black text-tu-gold leading-none">{s.value}</span>
                <span className="mt-3 text-[0.68rem] uppercase tracking-[0.2em] text-white/50 font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

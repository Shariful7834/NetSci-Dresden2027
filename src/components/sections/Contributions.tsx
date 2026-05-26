import SectionLabel from '../ui/SectionLabel';
import { contributions } from '../../data/conference';
import { useTranslations } from '../../i18n/utils';
import { landingOnly } from '../../data/site';

const t = useTranslations();

export default function Contributions() {
  const printHref = landingOnly ? '#' : '/practical';

  return (
    <section id="contribute" className="px-4 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionLabel text={t('contrib.label')} center className="mb-4" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-tu-deep">{t('contrib.heading')}</h2>
          <p className="mt-4 text-tu-ink/70">{t('contrib.sub')}</p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {contributions.map((c, i) => (
            <article
              key={c.title}
              data-reveal
              className="group bg-white rounded-2xl border border-tu-navy/10 p-7 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
              style={{ ['--reveal-delay' as string]: `${i * 90}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-tu-ice flex items-center justify-center group-hover:bg-tu-gold/20 transition-colors">
                <svg className="w-6 h-6 text-tu-navy" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                </svg>
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-tu-deep">{c.title}</h3>
              <div className="mt-1 text-sm font-mono text-tu-blue tracking-tight">{c.spec}</div>
              <p className="mt-3 text-tu-ink/70 leading-relaxed text-sm">{c.desc}</p>
            </article>
          ))}
        </div>

        {/* Local printing info */}
        <div className="mt-10 bg-tu-deep text-white rounded-2xl p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-6 items-center" data-reveal>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-tu-gold font-semibold mb-2">{t('contrib.print.label')}</div>
            <h3 className="font-display text-2xl font-bold">{t('contrib.print.heading')}</h3>
            <p className="mt-2 text-white/75 text-sm leading-relaxed max-w-xl">{t('contrib.print.body')}</p>
            <div className="mt-4 text-sm font-mono text-white/90 space-y-0.5">
              <div>Dresden Print Werkstatt · Münchner Platz 3, 01187 Dresden</div>
              <div className="text-white/60">Mon — Fri, 09:00 – 17:30 · +49 351 000 0000</div>
            </div>
          </div>
          <a
            href={printHref}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-tu-deep font-semibold text-sm hover:bg-tu-gold transition-colors whitespace-nowrap"
          >
            {t('contrib.print.cta')}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

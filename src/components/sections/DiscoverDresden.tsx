import SectionLabel from '../ui/SectionLabel';
import { travelItems } from '../../data/conference';
import { useTranslations } from '../../i18n/utils';
import { landingOnly } from '../../data/site';
import type { OptimizedImage } from './Hero';

const t = useTranslations();

interface Props {
  image: OptimizedImage;
}

export default function DiscoverDresden({ image }: Props) {
  const travelHref = landingOnly ? '#' : '/venue/travel';

  return (
    <section id="venue" className="px-4 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          {/* Video placeholder card */}
          <div className="relative rounded-2xl overflow-hidden shadow-soft aspect-video bg-tu-deep group cursor-pointer" data-reveal>
            <img
              src={image.src}
              srcSet={image.srcSet}
              sizes="(min-width: 1024px) 55vw, 100vw"
              alt="Dresden — Florence on the Elbe"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tu-deep/80 via-tu-deep/30 to-transparent" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-soft group-hover:scale-110 group-hover:bg-tu-gold transition-all duration-300">
                <svg className="w-8 h-8 text-tu-deep ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-tu-gold font-semibold">02:14</div>
              <div className="text-white font-display text-xl mt-1">{t('discover.caption')}</div>
            </div>
          </div>

          {/* Text content */}
          <div data-reveal style={{ ['--reveal-delay' as string]: '100ms' }}>
            <SectionLabel text={t('discover.label')} className="mb-4" />
            <h2 className="font-display text-3xl md:text-5xl font-bold text-tu-deep leading-[1.1] text-balance">
              {t('discover.heading')}
            </h2>
            <p className="mt-5 text-tu-ink/80 text-lg leading-relaxed">{t('discover.body')}</p>

            <ul className="mt-6 space-y-3 text-tu-ink/80">
              {travelItems.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-tu-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    <strong className="text-tu-deep font-semibold">{item.label}</strong> — {item.val}
                  </span>
                </li>
              ))}
            </ul>

            <a href={travelHref} className="mt-7 inline-flex items-center gap-2 text-tu-navy font-semibold hover:text-tu-ember transition-colors">
              {t('discover.cta')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

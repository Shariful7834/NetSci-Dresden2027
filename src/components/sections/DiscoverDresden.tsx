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
          {/* Hyperlapse video — Dresden silhouette by twosyde media GmbH */}
          <div className="relative rounded-2xl overflow-hidden shadow-soft aspect-video bg-tu-deep group" data-reveal>
            <video
              className="absolute inset-0 h-full w-full object-cover object-center"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={image.src}
            >
              <source src="/dresden-hyperlapse.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-tu-deep/70 via-transparent to-transparent pointer-events-none" />

            {/* Caption + credit */}
            <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
              <div className="text-xs uppercase tracking-[0.2em] text-tu-gold font-semibold">
                Video · twosyde media GmbH
              </div>
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

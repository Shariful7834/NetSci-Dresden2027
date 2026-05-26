import { partners, socials } from '../../data/partners';
import { useTranslations } from '../../i18n/utils';
import { landingOnly } from '../../data/site';

const t = useTranslations();

// Landing-only demo: only Registration links; the footer keeps its full layout.
const livePaths = new Set(['/registration']);
const L = (path: string) => (landingOnly && !livePaths.has(path) ? '#' : path);

export default function Footer() {
  return (
    <footer className="bg-tu-deep text-white">
      {/* Partners strip */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-10">
          <div className="text-xs uppercase tracking-[0.25em] text-tu-gold font-semibold text-center mb-6">
            {t('footer.partners')}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-white/60">
            {partners.map((p) => (
              <span key={p} className="font-display text-sm md:text-base tracking-wide hover:text-white transition-colors cursor-default">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-12 grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-8">
        {/* Brand block */}
        <div>
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-tu-gold flex items-center justify-center">
              <svg viewBox="0 0 44 44" className="w-6 h-6" fill="none">
                <circle cx="22" cy="10" r="3" fill="#001A33" />
                <circle cx="10" cy="28" r="3" fill="#001A33" />
                <circle cx="34" cy="28" r="3" fill="#001A33" />
                <path d="M22 10 L10 28 M22 10 L34 28 M10 28 L34 28" stroke="#001A33" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="leading-none">
              <div className="font-display text-xl font-black">NetSci</div>
              <div className="text-[10px] tracking-[0.18em] uppercase text-tu-gold mt-0.5">Dresden ★</div>
            </div>
          </div>
          <p className="mt-4 text-white/60 text-sm max-w-sm leading-relaxed">{t('footer.tagline')}</p>

          <div className="mt-6 flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-tu-gold font-semibold mr-1">{t('footer.follow')}</span>
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-tu-gold hover:text-tu-deep flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={s.d} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Conference links */}
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-tu-gold font-semibold mb-4">{t('footer.col.conference')}</div>
          <ul className="space-y-2.5 text-sm text-white/75">
            <li><a href={L('/registration')} className="hover:text-tu-gold transition-colors">{t('nav.registration')}</a></li>
            <li><a href={L('/program')} className="hover:text-tu-gold transition-colors">{t('nav.program')}</a></li>
            <li><a href={L('/program/speakers')} className="hover:text-tu-gold transition-colors">{t('nav.program.speakers')}</a></li>
            <li><a href={L('/calls')} className="hover:text-tu-gold transition-colors">{t('nav.calls')}</a></li>
          </ul>
        </div>

        {/* Practical links */}
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-tu-gold font-semibold mb-4">{t('footer.col.practical')}</div>
          <ul className="space-y-2.5 text-sm text-white/75">
            <li><a href={L('/venue')} className="hover:text-tu-gold transition-colors">{t('nav.venue')}</a></li>
            <li><a href={L('/venue/travel')} className="hover:text-tu-gold transition-colors">{t('nav.venue.travel')}</a></li>
            <li><a href={L('/venue/hotels')} className="hover:text-tu-gold transition-colors">{t('nav.venue.hotels')}</a></li>
            <li><a href={L('/about/code-of-conduct')} className="hover:text-tu-gold transition-colors">{t('nav.about.conduct')}</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-tu-gold font-semibold mb-4">{t('footer.col.contact')}</div>
          <ul className="space-y-2.5 text-sm text-white/75">
            <li>chair@netsci-dresden.de</li>
            <li>support@netsci-dresden.de</li>
            <li className="text-white/50 pt-1 text-xs">TU Dresden, 01062 Dresden</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div>{t('footer.rights')}</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-tu-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-tu-gold transition-colors">Imprint</a>
            <a href="#" className="hover:text-tu-gold transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

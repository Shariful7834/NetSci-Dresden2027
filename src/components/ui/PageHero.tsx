/**
 * PageHero — banner at the top of every inner page: eyebrow, title, lede, crumbs.
 */
interface Crumb {
  label: string;
  href?: string;
}

interface Props {
  eyebrow?: string;
  title: string;
  lede?: string;
  crumbs?: Crumb[];
}

export default function PageHero({ eyebrow, title, lede, crumbs = [] }: Props) {
  return (
    <section className="relative bg-tu-deep text-white overflow-hidden">
      {/* subtle network pattern */}
      <div className="absolute inset-0 opacity-[0.07]" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="net" width="48" height="48" patternUnits="userSpaceOnUse">
              <circle cx="4" cy="4" r="1.5" fill="#C9A24B" />
              <path d="M4 4 L48 48 M4 4 L48 4 M4 4 L4 48" stroke="#fff" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#net)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 lg:px-8 pt-32 pb-16">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-white/55">
              {crumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-2">
                  {c.href ? (
                    <a href={c.href} className="hover:text-tu-gold transition-colors">{c.label}</a>
                  ) : (
                    <span className="text-white/80">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && <span aria-hidden="true">/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && (
          <div className="text-xs uppercase tracking-[0.25em] text-tu-gold font-semibold mb-3">{eyebrow}</div>
        )}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] text-balance max-w-3xl">
          {title}
        </h1>
        {lede && <p className="mt-5 text-lg text-white/75 max-w-2xl leading-relaxed">{lede}</p>}
      </div>
    </section>
  );
}

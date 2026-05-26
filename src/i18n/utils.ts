import { ui, defaultLang, type Lang } from './ui';

/** Returns a translation function for the active locale (English-only for now). */
export function useTranslations(lang: Lang = defaultLang) {
  return function t(key: keyof (typeof ui)['en']): string {
    return ui[lang][key];
  };
}

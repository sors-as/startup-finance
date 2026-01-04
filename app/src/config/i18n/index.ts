import { useLocaleStore } from '@/state/localeStore';
import { translations as en } from './en';
import { translations as no } from './no';

export type TranslationKey = keyof typeof en;
export type Translations = typeof en;

const locales = {
  'en': en,
  'nb-NO': no,
  'no': no,
} as const;

export function useTranslation() {
  const locale = useLocaleStore((state) => state.locale);
  const t = (key: TranslationKey): string => {
    const translations = locales[locale as keyof typeof locales] || locales['en'];
    return translations[key] || en[key] || key;
  };
  
  return { t, locale };
}

// Helper function for non-hook contexts (use sparingly)
export const t = (key: TranslationKey, locale: string = 'en'): string => {
  const translations = locales[locale as keyof typeof locales] || locales['en'];
  return translations[key] || en[key] || key;
};

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type SupportedLocale = 'en' | 'nb-NO';

interface LocaleState {
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => void;
}

/**
 * Detect user's preferred language from browser settings
 * Returns 'nb-NO' for Norwegian users, 'en' for others
 */
const detectBrowserLanguage = (): SupportedLocale => {
  if (typeof window === 'undefined') return 'en';
  
  const browserLang = navigator.language.toLowerCase();
  
  // Check for Norwegian variants
  if (browserLang.startsWith('nb') || browserLang.startsWith('no') || browserLang.startsWith('nn')) {
    return 'nb-NO';
  }
  
  // Default to English
  return 'en';
};

export const useLocaleStore = create<LocaleState>()(
  persist(
    (set) => ({
      locale: detectBrowserLanguage(),
      setLocale: (locale: SupportedLocale) => set({ locale }),
    }),
    {
      name: 'locale-storage',
    }
  )
);

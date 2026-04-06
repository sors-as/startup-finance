import React from 'react';
import { useLocaleStore, type SupportedLocale } from '@/state/localeStore';
import { useTranslation } from '@config/i18n';

const LOCALE_LABELS: Record<SupportedLocale, string> = {
  'en': 'EN',
  'nb-NO': 'NO',
};

/**
 * Language picker component matching sors.no's pill-style switcher.
 * Displays text labels (EN / NO) instead of flags.
 */
export const LanguagePicker: React.FC = () => {
  const { locale, setLocale } = useLocaleStore();
  const { t } = useTranslation();

  const languages: Array<{ code: SupportedLocale; name: string }> = [
    { code: 'en', name: t('language.english') },
    { code: 'nb-NO', name: t('language.norwegian') },
  ];

  return (
    <div
      className="flex items-center gap-1 rounded-full bg-neutral-100 p-1"
      role="group"
      aria-label="Language switcher"
    >
      {languages.map(({ code, name }) => {
        const isActive = locale === code;

        return (
          <button
            key={code}
            onClick={() => setLocale(code)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
              isActive
                ? 'bg-neutral-950 text-white'
                : 'text-neutral-600 hover:text-neutral-950'
            }`}
            aria-label={`${t('language.switchTo')} ${name}`}
            aria-current={isActive ? 'true' : undefined}
            title={name}
          >
            {LOCALE_LABELS[code]}
          </button>
        );
      })}
    </div>
  );
};

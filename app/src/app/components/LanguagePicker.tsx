import React from 'react';
import { useLocaleStore, type SupportedLocale } from '@/state/localeStore';
import { useTranslation } from '@config/i18n';

/**
 * Flag SVG components for language selection
 */
const UKFlag: React.FC<{ className?: string }> = ({ className = "w-6 h-4" }) => (
  <svg className={className} viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
    <clipPath id="s">
      <path d="M0,0 v30 h60 v-30 z"/>
    </clipPath>
    <clipPath id="t">
      <path d="M30,15 h30 v15 z v-15 h-30 z h-30 v15 z v-15 h30 z"/>
    </clipPath>
    <g clipPath="url(#s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
    </g>
  </svg>
);

const NorwayFlag: React.FC<{ className?: string }> = ({ className = "w-6 h-4" }) => (
  <svg className={className} viewBox="0 0 220 160" xmlns="http://www.w3.org/2000/svg">
    <rect width="220" height="160" fill="#BA0C2F"/>
    <rect x="0" y="60" width="220" height="40" fill="#fff"/>
    <rect x="60" y="0" width="40" height="160" fill="#fff"/>
    <rect x="0" y="70" width="220" height="20" fill="#00205B"/>
    <rect x="70" y="0" width="20" height="160" fill="#00205B"/>
  </svg>
);

/**
 * Language picker component with flag buttons
 * Allows users to switch between English (UK) and Norwegian
 */
export const LanguagePicker: React.FC = () => {
  const { locale, setLocale } = useLocaleStore();
  const { t } = useTranslation();

  const languages: Array<{ code: SupportedLocale; flag: React.FC<{ className?: string }>; name: string }> = [
    { code: 'en', flag: UKFlag, name: t('language.english') },
    { code: 'nb-NO', flag: NorwayFlag, name: t('language.norwegian') },
  ];

  return (
    <div className="flex items-center gap-2">
      {languages.map(({ code, flag: Flag, name }) => {
        const isActive = locale === code;
        
        return (
          <button
            key={code}
            onClick={() => setLocale(code)}
            className={`
              relative rounded overflow-hidden transition-all duration-200
              ${isActive 
                ? 'ring-2 ring-nt84orange ring-offset-2 ring-offset-white dark:ring-offset-gray-900 opacity-100' 
                : 'opacity-50 hover:opacity-75'
              }
            `}
            aria-label={`${t('language.switchTo')} ${name}`}
            title={name}
          >
            <Flag className="w-8 h-6 md:w-10 md:h-7" />
          </button>
        );
      })}
    </div>
  );
};

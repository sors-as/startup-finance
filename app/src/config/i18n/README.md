# Norwegian Translation (i18n) System

## Overview
This directory contains the internationalization system for SORS Finance Calculator with Norwegian translations.

## Architecture
- `index.ts`: Translation system with `useTranslation()` hook and `t()` helper
- `en.ts`: English translations (base/fallback)
- `no.ts`: Norwegian (bokmål) translations

## Usage in Components

```tsx
import { useTranslation } from '@config/i18n';

function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('page.title')}</h1>
    </div>
  );
}
```

## Adding New Translations

1. Add key to `en.ts` first (English is fallback)
2. Add Norwegian translation to `no.ts`
3. Use in component: `t('your.new.key')`

## Upstream Synchronization

When merging from upstream (1984vc/startup-finance):

1. **New components**: Add `useTranslation()` hook and translate strings
2. **Changed text**: Update `en.ts` with new English text, then `no.ts` with Norwegian
3. **Code conflicts**: Translation calls like `t('key')` rarely conflict with upstream string changes

## Fallback Behavior

- If Norwegian translation missing → Falls back to English
- If English translation missing → Returns the key itself
- Locale set in `app/src/config/branding.ts` (BRANDING.locale)

## Testing Translations

```bash
# Test with Norwegian (default)
pnpm run dev:local

# Test with English (temporarily change BRANDING.locale to 'en')
```

## Maintenance

Keep translations synced:
- When upstream adds new features, add keys to both `en.ts` and `no.ts`
- Search codebase for hardcoded strings: `grep -r "\"[A-Z]" app/src/app/components/`
- Ensure all user-facing text uses `t()` function

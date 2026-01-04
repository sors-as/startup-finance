# Upstream Merge Guide

How to merge updates from 1984vc/startup-finance while keeping SORS customizations.

## Setup (one-time)

```bash
# Add upstream remote
git remote add upstream https://github.com/1984vc/startup-finance.git

# Fetch upstream
git fetch upstream
```

## Regular Sync Process

```bash
# 1. Fetch latest from upstream
git fetch upstream

# 2. Merge upstream/main into your branch
git merge upstream/main

# 3. Resolve conflicts (see below)

# 4. Test locally
pnpm run dev:local

# 5. Push to your fork
git push origin main
```

## Handling Conflicts

### Branding Files (KEEP YOURS)
- `app/src/config/branding.ts` → Keep SORS version
- `app/src/config/i18n/*` → Keep SORS version
- `app/tailwind.config.js` → Keep SORS colors
- `app/src/app/index.css` → Keep SORS CSS variables

### Component Files (MERGE CAREFULLY)
- If upstream changed a component you translated:
  - Take upstream changes
  - Re-add `import { useTranslation } from '@config/i18n';`
  - Re-add `const { t } = useTranslation();`
  - Replace strings with `t('key')` calls

### Example Conflict Resolution

**Upstream changed:**
```tsx
<button>Save</button>
```

**You have:**
```tsx
const { t } = useTranslation();
<button>{t('action.save')}</button>
```

**Resolution:**
Keep your version (already translated).

**Upstream added new feature:**
```tsx
<button>Export PDF</button>
```

**You need to:**
1. Add to `en.ts`: `'action.export': 'Export PDF'`
2. Add to `no.ts`: `'action.export': 'Eksporter PDF'`
3. Update component: `<button>{t('action.export')}</button>`

## Best Practices

1. **Merge regularly** (weekly/monthly) to avoid large conflicts
2. **Test thoroughly** after each merge
3. **Keep translation keys stable** - don't rename keys unnecessarily
4. **Document customizations** in comments

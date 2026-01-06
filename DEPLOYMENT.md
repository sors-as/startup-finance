# Deployment Guide

## Førstegangs oppsett i Cloudflare

### 1. Opprett D1 databaser

```bash
cd worker
wrangler d1 create startup-finance-worksheets
wrangler d1 create startup-finance-worksheets-staging
```

Noter database ID-ene og oppdater `wrangler.production.toml` og `wrangler.staging.toml`.

### 2. Oppdater worker-navn i wrangler-filer

Endre `name` i begge wrangler-filer til ditt eget worker-navn.

### 3. Sett opp Resend API-nøkkel

```bash
wrangler secret put RESEND_API_KEY --env production
wrangler secret put RESEND_API_KEY --env staging
```

### 4. Kjør migrasjoner

```bash
wrangler d1 migrations apply DB --env production
wrangler d1 migrations apply DB --env staging
```

## Deploy

```bash
# Staging
pnpm run deploy:staging

# Production
pnpm run deploy:production
```

## GitHub Actions

Legg til `CLOUDFLARE_API_TOKEN` som repository secret.

- Push til `v3` → Production
- Push til `v3_staging` → Staging

## E-post konfigurasjon

Konfigureres i `worker/src/utils/emailConfig.ts`:
- `FROM_EMAIL`: Avsenderadresse
- `CC_EMAIL`: Kopi-adresse
- Rate limit: 5 e-poster per worksheet per time

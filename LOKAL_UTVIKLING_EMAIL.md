# Lokal utvikling - E-post funksjon

## Snarveien (TL;DR)

```bash
# 1. Installer avhengigheter
pnpm run install:all

# 2. Sett opp lokal database (med e-post tabell)
cd worker
pnpm run db:init
cd ..

# 3. Opprett .env.local fil for Resend API nøkkel (valgfritt for testing)
# Se detaljer nedenfor

# 4. Start applikasjonen lokalt
pnpm run dev:local
```

Applikasjonen kjører nå på:
- **Frontend**: http://localhost:5173
- **Backend Worker**: http://localhost:8787

## Detaljerte steg

### 1. Installere avhengigheter

```bash
pnpm run install:all
```

Dette installerer alle nødvendige pakker for både frontend og backend.

### 2. Sette opp lokal database

E-post funksjonen krever en ny `email_sends` tabell. Kjør:

```bash
cd worker
pnpm run db:init
cd ..
```

Dette oppretter en lokal SQLite database i `worker/.miniflare/` med alle nødvendige tabeller, inkludert den nye `email_sends` tabellen for rate limiting.

### 3. Konfigurere Resend API nøkkel (valgfritt for lokal testing)

For å faktisk sende e-poster lokalt, trenger du en Resend API nøkkel.

#### Alternativ A: Bruke .env.local fil (anbefalt for lokal testing)

Opprett en fil `worker/.env.local`:

```bash
# worker/.env.local
RESEND_API_KEY=re_your_api_key_here
```

Merk: `.env.local` er allerede i `.gitignore` og vil ikke bli commitet.

#### Alternativ B: Sette secret lokalt (mer likt produksjon)

```bash
cd worker
wrangler secret put RESEND_API_KEY --env local
# Lim inn API nøkkelen når du blir spurt
```

#### Alternativ C: Teste uten å sende ekte e-poster

Hvis du ikke trenger å faktisk sende e-poster, kan du hoppe over dette steget. Du vil se feilmeldinger i konsollen når du prøver å sende, men resten av funksjonaliteten vil fungere (UI, validering, rate limiting, osv.).

### 4. Starte applikasjonen

```bash
pnpm run dev:local
```

Dette starter:
- **React app** på `http://localhost:5173`
- **Cloudflare Worker** på `http://localhost:8787` (med Miniflare)
- **Lokal SQLite database** med full persistering
- **Durable Objects emulering** for WebSocket støtte

## Testing av e-post funksjonen

1. Åpne `http://localhost:5173` i nettleseren
2. Opprett eller åpne et regneark
3. Klikk på den lilla "Send e-post" knappen (mellom Share og History)
4. Legg inn e-postadresser (kommaseparert for flere)
5. Valgfritt: Legg til en personlig melding
6. Klikk "Send e-post"

### Hva skjer når du tester lokalt

**Med Resend API nøkkel:**
- E-posten sendes faktisk til de angitte mottakerne
- kontakt@sors.no får automatisk en kopi (CC)
- Du får en suksessmelding med antall gjenstående e-poster

**Uten Resend API nøkkel:**
- Du vil se en feilmelding om manglende API nøkkel
- Men UI, validering og rate limiting fungerer fortsatt
- Du kan teste hele flyten unntatt selve sending

## Rate Limiting

Lokalt bruker systemet samme rate limiting som produksjon:
- **5 e-poster per regneark per time**
- Telling lagres i den lokale SQLite databasen
- Tellingen tilbakestilles når du kjører `pnpm run db:init` på nytt

## Feilsøking

### "Email sent failed" - Missing API key

**Problem**: Du har ikke satt opp Resend API nøkkelen.

**Løsning**: 
- Enten opprett `worker/.env.local` med `RESEND_API_KEY=re_xxx`
- Eller test kun UI/UX uten faktisk sending

### "Rate limit exceeded"

**Problem**: Du har sendt 5 e-poster for dette regnearket den siste timen.

**Løsning**:
```bash
cd worker
pnpm run db:init  # Nullstiller database
```

### Worker starter ikke

**Problem**: Port 8787 er allerede i bruk.

**Løsning**:
```bash
# Finn prosessen som bruker porten
lsof -i :8787
# Eller endre porten i worker/package.json (--port 8787)
```

### Frontend kobler ikke til worker

**Problem**: Frontend prøver å koble til feil backend.

**Løsning**: Sjekk at `VITE_USE_LOCAL_WORKER=true` eller at ingen andre VITE_BACKEND_URL er satt i `app/.env.local`.

## Struktur av e-post kode

### Backend (worker/)
- `src/utils/emailConfig.ts` - E-postadresser og konfigurasjon (hardkodet)
- `src/utils/emailService.ts` - Resend integrasjon og rate limiting
- `src/utils/emailTemplate.ts` - HTML e-post mal generator
- `src/index.ts` - POST /api/objects/{id}/send-email endpoint
- `migrations/0002_email_sends.sql` - Database migrasjon

### Frontend (app/)
- `src/app/components/SendEmailButton.tsx` - UI komponent
- `src/app/services/emailService.ts` - API klient
- `src/app/cap-table/Worksheet.tsx` - Integrasjon (linje ~224)
- `src/config/i18n/no.ts` - Norske oversettelser
- `src/config/i18n/en.ts` - Engelske oversettelser

## Nyttige kommandoer

```bash
# Starte kun frontend (mot produksjon backend)
cd app && pnpm run dev

# Starte kun worker lokalt
cd worker && pnpm run dev:local

# Bygge frontend for produksjon
cd app && pnpm run build

# Nullstille lokal database
cd worker && pnpm run db:init

# Se lokal database innhold
cd worker
sqlite3 .miniflare/v3/d1/miniflare-D1DatabaseObject/local-db.sqlite
> SELECT * FROM email_sends;
> .quit
```

## Neste steg

Når du er klar til å deploye til staging eller produksjon, se `EMAIL_FEATURE_DEPLOYMENT.md` for fullstendige instruksjoner.

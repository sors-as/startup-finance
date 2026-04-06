import { BRANDING } from '@config/branding';
import { Logo } from '@/components/Logo';

export function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-950/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950 mb-4">
              Om Sors
            </div>
            <p className="text-sm text-neutral-700 mb-2">
              We build better bottom lines through efficient organisations, processes and modern digitalisation.
            </p>
            <p className="text-sm text-neutral-700">
              Top management consulting firm for smaller companies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950 mb-4">
              Lenker
            </div>
            <ul className="space-y-3 text-sm text-neutral-700">
              <li>
                <a href={BRANDING.website} className="transition hover:text-neutral-950">
                  Hjem
                </a>
              </li>
              <li>
                <a href={`${BRANDING.website}/services`} className="transition hover:text-neutral-950">
                  Tjenester
                </a>
              </li>
              <li>
                <a href={BRANDING.toolsUrl} className="transition hover:text-neutral-950">
                  Verktøy
                </a>
              </li>
              <li>
                <a href={`${BRANDING.website}/about`} className="transition hover:text-neutral-950">
                  Om oss
                </a>
              </li>
              <li>
                <a href={`${BRANDING.website}/contact`} className="transition hover:text-neutral-950">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info & Attribution */}
          <div>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950 mb-4">
              Kontakt
            </div>
            <div className="text-sm text-neutral-700 space-y-2 mb-4">
              <p>
                Ta gjerne{' '}
                <a href={`${BRANDING.website}/contact`} className="transition hover:text-neutral-950 underline underline-offset-2">
                  kontakt
                </a>
                , bare for en prat.
              </p>
            </div>
            {BRANDING.features.showOriginalAttribution && (
              <p className="text-sm text-neutral-500 mt-6">
                Basert på{' '}
                <a
                  href="https://startup-finance.1984.vc"
                  className="transition hover:text-neutral-950 underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  1984 Ventures Cap Table Worksheet
                </a>
                {' '}(MIT-lisens)
              </p>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-10">
          <a href={BRANDING.website} aria-label="Hjem">
            <Logo className="h-8" fillOnHover />
          </a>
          <p className="text-sm text-neutral-700">
            Copyright © {new Date().getFullYear()} Sors AS
          </p>
        </div>
      </div>
    </footer>
  );
}

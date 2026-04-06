'use client';

import { useEffect, useState } from 'react';
import { BRANDING } from '@config/branding';
import { Logo, Logomark } from '@/components/Logo';
import { LanguagePicker } from '@/components/LanguagePicker';

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
    </svg>
  );
}

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z" />
    </svg>
  );
}

const NAV_ITEMS = [
  { label: 'Referanser', href: `${BRANDING.website}/work` },
  { label: 'Verdier og team', href: `${BRANDING.website}/about` },
  { label: 'Arbeidsform', href: `${BRANDING.website}/process` },
  { label: 'Tjenester', href: `${BRANDING.website}/services` },
  { label: 'Faget vårt', href: `${BRANDING.website}/blog` },
  { label: 'Finans', href: BRANDING.toolsUrl },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <>
      {/* Top bar */}
      <header className="relative z-40 bg-white border-b border-neutral-950/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href={BRANDING.website}
                aria-label="Sors AS"
                onMouseEnter={() => setLogoHovered(true)}
                onMouseLeave={() => setLogoHovered(false)}
              >
                <Logomark className="h-8 sm:hidden" filled={logoHovered} />
                <Logo className="hidden h-8 sm:block" filled={logoHovered} />
              </a>
            </div>

            {/* Centered tagline */}
            <div className="flex-1 text-center text-2xl select-none">
              <span className="text-gray-500 sm:hidden">
                Bedre endringer
              </span>
              <span className="text-gray-500 hidden sm:inline">
                Bedre endringer - bedre resultater
              </span>
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-x-4">
              <LanguagePicker />
              <a
                href={`${BRANDING.website}/contact`}
                className="rounded-full bg-neutral-950 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Kontakt oss
              </a>
              <button
                type="button"
                onClick={() => setIsMenuOpen((v) => !v)}
                className="rounded-full p-2 text-neutral-950 hover:bg-neutral-950/10 transition"
                aria-label="Toggle navigation"
                aria-expanded={isMenuOpen}
              >
                <MenuIcon className="h-6 w-6 fill-neutral-950" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen navigation overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-neutral-950 overflow-y-auto">
          {/* Overlay header */}
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex items-center justify-between h-16">
              <a
                href={BRANDING.website}
                aria-label="Sors AS"
                onClick={() => setIsMenuOpen(false)}
              >
                <Logomark className="h-8 sm:hidden" invert />
                <Logo className="hidden h-8 sm:block" invert />
              </a>
              <div className="flex-1 text-center text-2xl select-none">
                <span className="text-white/60 sm:hidden">Bedre endringer</span>
                <span className="text-white/60 hidden sm:inline">Bedre endringer - bedre resultater</span>
              </div>
              <div className="flex items-center gap-x-4">
                <a
                  href={`${BRANDING.website}/contact`}
                  className="rounded-full border border-white/20 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Kontakt oss
                </a>
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-full p-2 hover:bg-white/10 transition"
                  aria-label="Close navigation"
                >
                  <XIcon className="h-6 w-6 fill-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation links */}
          <nav className="mt-px font-display text-5xl font-medium tracking-tight text-white">
            {NAV_ITEMS.reduce<React.ReactNode[]>((rows, item, i) => {
              if (i % 2 === 0) {
                rows.push(
                  <div key={i} className="even:mt-px sm:bg-neutral-950">
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                      <div className="grid grid-cols-1 sm:grid-cols-2">
                        <a
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16 hover:text-neutral-300 transition-colors"
                        >
                          {item.label}
                          <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
                        </a>
                        {NAV_ITEMS[i + 1] && (
                          <a
                            href={NAV_ITEMS[i + 1].href}
                            onClick={() => setIsMenuOpen(false)}
                            className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16 hover:text-neutral-300 transition-colors"
                          >
                            {NAV_ITEMS[i + 1].label}
                            <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }
              return rows;
            }, [])}
          </nav>
        </div>
      )}
    </>
  );
}

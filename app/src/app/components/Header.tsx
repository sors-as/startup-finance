'use client';

import { useState } from 'react';
import { BRANDING } from '@config/branding';
import { Logo, Logomark } from '@/components/Logo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);

  return (
    <header className="bg-white border-b border-neutral-950/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href={BRANDING.website} className="text-sm text-neutral-700 hover:text-neutral-950 transition-colors">
              Hjem
            </a>
            <a href={`${BRANDING.website}/services`} className="text-sm text-neutral-700 hover:text-neutral-950 transition-colors">
              Tjenester
            </a>
            <a href={BRANDING.toolsUrl} className="text-sm text-neutral-700 hover:text-neutral-950 transition-colors">
              Verktøy
            </a>
            <a href={`${BRANDING.website}/about`} className="text-sm text-neutral-700 hover:text-neutral-950 transition-colors">
              Om oss
            </a>
            <a
              href={`${BRANDING.website}/contact`}
              className="rounded-full bg-neutral-950 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Kontakt
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full p-2 text-neutral-950 hover:bg-neutral-950/10 transition"
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
                  <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
                </svg>
              ) : (
                <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M2 6h20v2H2zM2 16h20v2H2z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-950/10">
            <div className="py-4 space-y-1">
              <a href={BRANDING.website} className="block px-3 py-2 text-sm text-neutral-700 hover:text-neutral-950 transition-colors">
                Hjem
              </a>
              <a href={`${BRANDING.website}/services`} className="block px-3 py-2 text-sm text-neutral-700 hover:text-neutral-950 transition-colors">
                Tjenester
              </a>
              <a href={BRANDING.toolsUrl} className="block px-3 py-2 text-sm text-neutral-700 hover:text-neutral-950 transition-colors">
                Verktøy
              </a>
              <a href={`${BRANDING.website}/about`} className="block px-3 py-2 text-sm text-neutral-700 hover:text-neutral-950 transition-colors">
                Om oss
              </a>
              <a href={`${BRANDING.website}/contact`} className="inline-block mx-3 mt-1 rounded-full bg-neutral-950 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-neutral-800">
                Kontakt
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

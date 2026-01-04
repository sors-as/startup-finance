import { useState } from 'react';
import { BRANDING } from '@config/branding';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        {/* Logo and Company Name */}
        <div className="flex lg:flex-1">
          <a href={BRANDING.website} className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="text-2xl font-bold text-sors-primary dark:text-sors-light-blue">
              {BRANDING.companyName}
            </span>
          </a>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Åpne hovedmeny</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          <a 
            href={BRANDING.website} 
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-sors-primary dark:hover:text-sors-light-blue"
          >
            Hjem
          </a>
          <a 
            href={`${BRANDING.website}/om-oss`}
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-sors-primary dark:hover:text-sors-light-blue"
          >
            Om oss
          </a>
          
          {/* Tools Dropdown */}
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-sors-primary dark:hover:text-sors-light-blue"
              onMouseEnter={() => setToolsDropdownOpen(true)}
              onMouseLeave={() => setToolsDropdownOpen(false)}
              onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
            >
              Verktøy
              <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            
            {toolsDropdownOpen && (
              <div 
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-lg ring-1 ring-gray-900/5"
                onMouseEnter={() => setToolsDropdownOpen(true)}
                onMouseLeave={() => setToolsDropdownOpen(false)}
              >
                <div className="p-4">
                  <div className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-700 group-hover:bg-white dark:group-hover:bg-gray-600">
                      <svg className="h-6 w-6 text-gray-600 dark:text-gray-300 group-hover:text-sors-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                      </svg>
                    </div>
                    <div className="flex-auto">
                      <a href="#" className="block font-semibold text-gray-900 dark:text-gray-100">
                        Finanskalkulator
                        <span className="absolute inset-0"></span>
                      </a>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">Beregn cap table og finansieringsrunder</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <a 
            href={BRANDING.docsUrl}
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-sors-primary dark:hover:text-sors-light-blue"
          >
            Hjelp
          </a>
          <a 
            href={`${BRANDING.website}/kontakt`}
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-sors-primary dark:hover:text-sors-light-blue"
          >
            Kontakt
          </a>
        </div>
        
        {/* CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a 
            href={`mailto:${BRANDING.contactEmail}`}
            className="text-sm font-semibold leading-6 px-4 py-2 rounded-md bg-sors-primary text-white hover:bg-sors-primary-dark transition-colors"
          >
            Ta kontakt →
          </a>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href={BRANDING.website} className="-m-1.5 p-1.5">
                <span className="text-xl font-bold text-sors-primary dark:text-sors-light-blue">
                  {BRANDING.companyName}
                </span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Lukk meny</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700">
                <div className="space-y-2 py-6">
                  <a
                    href={BRANDING.website}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    Hjem
                  </a>
                  <a
                    href={`${BRANDING.website}/om-oss`}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    Om oss
                  </a>
                  <div className="-mx-3 block rounded-lg px-3 py-2">
                    <div className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 mb-2">Verktøy</div>
                    <a
                      href="#"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      Finanskalkulator
                    </a>
                  </div>
                  <a
                    href={BRANDING.docsUrl}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    Hjelp
                  </a>
                  <a
                    href={`${BRANDING.website}/kontakt`}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    Kontakt
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href={`mailto:${BRANDING.contactEmail}`}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    Ta kontakt
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

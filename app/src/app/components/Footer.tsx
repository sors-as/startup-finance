import { BRANDING } from '@config/branding';

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <a href={BRANDING.website} className="text-2xl font-bold text-sors-primary dark:text-sors-light-blue">
                {BRANDING.companyName}
              </a>
            </div>
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
              {BRANDING.siteDescription}
            </p>
            <div className="flex space-x-4">
              <a 
                href={BRANDING.githubUrl}
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Links Grid */}
          <div className="mt-10 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            {/* Navigation */}
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">Navigasjon</h3>
                <ul className="mt-6 space-y-4">
                  <li>
                    <a href={BRANDING.website} className="text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
                      Hjem
                    </a>
                  </li>
                  <li>
                    <a href={`${BRANDING.website}/om-oss`} className="text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
                      Om oss
                    </a>
                  </li>
                  <li>
                    <a href={BRANDING.docsUrl} className="text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
                      Hjelp
                    </a>
                  </li>
                  <li>
                    <a href={`${BRANDING.website}/kontakt`} className="text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
                      Kontakt
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">Verktøy</h3>
                <ul className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
                      Finanskalkulator
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Support */}
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">Support</h3>
                <ul className="mt-6 space-y-4">
                  <li>
                    <a href={BRANDING.docsUrl} className="text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
                      Dokumentasjon
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${BRANDING.contactEmail}`} className="text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
                      E-post
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">Juridisk</h3>
                <ul className="mt-6 space-y-4">
                  <li>
                    <a href={`${BRANDING.website}/personvern`} className="text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
                      Personvern
                    </a>
                  </li>
                  <li>
                    <a href={`${BRANDING.website}/vilkar`} className="text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
                      Vilkår
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-900/10 dark:border-gray-700 pt-8">
          <div className="flex flex-col items-center gap-4">
            {BRANDING.features.showOriginalAttribution && (
              <p className="text-xs leading-5 text-gray-500 dark:text-gray-400 text-center">
                Basert på{" "}
                <a 
                  href="https://startup-finance.1984.vc" 
                  className="text-sors-primary dark:text-sors-light-blue hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  1984 Ventures Cap Table Worksheet
                </a>
                {" "}(MIT-lisens)
              </p>
            )}
            <p className="text-xs leading-5 text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} {BRANDING.companyName}. Alle rettigheter reservert.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { BRANDING } from '@config/branding';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src="/footer-logo.png" 
                alt="Sors AS" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4">
              We build better bottom lines through efficient organisations, processes and modern digitalisation.
            </p>
            <p className="text-gray-300 mb-4">
              Top management consulting firm for smaller companies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href={BRANDING.website} className="text-gray-300 hover:text-blue-400 transition-colors">
                  Hjem
                </a>
              </li>
              <li>
                <a href={`${BRANDING.website}/tjenester`} className="text-gray-300 hover:text-blue-400 transition-colors">
                  Tjenester
                </a>
              </li>
              <li>
                <a href={BRANDING.toolsUrl} className="text-gray-300 hover:text-blue-400 transition-colors">
                  Verktøy
                </a>
              </li>
              <li>
                <a href={`${BRANDING.website}/om-oss`} className="text-gray-300 hover:text-blue-400 transition-colors">
                  Om oss
                </a>
              </li>
              <li>
                <a href={`${BRANDING.website}/kontakt`} className="text-gray-300 hover:text-blue-400 transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info & Attribution */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="text-gray-300 space-y-2 mb-4">
              <p>Please reach out, if only for a chat.</p>
              <p>
                <a href={`mailto:${BRANDING.contactEmail}`} className="hover:text-blue-400 transition-colors">
                  {BRANDING.contactEmail}
                </a>
              </p>
            </div>
            {BRANDING.features.showOriginalAttribution && (
              <p className="text-gray-400 text-sm mt-6">
                Basert på{" "}
                <a 
                  href="https://startup-finance.1984.vc" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  1984 Ventures Cap Table Worksheet
                </a>
                {" "}(MIT-lisens)
              </p>
            )}
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>Copyright © {new Date().getFullYear()}, Sors AS</p>
        </div>
      </div>
    </footer>
  );
}

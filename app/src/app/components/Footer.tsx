import { BRANDING } from '@config/branding';

export function Footer() {
  return (
    <footer className="mt-12 py-6 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-5xl mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
        {BRANDING.features.showOriginalAttribution && (
          <p className="mb-2">
            Basert på{" "}
            <a 
              href="https://startup-finance.1984.vc" 
              className="text-blue-600 dark:text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              1984 Ventures Cap Table Worksheet
            </a>
            {" "}(MIT-lisens)
          </p>
        )}
        <p>
          Tilgjengelig gratis fra{" "}
          <a 
            href={BRANDING.website}
            className="text-sors-primary hover:underline font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            {BRANDING.companyName}
          </a>
          {" • "}
          <a 
            href={`mailto:${BRANDING.contactEmail}`}
            className="hover:underline"
          >
            {BRANDING.contactEmail}
          </a>
        </p>
      </div>
    </footer>
  );
}

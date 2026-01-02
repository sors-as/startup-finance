export const BRANDING = {
  // Company information
  companyName: "SORS",
  siteName: "SORS Finanskalkulator",
  siteDescription: "Gratis cap table kalkulator for oppstartsselskaper",
  
  // URLs
  website: "https://sors.no",
  docsUrl: "https://sors.no/hjelp",
  contactEmail: "kontakt@sors.no",
  githubUrl: "https://github.com/1984vc/startup-finance",
  
  // Visual branding
  logoPath: "/sors-logo.svg", // To be added later
  faviconPath: "/favicon.ico",
  
  // Theme colors (replacing 1984.vc colors)
  colors: {
    primary: "#0066CC",      // SORS blue (replace nt84blue)
    primaryDark: "#004C99",  // Darker blue
    secondary: "#00A86B",    // SORS green
    accent: "#FF6B35",       // SORS orange
    lightBlue: "#E6F2FF",
    lighterBlue: "#F5F9FF",
  },
  
  // Localization
  locale: "nb-NO",
  currency: "NOK",
  currencySymbol: "kr",
  
  // Features
  features: {
    showPoweredBy: true,
    enableAnalytics: false,
    showOriginalAttribution: true,
  },
  
  // Text content
  content: {
    worksheetTitle: "Cap Table Kalkulator",
    breadcrumbHome: "Verktøy",
    breadcrumbCurrent: "Finanskalkulator",
  }
};

export type BrandingConfig = typeof BRANDING;

# SORS Branding Configuration

This directory contains the branding configuration for the SORS Finance Calculator.

## Quick Start

To customize the branding, edit `branding.ts`:

### Company Information
- `companyName`: Your company name (default: "SORS")
- `siteName`: Application title (default: "SORS Finanskalkulator")
- `website`: Your company website

### Colors
The color palette is defined in `branding.colors`:
- `primary`: Main brand color (#0066CC - SORS blue)
- `secondary`: Secondary brand color (#00A86B - SORS green)
- `accent`: Accent color for highlights (#FF6B35 - SORS orange)

### Localization
- `locale`: Language/region code (default: "nb-NO")
- `currency`: Currency code (default: "NOK")

### Features
Toggle features in `branding.features`:
- `showOriginalAttribution`: Show credit to original 1984.vc project
- `enableAnalytics`: Enable analytics tracking

## Adding Your Logo

1. Add your logo file to `app/public/` directory
2. Update `logoPath` in `branding.ts`
3. Recommended: SVG format for best quality

## Color Customization

After changing colors in `branding.ts`, also update:
1. `app/tailwind.config.js` - Tailwind color classes
2. `app/src/app/index.css` - CSS custom properties

## Testing Changes

```bash
# Run local development server
pnpm run dev:local

# Build for production
pnpm run build
```

## Need Help?

Contact: kontakt@sors.no

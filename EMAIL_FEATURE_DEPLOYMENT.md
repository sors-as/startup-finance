# Email Export Feature - Deployment Guide

## Overview
This document provides deployment instructions and post-deployment tasks for the email export feature.

## Deployment Steps

### 1. Set up Resend API Key

The application requires a RESEND_API_KEY secret to send emails via Resend.com.

#### For Production:
```bash
cd worker
wrangler secret put RESEND_API_KEY --env production
# When prompted, paste your Resend API key
```

#### For Staging:
```bash
cd worker
wrangler secret put RESEND_API_KEY --env staging
# When prompted, paste your Resend API key
```

### 2. Run Database Migrations

The feature requires a new `email_sends` table for rate limiting and audit tracking.

#### For Production:
```bash
cd worker
wrangler d1 migrations apply DB --env production
```

#### For Staging:
```bash
cd worker
wrangler d1 migrations apply DB --env staging
```

#### For Local Development:
```bash
cd worker
pnpm run db:init
```

### 3. Deploy the Application

Follow the standard deployment process:

#### Staging:
```bash
pnpm run deploy:staging
```

#### Production:
```bash
pnpm run deploy:production
```

## Testing Checklist

After deployment, test the following:

- [ ] **Send Email Button**: Verify button appears next to Share/History buttons
- [ ] **Email Form**: 
  - [ ] Opens modal when clicked
  - [ ] Accepts single email address
  - [ ] Accepts multiple comma-separated email addresses
  - [ ] Optional message field works
  - [ ] Form validation prevents invalid emails
- [ ] **Email Sending**:
  - [ ] Sends successfully to single recipient
  - [ ] Sends successfully to multiple recipients
  - [ ] Email contains correct worksheet name in subject
  - [ ] Email includes SORS logo
  - [ ] Email includes read-only link
  - [ ] Email includes personal message if provided
  - [ ] Email automatically CCs kontakt@sors.no
- [ ] **Rate Limiting**:
  - [ ] Allows 5 emails per worksheet per hour
  - [ ] Shows remaining email count after each send
  - [ ] Blocks additional emails after limit reached
  - [ ] Shows appropriate error message when rate limited
- [ ] **Error Handling**:
  - [ ] Shows error for invalid email addresses
  - [ ] Shows error if sending fails
  - [ ] Lists invalid emails specifically

## Configuration

### Email Addresses (Hardcoded)
Location: `worker/src/utils/emailConfig.ts`

- **FROM_EMAIL**: `SORS Cap Table <captable@sors.no>`
- **CC_EMAIL**: `kontakt@sors.no`

To change these addresses, edit the `EMAIL_CONFIG` object in the file above.

### Rate Limiting
- **Limit**: 5 emails per worksheet per hour
- **Location**: `worker/src/utils/emailConfig.ts`
- **Database**: Tracked in `email_sends` table

### Subject Line Format
- **Format**: `Sors captable for [Worksheet Name]`
- **Location**: `worker/src/utils/emailConfig.ts`

## Troubleshooting

### Email not sending
1. Verify RESEND_API_KEY is set correctly:
   ```bash
   wrangler secret list --env production
   ```
2. Check Resend dashboard for API errors
3. Verify FROM_EMAIL is verified in Resend account

### Rate limiting not working
1. Verify database migration ran successfully:
   ```bash
   wrangler d1 execute DB --env production --command "SELECT * FROM email_sends LIMIT 1"
   ```
2. Check worker logs for rate limit check errors

### Email template not rendering correctly
1. Verify logo file exists in `worker/public/sors-logo.png`
2. Check browser console for errors
3. Test email in different email clients

## Future Enhancements

The following GitHub issues should be created for future enhancements:

### 1. PDF Generation Enhancement
**Issue Title**: Enhancement: PDF Generation for Cap Table Emails

**Description**:
Add the ability to attach a PDF version of the cap table to emails sent via the 'Send as Email' feature.

Currently, the email feature sends a beautiful HTML email with the cap table data. Adding a PDF attachment would provide recipients with a downloadable, printable version that maintains consistent formatting.

**Benefits**:
- Recipients can easily save and archive cap table snapshots
- Professional presentation for investor communications
- Better compatibility with email clients that may not render HTML perfectly
- Offline access to cap table data

**Implementation Considerations**:
- Generate PDF server-side (consider libraries like Puppeteer or PDFKit)
- Include same branding as HTML email (SORS logo, Cormorant Garamond font)
- Optimize PDF file size for email delivery
- Consider rate limiting impact (PDFs increase email payload)

**Labels**: enhancement, email-feature

---

### 2. Scheduled Emails Enhancement
**Issue Title**: Enhancement: Scheduled/Recurring Cap Table Emails

**Description**:
Add the ability to schedule cap table emails to be sent at a future date or on a recurring basis.

This would be valuable for regular investor updates, board meetings, or periodic reporting.

**Benefits**:
- Automated investor communications
- Regular board update emails
- Monthly/quarterly reporting automation
- Reduces manual work for founders

**Implementation Considerations**:
- Add scheduling UI to email dialog
- Use Cloudflare Durable Objects alarms or Cron Triggers
- Store scheduled email jobs in D1
- Allow editing/canceling scheduled emails
- Support one-time and recurring schedules (daily, weekly, monthly)
- Consider timezone handling

**Labels**: enhancement, email-feature, automation

---

### 3. Email Templates Enhancement
**Issue Title**: Enhancement: Multiple Email Templates for Different Scenarios

**Description**:
Provide different email template options for various use cases (pitch deck, investor update, board meeting, etc.).

Currently, there's a single email template. Adding multiple templates would allow users to customize the presentation based on their audience and purpose.

**Benefits**:
- More professional presentation for specific scenarios
- Customized messaging for different audiences
- Better storytelling around cap table data
- Increased flexibility

**Implementation Considerations**:
- Create template selector in email dialog
- Design templates for:
  - Investor pitch deck format
  - Monthly/quarterly update format
  - Board meeting format
  - Basic sharing (current template)
- Allow customization of template sections
- Consider template preview before sending

**Labels**: enhancement, email-feature, ui

---

### 4. Branding Customization Enhancement
**Issue Title**: Enhancement: Custom Branding for Email Templates

**Description**:
Allow users to add their company logo and customize email branding when sharing cap tables.

Currently, emails are branded with SORS logo only. Adding company-specific branding would make emails more professional and on-brand for the sender.

**Benefits**:
- Professional appearance with company branding
- Better alignment with corporate identity
- Increased trust from recipients
- More polished investor communications

**Implementation Considerations**:
- Add logo upload to worksheet settings
- Store logo in Cloudflare R2 or similar
- Allow color customization
- Maintain SORS attribution in footer
- Consider file size limits for logos
- Provide logo preview

**Labels**: enhancement, email-feature, customization

## Support

For issues or questions:
- **Email**: kontakt@sors.no
- **Repository**: https://github.com/sors-as/startup-finance
- **Documentation**: See README.md and other docs in repository root

## Rollback Plan

If issues arise after deployment:

1. **Disable feature temporarily**:
   - Comment out SendEmailButton in Worksheet.tsx
   - Redeploy

2. **Revert database migration**:
   ```bash
   wrangler d1 execute DB --env production --command "DROP TABLE IF EXISTS email_sends"
   ```

3. **Revert code changes**:
   ```bash
   git revert <commit-hash>
   git push origin main
   ```

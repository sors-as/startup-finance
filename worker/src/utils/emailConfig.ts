/**
 * Email configuration constants
 * 
 * These are hardcoded as per requirements (not using environment variables for addresses)
 */

export const EMAIL_CONFIG = {
	// Sender email (will be configured in Resend)
	FROM_EMAIL: 'SORS Cap Table <captable@sors.no>',
	
	// CC email for all sent cap tables (for marketing tracking)
	CC_EMAIL: 'kontakt@sors.no',
	
	// Rate limiting
	MAX_EMAILS_PER_WORKSHEET_PER_HOUR: 5,
	
	// Subject line prefix
	SUBJECT_PREFIX: 'Sors captable for',
} as const;

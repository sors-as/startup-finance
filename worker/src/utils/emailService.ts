/**
 * Email service for sending cap table emails via Resend
 */

import { EMAIL_CONFIG } from './emailConfig';
import { generateCapTableEmailHTML } from './emailTemplate';

interface SendEmailRequest {
	recipients: string[];
	worksheetName: string;
	worksheetData: any;
	readOnlyUrl: string;
	senderMessage?: string;
	preRoundCapTable?: any;
	postRoundCapTable?: any;
}

interface ResendEmailPayload {
	from: string;
	to: string[];
	cc: string[];
	subject: string;
	html: string;
}

/**
 * Validates email address format
 */
export function isValidEmail(email: string): boolean {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

/**
 * Validates all email addresses in an array
 */
export function validateEmails(emails: string[]): { valid: boolean; invalidEmails: string[] } {
	const invalidEmails = emails.filter(email => !isValidEmail(email));
	return {
		valid: invalidEmails.length === 0,
		invalidEmails
	};
}

/**
 * Sends cap table email via Resend API
 */
export async function sendCapTableEmail(
	request: SendEmailRequest,
	resendApiKey: string
): Promise<{ success: boolean; messageId?: string; error?: string }> {
	try {
		// Validate recipients
		const validation = validateEmails(request.recipients);
		if (!validation.valid) {
			return {
				success: false,
				error: `Invalid email addresses: ${validation.invalidEmails.join(', ')}`
			};
		}

		// Generate email HTML
		const htmlContent = generateCapTableEmailHTML({
			worksheetName: request.worksheetName,
			worksheetData: request.worksheetData,
			readOnlyUrl: request.readOnlyUrl,
			senderMessage: request.senderMessage,
			preRoundCapTable: request.preRoundCapTable,
			postRoundCapTable: request.postRoundCapTable
		});

		// Prepare Resend API payload
		const payload: ResendEmailPayload = {
			from: EMAIL_CONFIG.FROM_EMAIL,
			to: request.recipients,
			cc: [EMAIL_CONFIG.CC_EMAIL],
			subject: `${EMAIL_CONFIG.SUBJECT_PREFIX} ${request.worksheetName}`,
			html: htmlContent
		};

		// Send email via Resend API
		const response = await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${resendApiKey}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(payload)
		});

		if (!response.ok) {
			const errorData = await response.json().catch(() => ({ message: 'Unknown error' })) as { message?: string };
			console.error('Resend API error:', errorData);
			return {
				success: false,
				error: `Failed to send email: ${errorData.message || response.statusText}`
			};
		}

		const result = await response.json() as { id?: string };
		
		return {
			success: true,
			messageId: result.id
		};
	} catch (error) {
		console.error('Error sending email:', error);
		return {
			success: false,
			error: error instanceof Error ? error.message : 'Unknown error occurred'
		};
	}
}

/**
 * Rate limiting check for email sends
 * Returns true if the email can be sent, false if rate limit exceeded
 */
export async function checkRateLimit(
	db: D1Database,
	worksheetId: string
): Promise<{ allowed: boolean; remainingEmails: number }> {
	const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
	
	try {
		// Count emails sent for this worksheet in the last hour
		const result = await db.prepare(
			'SELECT COUNT(*) as count FROM email_sends WHERE worksheet_id = ? AND sent_at > ?'
		).bind(worksheetId, oneHourAgo).first<{ count: number }>();
		
		const emailsSent = result?.count || 0;
		const remaining = EMAIL_CONFIG.MAX_EMAILS_PER_WORKSHEET_PER_HOUR - emailsSent;
		
		return {
			allowed: emailsSent < EMAIL_CONFIG.MAX_EMAILS_PER_WORKSHEET_PER_HOUR,
			remainingEmails: Math.max(0, remaining)
		};
	} catch (error) {
		console.error('Error checking rate limit:', error);
		// On error, allow the email to be sent (fail open)
		return {
			allowed: true,
			remainingEmails: EMAIL_CONFIG.MAX_EMAILS_PER_WORKSHEET_PER_HOUR
		};
	}
}

/**
 * Records an email send in the database
 */
export async function recordEmailSend(
	db: D1Database,
	worksheetId: string,
	recipients: string[],
	messageId: string
): Promise<void> {
	try {
		const now = new Date().toISOString();
		await db.prepare(
			'INSERT INTO email_sends (worksheet_id, recipients, message_id, sent_at) VALUES (?, ?, ?, ?)'
		).bind(
			worksheetId,
			JSON.stringify(recipients),
			messageId,
			now
		).run();
	} catch (error) {
		console.error('Error recording email send:', error);
		// Don't throw - this is just for tracking
	}
}

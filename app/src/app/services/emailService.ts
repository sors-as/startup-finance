/**
 * Email service for sending cap table emails
 */

import { getBackendUrl } from "@config/backendConfig";

export interface SendEmailRequest {
	recipients: string[];
	senderMessage?: string;
}

export interface SendEmailResponse {
	success: boolean;
	messageId?: string;
	remainingEmails?: number;
	error?: string;
	invalidEmails?: string[];
}

/**
 * Send cap table email to recipients
 */
export async function sendCapTableEmail(
	worksheetId: string,
	request: SendEmailRequest
): Promise<SendEmailResponse> {
	try {
		const backend = getBackendUrl();
		const response = await fetch(`${backend}/api/objects/${worksheetId}/send-email`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(request),
		});

		const data = await response.json();

		if (!response.ok) {
			return {
				success: false,
				error: data.error || 'Failed to send email',
				invalidEmails: data.invalidEmails,
			};
		}

		return {
			success: true,
			messageId: data.messageId,
			remainingEmails: data.remainingEmails,
		};
	} catch (error) {
		console.error('Error sending cap table email:', error);
		return {
			success: false,
			error: error instanceof Error ? error.message : 'Unknown error occurred',
		};
	}
}

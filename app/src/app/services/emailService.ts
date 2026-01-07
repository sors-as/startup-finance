/**
 * Email service for sending cap table emails
 */

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
		const backend = await getBackendUrl();
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

/**
 * Get backend URL from environment
 */
async function getBackendUrl(): Promise<string> {
	// Priority 1: Explicit VITE_BACKEND_URL (highest priority)
	if (import.meta.env.VITE_BACKEND_URL) {
		return import.meta.env.VITE_BACKEND_URL;
	}

	// Priority 2: Environment-specific URLs
	if (
		import.meta.env.VITE_STAGING_BACKEND_URL &&
		import.meta.env.VITE_ENVIRONMENT === 'staging'
	) {
		return import.meta.env.VITE_STAGING_BACKEND_URL;
	}

	if (
		import.meta.env.VITE_PRODUCTION_BACKEND_URL &&
		import.meta.env.VITE_ENVIRONMENT === 'production'
	) {
		return import.meta.env.VITE_PRODUCTION_BACKEND_URL;
	}

	// Priority 3: Development mode detection
	if (import.meta.env.DEV) {
		// In development mode, check if we want to use local worker
		return import.meta.env.VITE_USE_LOCAL_WORKER === 'true'
			? 'http://localhost:8787'
			: window.location.origin;
	}

	// Priority 4: Use current origin - the frontend is served from the same worker as the backend API
	return window.location.origin;
}

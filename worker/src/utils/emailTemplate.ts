/**
 * Email template generator for cap table emails
 * Generates HTML email with embedded logo and proper formatting
 */

interface CapTableRow {
	name?: string;
	type: string;
	shares?: number;
	investment?: number;
	pps?: number;
	ownershipPct?: number;
	ownershipError?: {
		type: string;
		reason?: string;
	};
}

interface CapTableData {
	rows: CapTableRow[];
	totalRow?: {
		investment: number;
		shares: number;
		ownershipPct: number;
	};
}

interface WorksheetData {
	name?: string;
	rowData: Array<{
		id: string;
		type: string;
		name: string;
		shares?: number;
		investment?: number;
		cap?: number;
		discount?: number;
	}>;
	unusedOptions: number;
	preMoney: number;
	targetOptionsPool: number;
	pricedRounds?: number;
}

interface EmailTemplateData {
	worksheetName: string;
	worksheetData: WorksheetData;
	readOnlyUrl: string;
	senderMessage?: string;
	preRoundCapTable?: CapTableData;
	postRoundCapTable?: CapTableData;
}

// Base64 encoded SORS logo - will be embedded directly in email
const SORS_LOGO_BASE64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAABmCAMAAAAJbwgAAAADAFBMVEVHcEwiIiIjIyMjIyMcHByjo6MiIiKkpKShoaEaGhoiIiKlpaWkpKSjo6Ojo6MeHh4iIiKjo6Ojo6MiIiIAAAAiIiIiIiIiIiIiIiIiIiIiIiKjo6OlpaWjo6Ojo6MPDw8iIiIiIiKjo6Ojo6Ojo6Ojo6MjIyMjIyMiIiKkpKSkpKSkpKQiIiKjo6OkpKSkpKSkpKSkpKQiIiKjo6OkpKSkpKQiIiKkpKSkpKSkpKQiIiIiIiKkpKQiIiKkpKSkpKQiIiKkpKQiIiIiIiKjo6MiIiKjo6OkpKQiIiKjo6OkpKQiIiKjo6OkpKSkpKSkpKQjIyMiIiKjo6OkpKQjIyOjo6OkpKQiIiKjo6OkpKSkpKQiIiKkpKQiIiKjo6OkpKSkpKQiIiKjo6MiIiKjo6OkpKQiIiKjo6OkpKSkpKQiIiKkpKQiIiKkpKQiIiKkpKSkpKSkpKSkpKQjIyOjo6MiIiKkpKQiIiKjo6OkpKQiIiKkpKSkpKQjIyOjo6MiIiKkpKQiIiKkpKSkpKQiIiKkpKQiIiKkpKSkpKQiIiKjo6MiIiKkpKQiIiKkpKSkpKQiIiKjo6OkpKQjIyOkpKQjIyMiIiKjo6OkpKSkpKQiIiKkpKQiIiKjo6Ojo6Ojo6MiIiKjo6OkpKQjIyOjo6MiIiKkpKSkpKQjIyOkpKQiIiKjo6OkpKQiIiKkpKSkpKQiIiKjo6OkpKQiIiKjo6OkpKQiIiKkpKQjIyOkpKQiIiKjo6OkpKSkpKQiIiKjo6OkpKQiIiKkpKQiIiKjo6OkpKQiIiKkpKQiIiKkpKQjIyOjo6MiIiKjo6OkpKQiIiKkpKQiIiKjo6OkpKQiIiKjo6OkpKQiIiKkpKQiIiKjo6OkpKQiIiKkpKQiIiKjo6MiIiKkpKQiIiKjo6OkpKQjIyOkpKQiIiKjo6OkpKQiIiKjo6OkpKQiIiKjo6OkpKQiIiKjo6OkpKQiIiKjo6OkpKQiIiKjo6OkpKQiIiKjo6OkpKQiIiKjo6OkpKQjIyOjo6MiIiKjo6OkpKQiIiKjo6OkpKQiIiKkpKQiIiKjo6OkpKQiIiKkpKQiIiKkpKSjo6OkpKT///+ZGKxgAAAA/3RSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQV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';

export function generateCapTableEmailHTML(data: EmailTemplateData): string {
	const { worksheetName, readOnlyUrl, senderMessage, worksheetData } = data;
	
	// Helper function to format numbers with commas
	const formatNumber = (num: number | undefined): string => {
		if (num === undefined) return '-';
		return num.toLocaleString('en-US');
	};

	// Helper function to format currency
	const formatCurrency = (num: number | undefined): string => {
		if (num === undefined) return '-';
		return `$${formatNumber(num)}`;
	};

	// Helper function to format percentage
	const formatPercent = (num: number | undefined): string => {
		if (num === undefined) return '-';
		return `${num.toFixed(2)}%`;
	};

	// Generate existing shareholders table
	const generateExistingShareholdersTable = () => {
		const commonRows = worksheetData.rowData.filter(row => row.type === 'common');
		if (commonRows.length === 0) return '';

		let rows = '';
		for (const row of commonRows) {
			rows += `
				<tr>
					<td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${row.name}</td>
					<td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right;">${formatNumber(row.shares)}</td>
				</tr>
			`;
		}

		// Add unused options row if exists
		if (worksheetData.unusedOptions > 0) {
			rows += `
				<tr>
					<td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">Unused Options</td>
					<td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right;">${formatNumber(worksheetData.unusedOptions)}</td>
				</tr>
			`;
		}

		return `
			<h2 style="font-family: 'Cormorant Garamond', Georgia, serif; font-size: 24px; color: #111827; margin: 32px 0 16px 0;">1) Existing Shareholders</h2>
			<table style="width: 100%; border-collapse: collapse; margin-bottom: 32px; background: white;">
				<thead>
					<tr style="background: #f3f4f6;">
						<th style="padding: 12px; text-align: left; font-weight: 600; border-bottom: 2px solid #d1d5db;">Name</th>
						<th style="padding: 12px; text-align: right; font-weight: 600; border-bottom: 2px solid #d1d5db;">Shares</th>
					</tr>
				</thead>
				<tbody>
					${rows}
				</tbody>
			</table>
		`;
	};

	// Generate SAFE notes table
	const generateSafeNotesTable = () => {
		const safeRows = worksheetData.rowData.filter(row => row.type === 'safe');
		if (safeRows.length === 0) return '';

		let rows = '';
		for (const row of safeRows) {
			rows += `
				<tr>
					<td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${row.name}</td>
					<td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right;">${formatCurrency(row.investment)}</td>
					<td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right;">${formatCurrency(row.cap)}</td>
					<td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right;">${row.discount || 0}%</td>
				</tr>
			`;
		}

		return `
			<h2 style="font-family: 'Cormorant Garamond', Georgia, serif; font-size: 24px; color: #111827; margin: 32px 0 16px 0;">2) SAFE Notes</h2>
			<table style="width: 100%; border-collapse: collapse; margin-bottom: 32px; background: white;">
				<thead>
					<tr style="background: #f3f4f6;">
						<th style="padding: 12px; text-align: left; font-weight: 600; border-bottom: 2px solid #d1d5db;">Name</th>
						<th style="padding: 12px; text-align: right; font-weight: 600; border-bottom: 2px solid #d1d5db;">Investment</th>
						<th style="padding: 12px; text-align: right; font-weight: 600; border-bottom: 2px solid #d1d5db;">Cap</th>
						<th style="padding: 12px; text-align: right; font-weight: 600; border-bottom: 2px solid #d1d5db;">Discount</th>
					</tr>
				</thead>
				<tbody>
					${rows}
				</tbody>
			</table>
		`;
	};

	// Generate priced round section
	const generatePricedRoundSection = () => {
		const seriesRows = worksheetData.rowData.filter(row => row.type === 'series');
		if (seriesRows.length === 0 || !worksheetData.pricedRounds) return '';

		let rows = '';
		for (const row of seriesRows) {
			rows += `
				<tr>
					<td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${row.name}</td>
					<td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right;">${formatCurrency(row.investment)}</td>
				</tr>
			`;
		}

		return `
			<h2 style="font-family: 'Cormorant Garamond', Georgia, serif; font-size: 24px; color: #111827; margin: 32px 0 16px 0;">3) Priced Round</h2>
			<div style="margin-bottom: 16px; padding: 16px; background: #f9fafb; border-radius: 8px;">
				<p style="margin: 8px 0;"><strong>Pre-Money Valuation:</strong> ${formatCurrency(worksheetData.preMoney)}</p>
				<p style="margin: 8px 0;"><strong>Target Options Pool:</strong> ${worksheetData.targetOptionsPool}%</p>
			</div>
			<table style="width: 100%; border-collapse: collapse; margin-bottom: 32px; background: white;">
				<thead>
					<tr style="background: #f3f4f6;">
						<th style="padding: 12px; text-align: left; font-weight: 600; border-bottom: 2px solid #d1d5db;">Investor</th>
						<th style="padding: 12px; text-align: right; font-weight: 600; border-bottom: 2px solid #d1d5db;">Investment</th>
					</tr>
				</thead>
				<tbody>
					${rows}
				</tbody>
			</table>
		`;
	};

	// Generate cap table results
	const generateCapTableResults = (capTable: CapTableData | undefined, title: string) => {
		if (!capTable || !capTable.rows || capTable.rows.length === 0) return '';

		let rows = '';
		for (const row of capTable.rows) {
			if (row.type === 'total') continue; // Skip total row for now
			
			const ownershipDisplay = row.ownershipError?.type === 'error' ? 'Error' : 
									 row.ownershipError?.type === 'tbd' ? 'TBD' : 
									 formatPercent(row.ownershipPct);

			rows += `
				<tr>
					<td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${row.name || '-'}</td>
					<td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right;">${row.investment !== undefined ? formatCurrency(row.investment) : '-'}</td>
					<td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right;">${row.pps !== undefined ? formatCurrency(row.pps) : '-'}</td>
					<td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right;">${formatNumber(row.shares)}</td>
					<td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right;">${ownershipDisplay}</td>
				</tr>
			`;
		}

		// Add total row
		if (capTable.totalRow) {
			rows += `
				<tr style="background: #f9fafb; font-weight: 600;">
					<td style="padding: 12px; border-top: 2px solid #d1d5db;">Total</td>
					<td style="padding: 12px; border-top: 2px solid #d1d5db; text-align: right;">${formatCurrency(capTable.totalRow.investment)}</td>
					<td style="padding: 12px; border-top: 2px solid #d1d5db; text-align: right;">-</td>
					<td style="padding: 12px; border-top: 2px solid #d1d5db; text-align: right;">${formatNumber(capTable.totalRow.shares)}</td>
					<td style="padding: 12px; border-top: 2px solid #d1d5db; text-align: right;">${formatPercent(capTable.totalRow.ownershipPct)}</td>
				</tr>
			`;
		}

		return `
			<h2 style="font-family: 'Cormorant Garamond', Georgia, serif; font-size: 24px; color: #111827; margin: 32px 0 16px 0;">${title}</h2>
			<table style="width: 100%; border-collapse: collapse; margin-bottom: 32px; background: white;">
				<thead>
					<tr style="background: #f3f4f6;">
						<th style="padding: 12px; text-align: left; font-weight: 600; border-bottom: 2px solid #d1d5db;">Name</th>
						<th style="padding: 12px; text-align: right; font-weight: 600; border-bottom: 2px solid #d1d5db;">Investment</th>
						<th style="padding: 12px; text-align: right; font-weight: 600; border-bottom: 2px solid #d1d5db;">PPA</th>
						<th style="padding: 12px; text-align: right; font-weight: 600; border-bottom: 2px solid #d1d5db;">Shares</th>
						<th style="padding: 12px; text-align: right; font-weight: 600; border-bottom: 2px solid #d1d5db;">Ownership</th>
					</tr>
				</thead>
				<tbody>
					${rows}
				</tbody>
			</table>
		`;
	};

	return `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>${worksheetName} - SORS Cap Table</title>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap');
		
		body {
			font-family: 'Cormorant Garamond', Georgia, 'Times New Roman', Times, serif;
			line-height: 1.6;
			color: #374151;
			max-width: 800px;
			margin: 0 auto;
			padding: 20px;
			background-color: #f9fafb;
		}
		
		.container {
			background: white;
			padding: 40px;
			border-radius: 8px;
			box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
		}
		
		@media print {
			body {
				background: white;
			}
			.container {
				box-shadow: none;
			}
			.no-print {
				display: none;
			}
		}
	</style>
</head>
<body>
	<div class="container">
		<!-- Header with Logo -->
		<div style="text-align: center; margin-bottom: 40px;">
			<img src="${SORS_LOGO_BASE64}" alt="SORS Logo" style="max-width: 200px; height: auto;">
			<h1 style="font-family: 'Cormorant Garamond', Georgia, serif; font-size: 36px; color: #111827; margin: 20px 0 8px 0;">${worksheetName}</h1>
			<p style="color: #6b7280; margin: 0;">Generated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
		</div>

		${senderMessage ? `
		<!-- Sender Message -->
		<div style="background: #eff6ff; border-left: 4px solid #3b82f6; padding: 16px; margin-bottom: 32px; border-radius: 4px;">
			<p style="margin: 0; color: #1e40af;"><strong>Message:</strong></p>
			<p style="margin: 8px 0 0 0; color: #1e3a8a;">${senderMessage}</p>
		</div>
		` : ''}

		<!-- Cap Table Content -->
		${generateExistingShareholdersTable()}
		${generateSafeNotesTable()}
		${generatePricedRoundSection()}
		${generateCapTableResults(data.preRoundCapTable, 'Pre-Round Cap Table')}
		${generateCapTableResults(data.postRoundCapTable, 'Post-Round Cap Table')}

		<!-- Footer with CTAs -->
		<div style="margin-top: 48px; padding-top: 32px; border-top: 2px solid #e5e7eb;">
			<div style="text-align: center; margin-bottom: 24px;" class="no-print">
				<a href="${readOnlyUrl}" style="display: inline-block; background: #0066CC; color: white; padding: 12px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; margin-right: 16px;">View Live Worksheet</a>
				<a href="https://sors.no/verktoy" style="display: inline-block; background: #00A86B; color: white; padding: 12px 32px; text-decoration: none; border-radius: 6px; font-weight: 600;">Create Your Own Cap Table</a>
			</div>
			
			<div style="text-align: center; color: #6b7280; font-size: 14px;">
				<p style="margin: 8px 0;">Generated by <a href="https://sors.no" style="color: #0066CC; text-decoration: none;">SORS Cap Table Calculator</a></p>
				<p style="margin: 8px 0;">Need help? Contact us at <a href="mailto:kontakt@sors.no" style="color: #0066CC; text-decoration: none;">kontakt@sors.no</a></p>
				<p style="margin: 16px 0 8px 0; font-size: 12px; color: #9ca3af;">
					<strong>Disclaimer:</strong> This is a calculation tool. Please consult with legal and financial professionals before making investment decisions.
				</p>
			</div>
		</div>
	</div>
</body>
</html>
	`.trim();
}

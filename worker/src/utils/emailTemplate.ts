/**
 * Email template generator for cap table emails
 * Generates HTML email with hosted logo and proper formatting
 * Designed as both a cap table report and a sales tool for Sors AS
 */

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
}

// Hosted logo URL - works better in email clients like Outlook
const SORS_LOGO_URL = 'https://sors.no/sors-logo.png';

// Norwegian text constants for consistency
const TEXT_SEE_SPREADSHEET = 'Se regneark';
const TEXT_AT_ROUND = 'Ved runde';

export function generateCapTableEmailHTML(data: EmailTemplateData): string {
	const { worksheetName, readOnlyUrl, senderMessage, worksheetData } = data;
	
	// Helper function to format numbers with Norwegian locale (spaces as thousand separators)
	const formatNumber = (num: number | undefined): string => {
		if (num === undefined || num === null) return '-';
		return num.toLocaleString('nb-NO');
	};

	// Helper function to format currency in NOK
	const formatCurrency = (num: number | undefined): string => {
		if (num === undefined || num === null) return '-';
		return `kr ${formatNumber(num)}`;
	};

	// Helper function to format percentage (ownership is stored as decimal 0-1)
	const formatPercent = (num: number | undefined): string => {
		if (num === undefined || num === null) return '-';
		return `${(num * 100).toFixed(2)}%`;
	};

	// Check if we have a priced round
	const hasPricedRound = (worksheetData.pricedRounds ?? 0) > 0;
	
	// Get all stakeholders
	const commonRows = worksheetData.rowData.filter(row => row.type === 'common');
	const safeRows = worksheetData.rowData.filter(row => row.type === 'safe');
	const seriesRows = worksheetData.rowData.filter(row => row.type === 'series');

	// Calculate totals for ownership estimation
	const totalCommonShares = commonRows.reduce((sum, row) => sum + (row.shares || 0), 0) + (worksheetData.unusedOptions || 0);
	const totalSafeInvestment = safeRows.reduce((sum, row) => sum + (row.investment || 0), 0);
	const totalSeriesInvestment = seriesRows.reduce((sum, row) => sum + (row.investment || 0), 0);
	const totalInvestment = totalSafeInvestment + totalSeriesInvestment;
	
	// Flag to check if we can show total ownership (only when no SAFEs or after priced round)
	const hasSafeInvestors = safeRows.length > 0;

	// Generate the main cap table (simplified with just Name, Investment, Ownership)
	const generateCapTable = () => {
		let rows = '';

		if (hasPricedRound) {
			// With priced round: Show all stakeholders with investment amounts
			// Ownership percentages should be viewed in the full worksheet for accuracy
			const preMoney = worksheetData.preMoney || 0;
			const postMoney = preMoney + totalSeriesInvestment;

			// Founders/Common shareholders (no investment column, ownership not shown for simplicity)
			for (const row of commonRows) {
				rows += `
					<tr>
						<td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; font-size: 15px;">${row.name}</td>
						<td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; text-align: center; font-size: 15px; color: #6b7280;">Grunnlegger</td>
						<td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; text-align: right; font-size: 15px; color: #6b7280; font-style: italic;">${TEXT_SEE_SPREADSHEET}</td>
					</tr>
				`;
			}

			// Options pool
			if (worksheetData.unusedOptions > 0) {
				rows += `
					<tr>
						<td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; font-size: 15px; font-style: italic;">Options Pool</td>
						<td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; text-align: center; font-size: 15px; color: #6b7280;">-</td>
						<td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; text-align: right; font-size: 15px; color: #6b7280; font-style: italic;">${TEXT_SEE_SPREADSHEET}</td>
					</tr>
				`;
			}

			// SLIP/SAFE investors
			for (const row of safeRows) {
				const investment = row.investment || 0;
				rows += `
					<tr>
						<td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; font-size: 15px;">${row.name}</td>
						<td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; text-align: right; font-size: 15px;">${formatCurrency(investment)}</td>
						<td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; text-align: right; font-size: 15px; color: #6b7280; font-style: italic;">${TEXT_SEE_SPREADSHEET}</td>
					</tr>
				`;
			}

			// Series investors
			for (const row of seriesRows) {
				const investment = row.investment || 0;
				rows += `
					<tr>
						<td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; font-size: 15px;">${row.name}</td>
						<td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; text-align: right; font-size: 15px;">${formatCurrency(investment)}</td>
						<td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; text-align: right; font-size: 15px; color: #6b7280; font-style: italic;">${TEXT_SEE_SPREADSHEET}</td>
					</tr>
				`;
			}

			// Total row
			rows += `
				<tr style="background: #f9fafb; font-weight: 600;">
					<td style="padding: 12px 16px; border-top: 2px solid #d1d5db; font-size: 15px;">Totalt investert</td>
					<td style="padding: 12px 16px; border-top: 2px solid #d1d5db; text-align: right; font-size: 15px;">${formatCurrency(totalInvestment)}</td>
					<td style="padding: 12px 16px; border-top: 2px solid #d1d5db; text-align: right; font-size: 15px;">100%</td>
				</tr>
			`;

			return `
				<h2 style="font-family: Georgia, serif; font-size: 22px; color: #111827; margin: 32px 0 8px 0; font-weight: 600;">Cap Table Etter Runden</h2>
				<p style="color: #6b7280; margin: 0 0 16px 0; font-size: 14px;">Pre-money: ${formatCurrency(preMoney)} • Post-money: ${formatCurrency(postMoney)}</p>
				<table style="width: 100%; border-collapse: collapse; margin-bottom: 32px; background: white; border: 1px solid #e5e7eb; border-radius: 8px;">
					<thead>
						<tr style="background: #0066CC;">
							<th style="padding: 14px 16px; text-align: left; font-weight: 600; color: white; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Navn</th>
							<th style="padding: 14px 16px; text-align: right; font-weight: 600; color: white; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Investert</th>
							<th style="padding: 14px 16px; text-align: right; font-weight: 600; color: white; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Eierandel</th>
						</tr>
					</thead>
					<tbody>
						${rows}
					</tbody>
				</table>
			`;
		} else {
			// No priced round: Show existing shareholders and SLIP notes
			let totalOwnership = 0;
			
			// Founders/Common shareholders
			for (const row of commonRows) {
				const shares = row.shares || 0;
				const ownership = shares / totalCommonShares;
				totalOwnership += ownership;
				rows += `
					<tr>
						<td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; font-size: 15px;">${row.name}</td>
						<td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; text-align: right; font-size: 15px;">-</td>
						<td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; text-align: right; font-size: 15px;">${formatPercent(ownership)}</td>
					</tr>
				`;
			}

			// Options pool
			if (worksheetData.unusedOptions > 0) {
				const optionsOwnership = worksheetData.unusedOptions / totalCommonShares;
				totalOwnership += optionsOwnership;
				rows += `
					<tr>
						<td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; font-size: 15px; font-style: italic;">Options Pool</td>
						<td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; text-align: right; font-size: 15px;">-</td>
						<td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; text-align: right; font-size: 15px;">${formatPercent(optionsOwnership)}</td>
					</tr>
				`;
			}

			// SLIP/SAFE investors - show investment but ownership is TBD until priced round
			for (const row of safeRows) {
				const investment = row.investment || 0;
				rows += `
					<tr>
						<td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; font-size: 15px;">${row.name}</td>
						<td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; text-align: right; font-size: 15px;">${formatCurrency(investment)}</td>
						<td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; text-align: right; font-size: 15px; font-style: italic; color: #6b7280;">${TEXT_AT_ROUND}</td>
					</tr>
				`;
			}

			// Total row
			// Note: We can only show total ownership if there are no SAFE investors (since their ownership is TBD)
			const canShowTotalOwnership = !hasSafeInvestors;
			rows += `
				<tr style="background: #f9fafb; font-weight: 600;">
					<td style="padding: 12px 16px; border-top: 2px solid #d1d5db; font-size: 15px;">Totalt</td>
					<td style="padding: 12px 16px; border-top: 2px solid #d1d5db; text-align: right; font-size: 15px;">${totalSafeInvestment > 0 ? formatCurrency(totalSafeInvestment) : '-'}</td>
					<td style="padding: 12px 16px; border-top: 2px solid #d1d5db; text-align: right; font-size: 15px;">${canShowTotalOwnership ? formatPercent(totalOwnership) : '-'}</td>
				</tr>
			`;

			const tableSubtitle = hasSafeInvestors ? 'SLIP-investorer konverterer ved prissatt runde' : '';

			return `
				<h2 style="font-family: Georgia, serif; font-size: 22px; color: #111827; margin: 32px 0 8px 0; font-weight: 600;">Nåværende Cap Table</h2>
				${tableSubtitle ? `<p style="color: #6b7280; margin: 0 0 16px 0; font-size: 14px;">${tableSubtitle}</p>` : ''}
				<table style="width: 100%; border-collapse: collapse; margin-bottom: 32px; background: white; border: 1px solid #e5e7eb; border-radius: 8px;">
					<thead>
						<tr style="background: #0066CC;">
							<th style="padding: 14px 16px; text-align: left; font-weight: 600; color: white; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Navn</th>
							<th style="padding: 14px 16px; text-align: right; font-weight: 600; color: white; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Investert</th>
							<th style="padding: 14px 16px; text-align: right; font-weight: 600; color: white; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Eierandel</th>
						</tr>
					</thead>
					<tbody>
						${rows}
					</tbody>
				</table>
			`;
		}
	};

	return `
<!DOCTYPE html>
<html lang="no">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>${worksheetName} - Sors Cap Table</title>
	<!--[if mso]>
	<noscript>
		<xml>
			<o:OfficeDocumentSettings>
				<o:PixelsPerInch>96</o:PixelsPerInch>
			</o:OfficeDocumentSettings>
		</xml>
	</noscript>
	<![endif]-->
</head>
<body style="font-family: Georgia, 'Times New Roman', Times, serif; line-height: 1.6; color: #374151; max-width: 640px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
	<div style="background: white; padding: 40px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
		<!-- Header with Logo -->
		<div style="text-align: center; margin-bottom: 32px; border-bottom: 2px solid #e5e7eb; padding-bottom: 24px;">
			<img src="${SORS_LOGO_URL}" alt="Sors" width="120" height="auto" style="max-width: 120px; height: auto; margin-bottom: 16px;">
		</div>

		<!-- Marketing Introduction -->
		<div style="margin-bottom: 32px;">
			<h1 style="font-family: Georgia, serif; font-size: 28px; color: #111827; margin: 0 0 16px 0; font-weight: 600;">${worksheetName}</h1>
			<p style="font-size: 16px; color: #374151; margin: 0 0 12px 0; line-height: 1.7;">
				Du har mottatt en cap table-rapport fra <strong>Sors Finanskalkulator</strong> – et gratis og brukervennlig verktøy for gründere og investorer som ønsker full oversikt over eierskap, investeringer og SLIP-konverteringer.
			</p>
			<p style="font-size: 15px; color: #6b7280; margin: 0; line-height: 1.6;">
				Se hele regnearket interaktivt, eller opprett din egen cap table på <a href="https://sors.no/verktoy" style="color: #0066CC; text-decoration: none; font-weight: 500;">sors.no/verktoy</a>.
			</p>
		</div>

		${senderMessage ? `
		<!-- Sender Message -->
		<div style="background: #f8fafc; border-radius: 8px; padding: 20px; margin-bottom: 32px; border: 1px solid #e2e8f0;">
			<p style="margin: 0; color: #334155; font-size: 15px; line-height: 1.7; font-style: italic;">"${senderMessage}"</p>
		</div>
		` : ''}

		<!-- Cap Table -->
		${generateCapTable()}

		<!-- CTA Button -->
		<div style="text-align: center; margin: 40px 0;">
			<a href="${readOnlyUrl}" style="display: inline-block; background: #0066CC; color: white; padding: 14px 40px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">Se hele regnearket →</a>
		</div>

		<!-- Sors Value Proposition -->
		<div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 24px; border-radius: 12px; margin: 32px 0;">
			<h3 style="font-family: Georgia, serif; font-size: 18px; color: #0c4a6e; margin: 0 0 12px 0; font-weight: 600;">Hvorfor bruke Sors?</h3>
			<ul style="margin: 0; padding: 0 0 0 20px; color: #0369a1; font-size: 15px; line-height: 1.8;">
				<li><strong>Gratis:</strong> Ingen skjulte kostnader eller abonnement</li>
				<li><strong>SLIP-støtte:</strong> Beregn hvordan SLIP-avtaler konverterer ved prissatt runde</li>
				<li><strong>Samarbeid:</strong> Del regnearket med co-founders, investorer og rådgivere</li>
				<li><strong>Norsk:</strong> Laget for norske gründere og oppstartsselskaper</li>
			</ul>
			<div style="margin-top: 16px;">
				<a href="https://sors.no/verktoy" style="color: #0066CC; text-decoration: none; font-weight: 600; font-size: 15px;">Opprett din egen cap table gratis →</a>
			</div>
		</div>

		<!-- Footer -->
		<div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid #e5e7eb; text-align: center;">
			<p style="color: #6b7280; font-size: 14px; margin: 0 0 8px 0;">
				Denne rapporten ble laget med <a href="https://sors.no" style="color: #0066CC; text-decoration: none; font-weight: 500;">Sors Cap Table-kalkulator</a>
			</p>
			<p style="color: #9ca3af; font-size: 13px; margin: 0 0 16px 0;">
				Spørsmål? Kontakt oss på <a href="mailto:kontakt@sors.no" style="color: #0066CC; text-decoration: none;">kontakt@sors.no</a>
			</p>
			<p style="color: #9ca3af; font-size: 12px; margin: 0; line-height: 1.5;">
				<em>Merk: Dette er et beregningsverktøy. Vennligst konsulter juridiske og finansielle rådgivere før investeringsbeslutninger.</em>
			</p>
		</div>
	</div>
</body>
</html>
	`.trim();
}

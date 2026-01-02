export const translations = {
  // Page titles and headers
  'page.title': 'Cap Table Worksheet',
  'page.breadcrumb.home': 'Founders Handbook',
  'page.breadcrumb.current': 'Cap Table Worksheet',
  
  // Actions and buttons
  'action.new': 'New',
  'action.share': 'Share',
  'action.clone': 'Clone',
  'action.save': 'Save',
  'action.cancel': 'Cancel',
  'action.delete': 'Delete',
  'action.edit': 'Edit',
  'action.add': 'Add',
  'action.remove': 'Remove',
  'action.clear': 'Clear',
  'action.close': 'Close',
  'action.copy': 'Copy',
  'action.download': 'Download',
  'action.createNew': 'Create New',
  
  // Worksheet
  'worksheet.name.label': 'Worksheet Name',
  'worksheet.name.placeholder': 'My Company Cap Table',
  'worksheet.saving': 'Saving...',
  'worksheet.saved': 'Saved',
  'worksheet.readOnly': 'Read Only',
  'worksheet.fullAccess': 'Full Access',
  'worksheet.untitled': 'Untitled Worksheet',
  'worksheet.editName': 'Edit worksheet name',
  'worksheet.enterName': 'Enter worksheet name...',
  
  // Shareholders
  'shareholder.name': 'Shareholder Name',
  'shareholder.shares': 'Shares',
  'shareholder.ownership': 'Ownership',
  'shareholder.type': 'Type',
  'shareholder.add': 'Add Shareholder',
  'shareholder.common': 'Common',
  'shareholder.preferred': 'Preferred',
  'shareholder.options': 'Options',
  'shareholder.issuedOptions': 'Issued Options',
  'shareholder.unusedPool': 'Unused Options Pool',
  
  // Financial terms
  'finance.preMoney': 'Pre-Money Valuation',
  'finance.postMoney': 'Post-Money Valuation',
  'finance.investment': 'Investment',
  'finance.valuation': 'Valuation',
  'finance.pps': 'Price Per Share',
  'finance.shares': 'Shares',
  'finance.dilution': 'Dilution',
  'finance.ownership': 'Ownership',
  'finance.targetOptions': 'Target Options Pool',
  
  // Series/Rounds
  'series.name': 'Series Name',
  'series.add': 'Add Series',
  'series.safe': 'SAFE',
  'series.seriesA': 'Series A',
  'series.seriesB': 'Series B',
  'series.seed': 'Seed',
  
  // Conversion
  'conversion.title': 'SAFE Conversion',
  'conversion.valCap': 'Valuation Cap',
  'conversion.discount': 'Discount',
  'conversion.amount': 'Amount',
  
  // Status and messages
  'status.connecting': 'Connecting...',
  'status.connected': 'Connected',
  'status.disconnected': 'Disconnected',
  'status.error': 'Error',
  'status.loading': 'Loading...',
  'status.autoSave': 'Auto-save enabled',
  'status.connectionError': 'Connection Error',
  
  // Sharing
  'share.title': 'Share Worksheet',
  'share.readOnly': 'Read-Only Link',
  'share.fullAccess': 'Full Access Link',
  'share.copied': 'Copied to clipboard!',
  'share.description.readOnly': 'Others can view but not edit',
  'share.description.fullAccess': 'Others can view and edit',
  
  // History
  'history.title': 'Recent Worksheets',
  'history.empty': 'No recent worksheets',
  'history.clear': 'Clear History',
  'history.search': 'Search worksheets...',
  'history.lastAccessed': 'Last accessed',
  'history.clearConfirm': 'Are you sure you want to clear all history?',
  'history.clearAll': 'Clear All History',
  'history.keepHistory': 'Keep History',
  
  // Tooltips and help
  'tooltip.preMoney': 'Company valuation before new investment',
  'tooltip.postMoney': 'Company valuation after new investment',
  'tooltip.pps': 'Price per share in this round',
  'tooltip.dilution': 'Ownership percentage decrease',
  'tooltip.optionsPool': 'Reserved shares for employee stock options',
  'tooltip.unusedOptionsPool': 'Reserved shares that have yet to be assigned as option grants for team members.',
  'tooltip.unusedOptionsPoolExample': '[For example, if you have an option plan with 150,000 reserved shares and then granted 50,000 options to team members, your Unissued Option pool would be 100,000.]',
  'tooltip.issuedOptions': 'Options or shares already issued to other employees, advisors, or shareholders in the company.',
  
  // Errors
  'error.invalidNumber': 'Please enter a valid number',
  'error.required': 'This field is required',
  'error.saveFailed': 'Failed to save worksheet',
  'error.loadFailed': 'Failed to load worksheet',
  
  // Time formats
  'time.justNow': 'Just now',
  'time.minutesAgo': 'minutes ago',
  'time.hoursAgo': 'hours ago',
  'time.daysAgo': 'days ago',
  'time.weeksAgo': 'weeks ago',
  'time.monthsAgo': 'months ago',
  
  // Cap table sections
  'capTable.existing': 'Existing Cap Table',
  'capTable.safes': 'SAFEs',
  'capTable.conversion': 'Priced Round Conversion',
  'capTable.addSafe': 'Add SAFE',
  'capTable.targetOptionsPool': 'Target Options Pool %',
  'capTable.preMoney': 'Pre-Money Valuation',
  'capTable.postMoney': 'Post-Money Valuation',
  'capTable.totalInvestment': 'Total Series Investment',
  'capTable.pps': 'Price Per Share',
  'capTable.newShares': 'New Shares Issued',
  'capTable.totalShares': 'Total Shares',
  'capTable.roundDilution': 'Total Round Dilution',
  
  // Labels
  'label.name': 'Name',
  'label.type': 'Type',
  'label.amount': 'Amount',
  'label.valCap': 'Val Cap',
  'label.discount': 'Discount',
  'label.shares': 'Shares',
  'label.ownership': 'Ownership',
  'label.newOwnership': 'New Ownership',
  'label.dilution': 'Dilution',
} as const;

// Core SAFE conversion functionality
export {
  fitConversion,
  type BestFit,
  DEFAULT_ROUNDING_STRATEGY,
} from './conversion-solver';

export {
  safeConvert,
  sumSafeConvertedShares,
  populateSafeCaps,
  getCapForSafe,
  checkSafeNotesForErrors,
} from './safe-calcs';

// Cap table functionality
export {
  buildExistingShareholderCapTable,
  buildPreRoundCapTable,
  buildEstimatedPreRoundCapTable,
  buildPricedRoundCapTable,
} from './cap-table';

// Types
export {
  type SAFENote,
  type CommonStockholder,
  type CommonCapTableRow,
  type CapTableRowType,
  type CapTableOwnershipError,
} from './cap-table/types';

// Number formatting utilities
export {
  stringToNumber,
  formatUSDWithCommas,
  formatNumberWithCommas,
  shortenedUSD,
} from './utils/numberFormatting';

// Rounding utilities
export {
  type RoundingStrategy,
  roundShares,
  roundPPSToPlaces,
  roundToPlaces,
} from './utils/rounding';

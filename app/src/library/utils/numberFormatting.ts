export const stringToNumber = (value: string | number): number => {
  if (typeof value === "number") {
    return value;
  } else {
    // Remove anything that's not a digit or a period or negative sign
    const cleanedValue = value.replace(/[^-\d.]/g, "");
    // if it has a period, parseFloat, otherwise parseInt
    const result = cleanedValue.includes(".")
      ? parseFloat(cleanedValue)
      : parseInt(cleanedValue, 10);
    // Return 0 if the result is NaN (e.g., empty string or invalid input)
    return isNaN(result) ? 0 : result;
  }
};

export const formatUSDWithCommas = (value: number | string) => {
  if (typeof value === "string") {
    value = stringToNumber(value);
  }
  const maximumFractionDigits = value < 1000 ? 2 : 0
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits,
  });
};

export const formatNumberWithCommas = (value: number | string) => {
  if (typeof value === "string") {
    value = stringToNumber(value);
  }
  return value.toLocaleString("en-US", {
    style: "decimal",
  });
};

export const shortenedUSD = (value: number | string) => {
  if (typeof value === "string") {
    value = stringToNumber(value);
  }

  if (value >= 1_000_000) {
    return "$" + (value / 1_000_000).toFixed(1) + "M";
  } else if (value >= 1_000) {
    return "$" + (value / 1_000).toFixed(1) + "K";
  } else {
    return "$" + value.toString();
  }
};

export const formatNOKWithCommas = (value: number | string) => {
  if (typeof value === "string") {
    value = stringToNumber(value);
  }
  const maximumFractionDigits = value < 1000 ? 2 : 0;
  return value.toLocaleString("nb-NO", {
    style: "currency",
    currency: "NOK",
    maximumFractionDigits,
  });
};

export const formatNumberWithCommasNO = (value: number | string) => {
  if (typeof value === "string") {
    value = stringToNumber(value);
  }
  return value.toLocaleString("nb-NO", {
    style: "decimal",
  });
};

export const shortenedNOK = (value: number | string) => {
  if (typeof value === "string") {
    value = stringToNumber(value);
  }

  if (value >= 1_000_000) {
    return "kr " + (value / 1_000_000).toFixed(1) + "M";
  } else if (value >= 1_000) {
    return "kr " + (value / 1_000).toFixed(1) + "K";
  } else {
    return "kr " + value.toString();
  }
};

// Locale-aware formatting functions
export const formatCurrencyLocale = (value: number | string, locale: string) => {
  if (locale === 'nb-NO' || locale === 'no') {
    return formatNOKWithCommas(value);
  }
  return formatUSDWithCommas(value);
};

export const formatNumberLocale = (value: number | string, locale: string) => {
  if (locale === 'nb-NO' || locale === 'no') {
    return formatNumberWithCommasNO(value);
  }
  return formatNumberWithCommas(value);
};

export const formatCurrencySymbol = (locale: string) => {
  if (locale === 'nb-NO' || locale === 'no') {
    return 'kr';
  }
  return '$';
};
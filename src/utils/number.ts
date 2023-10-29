// Doesn't do any rounding - simply formats the number to look like a price
export const getCurrencyString = (amount?: number) => {
  if (!amount) {
    return '';
  }

  // Show no decimal places if it's a whole number, otherwise force 2
  const decimalPlacesToShow = hasDecimalPlaces(amount) ? 2 : 0;

  const localisedAmount = amount.toLocaleString(undefined, {
    minimumFractionDigits: decimalPlacesToShow,
    maximumFractionDigits: decimalPlacesToShow,
  });

  const amountString = `$${localisedAmount}`;

  return amountString;
};

const hasDecimalPlaces = (number: number) => {
  return number % 1 !== 0;
};

// Doesn't do any rounding - simply formats the number to look like a price
export const getCurrencyString = (amount?: number) => {
  if (!amount) {
    return '';
  }

  return `$${amount.toFixed(hasDecimalPlaces(amount) ? 2 : 0)}`;
};

const hasDecimalPlaces = (number: number) => {
  return number % 1 !== 0;
};

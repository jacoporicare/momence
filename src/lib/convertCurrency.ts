export function convertCurrency(
  amount: number,
  rate: number,
  rateAmount: number
): number {
  return amount / (rate / rateAmount);
}

import { convertCurrency } from './convertCurrency';

test('converts 112.25 CZK to USD', () => {
  const input = 112.25;
  const rate = 22.45;
  const rateAmount = 1;

  const converted = convertCurrency(input, rate, rateAmount);

  expect(converted).toEqual(5);
});

test('converts 97.5 CZK to HUF', () => {
  const input = 97.5;
  const rate = 6.5;
  const rateAmount = 100;

  const converted = convertCurrency(input, rate, rateAmount);

  expect(converted).toEqual(1500);
});

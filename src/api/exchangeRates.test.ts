import { parseRateRow, parseRates } from './exchangeRates';

test('parses rate row', () => {
  const data = 'Australia|dollar|1|AUD|15.150';

  const parsedRow = parseRateRow(data);

  expect(parsedRow).toEqual({
    country: 'Australia',
    currency: 'dollar',
    amount: 1,
    code: 'AUD',
    rate: 15.15,
  });
});

test('fails to parse rate row with invalid delimiter', () => {
  const data = 'Australia;dollar;1;AUD;15.150';

  const parseFn = () => parseRateRow(data);

  expect(parseFn).toThrow();
});

test('fails to parse rate row with invalid number of columns', () => {
  const data = 'Australia|dollar|1|AUD';

  const parseFn = () => parseRateRow(data);

  expect(parseFn).toThrow();
});

test('parses rates, skipping header rows', () => {
  const data = `27 May 2024 #101
Country|Currency|Amount|Code|Rate
Australia|dollar|1|AUD|15.150`;

  const parsedData = parseRates(data);

  expect(parsedData.length).toEqual(1);
});

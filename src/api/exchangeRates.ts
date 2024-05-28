export type Rate = {
  country: string;
  currency: string;
  amount: number;
  code: string;
  rate: number;
};

const ROW_DELIMITER = '\n';
const COLUMN_DELIMITER = '|';
const HEADER_ROWS_COUNT = 2;
const COLUMN_COUNT = 5;

export async function getRates(): Promise<Rate[]> {
  const response = await fetch(process.env.REACT_APP_EXCHANGES_RATES_URL!);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.text();

  return parseRates(data);
}

export function parseRates(data: string): Rate[] {
  return data
    .trim()
    .split(ROW_DELIMITER)
    .slice(HEADER_ROWS_COUNT)
    .map<Rate>(parseRate);
}

export function parseRate(row: string): Rate {
  // Australia|dollar|1|AUD|15.150
  const cols = row.split(COLUMN_DELIMITER);

  if (cols.length !== COLUMN_COUNT) {
    throw new Error(`Invalid data: ${row}`);
  }

  return {
    country: cols[0],
    currency: cols[1],
    amount: Number(cols[2]),
    code: cols[3],
    rate: Number(cols[4]),
  };
}

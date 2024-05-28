import { useMemo, useState } from 'react';
import styled from 'styled-components';

import { Rate } from '../api/exchangeRates';
import { convertCurrency } from '../lib/convertCurrency';

type Props = {
  rates: Rate[];
};

const Form = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 0.5em;
  margin-right: 0.5rem;
  position: relative;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  margin-right: 0.5rem;
`;

const Select = styled.select`
  flex: 1;
  border: 1px solid #ccc;
  padding: 0.5em;
`;

export default function CurrencyForm(props: Props) {
  const ratesMap = useMemo(
    () =>
      props.rates.reduce<Map<string, Rate>>(
        (map, rate) => map.set(rate.code, rate),
        new Map()
      ),
    props.rates
  );

  const [amount, setAmount] = useState('');
  const [currencyCode, setCurrencyCode] = useState('');

  const selectedCurrency = ratesMap.get(currencyCode);
  const convertedAmount =
    amount && selectedCurrency
      ? convertCurrency(
          Number(amount),
          selectedCurrency.rate,
          selectedCurrency.amount
        )
      : undefined;

  return (
    <>
      <Form>
        <InputWrapper>
          <Input
            type="number"
            placeholder="Amount in CZK"
            value={amount}
            onChange={(e) => setAmount(e.currentTarget.value)}
          />
          CZK
        </InputWrapper>
        <Select
          value={currencyCode}
          onChange={(e) => setCurrencyCode(e.currentTarget.value)}
        >
          <option value="">Select currency</option>
          {props.rates.map((rate) => (
            <option key={rate.code} value={rate.code}>
              {rate.code}
            </option>
          ))}
        </Select>
      </Form>

      <h3>
        Result:{' '}
        {convertedAmount !== undefined ? (
          <>
            {convertedAmount} {currencyCode}
          </>
        ) : (
          <>enter a valid number and select a currency</>
        )}
      </h3>
    </>
  );
}

import { useMemo, useState } from 'react';
import styled from 'styled-components';

import { Rate } from '../api/exchangeRates';
import useNumericInputState from '../hooks/useNumericInputState';
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
  position: relative;
  padding-right: 0.5em;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  margin-right: 0.5rem;
  padding: 0.5em;
`;

const Arrow = styled.div`
  flex: 0;
  margin: 0 0.5rem;
  font-size: 1.75em;
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

  const [currencyCode, setCurrencyCode] = useState('');

  const { value, parsedValue, onChange, onBlur } = useNumericInputState();

  const selectedCurrency = ratesMap.get(currencyCode);
  const convertedAmount =
    parsedValue && selectedCurrency
      ? convertCurrency(
          Number(parsedValue),
          selectedCurrency.rate,
          selectedCurrency.amount
        )
      : undefined;

  return (
    <>
      <Form>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Amount"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
          CZK
        </InputWrapper>
        <Arrow>▶</Arrow>
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
            {convertedAmount.toLocaleString('en-US')} {currencyCode}
          </>
        ) : (
          <>enter a valid number and select a currency</>
        )}
      </h3>
    </>
  );
}

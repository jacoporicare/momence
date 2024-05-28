import { useMemo, useState } from 'react';
import styled from 'styled-components';

import { Rate } from '../api/exchangeRates';
import useNumericInputState from '../hooks/useNumericInputState';
import { convertCurrency } from '../lib/convertCurrency';

import { Arrow, Form, Input, InputWrapper, Select } from './common';

type Props = {
  rates: Rate[];
};

const Result = styled.div`
  margin-bottom: 2rem;
`;

const ResultInput = styled.div`
  color: ${(props) => props.theme.dimmedTextColor};
  font-weight: 600;
`;

const ResultValue = styled.div`
  font-size: 1.25em;
  font-weight: 700;
  margin-top: 0.5rem;
`;

export default function CurrencyForm(props: Props) {
  const ratesMap = useMemo(
    () =>
      props.rates.reduce<Map<string, Rate>>(
        (map, rate) => map.set(rate.code, rate),
        new Map()
      ),
    [props.rates]
  );

  const [currencyCode, setCurrencyCode] = useState('');

  const { value, parsedValue, onChange, onBlur } = useNumericInputState();

  const selectedCurrency = ratesMap.get(currencyCode);
  const convertedAmount =
    !Number.isNaN(parsedValue) && selectedCurrency
      ? convertCurrency(
          parsedValue,
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

      {convertedAmount !== undefined && (
        <Result>
          <ResultInput>{parsedValue.toLocaleString('en-US')} CZK =</ResultInput>
          <ResultValue>
            {convertedAmount.toLocaleString('en-US')} {currencyCode}
          </ResultValue>
        </Result>
      )}
    </>
  );
}

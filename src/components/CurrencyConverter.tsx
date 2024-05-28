import { useQuery } from '@tanstack/react-query';

import { getRates } from '../api/exchangeRates';

import { Container, Error, Loader } from './common';
import CurrencyForm from './CurrencyForm';
import RateList from './RateList';

export default function CurrencyConverter() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['rates'],
    queryFn: getRates,
  });

  return (
    <Container>
      <h1>Currency Converter</h1>
      <main>
        {isLoading && <Loader />}
        {isError && (
          <Error title="Cannot load rates">
            We are sorry, but we were unable to load the exchange rates. Please,
            try again later.
          </Error>
        )}
        {data && (
          <>
            <CurrencyForm rates={data} />
            <RateList rates={data} />
          </>
        )}
      </main>
    </Container>
  );
}

import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';

import { getRates } from '../api/exchangeRates';

import Error from './common/Error';
import Loader from './common/Loader';
import CurrencyForm from './CurrencyForm';
import RateList from './RateList';

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 1em;
`;

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

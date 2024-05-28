import { useQuery } from '@tanstack/react-query';

import { getRates } from '../../api/exchangeRates';
import Error from '../common/Error';
import Loader from '../common/Loader';

import Container from '../common/Container';
import RateList from '../RateList/RateList';

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
        {data && <RateList rates={data} />}
      </main>
    </Container>
  );
}

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import CurrencyConverter from './CurrencyConverter';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CurrencyConverter />
    </QueryClientProvider>
  );
}

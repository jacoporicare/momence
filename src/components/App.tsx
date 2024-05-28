import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';

import CurrencyConverter from './CurrencyConverter';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CurrencyConverter />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

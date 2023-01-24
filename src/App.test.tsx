import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

describe('App', () => {
  const queryClient = new QueryClient();

  it('renders the top navigation', async () => {
    // given
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );

    // when

    // then
    expect(screen.getByText('Suche')).toBeInTheDocument();
    expect(screen.getByText('Favoriten')).toBeInTheDocument();
  });

  test.skip('renders the search page', async () => {});

  test.skip('renders the detail page', async () => {});

  test.skip('renders the favorites page', async () => {});
});

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

type Props = {
  children: React.ReactElement;
};

const AllProviders = ({ children }: Props) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export const customRender = (ui: React.ReactElement) => {
  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: AllProviders })
  };
};

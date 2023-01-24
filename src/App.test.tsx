import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import App from './App';
import { customRender } from './testUtils';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

describe('App', () => {
  it('renders the top navigation', async () => {
    // given
    const { user } = customRender(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByText('Suche')).toBeInTheDocument();
    expect(screen.getByText('Favoriten')).toBeInTheDocument();

    // when
    await user.click(screen.getByText('Favoriten'));

    // then
    const titleValue = screen.getByRole('heading', { name: 'Favoriten' });
    expect(titleValue).toBeInTheDocument();
  });

  it('renders the search page at root path', async () => {
    customRender(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const titleValue = screen.getByRole('heading', {
      name: 'Empowering people with data'
    });
    expect(titleValue).toBeInTheDocument();
  });

  it('renders the search page at path /search', async () => {
    customRender(
      <MemoryRouter initialEntries={['/search']}>
        <App />
      </MemoryRouter>
    );

    const titleValue = screen.getByRole('heading', {
      name: 'Empowering people with data'
    });
    expect(titleValue).toBeInTheDocument();
  });

  test.skip('renders the detail page at path /items/:id', async () => {
    customRender(
      <MemoryRouter initialEntries={['/items/661751']}>
        <App />
      </MemoryRouter>
    );

    const titleValue = screen.getByRole('heading', {
      name: 'Gesundheit - Bekanntheit von Krankenkassen in Deutschland 2017'
    });
    expect(titleValue).toBeInTheDocument();
  });

  it('renders the favorites page at path /favorites', async () => {
    customRender(
      <MemoryRouter initialEntries={['/favorites']}>
        <App />
      </MemoryRouter>
    );

    const titleValue = screen.getByRole('heading', { name: 'Favoriten' });
    expect(titleValue).toBeInTheDocument();
  });
});

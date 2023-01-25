import { describe, it, vi } from 'vitest';
import { screen } from '@testing-library/react';
import App from './App';
import { customRender } from './test-data/';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import * as hooks from './routes/hooks';
import { UseQueryResult } from '@tanstack/react-query';

describe('App', () => {
  it('renders the top navigation', async () => {
    // given
    const { user, getByText, getByRole } = customRender(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(getByText('Suche')).toBeInTheDocument();
    expect(getByText('Favoriten')).toBeInTheDocument();

    // when
    await user.click(getByText('Favoriten'));

    // then
    const titleValue = getByRole('heading', { name: 'Favoriten' });
    expect(titleValue).toBeInTheDocument();
  });

  it('renders the search page at root path', async () => {
    // given
    // when
    const { getByRole } = customRender(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const titleValue = getByRole('heading', {
      name: 'Empowering people with data'
    });

    // then
    expect(titleValue).toBeInTheDocument();
  });

  it('renders the search page at path /search', async () => {
    // given
    // when
    const { getByRole } = customRender(
      <MemoryRouter initialEntries={['/search']}>
        <App />
      </MemoryRouter>
    );

    const titleValue = getByRole('heading', {
      name: 'Empowering people with data'
    });

    // then
    expect(titleValue).toBeInTheDocument();
  });

  test.skip('renders the detail page at path /items/:id', async () => {
    // given
    const useFetchDetailsSpy = vi
      .spyOn(hooks, 'useFetchDetails')
      .mockImplementation(() => {
        return Promise.resolve({
          data: { items: [{ identifier: 1, title: 'item 1' }] }
        } as UseQueryResult<any, unknown>);
      });

    // when
    const { getByText } = customRender(
      <MemoryRouter initialEntries={['/items/661751']}>
        <App />
      </MemoryRouter>
    );
    const titleValue = getByText('item 1');

    // then
    expect(titleValue).toBeInTheDocument();
  });

  it('renders the favorites page at path /favorites', async () => {
    // given

    // when
    const { getByRole } = customRender(
      <MemoryRouter initialEntries={['/favorites']}>
        <App />
      </MemoryRouter>
    );

    const titleValue = getByRole('heading', { name: 'Favoriten' });
    expect(titleValue).toBeInTheDocument();
  });
});

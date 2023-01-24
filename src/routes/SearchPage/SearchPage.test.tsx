import { describe, it, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { customRender } from '../../testUtils';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { SearchPage } from './SearchPage';

describe('SearchPage', () => {
  it('renders the correct DOM elements', async () => {
    // given
    customRender(
      <BrowserRouter>
        <SearchPage />
      </BrowserRouter>
    );
    const titleValue = screen.getByRole('heading', {
      name: 'Empowering people with data'
    });
    const subTitleValue = screen.getByRole('heading', {
      name: 'Insights und Fakten aus 170 Branchen und 150+ Ländern'
    });
    const placeholderText = screen.queryByPlaceholderText(
      'Statistiken, Prognosen und Umfragen finden'
    );
    const searchButton = screen.getByRole('button', { name: /search/i });

    // when

    // then
    expect(titleValue).toBeInTheDocument();
    expect(subTitleValue).toBeInTheDocument();
    expect(placeholderText).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });
});

import { describe, it, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';
import { UseQueryResult } from '@tanstack/react-query';
import { SearchPage } from './SearchPage';
import * as hooks from '../hooks';
import { customRender, searchResultItemsFixture } from '../../test-data/';

const twoSearchResultItemsFixture = searchResultItemsFixture.slice(0, 2);

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

  it('calls useFetchSearchData when search button is clicked', async () => {
    // given
    const useFetchSearchDataSpy = vi
      .spyOn(hooks, 'useFetchSearchData')
      .mockImplementation(() => {
        return { data: { items: [] } } as UseQueryResult<any, unknown>;
      });
    const { user } = customRender(
      <BrowserRouter>
        <SearchPage />
      </BrowserRouter>
    );
    const searchButton = screen.getByRole('button', { name: /search/i });

    // when
    await user.click(searchButton);

    // then
    expect(useFetchSearchDataSpy).toHaveBeenCalled();
  });

  it('renders results when valid data is returned', async () => {
    // given
    const useFetchSearchDataSpy = vi
      .spyOn(hooks, 'useFetchSearchData')
      .mockImplementation(() => {
        return {
          data: { items: twoSearchResultItemsFixture }
        } as UseQueryResult<any, unknown>;
      });

    const { user } = customRender(
      <BrowserRouter>
        <SearchPage />
      </BrowserRouter>
    );

    const searchInput = screen.queryByPlaceholderText(
      'Statistiken, Prognosen und Umfragen finden'
    ) as HTMLInputElement;
    const searchButton = screen.getByRole('button', { name: /search/i });

    // when/then
    await user.type(searchInput, 'Statista');
    expect(searchInput.value).toBe('Statista');

    await user.click(searchButton);
    expect(useFetchSearchDataSpy).toHaveBeenCalled();

    const searchResults = screen.getAllByTestId('search-result-item');
    expect(searchResults).toHaveLength(twoSearchResultItemsFixture.length);

    const headerTitle1 = screen.getByText(twoSearchResultItemsFixture[0].title);
    const headerTitle2 = screen.getByText(twoSearchResultItemsFixture[1].title);
    expect(headerTitle1).toBeInTheDocument();
    expect(headerTitle2).toBeInTheDocument();

    const subject1 = screen.getByText(twoSearchResultItemsFixture[0].subject);
    const subject2 = screen.getByText(twoSearchResultItemsFixture[1].subject);
    expect(subject1).toBeInTheDocument();
    expect(subject2).toBeInTheDocument();

    const favoriteButtons = screen.getAllByRole('button', {
      name: 'fav-button'
    });
    expect(favoriteButtons[0]).toBeInTheDocument();
    expect(favoriteButtons[1]).toBeInTheDocument();
    expect(favoriteButtons).toHaveLength(2);
  });

  it('renders no results when invalid data is returned', async () => {
    // given
    const useFetchSearchDataSpy = vi
      .spyOn(hooks, 'useFetchSearchData')
      .mockImplementation(() => {
        return {
          data: { items: [] }
        } as UseQueryResult<any, unknown>;
      });

    const { user } = customRender(
      <BrowserRouter>
        <SearchPage />
      </BrowserRouter>
    );

    const searchInput = screen.queryByPlaceholderText(
      'Statistiken, Prognosen und Umfragen finden'
    ) as HTMLInputElement;
    const searchButton = screen.getByRole('button', { name: /search/i });

    // when/then
    await user.type(searchInput, 'abc');
    expect(searchInput.value).toBe('abc');

    await user.click(searchButton);
    expect(useFetchSearchDataSpy).toHaveBeenCalled();

    const searchResults = screen?.queryAllByTestId('search-result-item');
    expect(searchResults).toHaveLength(0);
  });
});

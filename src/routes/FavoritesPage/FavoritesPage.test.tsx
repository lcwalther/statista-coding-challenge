import { describe, it, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { UseQueryResult } from '@tanstack/react-query';
import { FavoritesPage } from './FavoritesPage';
import * as hooks from '../hooks';
import { customRender, searchResultItemsFixture } from '../../test-data/';

const twoSearchResultItemsFixture = [...searchResultItemsFixture].slice(0, 2);

describe('FavoritesPage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders the correct DOM elements', async () => {
    // given
    const { getByRole } = customRender(<FavoritesPage />);

    // when
    // then
    const titleValue = getByRole('heading', { name: 'Favoriten' });
    expect(titleValue).toBeInTheDocument();
  });

  test.skip('renders favorites when local storage contains ids', async () => {
    // given
    const itemsIds = twoSearchResultItemsFixture.map((item) => item.identifier);
    localStorage.setItem('favoriteIds', JSON.stringify(itemsIds));

    const useFetchFavoritesSpy = vi
      .spyOn(hooks, 'useFetchFavorites')
      .mockImplementation(() => {
        return Promise.resolve({
          data: { items: twoSearchResultItemsFixture }
        } as UseQueryResult<any, unknown>);
      });

    // when
    const { getByText, getAllByTestId, getAllByRole } = customRender(
      <BrowserRouter>
        <FavoritesPage />
      </BrowserRouter>
    );

    // then
    expect(useFetchFavoritesSpy).toHaveBeenCalled();
    expect(getByText(twoSearchResultItemsFixture[0].title)).toBeInTheDocument();

    const searchResults = getAllByTestId('search-result-item');
    expect(searchResults).toHaveLength(twoSearchResultItemsFixture.length);

    const headerTitle1 = getByText(twoSearchResultItemsFixture[0].title);
    const headerTitle2 = getByText(twoSearchResultItemsFixture[1].title);
    expect(headerTitle1).toBeInTheDocument();
    expect(headerTitle2).toBeInTheDocument();

    const subject1 = getByText(twoSearchResultItemsFixture[0].subject);
    const subject2 = getByText(twoSearchResultItemsFixture[1].subject);
    expect(subject1).toBeInTheDocument();
    expect(subject2).toBeInTheDocument();

    const favoriteButtons = getAllByRole('button', {
      name: 'fav-button'
    });
    expect(favoriteButtons[0]).toBeInTheDocument();
    expect(favoriteButtons[1]).toBeInTheDocument();
    expect(favoriteButtons).toHaveLength(2);
  });

  it('renders no favorites when local storage contains no ids', async () => {
    // given
    const useFetchSearchDataSpy = vi
      .spyOn(hooks, 'useFetchFavorites')
      .mockImplementation(() => {
        return Promise.resolve({
          data: { items: [] }
        } as UseQueryResult<any, unknown>);
      });

    // when
    const { queryAllByTestId } = customRender(<FavoritesPage />);

    // then
    expect(useFetchSearchDataSpy).toHaveBeenCalled();
    const searchResults = queryAllByTestId('search-result-item');
    expect(searchResults).toHaveLength(0);
  });
});

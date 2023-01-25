import { describe, it } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { SearchResults } from './SearchResults';
import { BrowserRouter } from 'react-router-dom';
import { searchResultItemsFixture } from '../../test-data/';

describe('SearchResults', () => {
  it('shows no pagination when items are less or equal than 10', () => {
    // given
    const { queryByTestId, getAllByTestId } = render(
      <BrowserRouter>
        <SearchResults items={[...searchResultItemsFixture].slice(0, 10)} />
      </BrowserRouter>
    );

    // when/then
    const searchResults = getAllByTestId('search-result-item');
    expect(searchResults).toHaveLength(10);

    const paginationButtonRight = queryByTestId('pagination-button-right');
    expect(paginationButtonRight).not.toBeInTheDocument();
  });
  it('shows pagination when items are more than 10', () => {
    // given
    const { queryByTestId, getAllByTestId } = render(
      <BrowserRouter>
        <SearchResults items={[...searchResultItemsFixture].slice(0, 12)} />
      </BrowserRouter>
    );

    // when/then
    const searchResults = getAllByTestId('search-result-item');
    expect(searchResults).toHaveLength(10);

    const paginationButtonRight = queryByTestId('pagination-button-right');
    expect(paginationButtonRight).toBeInTheDocument();

    fireEvent.click(paginationButtonRight as HTMLElement);
    const newSearchResults = getAllByTestId('search-result-item');
    expect(newSearchResults).toHaveLength(2);
  });
});

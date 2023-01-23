import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { TSearchResult } from '../../types';
import { SearchResultItem } from './SearchResultItem';

interface ISearchResultsProps {
  items: TSearchResult[];
}

export const SearchResults: FC<ISearchResultsProps> = ({
  items
}: ISearchResultsProps) => {
  const { q } = useParams();

  // TODO: add pagination logic
  // const limitedItems = items.slice(0, 10);
  // page-1 (offset) * 10

  return (
    <>
      {!items.length && q ? (
        <div className="text-statista-grey text-base">
          Es wurden keine Suchergebnisse für "{q}" gefunden.
        </div>
      ) : (
        items.map((item: TSearchResult) => (
          <SearchResultItem key={item.identifier} item={item} />
        ))
      )}
    </>
  );
};

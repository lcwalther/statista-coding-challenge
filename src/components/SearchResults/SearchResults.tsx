import { FC } from 'react';
import { TSearchResult } from '../../types';
import { SearchResultItem } from '../SearchResultItem';

interface ISearchResultsProps {
  isLoading: boolean;
  items: TSearchResult[];
}

export const SearchResults: FC<ISearchResultsProps> = ({
  isLoading,
  items
}: ISearchResultsProps) => {
  return (
    <>
      {isLoading ? (
        <div className="text-statista-grey text-base">
          Suchergebnisse werden geladen
        </div>
      ) : (
        items?.map((item: TSearchResult) => (
          <SearchResultItem key={item.identifier} item={item} />
        ))
      )}
    </>
  );
};

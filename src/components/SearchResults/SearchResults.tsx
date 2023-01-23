import { FC } from 'react';
import { TSearchResult } from '../../types';
import { SearchResultItem } from '../SearchResultItem';

interface ISearchResultsProps {
  items: TSearchResult[];
}

export const SearchResults: FC<ISearchResultsProps> = ({
  items
}: ISearchResultsProps) => {
  return (
    <>
      {!items ? (
        <div className="text-statista-grey text-base">Keine Suchergebnisse</div>
      ) : (
        items?.map((item: TSearchResult) => (
          <SearchResultItem key={item.identifier} item={item} />
        ))
      )}
    </>
  );
};

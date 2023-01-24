import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TSearchResult } from '../../types';
import { Pagination } from './Pagination';
import { SearchResultItem } from './SearchResultItem';

interface ISearchResultsProps {
  items: TSearchResult[];
}

const PER_PAGE = 10;

export const SearchResults: FC<ISearchResultsProps> = ({
  items
}: ISearchResultsProps) => {
  const { q } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const pagesCount = Math.ceil(items.length / PER_PAGE);
  const limitedItems = items.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE
  );

  return (
    <>
      {!items.length && q ? (
        <div className="text-statista-grey-dark text-base">
          Es wurden keine Suchergebnisse für "{q}" gefunden.
        </div>
      ) : (
        limitedItems.map((item: TSearchResult) => (
          <SearchResultItem key={item.identifier} item={item} />
        ))
      )}
      {pagesCount > 1 && (
        <Pagination
          currentPage={currentPage}
          pagesCount={pagesCount}
          onPageChange={setCurrentPage}
        />
      )}
    </>
  );
};

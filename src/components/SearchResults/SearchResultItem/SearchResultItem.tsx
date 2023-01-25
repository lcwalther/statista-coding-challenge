import { TSearchResult } from '../../../types';
import { Link } from 'react-router-dom';
import { FavoritesButton } from '../../FavoritesButton/';

interface ISearchResultItemProps {
  item: TSearchResult;
}

export const SearchResultItem: React.FC<ISearchResultItemProps> = ({
  item
}: ISearchResultItemProps) => {
  return (
    <Link to={`/items/${item.identifier}`}>
      <div
        className="group/item mb-2.5 w-full hover:bg-statista-grey-light rounded flex p-2.5"
        data-testid="search-result-item"
      >
        <div
          className={`${
            item.premium ? 'bg-iconPremium' : 'bg-iconBasic'
          } h-6 w-6`}
        ></div>
        <div className="ml-4 overflow-hidden w-full">
          <div className="flex w-full justify-between">
            <p className="text-statista-blue text-base font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
              {item.title}
            </p>
            <FavoritesButton id={item.identifier} />
          </div>
          <p className="mt-1 text-statista-grey-dark text-sm text-ellipsis overflow-hidden whitespace-nowrap">
            {item.subject}
          </p>
        </div>
      </div>
    </Link>
  );
};

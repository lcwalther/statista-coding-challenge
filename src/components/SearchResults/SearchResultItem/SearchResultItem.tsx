import { TSearchResult } from '../../../types';
import { Link, useSearchParams } from 'react-router-dom';

interface ISearchResultItemProps {
  item: TSearchResult;
}

export const SearchResultItem: React.FC<ISearchResultItemProps> = ({
  item
}: ISearchResultItemProps) => {
  return (
    <Link
      to={{
        pathname: `/items/${item.identifier}`
      }}
    >
      <div className="mb-2.5 w-full hover:bg-statista-light-grey rounded flex p-2.5">
        <div
          className={`${
            item.premium ? 'bg-iconPremium' : 'bg-iconBasic'
          } h-6 w-6`}
        ></div>
        <div className="ml-4 overflow-hidden">
          <p className="text-statista text-base font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
            {item.title}
          </p>
          <p className="mt-1 text-statista-grey text-base text-sm text-ellipsis overflow-hidden whitespace-nowrap">
            {item.subject}
          </p>
        </div>
      </div>
    </Link>
  );
};

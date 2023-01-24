import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { FavoritesButton } from '../../components/FavoritesButton';
import { TSearchResult } from '../../types';

export const DetailPage: FC = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ['searchData', id],
    queryFn: async () =>
      await fetch(
        'https://cdn.statcdn.com/static/application/search_results.json'
      ).then((res) => res.json())
  });

  if (data) {
    const item = data.items.find((item: TSearchResult) => {
      return item.identifier.toString() === id;
    });

    if (item) {
      const formattedDate = new Date(item.date).toLocaleDateString('de-DE', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
      });

      return (
        <article className="group/item max-w-screen-md mx-auto px-5 mt-7 bg-white rounded p-5 shadow-xl text-statista-grey-dark">
          <header>
            <div className="flex w-full justify-between items-start">
              <h1 className="mb-1.5 font-bold text-statista-blue-dark md:text-statista-grey-dark text-lg leading-6">
                {item.title}
              </h1>
              <FavoritesButton id={item.identifier} />
            </div>
            <div className="w-24 mt-3 mb-2 h-px bg-gray-400 md:hidden"></div>
            <span className="mb-2.5">Veröffentlicht am {formattedDate}</span>
          </header>
          <div className="px-2 pt-2 tracking-normal">
            <div
              className={`${
                item.premium ? 'bg-iconPremium' : 'bg-iconBasic'
              } h-6 w-6 mr-1.5 inline-block align-bottom`}
            ></div>
            {item.description}
          </div>
        </article>
      );
    } else {
      return <div>Datensatz konnte nicht gefunden werden</div>;
    }
  } else {
    // TODO: loading state
    return null;
  }
};

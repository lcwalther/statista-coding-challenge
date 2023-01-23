import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { TSearchResult } from '../../types';

export const DetailPage: FC = () => {
  let { identifier } = useParams();

  const { data } = useQuery({
    queryKey: ['searchData', identifier],
    queryFn: async () =>
      await fetch(
        'https://cdn.statcdn.com/static/application/search_results.json'
      ).then((res) => res.json())
  });

  if (data) {
    const item = data.items.find((item: TSearchResult) => {
      return item.identifier.toString() === identifier;
    });
    if (item) {
      const date = item.date;
      const newDate = new Date(date);
      const formattedDate = newDate
        .toLocaleDateString('de-DE', {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric'
        })
        .split('.')
        .join('.');

      return (
        <article className="max-w-screen-md mx-auto px-5 bg-white rounded p-5 shadow-xl text-statista-grey">
          <header>
            <h1 className="mb-1.5 font-bold text-statista-dark md:text-statista-grey text-lg leading-6">
              {item.title}
            </h1>
            <div className="w-24 mt-3 mb-2 h-px bg-gray-400 md:hidden"></div>
            <span className="mb-2.5">Veröffentlicht am {formattedDate}</span>
          </header>
          <div className="px-2 pt-2">
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

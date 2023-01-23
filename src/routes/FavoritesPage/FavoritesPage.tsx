import { useQuery } from '@tanstack/react-query';
import { FC, useEffect, useState } from 'react';
import { SearchResults } from '../../components';
import { TSearchResult } from '../../types';

export const FavoritesPage: FC = () => {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [favoriteItems, setFavoriteItems] = useState<TSearchResult[]>([]);

  const { data } = useQuery({
    queryKey: ['searchData'],
    queryFn: async () =>
      await fetch(
        'https://cdn.statcdn.com/static/application/search_results.json'
      ).then((res) => res.json())
  });

  useEffect(() => {
    const favoriteIdsString = window.localStorage.getItem('favoriteIds');
    if (favoriteIdsString) {
      setFavoriteIds(JSON.parse(favoriteIdsString));
    }
  }, []);

  useEffect(() => {
    if (data) {
      const filteredArray = data.items.filter((item: TSearchResult) =>
        favoriteIds.includes(item.identifier)
      );
      setFavoriteItems(filteredArray);
    }
  }, [data, favoriteIds]);

  return (
    <section className="max-w-screen-md mx-auto px-5 py-8">
      <h1 className="mb-5 font-bold text-statista-dark md:text-statista-grey text-2xl leading-6">
        Favoriten
      </h1>
      {favoriteItems && <SearchResults items={favoriteItems} />}
    </section>
  );
};

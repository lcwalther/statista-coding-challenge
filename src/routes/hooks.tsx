import { useQuery } from '@tanstack/react-query';

export function useFetchSearchData(searchTerm: string = '') {
  return useQuery({
    queryKey: ['fetchData', searchTerm],
    queryFn: () => {
      if (searchTerm?.toLowerCase() === 'statista') {
        return fetch(
          'https://cdn.statcdn.com/static/application/search_results.json'
        ).then((res) => res.json());
      } else {
        return null;
      }
    }
  });
}

export function useFetchDetails(id: string = '') {
  return useQuery({
    queryKey: ['searchData', id],
    queryFn: async () =>
      await fetch(
        'https://cdn.statcdn.com/static/application/search_results.json'
      ).then((res) => res.json())
  });
}

export function useFetchFavorites() {
  return useQuery({
    queryKey: ['fetchData', 'favorites'],
    queryFn: async () =>
      await fetch(
        'https://cdn.statcdn.com/static/application/search_results.json'
      ).then((res) => res.json())
  });
}

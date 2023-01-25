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
        return Promise.resolve([]);
      }
    }
  });
}

export function useFetchDetails(id: string = '') {
  return useQuery({
    queryKey: ['fetchData', id],
    queryFn: () =>
      fetch(
        'https://cdn.statcdn.com/static/application/search_results.json'
      ).then((res) => res.json())
  });
}

export function useFetchFavorites() {
  return useQuery({
    queryKey: ['fetchData', 'favorites'],
    queryFn: () =>
      fetch(
        'https://cdn.statcdn.com/static/application/search_results.json'
      ).then((res) => res.json())
  });
}

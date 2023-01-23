import './App.css';
import { useQuery } from '@tanstack/react-query';
import { SearchResult } from './types';
import { SearchButton } from './components/SearchButton/';
import { SearchResultItem } from './components/SearchResultItem/';

function App() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch(
        'https://cdn.statcdn.com/static/application/search_results.json'
      ).then((res) => res.json())
  });

  return (
    <div className="App h-screen">
      <section className="flex flex-col justify-center items-center h-4/6 bg-gradient-to-br from-statista-gradient-start to-statista-dark px-5">
        <h1 className="text-2xl md:text-6xl	mb-5 md:mb-2.5 md:leading-tight text-white">
          Empowering people with data
        </h1>
        <h2 className="text-base md:text-2xl text-statista-dark2">
          Insights und Fakten aus 170 Branchen und 150+ Ländern
        </h2>
        <form className="mt-12 md:mt-16 max-w-screen-md w-full flex">
          <input
            className="placeholder:italic h-14 pl-6 pr-20 w-full rounded-full focus:outline focus:outline-4"
            placeholder="Statistiken, Prognosen und Umfragen finden"
            type="search"
          ></input>
          <SearchButton />
        </form>
      </section>
      <section className="max-w-screen-md mx-auto px-5 py-8">
        {data?.items?.map((item: SearchResult) => (
          <SearchResultItem key={item.identifier} item={item} />
        ))}
      </section>
    </div>
  );
}

export default App;

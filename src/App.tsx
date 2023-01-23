import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import './App.css';
import { SearchButton } from './components/SearchForm/SearchButton';
import { SearchResults } from './components/SearchResults/';
import { SearchForm } from './components/SearchForm';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const { data } = useQuery({
    queryKey: ['searchData', searchTerm],
    queryFn: () => {
      if (searchTerm.toLowerCase() === 'statista') {
        return fetch(
          'https://cdn.statcdn.com/static/application/search_results.json'
        ).then((res) => res.json());
      } else {
        return null;
      }
    }
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      search: { value: string };
    };
    setSearchTerm(target.search.value);
  };

  return (
    <div className="App h-screen">
      <section className="flex flex-col justify-center items-center h-4/6 bg-gradient-to-br from-statista-gradient-start to-statista-dark px-5">
        <h1 className="text-2xl md:text-6xl	mb-5 md:mb-2.5 md:leading-tight text-white">
          Empowering people with data
        </h1>
        <h2 className="text-base md:text-2xl text-statista-dark2">
          Insights und Fakten aus 170 Branchen und 150+ Ländern
        </h2>
        <SearchForm onSubmit={handleSubmit} />
      </section>
      <section className="max-w-screen-md mx-auto px-5 py-8">
        <SearchResults items={data?.items} />
      </section>
    </div>
  );
}

export default App;

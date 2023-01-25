import React, { FC } from 'react';
import { SearchResults, SearchForm } from '../../components';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetchSearchData } from '../hooks';

export const SearchPage: FC = () => {
  const { q } = useParams();
  const navigate = useNavigate();

  const { data } = useFetchSearchData(q as string);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    navigate(`/search/${inputRef.current?.value}`);
  };

  return (
    <>
      <section className="flex flex-col justify-center items-center h-4/6 bg-gradient-to-br from-statista-blue-dark2 to-statista-blue-dark px-5">
        <h1 className="text-2xl md:text-6xl	mb-5 md:mb-2.5 md:leading-tight text-white text-center">
          Empowering people with data
        </h1>
        <h2 className="text-base md:text-2xl text-statista-grey-dark">
          Insights und Fakten aus 170 Branchen und 150+ Ländern
        </h2>
        <SearchForm onSubmit={handleSubmit} inputRef={inputRef} />
      </section>
      <section className="max-w-screen-md mx-auto px-5 py-8">
        {data?.items && <SearchResults items={data.items} />}
      </section>
    </>
  );
};

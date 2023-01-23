import { FC } from 'react';
import { SearchButton } from './SearchButton';

interface ISearchFormProps {
  onSubmit: React.FormEventHandler;
}

export const SearchForm: FC<ISearchFormProps> = ({
  onSubmit
}: ISearchFormProps) => {
  return (
    <form
      className="mt-12 md:mt-16 max-w-screen-md w-full flex"
      onSubmit={onSubmit}
    >
      <input
        className="placeholder:italic h-14 pl-6 pr-20 w-full rounded-full focus:outline focus:outline-4"
        placeholder="Statistiken, Prognosen und Umfragen finden"
        type="search"
        name="search"
      ></input>
      <SearchButton />
    </form>
  );
};

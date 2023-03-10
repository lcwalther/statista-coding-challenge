import { FC, FormEventHandler, RefObject } from 'react';
import { useParams } from 'react-router-dom';
import { SearchButton } from './SearchButton';

interface ISearchFormProps {
  onSubmit: FormEventHandler;
  inputRef: RefObject<HTMLInputElement>;
}

export const SearchForm: FC<ISearchFormProps> = ({
  onSubmit,
  inputRef
}: ISearchFormProps) => {
  const { q } = useParams();

  return (
    <form
      className="mt-12 md:mt-16 max-w-screen-md w-full flex"
      onSubmit={onSubmit}
    >
      <input
        ref={inputRef}
        className="placeholder:italic h-14 pl-6 pr-20 w-full rounded-full focus:outline focus:outline-4"
        placeholder="Statistiken, Prognosen und Umfragen finden"
        type="search"
        name="search"
        defaultValue={q || ''}
      ></input>
      <SearchButton />
    </form>
  );
};

import { FC } from 'react';
import searchIcon from '../../../assets/search_icon.svg';

export const SearchButton: FC = () => {
  return (
    <button className="h-14 px-8 bg-statista hover:bg-statista-dark3 text-white rounded-full flex justify-center items-center whitespace-nowrap -ml-16 transition duration-300">
      <div className="hidden md:flex md:visible text-white flex-no-wrap mr-5">
        Statista-Suche
      </div>

      <img className="h-5 w-5" src={searchIcon} alt="Search" />
    </button>
  );
};

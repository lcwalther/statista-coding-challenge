import { FC } from 'react';
import arrowLeft from '../../../assets/arrow_left.svg';
import arrowRight from '../../../assets/arrow_right.svg';

interface IPaginationProps {
  currentPage: number;
  pagesCount: number;
  onPageChange: (page: number) => void;
}

export const Pagination: FC<IPaginationProps> = ({
  currentPage,
  pagesCount,
  onPageChange
}) => {
  return (
    <div className="mt-5 flex gap-3 items-center justify-center text-statista-grey">
      <button
        className="h-8 w-8 flex justify-center items-center rounded-full shadow-md disabled:bg-yellow"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img className="h-4 w-4" src={arrowLeft} alt="Zurück" />
      </button>
      <div className="mx-1">
        <span className="font-bold pr-1">{currentPage}</span>
        <span> ⁄ </span>
        <span className="pl-1">{pagesCount}</span>
      </div>
      <button
        className="h-8 w-8 flex justify-center items-center rounded-full shadow-md"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === pagesCount}
      >
        <img className="h-4 w-4" src={arrowRight} alt="Weiter" />
      </button>
    </div>
  );
};

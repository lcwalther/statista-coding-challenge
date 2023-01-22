export const SearchButton = () => {
  return (
    <button className="h-14 px-8 bg-statista text-white rounded-full flex justify-center items-center whitespace-nowrap -ml-16">
      <div className="hidden md:flex md:visible text-white flex-no-wrap mr-5">
        Statista-Suche
      </div>
      <svg
        className="h-5 w-5 fill-current text-statista-grey"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 7a5 5 0 0 0 7.757 4.171l2.536 2.536a1 1 0 0 0 1.414-1.414l-2.536-2.536A5 5 0 1 0 2 7Zm2.879 2.121A3 3 0 1 1 9.12 4.88 3 3 0 0 1 4.88 9.12Z" />
      </svg>
    </button>
  );
};

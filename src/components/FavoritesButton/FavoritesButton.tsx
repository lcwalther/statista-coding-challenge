import { FC, useEffect, useState } from 'react';

interface IFavoritesButtonProps {
  id: number;
}

export const FavoritesButton: FC<IFavoritesButtonProps> = ({
  id
}: IFavoritesButtonProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClickFavorite = (id: number) => {
    let favoriteIds = JSON.parse(
      localStorage.getItem('favoriteIds') || '[]'
    ) as number[];

    if (favoriteIds.includes(id)) {
      const filteredIds = favoriteIds.filter(
        (favoriteId: number) => favoriteId !== id
      );
      localStorage.setItem('favoriteIds', JSON.stringify(filteredIds));
    } else {
      favoriteIds.push(id);
      localStorage.setItem('favoriteIds', JSON.stringify(favoriteIds));
    }
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    const favoriteIdsString = window.localStorage.getItem('favoriteIds');
    if (favoriteIdsString) {
      const favoriteIds = JSON.parse(favoriteIdsString);
      if (favoriteIds.includes(id)) {
        setIsFavorite(true);
      }
    }
  }, []);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        handleClickFavorite(id);
      }}
      className="group/button"
    >
      <svg
        className={`h-6 w-6 ${
          isFavorite
            ? 'stroke-statista-blue-light fill-statista-blue-light'
            : 'group-hover/item:stroke-statista-grey-dark group-hover/item:fill-statista-grey-dark group-hover/item:opacity-50 group-hover/button:fill-statista-blue-light group-hover/button:stroke-statista-blue-light'
        }`}
        fill="none"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        data-testid="star"
      >
        <path d="M8.457 2.796a.5.5 0 00-.914 0L6.141 5.942l-3.424.361a.5.5 0 00-.283.869l2.558 2.305-.714 3.369a.5.5 0 00.739.537L8 11.663l2.983 1.72a.5.5 0 00.739-.537l-.715-3.369 2.558-2.305a.5.5 0 00-.282-.869L9.86 5.942 8.457 2.796z"></path>
      </svg>
    </button>
  );
};

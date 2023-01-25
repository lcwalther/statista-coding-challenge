import { describe, it } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import { FavoritesButton } from './FavoritesButton';

describe('FavoritesButton', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  const id = 123;

  it('renders the correct DOM elements', async () => {
    // given
    render(<FavoritesButton id={id} />);
    // when
    // then
    const button = screen.getByRole('button');
    const svg = screen.getByTestId('star');
    expect(button).toBeInTheDocument();
    expect(svg).toBeInTheDocument();
  });

  it('adds a favorite id to local storage on click', () => {
    // given
    const { getByTestId } = render(<FavoritesButton id={id} />);
    const button = getByTestId('star');
    // when
    fireEvent.click(button);
    // then
    expect(localStorage.getItem('favoriteIds')).toEqual(JSON.stringify([id]));
  });

  it('removes a favorite id from local storage on second click', () => {
    // given
    localStorage.setItem('favoriteIds', JSON.stringify([id]));
    const { getByTestId } = render(<FavoritesButton id={id} />);
    const button = getByTestId('star');
    // when
    fireEvent.click(button);
    // then
    expect(localStorage.getItem('favoriteIds')).toEqual(JSON.stringify([]));
  });
});

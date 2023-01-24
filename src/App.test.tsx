import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import App from './App';
import { customRender } from './testUtils';

describe('App', () => {
  it('renders the top navigation', async () => {
    // given
    const { user } = customRender(<App />);

    expect(screen.getByText('Suche')).toBeInTheDocument();
    expect(screen.getByText('Favoriten')).toBeInTheDocument();

    // when
    await user.click(screen.getByText('Favoriten'));

    // then
    const titleValue = screen.getByRole('heading', { name: 'Favoriten' });
    expect(titleValue).toBeInTheDocument();
  });

  test.skip('renders the search page', async () => {});

  test.skip('renders the detail page', async () => {});

  test.skip('renders the favorites page', async () => {});
});

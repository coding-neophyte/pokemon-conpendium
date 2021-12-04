import { screen, render } from '@testing-library/react';
import PokemonSort from './PokemonSort.jsx'

it('test pokemon sort', () => {
  const {container} = render(<PokemonSort />);
  expect(container).toMatchSnapshot();
});

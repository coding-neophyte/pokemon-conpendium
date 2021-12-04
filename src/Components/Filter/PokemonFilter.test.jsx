import { screen, render } from '@testing-library/react'
import PokemonFilter from './PokemonFilter'

it('should render filter component', () => {
    const types = ['pikachu', 'mew']
    render(<PokemonFilter pokeTypes={types} />)
    const dropDown = screen.getByLabelText(/dropDown/)
    expect(dropDown).toMatchSnapshot()
})

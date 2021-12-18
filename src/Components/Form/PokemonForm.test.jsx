import { screen, render } from '@testing-library/react'
import PokemonForm from './PokemonForm'


it('should render pokemon form', () => {
    render(<PokemonForm />)
    const pokemonName = screen.getByText(/Pokemon Name/)

    expect(pokemonName).toBeInTheDocument()
    expect(pokemonName).toMatchSnapshot()
})

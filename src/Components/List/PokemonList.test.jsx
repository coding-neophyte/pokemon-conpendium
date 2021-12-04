import { screen, render } from '@testing-library/react'
import PokemonList from "./PokemonList";

it('should render pokemon list', () => {
    const pokemon = [

            {

            "pokemon": "butterfree",
            "height": 11,
            "weight": 320,
            "type_1": "bug",
            "attack": 45,
            "defense": 50,
            "hp": 60,
            "special_attack": 90,
            "special_defense": 80,
            "ability_1": "compound-eyes",
            "url_image": "http://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
            "pokedex": "http://www.pokemon.com/us/pokedex/butterfree"
         }

    ]

    render(<PokemonList pokeList={pokemon} />)

})
//

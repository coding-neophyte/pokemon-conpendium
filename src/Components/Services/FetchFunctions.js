export const fetchPokemon = async () => {
    const res = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
    const pokemonData = await res.json()
    return pokemonData.results.map(pokemon => pokemonMunge(pokemon))
}


export const fetchPokemonType = async () => {
    const res = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types')
    const pokemonType = await res.json();
    return pokemonType.map(type => type.type);
}


export const searchPokemon = async (pokemon) => {
    const res = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${pokemon}`)
    const searchedPokemon = await res.json()
    return searchedPokemon.results.map(pokemon => pokemonMunge(pokemon))
}

export const fetchFilterPokemon = async(type) =>{
    const res = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?type=${type}`)
    const filteredPokemon = await res.json()
    return filteredPokemon.results.map(pokemon => pokemonMunge(pokemon))

}

export const sortThePokemon = async (sortedPokemon, type) => {
    const res = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?type=${type}&sort=pokemon&direction=${sortedPokemon}`)

    const pokeSort = await res.json()

    return pokeSort.results.map(pokemon => pokemonMunge(pokemon))
}




const pokemonMunge = (pokemon) => {
    const shapedPokemonData = {
        image: pokemon.url_image,
        pokemon: pokemon.pokemon,
        height: pokemon.height,
        weight: pokemon.weight,
        type: pokemon.type_1,
        attack: pokemon.attack,
        defense: pokemon.defense,
        hp: pokemon.hp,
        ability: pokemon.ability_1,
        pokedex: pokemon.pokedex
    }
    return shapedPokemonData;
}

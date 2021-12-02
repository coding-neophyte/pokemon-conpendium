export const fetchPokemon = async () => {
    const res = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
    const pokemonData = await res.json()
    return pokemonData.results.map(pokemon => pokemonMunge(pokemon))
}


export const fetchPokemonType = async () => {
    const res = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types')
    const pokemonType = await res.json();
    return pokemonType.type
}


export const searchPokemon = async (pokemon) => {
    const res = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${pokemon}`)
    const searchedPokemon = await res.json()
    return searchedPokemon.results
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

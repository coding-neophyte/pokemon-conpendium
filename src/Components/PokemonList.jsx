import React from 'react'

export default function PokemonList({ pokeList }) {
    return (
        <div>
            {pokeList.map(poke => <li key={pokeList.indexOf(poke)}><p>{poke.pokemon}</p>
            <img src={poke.image} alt={poke.pokemon}></img>
            <p>HP: {poke.hp}</p>
            <p> Height: {poke.height}</p>
            <p> Weight: {poke.weight}</p>
            <p>Attack: {poke.attack}</p>
            <p>Defense: {poke.defense}</p>
            <p>Ability: {poke.ability}</p>
            <p> Type: {poke.type}</p>
            Checkout {poke.pokemon}'s <a href={poke.pokedex}>Pokedex</a>


            </li>)}
        </div>
    )
}

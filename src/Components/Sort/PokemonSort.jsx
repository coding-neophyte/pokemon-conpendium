import React from 'react'

export default function PokemonSort({ setSortPokemon, sortPokemon }) {
    return (
        <div>
            <select onChange={(e) => setSortPokemon(e.target.value)}>
                <option value='asc'>ASC</option>
                <option value='desc'>DSC</option>
            </select>
        </div>
    )
}

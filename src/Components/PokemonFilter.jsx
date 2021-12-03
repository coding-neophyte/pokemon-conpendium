import React from 'react'

export default function PokemonFilter({ typeSelected, setSelectedType, pokeTypes }) {

    return (
        <div>
            <select onChange={(e) => setSelectedType(e.target.value)}>
                <option value='all'>All</option>
                {pokeTypes.map(poke => <option key={poke} value={poke}>{poke}</option>)}
            </select>
        </div>
    )
}

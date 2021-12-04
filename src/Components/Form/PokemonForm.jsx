import React from 'react'

export default function PokemonForm({ handleSubmit, handleSearch, pokemonName, }) {
    return (
        <div>
            <form  aria-label='form' onSubmit={handleSubmit}>
                <label>Pokemon Name</label>
                <input type='text' value={pokemonName} onChange={(e) => handleSearch(e.target.value)} />
                <button type='submit'>Search</button>
            </form>

        </div>
    )
}

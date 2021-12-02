import React from 'react'
import { useState, useEffect } from 'react'
import { fetchPokemon } from './Services/FetchFunctions'
import PokemonList from './PokemonList'

export default function Compendium() {
    const [isLoading, setIsLoading] = useState(true)
    const [pokemon, setPokemon] = useState([])


    useEffect(() => {
        const getPokemon = async () =>{
            const getAllPokemon = await fetchPokemon()
            console.log(getAllPokemon);
            setPokemon(getAllPokemon)
            setIsLoading(false)
        };
        getPokemon()
    }, [])

    if(isLoading){
        return <h1>Loading...</h1>
    }
    return (
        <div>

            <PokemonList pokeList={pokemon}/>

        </div>
    )
}

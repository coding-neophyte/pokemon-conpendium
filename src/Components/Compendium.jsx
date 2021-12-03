import React from 'react'
import { useState, useEffect } from 'react'
import { fetchFilterPokemon, fetchPokemon, fetchPokemonType, searchPokemon } from './Services/FetchFunctions'
import PokemonList from './PokemonList'
import PokemonForm from './PokemonForm'
import PokemonFilter from './PokemonFilter'

export default function Compendium() {
    const [isLoading, setIsLoading] = useState(true)
    const [pokemon, setPokemon] = useState([])
    const [pokemonType, setPokemonType] = useState([])
    const [nameSearched, setNameSearched] = useState('')
    const [selectedType, setSelectedType] = useState('all')


    useEffect(() => {
        const getPokemon = async () =>{
            const getAllPokemon = await fetchPokemon()
            setPokemon(getAllPokemon)
            setIsLoading(false)
        };
        getPokemon()
    }, [])

    useEffect(() => {
        const getPokemonType = async() =>{
            const pokemonByType = await fetchPokemonType()
            setPokemonType(pokemonByType)
            setIsLoading(false)
        }
        getPokemonType();
    }, [])

    useEffect(() => {
        if(selectedType === 'all'){
            const getPokemon = async () =>{
                const getAllPokemon = await fetchPokemon()
                setPokemon(getAllPokemon)
                setIsLoading(false)
            };
            getPokemon()
        } else {
        const getFilteredPokemon = async () =>{
           const filteredPokemon = await
           fetchFilterPokemon(selectedType)
           setPokemon(filteredPokemon)
        }
        getFilteredPokemon()
    }
    }, [selectedType])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setIsLoading(true);
        const pokemonSearch = await searchPokemon(nameSearched)
        console.log(pokemonSearch);
        setPokemon(pokemonSearch)
        setIsLoading(false);
        setNameSearched('')
    }


    if(isLoading){
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <PokemonForm handleSubmit={handleSubmit} handleSearch={setNameSearched}
            pokemonName={nameSearched}/>
            <PokemonFilter pokeTypes={pokemonType} typeSelected={selectedType} setSelectedType={setSelectedType} />
            <PokemonList pokeList={pokemon}/>

        </div>
    )
}

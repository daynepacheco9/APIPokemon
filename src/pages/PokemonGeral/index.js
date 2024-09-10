import axios from "axios"
import { useEffect, useState } from "react"
import { CardPokemon, Click, ImgPokemon, ListPokemon, NamePokemon, PokemonContainer, TituloPage } from "./styles";
import { useNavigate } from "react-router-dom";

function PokemonGeral() {
    const [pokemons , setPokemons] = useState([])

    async function handlePokemon(){
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        const pokemonData = await Promise.all(
            res.data.results.map(async(pokemon) => {
                const pokemonDetails = await axios.get(pokemon.url)
                return pokemonDetails.data;
            })
        )
        setPokemons(pokemonData)
    } 

    useEffect(()=>{
        handlePokemon()
    },[])


    return(
        <PokemonContainer>
            <TituloPage>Pokémons</TituloPage>
            <ListPokemon>
                {pokemons.map((pokemon) => (
                    <CardPokemon key={pokemon.id}>
                        <NamePokemon>{pokemon.name}</NamePokemon>
                        <Click to={`/${pokemon.id}`}>
                            <ImgPokemon src={pokemon.sprites.front_default} />
                        </Click>
                    </CardPokemon>
                ))}
            </ListPokemon>
        </PokemonContainer>
    )
}
export default PokemonGeral
import axios from "axios";
import { useParams } from "react-router-dom";
import { ImgPokemon, NamePokemon, PokemonContainer, TituloPage } from "./styles";
import { useState, useEffect } from "react";

function Pokemon() {

    const [pokemonData, setPokemonData] = useState(null);
    const {pokemon} = useParams(); 

    useEffect(()=>{
        async function fetchPokemonData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            setPokemonData(res.data);
        }
        fetchPokemonData();
    },[pokemon]);

    return(
        <>
            <PokemonContainer>
                {pokemonData && (
                    <>
                        <TituloPage>{pokemonData.name}</TituloPage>
                        <ImgPokemon src={pokemonData.sprites.front_default} />
                        <NamePokemon>{pokemonData?.types.map((typeInfo) => typeInfo.type.name).join(", ")}</NamePokemon>
                        <NamePokemon>{pokemonData?.abilities.map((abilityInfo) => abilityInfo.ability.name).join(", ")}</NamePokemon>
                    </>
                )}
            </PokemonContainer>
            
        </>
    )
}

export default Pokemon
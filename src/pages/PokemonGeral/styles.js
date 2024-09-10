import { Link } from "react-router-dom";
import styled from "styled-components";

const PokemonContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const TituloPage = styled.h1`
    align-items: center;
    justify-content: center;
    display: flex;
`
const ListPokemon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
`
const CardPokemon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Click = styled(Link)`

`

const NamePokemon = styled.h3`
`
const ImgPokemon = styled.img`
` 

export {PokemonContainer, TituloPage, ListPokemon, CardPokemon, NamePokemon, ImgPokemon,Click}
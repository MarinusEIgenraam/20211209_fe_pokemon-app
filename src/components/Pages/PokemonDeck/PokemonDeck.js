////////////////////
//// Build
import {useState, useEffect} from "react";
import axios from 'axios';

////////////////////
//// Environmental
import './PokemonDeck.scss'
import PokemonCard from "../../layout/PokemonCard/PokemonCard";

////////////////////
//// External

export default function PokemonDeck() {
    const [loadedPokemon, setLoadedPokemon] = useState([])
    const [pageLimit, setPageLimit] = useState(20)
    const [pageOffset, setPageOffset] = useState(20)


    const API_URL = `https://pokeapi.co/api/v2/pokemon/?limit=${pageLimit}&offset=${pageOffset}`;

    useEffect(() => {
        const source = axios.CancelToken.source();

        async function getPokemon() {
            try {
                const result = await axios.get(API_URL, {cancelToken: source.token,});
                setLoadedPokemon(result.data.results)
                console.log(result.data.results);
                console.log(loadedPokemon)

            } catch (e) {
                console.error(e);
            }
        }

        getPokemon()

        return function clearPokemon() {
            source.cancel();
        };

    }, []);


    return (
        <>
            <segment className="wrapper poke-deck">

                {loadedPokemon.map((pokemon) => {

                    return (
                        <PokemonCard name={pokemon.name}/>
                    )
                })}
            </segment>

        </>
    );
}

/** Created by ownwindows on 09-12-21 **/

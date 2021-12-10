////////////////////
//// Build
import {useState, useEffect} from "react";
import axios from 'axios';

////////////////////
//// Environmental
import './PokemonDeck.scss'
import PokemonCard from "../../layout/PokemonCard/PokemonCard";
const {REACT_APP_API_URL} = process.env;


////////////////////
//// External

export default function PokemonDeck() {
    const [loadedPokemon, setLoadedPokemon] = useState([])
    const [pageLimit, setPageLimit] = useState(20)
    const [pageOffset, setPageOffset] = useState(20)




    const API_URL = `${REACT_APP_API_URL}pokemon/?limit=${pageLimit}&offset=${pageOffset}`;

    useEffect(() => {
        const source = axios.CancelToken.source();

        async function gotToCatchThem() {
            try {
                const result = await axios.get(API_URL, {cancelToken: source.token,});
                setLoadedPokemon(result.data.results)
                // console.log(result.data.results);
                // console.log(loadedPokemon)

            } catch (e) {
                console.error(e);
            }
        }

        gotToCatchThem()

        return function clearPokemon() {
            source.cancel();
        };

    }, []);


    return (
        <>
            <segment className="wrapper poke-deck">

                {loadedPokemon.map((pokemon) => {

                    return (
                        <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url}/>
                    )
                })}
            </segment>

        </>
    );
}

/** Created by ownwindows on 09-12-21 **/

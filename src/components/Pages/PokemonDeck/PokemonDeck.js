////////////////////
//// Build
import {useState,useEffect} from "react";
import axios from 'axios';

////////////////////
//// Environmental
import './PokemonDeck.scss'

////////////////////
//// External

export default function PokemonDeck() {
    const [loadedPokemon, setLoadedPokemon] = useState()
    const [pageLimit,setPageLimit] = useState()
    const [pageOffset,setPageOffset] = useState()
    const source = axios.CancelToken.source();


    const API_URL = `https://pokeapi.co/api/v2/ability/?limit=${pageLimit}&offset=${pageOffset}`;
    const API_URL2 = 'https://pokeapi.co/api/v2/pokemon/1/';

    useEffect(() => {
        async function getPokemon() {
            try {
                const result = await axios.get(API_URL2, {cancelToken: source.token});
                setLoadedPokemon(result)
                console.log(loadedPokemon);

            } catch (e) {
                console.error(e);
            }
        }
        getPokemon()

        return function clearPokemon() {
            source.cancel();
        };

    },[]);



    return (
        <>
            {/*{loadedPokemon.data.count}*/}
            <div>dasf</div>

        </>
    )
}

/** Created by ownwindows on 09-12-21 **/

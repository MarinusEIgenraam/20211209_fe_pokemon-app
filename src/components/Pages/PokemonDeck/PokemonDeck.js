////////////////////
//// Build
import React, {useState, useEffect} from "react";
import axios from 'axios';

////////////////////
//// Environmental
import './PokemonDeck.scss'
import PokemonCard from "../../layout/PokemonCard/PokemonCard";
import Navigation from "../../layout/Navigation/Navigation";
import Button from "../../shared/Button/Button";
import Loader from "../../shared/Loader/Loader";
import PokemonCardDeck from "../../layout/PokemonCardDeck/PokemonCardDeck";

const {REACT_APP_API_URL} = process.env;


////////////////////
//// External

export default function PokemonDeck() {
    const [loadedPokemon, setLoadedPokemon] = useState([])
    const [pageLimit, setPageLimit] = useState(20)
    const [pageOffset, setPageOffset] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState(false);
    const [isTimedOut,setIsTimedOut] = useState(false)


    const API_URL = `${REACT_APP_API_URL}pokemon/?limit=${pageLimit}&offset=${pageOffset}`;

    useEffect(() => {
        const source = axios.CancelToken.source();
        setIsLoading(true);

        const timer = setTimeout(() => {
            console.log('This will run after 1 second!')
            setIsTimedOut(false);
            setIsLoading(false)
        }, 2000);

        async function gotToCatchThem() {
            setHasError(false);



            try {
                const result = await axios.get(API_URL, {cancelToken: source.token,});
                setLoadedPokemon(result.data.results)
                // console.log(result.data.results);
                console.log(result)
                // setIsLoading(false)

            } catch (e) {
                console.error(e);
                setHasError(true);
            }
        }

        gotToCatchThem()

        return function clearPokemon() {
            source.cancel();
            clearTimeout(timer);
            setIsTimedOut(false)
        };

    }, [pageOffset]);

    function getNext() {
        setPageOffset(pageOffset + 20)
        console.log(pageOffset)
    }
    function getPrevious() {
        if (pageOffset !== 0) {

            setPageOffset(pageOffset - 20);
            console.log(pageOffset)
        }
    }

    return (
        <>

            <div className="page-wrapper">

                <Navigation>
                    {pageOffset>0 &&<Button title="previous" onClick={getPrevious}/>}

                    <Button title="next" onClick={getNext}/>
                </Navigation>
                {(isLoading || isTimedOut) && <Loader/>}
                <PokemonCardDeck>
                    <segment className="poke-deck">
                        {loadedPokemon.map((pokemon) => {
                            return (
                                <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url}/>
                            )
                        })}
                    </segment>
                </PokemonCardDeck>

            </div>

        </>
    );
}

/** Created by ownwindows on 09-12-21 **/

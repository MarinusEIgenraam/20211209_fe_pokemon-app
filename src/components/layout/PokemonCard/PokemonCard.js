////////////////////
//// Build
import React, {useState, useEffect} from "react";

////////////////////
//// Environmental
import './PokemonCard.scss'
import PokemonImage from "./PokemonImage/PokemonImage";
import axios from "axios";
import Abilities from "./Abilities/Abilities";
import Weight from "./Weight/Weight";

////////////////////
//// External

export default function PokemonCard({name, url}) {
    const [image, setImage] = useState({});
    const [abilities, setAbilities] = useState([])
    const [moves, setMoves] = useState([])
    const [weight, setWeight] = useState()

    const source = axios.CancelToken.source();

    useEffect(() => {
        async function catchPokemon() {

            try {
                const result = await axios.get(url, {cancelToken: source.token})
                setImage(result.data.sprites.front_default);
                setAbilities(result.data.abilities);
                setMoves(result.data.moves);
                setWeight(result.data.weight)
            } catch (e) {
                console.error(e)
            }
        }

        console.log(url)
        catchPokemon();

        return function stopLoading() {
            source.cancel();
        };

    }, []);

    return (
        <>

            <div className="pokemon-border">
                <div className="pokemon-card">
                    {/*// naam,*/}
                    <h1 className="pokemon-title">{name}</h1>
                    {/*// een afbeelding,*/}
                    <PokemonImage url={image}/>
                    {/*// lijst van abilities,*/}
                    <Abilities abilities={abilities}/>
                    <Weight weight={weight} />

                    {/*// gewicht, en de*/}
                    {/*// hoeveelheid moves.*/}

                </div>
            </div>
        </>
    )
}

/** Created by ownwindows on 09-12-21 **/

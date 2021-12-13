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
    const [cardFolded, setCardFolded] = useState(true);

    const source = axios.CancelToken.source();


    useEffect(() => {
        async function catchPokemon() {

            try {
                const result = await axios.get(url, {cancelToken: source.token})
                setImage(result.data.sprites.other.dream_world.front_default);
                setAbilities(result.data.abilities);
                setMoves(result.data.moves.length);
                setWeight(result.data.weight)
                console.log(result.data)
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

    function onLeaveCard() {
        if (cardFolded === false) {
            setCardFolded(true)
        }
    }

    return (
        <>

            <div className={`pokemon-border ${!cardFolded && 'pokemon-border-unfolded'}`}>
                <div className="pokemon-card">
                    {/*// naam,*/}
                    <h3 onClick={()=> setCardFolded(!cardFolded)} className="pokemon-title">{name}</h3>
                    {/*// een afbeelding,*/}
                    <PokemonImage url={image}/>
                    {/*// lijst van abilities,*/}
                    <Abilities abilities={abilities}/>
                    <div className="details">
                        <div className="move-count">
                            <span className="pokemon-title title">{name}</span> can make <span className="title">{moves}</span> moves
                        </div>
                        <Weight weight={weight} />
                    </div>

                    {/*// gewicht, en de*/}
                    {/*// hoeveelheid moves.*/}

                </div>
            </div>
        </>
    )
}

/** Created by ownwindows on 09-12-21 **/

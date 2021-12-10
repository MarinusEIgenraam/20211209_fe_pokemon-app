////////////////////
//// Build
import React, {useState, useEffect} from "react";

////////////////////
//// Environmental
import './PokemonCard.scss'

////////////////////
//// External

export default function PokemonCard({name}) {

    return (
        <>

            <div className="pokemon-border">
                <div className="pokemon-card">
                    <h1 className="pokemon-title">{name}</h1>

                </div>
            </div>
        </>
    )
}

/** Created by ownwindows on 09-12-21 **/

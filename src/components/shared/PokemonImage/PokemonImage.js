////////////////////
//// Build

////////////////////
//// Environmental
import './PokemonImage.scss'
import {useEffect, useState} from "react";
import axios from "axios";


////////////////////
//// External

export default function PokemonImage({ url}) {



    return (
        <>
            <div className="image-container">
                <img src={url}/>

            </div>
        </>
    )
}

/** Created by ownwindows on 10-12-21 **/

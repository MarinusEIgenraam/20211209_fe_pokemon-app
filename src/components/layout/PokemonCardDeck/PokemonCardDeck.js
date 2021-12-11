////////////////////
//// Build

////////////////////
//// Environmental
import './PokemonCardDeck.scss'

////////////////////
//// External

export default function PokemonCardDeck({children}) {

    return (
        <div classname="card-deck">
            {children}
        </div>
    )
}

/** Created by ownwindows on 11-12-21 **/

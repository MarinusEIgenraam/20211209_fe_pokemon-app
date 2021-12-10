////////////////////
//// Build

////////////////////
//// Environmental
import './Abilities.scss'
import Ability from "./Ability/Ability";

////////////////////
//// External

export default function Abilities({abilities}) {

    console.log(abilities)
    return (
        <>
            <sl>
                {abilities.map((ability) => {
                    return(
                      <Ability ability={ability}/>
                    )
                })}
            </sl>
        </>
    );
}

/** Created by ownwindows on 10-12-21 **/

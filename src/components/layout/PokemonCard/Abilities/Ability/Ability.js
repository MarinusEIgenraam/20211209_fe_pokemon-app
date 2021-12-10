////////////////////
//// Build

////////////////////
//// Environmental
import './Ability.scss'
import axios from "axios";
import {useState} from "react";

////////////////////
//// External

export default function Ability({ability}) {
    const [abilityDetails, setAbilityDetails] = useState();
    const {slot} = ability;
    const {url, name} = ability.ability;

    const source = axios.CancelToken.source();


    async function getAbility() {
        try {
            const result = await axios.get(url, {cancelToken: source.token})
            setAbilityDetails(result.data);
            console.log(result.data)
        }catch(e){
            console.error(e);
        }

        return function cancelCall() {
            source.cancel();
        };
    }

    // getAbility();
    
    return (
        <>
            <li key={slot} className="ability-row" key={slot}>
               <p>
                   {name}
               </p>
            </li>
        </>
    )
}

/** Created by ownwindows on 10-12-21 **/

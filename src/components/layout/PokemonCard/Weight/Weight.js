////////////////////
//// Build

////////////////////
//// Environmental
import './Weight.scss'

////////////////////
//// External

export default function Weight({weight}) {

    return (
        <div className="weight">
            {weight} <span className="metric">o.z.</span>
        </div>
    )
}

/** Created by ownwindows on 10-12-21 **/

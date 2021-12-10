////////////////////
//// Build

////////////////////
//// Environmental
import './Button.scss'

////////////////////
//// External

export default function Button({title, onClick}) {

    return (
        <>
            <button onClick={onClick}>
                {title}
            </button>
        </>
    )
}

/** Created by ownwindows on 09-12-21 **/

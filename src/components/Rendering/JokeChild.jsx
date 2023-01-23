import React from 'react'
import { useState } from 'react'

const JokeChild = (props) => {

    const [isShown, setisShown] = useState(false)

    function toggle() {
        setisShown(prevState => !prevState)
    }

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggle}>
               { isShown ? "Hide" : "Show" } Punchline
            </button>
            <hr />
        </div>
    )
}

export default JokeChild
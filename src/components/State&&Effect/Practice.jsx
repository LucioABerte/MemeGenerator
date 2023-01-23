import React from 'react'
import { useState, useEffect } from 'react'
import WindowTracker from "./WindowTracker"

const Practice = () => {

    const [show, setShow] = useState(true);

    function toggle() {
        setShow(prevShow => !prevShow)
    }
    
    return (
        <div className="container">
            <button onClick={toggle}>
                Toggle WindowTracker
            </button>
            { !show && <WindowTracker />}
        </div>
    )
}

export default Practice
import React from 'react'
import { useState } from 'react';

const state = () => {

    const [isImportant, setIsImportant] = useState(true)

    function handleClick() { 
        setIsImportant(prevState => !prevState)   
    }

    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div onClick={handleClick} className="state--value">
                <h1>{ isImportant ? "Yes" : "No" } </h1>
            </div>
        </div>
    );    
};

export default state;
import React from 'react'
import { useState } from 'react'
import Count from './Count'

const Counter = () => {

    const [count, setCount] = useState(0)
    /*
     * Note: si necesitamos el valor inicial del estado
     * para determinar un nuevo valor del estado,
     * se utiliza una funcion callback a nuestro setter
     * This callback function va a recibir el valor viejo
     * que usaremos para determinar nuestro nuevo estado. 
     */
    function plus() {
         setCount(prevCount => prevCount + 1)
    }
    function minus() {
        setCount(count - 1) 
    }

    return (
        <div className="counter">
            <button onClick={minus} className="counter--minus">–</button>
            <Count number={count}/>
            <button onClick={plus} className="counter--plus">+</button>
        </div>
    )
}

export default Counter
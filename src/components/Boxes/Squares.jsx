import React from 'react';
import { useState } from 'react';
import boxes from './boxes';
import Box from './Box';

const Squares = (props) => {

    const [squares, setSquares] = useState(boxes);

    function toggle(id) {
      
      setSquares(prevSquare => {
        return prevSquare.map((square) => {
          return square.id === id ? {...square, on: !square.on} : square
        });
      });  
    };
    
    const squareElements = squares.map( square => (
          
        <Box key={square.id}           
             on={square.on} 
             toggle={()=> toggle(square.id)} 
        />
      )
    );

  return (
    <main>
        <h1>Boxes will go here</h1>
        {squareElements}
    </main>
  );
};

export default Squares;
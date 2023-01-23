import React from 'react'


const Star = (props) => {

  const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"

  return (
    <div>
        <img 
            src={`${starIcon}`} 
            className="card--favorite"
            onClick={props.toggle}
            />
    </div>
  )
}

export default Star
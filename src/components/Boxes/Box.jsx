import React from 'react'

const Box = (props) => {

  const styles = { 
        backgroundColor: props.on ? "#CF5237" : "transparent"
  }  
  
  return (
    <div 
         style={styles} 
         className='box' 
         onClick={props.toggle} 
    > 
    </div>
  )
}

export default Box
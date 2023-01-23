import React from 'react'
import Face from '../../assets/face.png'

const Header = () => {

    function handleOnMouseOver() {
        return(
            console.log('Interaction : Mouse Over')
        )
    }

  return (
    <header className='header'>
        <img onMouseOver={ handleOnMouseOver } className='header-image' src={ Face } alt="logo" />
        <h2 className='header-title' > Meme Generator </h2>
        <h4 className='header-project'> React Course - Project 3 </h4>
    </header>
  )
}

export default Header
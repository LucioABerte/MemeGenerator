import React from 'react';
import { useState, useEffect} from 'react';

const Meme = () => {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });
    
    const [allMemeImages, setAllMemeImages] = useState([]);

    function getMemeImg() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length) 
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    };

    function handleChange(event) {
        const {name, value } = event.target

        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value 
        }));
    };
  
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes))
    },[]);

  return (
    <main>
        <div className='form'>
            <input 
                className='form-input' 
                type="text" 
                placeholder="Top text"
                name="topText"
                onChange={handleChange}
                value={meme.topText} 
            />
            <input 
                className='form-input' 
                type="text" 
                placeholder="Bottom text"
                name="bottomText"
                onChange={handleChange}
                value={meme.bottomText} 
            />
            <button 
                onClick={ getMemeImg } 
                className='form-button'
            > 
                Get a new meme image 🖼 
            </button>
        </div>
        <div className="meme">
            <img className='meme-img' src={meme.randomImage} alt="img" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
    </main>
  );
};

export default Meme ;
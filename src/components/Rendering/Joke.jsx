import React from 'react'
import JokeChild from "./JokeChild"
import jokesData from "./jokesData"

const Joke = () => {
    
    const jokeElements = jokesData.map(joke => {
        
        return (
            <JokeChild 
                key={joke.id}
                setup={joke.setup} 
                punchline={joke.punchline} 
            />
        )
    })

    return (
        <div>
            {jokeElements}
        </div>
    )
}


export default Joke
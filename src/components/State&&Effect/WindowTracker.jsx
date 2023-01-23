import React from "react"
import { useState, useEffect } from "react"

export default function WindowTracker() {
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    /*useEffect(() => {
      window.addEventListener("resize", () => {
        setWindowWidth(window.innerWidth)   
       }, [windowWidth ])}
    );*/

    useEffect(() => {
      function watchWidth() {
        setWindowWidth(window.innerWidth)
      }
      window.addEventListener("resize", watchWidth)

      return () => {
       
        window.removeEventListener("resize", watchWidth)
      }
    }, [])
    
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}


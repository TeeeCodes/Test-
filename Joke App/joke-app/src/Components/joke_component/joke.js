import React, { useState, useEffect } from "react";

const URL = ('https://icanhazdadjoke.com/',{header:{Accept:"application/json"}})

const RandomJoke = () => {
    const [joke, setJoke] = useState("");

   useEffect(() => {
    const fetchData = async () => {
        const result = await fetch(URL)
        
        
        console.log(result)
    }
    fetchData()
   }, []);

    return (
        <button onClick={setJoke}>{joke}</button>
    )
}

export default RandomJoke
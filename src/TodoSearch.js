import React from 'react'
import './App.css';

function TodoSearch () {
    return (
        <input 
        className="input-search"
        placeholder="Cortar cebolla" 
        onChange={(event) => {
            console.log('Escribiste en todo search')
            console.log(event.target)
            console.log(event.target.value)
         }
        }
        />
    )
}

//Podemos colocar el onChange


export { TodoSearch }
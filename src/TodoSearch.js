import React from 'react'
import './App.css';

function TodoSearch ({
    searchValue,
    setSearchValue,
}) {
   

    return (
        <input 
        className="input-search"
        placeholder="Ingresa tu busqueda" 
        value={searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value)
            
         }
        }
        />
    )
}

//Podemos colocar el onChange


export { TodoSearch }
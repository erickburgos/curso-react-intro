import React from 'react'
import './CreateTodoButton.css'

function CreateTodoButton () {
    return(
        <button type="submit" 
        onClick={(event) => {
            console.log('Diste click')
            console.log(event.target)
            }}
        >Create task</button>
    )
}

//PAra crear el onClick tiene que ir en camelcase y dentro de su etiqueta
//ej. <button onClick={(event) => } creamo una arrow function para contener lo que queramos 

//event representa el evento

export { CreateTodoButton }
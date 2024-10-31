import React from 'react'
import '../App/App.css';

//Para llamar en este caso los TodoItems vamos a colocar en parametro props, y luego lo llamamos dentro del jsx con las llaves {props."Resto de codigo que queramos llamar"} en este caso children ya que llama todo los hijos de ul


function TodoList ({children}) {
    return(
        <ul className='todo-list-ul'>
            
            {children}
        </ul>
    )
}

export {  TodoList }
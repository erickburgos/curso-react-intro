import React from 'react'
import './App.css';

//Los componentes reciben parametros, en este caso les decimos props
function TodoCounter  ({  total, completed }) {
    return (

      //Para agregar estilo podemos agregar dobles llaves
      <h1 className="h1-list-container"style={{fontSize: 24,}}>
      You commpleted <span class="counter">{completed}</span> of <span class="counter">{total}</span>  your Launchs
      </h1>
      
    )
  }

  //Hay que exportar el componente nopmbrado

  export { TodoCounter }
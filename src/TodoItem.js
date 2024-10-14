import React from 'react'
import './App.css';


function TodoItem (props) {
    return (
      <li className= {`todo-item-li ${props.completed && "todo-item-li--complete"}`}>
        <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}>⚡</span>
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <span className={`Icon Icon-delete`}>🚩</span>
      </li>
  
    )
  }


  export { TodoItem }
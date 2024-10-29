import React from 'react'
import './App.css';
import { FcBookmark } from "react-icons/fc";
import { FcEmptyTrash } from "react-icons/fc";


function TodoItem (props) {
    return (
      <li className= {`todo-item-li ${props.completed && "todo-item-li--complete"}`}
        
      >
        <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
        ><FcBookmark /></span>
       
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <span 
        className={`Icon Icon-delete`}
        onClick={props.onDelete}><FcEmptyTrash /></span>
      </li>
  
    )
  }


  export { TodoItem }
import React from 'react';
import { TodoCounter } from '../TodoCounter/index';
import { TodoItem } from '../TodoItem/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { CreateTodoButton } from '../CreateTodoButton/index';

import { TodosLoading } from '../TodosLoading/index'
import { TodosError } from '../TodosError/index'
import { EmptyTodos } from '../EmptyTodos/index'
import './App.css';

function AppUI (
    {
        loading,
        error,

        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
    }
) {
   


    const allCompleted = completedTodos === totalTodos;

        return (
            //Esto no es un archivo html, si nos fijamos tiene terminacion en js, por lo que se conoce como jsx que es una mezcla entre xml y js.

            //  Para no envolver las cosas en archivos div podemos envolver en <React.Fragment> esta etiqueta se abre y se cierra y ocultamos esta <div className="App">

            <>

            <div className="main-container">
            <div className="todo-container">
            <h1 className='h1-task-container'>Create New Task</h1>
                <h4>Name Task</h4>
                <input 
                type="text" 
                placeholder="Launch your new task"
                className="todoInput"/>

                    
            <CreateTodoButton />
            <div className="img-container">
            <img src={`img/task.png`} alt="Descripción de la imagen" />
            </div>
            </div>  

            <div className="list-container">
            
            <TodoCounter 
            completed ={completedTodos} 
            total={totalTodos} 
            allCompleted={allCompleted}
            
            />


 


            <TodoSearch  
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            />
            <TodoList>

                {loading && <TodosLoading />}

                {error && <TodosError />}

                {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
                
                
                {searchedTodos.map(todo => (
                <TodoItem 
                    key={todo.text} 
                    text={todo.text}
                    completed={todo.completed}
                    
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text) }
                />
                ))}
            </TodoList>
            </div>  

        </div>  

        <h4 className='h4-title' >Copyright© <span className='h4-span'  >@E_mot_ion</span></h4>

            </>

            //Podemos renderizar tambien con arrays, no necesariamente con el React.Fragment se puede usar asi  const:defaultTodos = [ { text:'Cortar cebolla', completed: false}]

            /* Podriamos  Renderizar creando un array


            const defaultTodos = [
                {text: 'Cortar cebolla', completed: false},
                {text: 'Hacer curso react', completed: false},
                {text: 'Hacer otras cosas', completed: true},

            ]

            en el caso de querer renderizarlo dentro de de otro componente llamando a la constante y utilizar la propiedad map para llamar lo que esta dentro del array 

            <TodoList >
                {defaultTodos.map(todo => (
                <TodoItem />
                ))}

            </TodoList>
            */
    )
}

export { AppUI }
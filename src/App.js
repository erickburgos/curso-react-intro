import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';




//git add . agrega de manera local el archivo
//git commmit -m "mensaje",  agrega un comentario sobre los cambios que realizamos
//git push -u origin main  nos sube el archivo a nuestro 


const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Hacer curso react', completed: false},
  {text: 'Hacer otras cosas', completed: true},
  {text: 'Seguimos renderizando', completed:true,},
  {text: 'Hola', completed:true,},
  {text: 'ASASD', completed:false,},
  {text: 'asasdasd', completed:false,},
  

]

//Las funciones que comienzan con mayuscula, en react suelen ser considerados como componentes
function App() {
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
      <img src={`${process.env.PUBLIC_URL}/task.png`} alt="Descripción de la imagen" />
      </div>
    </div>  

    <div className="list-container">
     
    <TodoCounter completed ={16} total={25} />
    <TodoSearch />
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
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
  );
}

//Puedo importar componente presionando un archivo llamado ejemplo <TodoItem /> si dentro de el presiono  ctrl + space, recomienda seleccionar un archivo para importarlo












//Si nos fijamos no se renderiza en el navegador ya que en este caso solo esta exportante el componente App. una forma seria remplazar el nombre de App por otro componente en nuestro caso TodoItem o insertar nuestro componente dentro del componente App  y se llama por medio de <TodoItem />
export default App;

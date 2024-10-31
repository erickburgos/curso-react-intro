import React from 'react';
import { TodoCounter } from '../TodoCounter/index';
import { TodoItem } from '../TodoItem/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { CreateTodoButton } from '../CreateTodoButton/index';
import './App.css';




//git add . agrega de manera local el archivo
//git commmit -m "mensaje",  agrega un comentario sobre los cambios que realizamos
//git push -u origin main  nos sube el archivo a nuestro 


//para cambiar los datos usaremos estados en React

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Hacer curso react', completed: false},
//   {text: 'Hacer otras cosas', completed: true},
//   {text: 'Seguimos renderizando', completed:true,},
//   {text: 'Hola', completed:true,},
//   {text: 'ASASD', completed:false,},
//   {text: 'asasdasd', completed:true,},
//   {text: 'Hola Noah como estas', completed:true,},
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
// localStorage.removeItem('TODOS_v1')

//React aconseja usar siempre use para una funcion que sea un custom hook

function useLocalStorage(itemName, initialValue) {

 

  const localStorageItem = localStorage.getItem(itemName)


  let parsedItem;

  if(!localStorageItem ) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue
  }else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = React.useState(parsedItem)

  //29 del 10

  //Vamos a guardar la informacion que se carga que borra o completan

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return [item, saveItem]
}

//Las funciones que comienzan con mayuscula, en react suelen ser considerados como componentes
function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])

 //Para usar react uyser state necesitamos dejar un array vacio, el estado de react es inmutable
    // ejmplo const [state, setState] = React.useState(), siempre lleva state y el segundo setState en camelCase
    //si el state tuviera otro nombre el setstate tambien cambiaria ejemplo [cosita, setCosita]

    //Este filtra la busqueda del input de search
    const [searchValue, setSearchValue] = React.useState('')


    const completedTodos = todos.filter(todo => !!todo.completed).length
    const totalTodos = todos.length


    //Tratando de hacer esto
    const allTodosCompleted = completedTodos === totalTodos && totalTodos > 0;


    //Con esta vamos a poder revisar si se incluye parte de ese texto
    const searchedTodos = todos.filter(
      (todo) => {

       //Organizar un poco el codigo
       const todoText =  todo.text.toLowerCase()
       const searchText = searchValue.toLowerCase()

       return  todoText.includes(searchText)
      }
    )

      



//23 del 10

    const completeTodo = (text) => {
      const newTodos = [...todos]
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text ==text
      )
      newTodos[todoIndex].completed = true
      saveTodos(newTodos)
    }


    const deleteTodo = (text) => {
      const newTodos = [...todos]
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      )
      newTodos.splice(todoIndex, 1)
      saveTodos(newTodos)
    }


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
    allCompleted={allTodosCompleted}
    />
    <TodoSearch  
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            //continuo 23 de 10
            //Hay que envolver las funciones dentro de otra para que react no crashee
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
  );
}

//Puedo importar componente presionando un archivo llamado ejemplo <TodoItem /> si dentro de el presiono  ctrl + space, recomienda seleccionar un archivo para importarlo












//Si nos fijamos no se renderiza en el navegador ya que en este caso solo esta exportante el componente App. una forma seria remplazar el nombre de App por otro componente en nuestro caso TodoItem o insertar nuestro componente dentro del componente App  y se llama por medio de <TodoItem />
export default App;
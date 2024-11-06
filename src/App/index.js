import React from 'react';
import { AppUI } from './AppUI'
import { useLocalStorage } from './useLocalStorage'



//  Comment git add . agrega de manera local el archivo
//git commmit -m "mensaje",  agrega un comentario sobre los cambios que realizamos
//git push -u origin main  nos sube el archivo a nuestro 

//para cambiar los datos usaremos estados en React

// const defaultTodos = [
//   {text: 'Continuar clase de strings', completed: true},
//   {text: 'Ver curso de react', completed: false},
//   {text: 'Practicar ingles', completed: false},
//   {text: 'Enviar emails', completed:false,},
//   {text: 'Realizar prueba', completed:true,},
//   {text: 'Renderizar video', completed:false,},
//   {text: 'Crear nuevas tareas', completed:true,},
//   {text: 'Ejercitarme', completed:false,},
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
// localStorage.removeItem('TODOS_v1')

//React aconseja usar siempre use para una funcion que sea un custom hook



//Las funciones que comienzan con mayuscula, en react suelen ser considerados como componentes




function App() {

  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', [])


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
        (todo) => todo.text === text
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
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
  
    />
   );
}

//Puedo importar componente presionando un archivo llamado ejemplo <TodoItem /> si dentro de el presiono  ctrl + space, recomienda seleccionar un archivo para importarlo












//Si nos fijamos no se renderiza en el navegador ya que en este caso solo esta exportante el componente App. una forma seria remplazar el nombre de App por otro componente en nuestro caso TodoItem o insertar nuestro componente dentro del componente App  y se llama por medio de <TodoItem />
export default App;

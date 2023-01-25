import { useEffect, useState } from 'react';
import './App.css';
import AddToDo from './components/addToDo/AddToDo';
import ToDos from './components/toDos/ToDos';

function App() {
const [todos, setToDos] = useState([]);

useEffect(() => {
  const initToDo = localStorage.getItem('todos')
  if (initToDo) {
    setToDos(JSON.parse(initToDo))
}
}, [])

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos))
},[todos])

const addToDos = (todo) => {
   setToDos([...todos, todo])
} 

const togglieHandler = (id) =>{
  setToDos([
    ...todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed} : {...todo})
  ])
}

const deleteHandler = id => {
  setToDos(prevState => {
    const updatedToDo = prevState.filter(todo => todo.id !== id);
    return updatedToDo;
  });
};



  return (
    <div>
     <AddToDo onAddToDo={addToDos}/>
     <ToDos todos={todos} toggle={togglieHandler} deleteItemHandler={deleteHandler} />
    </div>
  );
}

export default App;

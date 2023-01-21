import {Fragment, useReducer, useState} from 'react';
import Button from '../ui/button/Button';
import Card from '../ui/card/Card';
import style from './AddToDo.module.css';
import Modal from '../ui/modal/Modal';



const getInputValue = (state, action) => {
if (action.type === 'INPUT_VALUE') {
  return {
    item: action.payload
  }
}
if (action.type === 'NOTHING') {
  return {
    ...state,
    item: ''
  }
}
}

const AddToDo = (props) => {
const [error, setError] = useState(null)
const [todo, dispatchTodo] = useReducer(getInputValue, {
  item: '',
})

const inputChangeHandler = (event) => {
  dispatchTodo({type: 'INPUT_VALUE', payload: event.target.value})
}

const submitHandler = (event) => {
  event.preventDefault()
if (todo.item.trim().length === 0) {
  setError({
    title: 'Invaid value, inputs should not be empty!',
    message: 'Please, type something!'
  })
  return
}

  const data = {
    todo: todo.item,
    date: new Intl.DateTimeFormat('en-Us').format(),
    completed: false,
    id: Math.random().toString()
  }
  props.onAddToDo(data);
   dispatchTodo({type: 'NOTHING'})
}

const closeModalHandler = () => {
  setError(null)
}


  return (
    <Fragment>
    {error && <Modal title={error.title} message={error.message} onConfirm={closeModalHandler}/>}
    <Card className={style.card}>
    <form onSubmit={submitHandler}>
      <h1>Let's do it</h1>
      <input type="text" placeholder='Gonna do...' onChange={inputChangeHandler} value={todo.item}/>
      <Button type='submit'>Add To Do</Button>
    </form>
    </Card>
    </Fragment>
  );
};

export default AddToDo;
import React, { useState } from 'react'
import './App.css'
import Todo from './Todo';

function App() {
  const [title, setTitle]= useState("Task 1");
  const [description, setDescription]= useState("");
  const [date, setDate]= useState("");
  const [todos, setTodos]= useState([])

  const handleSave = (event) => {
    event.preventDefault();
    const newTodo= {
      title: title,
      description: description,
      date: date,
      status: false
    }
    setTodos([...todos,newTodo])
  }

  return (
    <div className='container'>
      <form onSubmit={handleSave}>
        <input value={title} onChange={(event)=> setTitle(event.target.value)}/>
        <input value={description} onChange={(event)=> setDescription(event.target.value)}/>
        <input value={date} type="date" onChange={(event)=>setDate(event.target.value)} />
        <input type="submit" value="Submit" />
      </form>


    {todos.map(todo => <Todo todo={todo}/>)}
    </div>
  )
}

export default App

//onchange takes callback
//cant call a fucntion with () inside JSX
// binding local variables with JSX
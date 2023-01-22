import React from 'react'
import './App.css'
import Todo from './Todo';


const xyz={
  title:"Task1",
  description: "Wash laundry",
  date: "22/01/23",
  status: false
}

function App() {
  return (
    <div className='container'>

      <form>
        <input />
      </form>
      
      <Todo todo={xyz}  />

    </div>
  )
}

export default App
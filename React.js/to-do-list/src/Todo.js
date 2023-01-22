import React from 'react'

function Todo(props) {
    const {todo} = props;

  return (
    <div className='todo'>
        <div className='head'>
          <input type='checkbox' value={todo.status} />
          <h3 className='title'>{todo.title}</h3>
        </div>
          <h5 className='date'>{todo.date}</h5>
          <p className='description'>{todo.description}</p>
      </div>
  )
}

export default Todo
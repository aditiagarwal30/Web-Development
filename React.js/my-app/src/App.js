import React, {useState} from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    if(counter==10) return;
    
    setCounter(counter+1);
  }



  const decrement = () => {
    if (counter== 0) return;
    setCounter(counter-1);
  }
  
  return (
    <div className='container'>

      <button onClick={decrement}>-</button>
      
      <p className='counter'>
      {counter}
      </p>

      <button onClick={increment}>+</button>

    </div>
  )
}

export default App
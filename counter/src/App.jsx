import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //useState is a hook which is used to make the variables responsive in the UI
  const [counter , setCounter] = useState(0)

  //function to increament the counter
  const incrementCounter = () =>{
    if(counter<20)
    setCounter(counter+1)
  }

  //function to decrease the counter
  const decrementCounter = () =>{
    if(counter > 0)
    setCounter(counter - 1)
  }


  return (
    <>
      <h1>Learning React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={incrementCounter}>Add Value</button>
      <br></br>
      <br></br>
      <button onClick={decrementCounter}>Remove Value</button>
    </>
  )
}

export default App

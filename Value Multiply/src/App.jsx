import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(1);
  // const [multipliedValue, setMultipliedValue] = useState(1);//this one or below one can both be used
  let multipliedValue = value * 5;

  const multiplyValue = () => {
    // setMultipliedValue(value * 5);
    setValue(value + 1);
  }

  return (
    <>
      <h1> Main Value : {value}</h1>
      <button onClick={multiplyValue}> Click to multiply by 5  </button>
      <h2> Multiplied Value : {multipliedValue} </h2>

    </>
  )


}

export default App

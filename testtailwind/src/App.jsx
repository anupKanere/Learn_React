import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Card  from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myobj = {
    name:"Anup",
    Age: "26"
  }

  return (
    <>
      <h1 className='bg-purple-600 text-black rounded-full p-4 mb-4'>Test tailwind</h1>
      <Card obj ={myobj}/>
      <Card name="Neha" btntext="Visit Me"/>
      <Card name="Akanksha" btntext="Visit My profile"/>


     </>
  )
}

export default App

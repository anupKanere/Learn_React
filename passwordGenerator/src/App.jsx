import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(10)
  const [numberAllowed, setNumberAllowed] = useState("false")
  const [character, setCharacter] = useState("false")
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (character) str += "!@#$%^&*()"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, character, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,10)//use to select the range of the text selector
    window.navigator.clipboard.writeText(password)
  }, [password])
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, character, passwordGenerator])
  return (
    <>
      <div className=' max-w-xl mt-64 mx-auto shadow-md rounded-3xl px-4 py-2 my-8  text-violet-200 bg-gray-700 '>

        <h1 className='text-center py-2 font-serif font-bold text-xl'>Password Generator </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3 text-red-700 rounded-lg'
            placeholder='password'
            readOnly
            ref={passwordRef}

          >
          </input>
          <button onClick={copyPassword} 
          className='bg-gradient-to-r from-orange-500 via-white to-green-700 text-black text-lg px-5 
          py-2 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-600 font-bold transition duration-300 
          ease-in-out transform hover:scale-105'>Copy</button>

        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={5}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            ></input>
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={{ numberAllowed }}
              id='numberInput'
              className='cursor-pointer'
              onChange={() => { setNumberAllowed((prev) => !prev) }}
            ></input>
            <label htmlFor='numberInput'>Numeric</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={{ character }}
              id='characterInput'
              className='cursor-pointer'
              onChange={() => { setCharacter((prev) => !prev) }}
            ></input>
            <label htmlFor='characterInput'>Character</label>
          </div>

        </div>

      </div>
    </>
  )
}

export default App

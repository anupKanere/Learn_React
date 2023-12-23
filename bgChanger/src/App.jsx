import { red } from "@mui/material/colors"
import { useState } from "react"

function App() {
  const [color, setColor] = useState("skyblue")

  return (
     
      <div className="w-full h-screen duration-700 " style={{ backgroundColor: color }}>

        <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">

          <div className="flex flex-wrap justify-center  gap-4 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => setColor("red")} className="outline-none px-5 py-2  rounded-xl text-white shadow-lg " style={{backgroundColor: "red"}}>Red</button>

            <button onClick={() => setColor("green")} className="outline-none rounded-xl  px-2 py-2" style={{backgroundColor: "green"}}>Green</button>

            <button onClick={() => setColor("blue")} className="outline-none rounded-xl  px-2 py-2" style={{backgroundColor: "blue"}}>Navy Blue</button>

            <button onClick={() => setColor("lime")}  className="outline-none rounded-xl  px-2 py-2 text-black" style={{backgroundColor: "Lime"}}>Lime</button>

            <button onClick={() => setColor("violet")}  className="outline-none rounded-xl  px-2 py-2" style={{backgroundColor: "violet"}}>Violet</button>

            <button onClick={() => setColor("orange")}  className="outline-none rounded-xl  px-2 py-2" style={{backgroundColor: "orange"}}>Orange</button>
          
          </div>


        </div>

      </div>
    
  )
}

export default App

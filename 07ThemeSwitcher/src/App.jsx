
import { useState, useEffect } from 'react'
import './App.css'
import { ThemeContext, ThemeProvider } from './Context/Theme'
import Theme from './Components/Theme'
import Card from './Components/Card'

function App() {

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }} >

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Theme></Theme>
          </div>
          <Card></Card>
          <div className="w-full max-w-sm mx-auto">

          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App

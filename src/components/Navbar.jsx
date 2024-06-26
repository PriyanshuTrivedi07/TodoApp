import React, { useState, useEffect } from 'react'
import todoIcon from "/todoIcon.png"
import { ThemeProvider } from '../contexts/index.js'
import { ThemeBtn } from './index.js'

function Navbar() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  //actual change in theme using JS
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])


  return (
    <header className='sticky top-0 z-50'>
      <nav className="bg-[#ffffff] dark:bg-[#202124] shadow-md">
        <div className=" flex flex-wrap items-center justify-between px-2 lg:px-12 md:px-6 py-4">
          <div className="logo flex flex-wrap items-center justify-center">
            <img src={todoIcon} className=" me-1" alt="javascript logo" width="40px" />
            <a href="/" className="lg:text-[2rem] text-[calc(1.325rem+.9vw)] font-bold text-[#212121] dark:text-[#fff]">Todo<span className='text-green-600 dark:text-[#bfdbfe]'>Genie</span></a>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-2">
            <li>
              <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
                <div className=''>
                  <ThemeBtn />
                </div>
              </ThemeProvider>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
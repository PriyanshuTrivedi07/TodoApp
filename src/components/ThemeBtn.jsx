import React, { useState } from 'react'
import { useTheme } from '../contexts/index'

function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (theme) => {
    if (theme === "dark") {
      darkTheme()
    } else {
      lightTheme()
    }
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-between items-center min-w-[8rem] px-2 py-1 text-sm font-medium border-[0.0625rem]  text-gray-700 bg-white  rounded-md shadow-sm hover:bg-gray-50 focus:outline-none dark:bg-[#35373c] dark:text-white dark:border-[#ffffff1a]"
      >

        <div className='flex justify-center items-center gap-2'>
          {themeMode === 'light' ? (
            <i className="far fa-sun "></i>
          ) : (
            <i className="far fa-moon "></i>
          )}
          {themeMode.charAt(0).toUpperCase() + themeMode.slice(1)}
        </div>

        <div className={isOpen ? "rotate-180" : ""}>
          <i className="fas fa-chevron-down"></i>
        </div>

      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-1 w-full border-[0.0625rem] border-[#ffffff1a] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 dark:bg-[#35373c]">
          <div className="p-1 flex flex-col gap-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            
            <button
              onClick={() => handleThemeChange('light')}
              className="flex items-center p-1 rounded-lg text-sm text-gray-700 w-full hover:bg-gray-100 hover:text-gray-900 dark:text-white dark:hover:bg-[#585b64] dark:hover:text-white"
              role="menuitem"
            >
              <i className="far fa-sun mr-2"></i> Light
            </button>

            <button
              onClick={() => handleThemeChange('dark')}
              className="flex items-center p-1 rounded-lg text-sm text-gray-700 w-full hover:bg-gray-100 hover:text-gray-900 dark:text-white dark:hover:bg-[#585b64] dark:hover:text-white"
              role="menuitem"
            >
              <i className="far fa-moon mr-2"></i> Dark
            </button>
            
          </div>
        </div>
      )}
    </div>
  )
}

export default ThemeBtn
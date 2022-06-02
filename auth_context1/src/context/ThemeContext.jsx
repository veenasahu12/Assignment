import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

const ThemeContext = createContext();
export const ThemeProvider = ({children}) => {

    const [theme , setTheme] = useState("Light");

    const toggleTheme = () => {
        if(theme === "light"){
           setTheme("dark") ;
        }else setTheme("light")
    }
    return (
        <ThemeContext.Provider value={{
            theme,isLight: theme === "light",
            toggleTheme: toggleTheme
        }}>
        {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext

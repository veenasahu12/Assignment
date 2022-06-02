import React from 'react'
import { useState } from 'react'
import {styles} from './Style'

const ThemeContext = React.createContext()
export const ThemeProvider = ({children}) => {

    const [theme , setTheme] = useState(styles.light)

    const toggleTheme = () => {
        setTheme(theme === styles.light ? styles.dark : styles.light)
    }
    return (
        <ThemeContext.Provider value={{theme , toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext

import React from 'react'
import { useState } from 'react'

const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {

    const [isAuth , setAuth] = useState(false)

    const toggleAuth = () => {
        setAuth(!isAuth)
    }
    return (
        <AuthContext.Provider value={{isAuth,toggleAuth}}>
           {children} 
        </AuthContext.Provider>
    )
}

export default AuthContext

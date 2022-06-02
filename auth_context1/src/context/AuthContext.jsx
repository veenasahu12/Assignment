import { useState } from 'react';
import {createContext} from 'react'

const AuthContext = createContext();
export const AuthProvider = ({children}) => {

    const [isAuthorised, setIsAuthorised] = useState(false)

    const login = (username , password) => {
        if(username && password){
            setIsAuthorised(true);
        }
    }

    const logout = () => {
        setIsAuthorised(false)
    }
    return (
        <AuthContext.Provider value={{isAuthorised,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext

import React,{createContext,useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';


const AuthContext = createContext();
export const AuthProvider = ({children}) => {

    const [isAuth , setIsAuth] = useState(false);
    const navigate = useNavigate()
    const {state} = useLocation()

    console.log(state,"state");

    // console.log(location);

    const login = () => {
        setIsAuth(true);
        if(state?.from){
            navigate(state?.from, {replace: true})
        }else{
            navigate("/")
        }
    }

    const logout = () => {
        setIsAuth(false);
        navigate("/")
    }
    return (
        <AuthContext.Provider value={{isAuth , login , logout}}>
          {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
